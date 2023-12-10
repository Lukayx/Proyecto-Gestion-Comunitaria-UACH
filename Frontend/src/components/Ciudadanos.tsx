import { FunctionComponent, useState } from "react";
import Cards from "./Ciudadanos_lista/Card"


interface Org {
  rut: string;
  nombre: string;
  organizacion: string;
}

const Ciudadanos: FunctionComponent = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");

  const orgs: Org[] = [
    { rut: "8.000.001-0", nombre: "Arturo Prat", organizacion: "Defensores de la Patria" },
    { rut: "8.500.002-1", nombre: "Gabriela Mistral", organizacion: "Poesía Ilustre" },
    { rut: "9.000.003-2", nombre: "Salvador Allende", organizacion: "Socialistas Unidos" },
    { rut: "9.500.004-3", nombre: "Vicente Huidobro", organizacion: "Vanguardia Creativa" },
    { rut: "10.000.005-4", nombre: "Isabel Allende", organizacion: "Realismo Mágico" },
    { rut: "10.500.006-5", nombre: "Joaquín Lavín", organizacion: "Innovadores Políticos" },
    { rut: "11.000.007-6", nombre: "Violeta Parra", organizacion: "Folklóricos Unidos" },
    { rut: "11.500.008-7", nombre: "Pablo Neruda", organizacion: "Versos Rebeldes" },
    { rut: "12.000.009-8", nombre: "Augusto Pinochet", organizacion: "Orden y Patria" },
    { rut: "12.500.010-9", nombre: "Michelle Bachelet", organizacion: "Derechos Humanos" },
    { rut: "13.000.011-0", nombre: "Arturo Vidal", organizacion: "Fútbol Clase A" },
    { rut: "13.500.012-1", nombre: "Carmen Quintana", organizacion: "Emprendedores del Mar" },
    { rut: "14.000.013-2", nombre: "Gloria Trevi", organizacion: "Reinas del Pop Latino" },
    { rut: "14.500.014-3", nombre: "Pedro de Valdivia", organizacion: "Conquistadores Audaces" },
    { rut: "15.000.015-4", nombre: "Camila Vallejo", organizacion: "Nueva Generación Política" },
    { rut: "15.500.016-5", nombre: "Arturo Merino Benítez", organizacion: "Aviadores Intrépidos" },
    { rut: "16.000.017-6", nombre: "Amanda Labarca", organizacion: "Educadores Progresistas" },
    { rut: "16.500.018-7", nombre: "Manuel Rodríguez", organizacion: "Luchadores por la Libertad" },
    { rut: "17.000.019-8", nombre: "Pablo Picasso", organizacion: "Artistas Modernos" },
    { rut: "17.500.020-9", nombre: "Lucía Hiriart", organizacion: "Primera Dama Club" },
    { rut: "18.000.021-0", nombre: "Fernando González", organizacion: "Tenis de Élite" },
    { rut: "18.500.022-1", nombre: "Valentina Tereshkova", organizacion: "Astronautas Intrépidos" },
    { rut: "19.000.023-2", nombre: "Jaime Guzmán", organizacion: "Derecha Firme" },
    { rut: "19.500.024-3", nombre: "Carolina Goic", organizacion: "Democracia Cristiana" },
    { rut: "20.000.025-4", nombre: "René Descartes", organizacion: "Filósofos del Razonamiento" },
    { rut: "20.500.026-5", nombre: "Federico Santa María", organizacion: "Ingenieros Visionarios" },
    { rut: "21.000.027-6", nombre: "Jorge Valdivia", organizacion: "Magos del Fútbol" },
    { rut: "21.500.028-7", nombre: "Gabriel Mistral", organizacion: "Nobel de Literatura" },
    { rut: "22.000.029-8", nombre: "Cristián Valenzuela", organizacion: "Paralímpicos Ejemplares" },
    { rut: "22.500.030-9", nombre: "Isidora Aguirre", organizacion: "Dramaturgos Creativos" },
    { rut: "23.000.031-0", nombre: "Sebastián Piñera", organizacion: "Empresarios Exitosos" },
    { rut: "23.500.032-1", nombre: "Matilde Urrutia", organizacion: "Musas Inspiradoras" },
    { rut: "24.000.033-2", nombre: "José Miguel Carrera", organizacion: "Próceres de la Independencia" },
    { rut: "24.500.034-3", nombre: "Antonia Zegers", organizacion: "Actores Talentosos" },
    { rut: "25.000.035-4", nombre: "Miguel Enríquez", organizacion: "Revolucionarios del Pueblo" },
    { rut: "25.500.036-5", nombre: "Raúl Ruiz", organizacion: "Cineastas Surrealistas" },
    { rut: "26.000.037-6", nombre: "Ignacia Allamand", organizacion: "Familias del Cine" },
    { rut: "26.500.038-7", nombre: "Mauricio Isla", organizacion: "Defensores de la Banda Derecha" },
  ];

  const filteredOrgs = orgs.filter((org) =>
    //org.nombre.toLowerCase().includes(searchTerm.toLowerCase()) este busca en base a nombre
    org.rut.includes(searchTerm)
  );

  
  return (
    <>
      {/* Barra de búsqueda */}
      <div className="flex justify-center mb-4">
      <input className="w-1000 rounded-lg bg-slate-300"
        type="text"
        placeholder="Buscar por rut..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {/* Mostrar tarjetas filtradas */}
      <div>
        {filteredOrgs.map((el) => (
          <Cards
            key={el.rut}
            rut={el.rut}
            nombre={el.nombre}
            organizacion={el.organizacion}
          />
        ))}
      </div>
    </>
  );
};


export default Ciudadanos;
