import {useNavigate} from 'react-router-dom'
const Card2 = ({title})=>{
    const navigate= useNavigate();
    const clickHandle=()=>{
        const id=document.getElementById(title).innerHTML.split(" ")[0].toLowerCase();
        console.log(id);
        navigate(`${id}`);

    }
    return <div className="Card2">
        <h3 id={title}>{title}</h3>
        <button  onClick={clickHandle}>More</button>
    </div>
}
export default Card2