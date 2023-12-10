import { FunctionComponent } from 'react';
import readXlsxFile from 'read-excel-file';
import Swal from 'sweetalert2';

const Subirexcel : FunctionComponent = () => {  
  const onMakeFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept =
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
    input.onchange = onReadExcel;
    input.click();
  };
  
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onReadExcel = async (event) => {
    const files = event.target.files;

    if (files.length == 0) {
      alert("No se ha especificado un excel.");
      return;
    }

    Swal.fire({
      title: "Excel. . .",
      html: "Recuperando organizaciones del excel. . .",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const excel = files[0];
    const rows = await readXlsxFile(excel);
    rows.shift();
    const values = rows.map((element) => {
      return {
        numOrg: element[0],
        nombreOrg: element[1],
        rut: element[2],
        origen: element[3],
        comuna: element[4],
        region: element[5],
        direccion: element[6],
        tipo: element[7],
        fechaConceso: element[8],
        fechaRecepcion: element[9],
        clasificacion: element[10],
        estado: element[11],
      };
    });
    
    fetch('http://localhost:3007/api/organizaciones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Aquí puedes manejar la respuesta del servidor
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });

    Swal.update({
      html: `Se han encontrado un total de ${values.length} filas..... SE INGRESARÁN A BASE DE DATOS, NO RECARGUE LA PÁGINA.`,
    });

    console.log(values);

    await sleep(2000);
    for (let index = 0; index < values.length; index++) {
      const element = values[index];
      Swal.update({
        html: `Agregando organización ${element.nombreOrg}.....`,
      });

      await sleep(1000);
    }
    Swal.update({
      html: `COMPLETADO.`,
    });
    await sleep(1000);
    Swal.close();
  };
  
  return (
    <div>
      <button type="button" onClick={onMakeFile} >
        Subir excel
      </button>
    </div>
  );
}

export default Subirexcel;