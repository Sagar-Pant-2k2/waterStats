import { useState,useEffect } from "react";

const Modal = ({setCount,data})=>{
    
    return (<div className="ModalOverlay">
        <div className="ModalContainer">
            <img src={`../images/${data[0]}.jpeg`}></img>
            <h1>this is compo</h1>
            <div class="table-container">
  <div class="table-row">
    <div class="table-header">Sample No.</div>
    <div class="table-data">1</div>
  </div>
  <div class="table-row">
    <div class="table-header">Well Name</div>
    <div class="table-data">CRC-1st</div>
  </div>
  <div class="table-row">
    <div class="table-header">pH</div>
    <div class="table-data">6.5</div>
  </div>
  <div class="table-row">
    <div class="table-header">EC</div>
    <div class="table-data">425</div>
  </div>
  <div class="table-row">
    <div class="table-header">TDS</div>
    <div class="table-data">220</div>
  </div>
  <div class="table-row">
    <div class="table-header">TH</div>
    <div class="table-data">212</div>
  </div>
  <div class="table-row">
    <div class="table-header">Ca++</div>
    <div class="table-data">76.4</div>
  </div>
  <div class="table-row">
    <div class="table-header">Mg</div>
    <div class="table-data">136.1</div>
  </div>
  <div class="table-row">
    <div class="table-header">Na</div>
    <div class="table-data">21</div>
  </div>
  <div class="table-row">
    <div class="table-header">K'</div>
    <div class="table-data">4</div>
  </div>
  <div class="table-row">
    <div class="table-header">Acidity</div>
    <div class="table-data">12.5</div>
  </div>
  <div class="table-row">
    <div class="table-header">Alkalinity</div>
    <div class="table-data">125</div>
  </div>
  <div class="table-row">
    <div class="table-header">HCO3</div>
    <div class="table-data">305</div>
  </div>
  <div class="table-row">
    <div class="table-header">cr</div>
    <div class="table-data">15.6</div>
  </div>
  <div class="table-row">
    <div class="table-header">F</div>
    <div class="table-data">0.4</div>
  </div>
  <div class="table-row">
    <div class="table-header">NO3-</div>
    <div class="table-data">0.9</div>
  </div>
  <div class="table-row">
    <div class="table-header">CO2</div>
    <div class="table-data">12.4</div>
  </div>
  <div class="table-row">
    <div class="table-header">SO4</div>
    <div class="table-data">40</div>
  </div>
  {/* <!-- Add more rows for the remaining data --> */}
</div>

            
            <div className="div"><button onClick={()=>setCount(0)}>Close</button></div>
            
        </div>
        
    </div>)
}

const Card = ({src,info,openModal})=>{
    
    let [count,setCount] = useState(0);
    // useEffect(() => {
    //     if (count > 0) {
    //       document.body.style.overflow = "hidden";
    //     } else {
    //       document.body.style.overflow = "auto";
    //     }
    //   }, [count]);
        // {console.log("wtf is wrong" + item)}
    const Data = info.split('\t');

    useEffect(() => {
        if (count > 0) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
        // console.log("fucked up")
      }, [count]);
    // console.log(Data)
    return (
        <>
    <div className="Card">
        
        <iframe src={src}></iframe>

        <h2>{Data[1]}</h2>
        {/* <h3>{info}</h3> */}
        <button className="button" onClick={()=>{
            setCount(1);
        }}>More</button>
    </div>
        {count>0 && <Modal setCount={setCount} data={Data}/>}
        </>
        )
}
export default Card