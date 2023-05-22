import { useState,useEffect } from "react";

const Modal = ({setCount,data})=>{
    
    return (
<div className="ModalOverlay">
<div className="ModalContainer">
  <img src={`../images/${data[0]}.jpeg`}></img>
  <center><h2>Well Data</h2></center>
  <div class="table-container">
<div class="table-row">
<div class="table-header">Sample No.</div>
<div class="table-data">{data[0]}</div>
</div>
<div class="table-row">
<div class="table-header">Well Name</div>
<div class="table-data">{data[1]}</div>
</div>
<div class="table-row">
<div class="table-header">pH</div>
<div class="table-data">{data[2]}</div>
</div>
<div class="table-row">
<div class="table-header">EC</div>
<div class="table-data">{data[3]}</div>
</div>
<div class="table-row">
<div class="table-header">TDS</div>
<div class="table-data">{data[4]}</div>
</div>
<div class="table-row">
<div class="table-header">TH</div>
<div class="table-data">{data[5]}</div>
</div>
<div class="table-row">
<div class="table-header">Ca++</div>
<div class="table-data">{data[6]}</div>
</div>
<div class="table-row">
<div class="table-header">Mg</div>
<div class="table-data">{data[7]}</div>
</div>
<div class="table-row">
<div class="table-header">Na</div>
<div class="table-data">{data[8]}</div>
</div>
<div class="table-row">
<div class="table-header">K'</div>
<div class="table-data">{data[9]}</div>
</div>
<div class="table-row">
<div class="table-header">Acidity</div>
<div class="table-data">{data[10]}</div>
</div>
<div class="table-row">
<div class="table-header">Alkalinity</div>
<div class="table-data">{data[11]}</div>
</div>
<div class="table-row">
<div class="table-header">HCO3</div>
<div class="table-data">{data[12]}</div>
</div>
<div class="table-row">
<div class="table-header">cr</div>
<div class="table-data">{data[13]}</div>
</div>
<div class="table-row">
<div class="table-header">F</div>
<div class="table-data">{data[14]}</div>
</div>
<div class="table-row">
<div class="table-header">NO3-</div>
<div class="table-data">{data[15]}</div>
</div>
<div class="table-row">
<div class="table-header">CO2</div>
<div class="table-data">{data[16]}</div>
</div>
<div class="table-row">
<div class="table-header">SO4</div>
<div class="table-data">{data[17]}</div>
</div>
{/* <!-- Add more rows for the remaining data --> */}
</div>

  
 <button onClick={()=>setCount(0)} >Close</button>
  
</div>
  
</div>
    )
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