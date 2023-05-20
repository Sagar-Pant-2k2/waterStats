const Card = ({src,info})=>{
        // {console.log("wtf is wrong" + item)}
    return (<div className="Card">
        
        <iframe src={src}></iframe>

        <h2>WellName</h2>
        <h3>{info}</h3>
        <button className="button">More</button>
    </div>)
}
export default Card