import { useState,useEffect } from "react"

const Modal = ({setCount})=>{
    
    return (<div className="ModalOverlay">
        <div className="ModalContainer">
            <h1>this is compo</h1>
            <button onClick={()=>setCount(0)}>Close</button>
        </div>
        
    </div>)
}
const Traai = ()=>{
    let [count,setCount] = useState(0);
    useEffect(() => {
        useState(0);
      }, [count]);
    
    return (
    <>
    <button onClick={()=>{setCount(count+1)}}>Click</button>
    {count>0 && <Modal setCount={setCount}/>}
    </>)
}

export default Traai


