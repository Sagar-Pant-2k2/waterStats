const Card = ({src,info,openModal})=>{
        // {console.log("wtf is wrong" + item)}
    const Data = info.split('\t');
    console.log(Data)
    return (<div className="Card">
        
        <iframe src={src}></iframe>

        <h2>{Data[1]}</h2>
        {/* <h3>{info}</h3> */}
        <button className="button" onClick={openModal}>More</button>
    </div>)
}
export default Card