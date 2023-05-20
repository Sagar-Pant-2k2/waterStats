const Card3=({title,src,id='',desig})=>{
    return (
        <div className="Card3">
        <img src={src} alt="image" />
        <div className="content"><h2>{title}</h2><h3>{id}</h3></div>
        <div className="content">{desig}</div>
        </div>
    )
}

export default Card3