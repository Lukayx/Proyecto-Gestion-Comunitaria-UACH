import { FunctionComponent } from "react";


const CardsOrg: FunctionComponent <{ nombre: string }> = ({ nombre }) => {
    
    return(
        <>
        <div className="max-w-md mx-auto bg-white shadow-md p-2 rounded-lg mb-4 border border-gray-300">
            <div className="flex flex-row p-2 ">
                {nombre}
            </div>
        </div> 

        </>
    )
}

export default CardsOrg;