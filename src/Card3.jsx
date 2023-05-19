const Card3=({title,src,id=''})=>{
    return (
        <div className="Card3">
        <img src={src} alt="image" />
        <div className="content"><h2>{title}</h2><h3>{id}</h3></div>
        </div>
    )
}

export default Card3