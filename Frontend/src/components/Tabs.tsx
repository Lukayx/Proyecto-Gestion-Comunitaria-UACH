import {useState} from "react";


function Tabs() {
    return(
        <div className="container">

            <div className="bloc-tabs">
                <div className="tabs active-tabs">Tab 1</div>
                <div className="tabs">Tab 2</div>
                <div className="tabs">Tab 3</div>
            </div>

            <div className="contents-tabs">
                <div className="content active-content">
                    <h2>Contenido 1</h2>
                    <hr />
                    <p>
                        Parrafo de prueba numero 1 dlkjsaldkjas
                    </p>
                </div>
            
                <div className="content">
                    <h2>Contenido 2</h2>
                    <hr />
                    <p>
                        Parrafo pruba 2
                    </p>
                </div>

                <div className="content">
                    <h2>Contenido 3</h2>
                    <hr />
                    <p>
                        Parrafo numero 3
                    </p>
                </div>

            </div>

        </div>
        
    )
}

export default Tabs;