import { useState,useEffect } from "react";

const Modal = ({setCount,data})=>{
    
    return (<div className="ModalOverlay">
        <div className="ModalContainer">
            <h1>this is compo</h1>
            {data}
            <div className="div">Sample No. : </div>
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