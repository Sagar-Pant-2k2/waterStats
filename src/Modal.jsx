const ModalWindow = ({Data,src,display,closeModal})=>{

    return (<div className="ModalWindow disable-scroll" style={{display:display}}>
        <h1>This is Modal</h1>
        <img src={src}></img>
        <button onClick={closeModal}>Close</button>
        {/* <img src={src}></img>
        <div className="info">
            <div>

                "Sample No." : 	{Data[0]}
            </div>
            <div>
                "Name" : {Data[1]}

            </div>
            <div>
                "pH" :	{Data[2]}

            </div> */}

            {/* <div>

            </div>
            
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            <div>

            </div>
            
            
        "EC"	
        "TDS"	"TH"	"Ca++"	"Mg"	"Na"	"K'"	"Acidity"	"Alkalinity"	"HCO3"	"cr"	"F"	"NO3-"	"CO2"	"SO4-" */}
        {/* </div> */}
    </div>)
}

export default ModalWindow