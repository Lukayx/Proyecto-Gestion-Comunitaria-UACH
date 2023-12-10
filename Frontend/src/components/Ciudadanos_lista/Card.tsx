import { FunctionComponent, useState } from "react";


const Cards: FunctionComponent <{ rut: string, nombre: string, organizacion: string }> = ({ rut, nombre, organizacion }) => {
    const[show,setShow] = useState(false);
    
    return(
        <>
        <div className="max-w-md mx-auto bg-white shadow-md p-2 rounded-lg mb-4 border border-gray-300">
            <div className="flex flex-row p-2 ">
                <button className="w-full text-left" onClick={()=>{
                    setShow(!show)
                }}>
                    {rut}
                </button>
            </div>
        </div> 
        {
        show && (
            <>
            <div className="max-w-sm mx-auto bg-white shadow-md p-2 rounded-lg mb-3">
                {nombre}
            </div>

            <div className="max-w-sm mx-auto bg-white shadow-md p-2 rounded-lg mb-3">
                {organizacion}
            </div>
            </>
        )}
        

        </>
    )
}

export default Cards;