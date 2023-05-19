import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

const Nav = ()=>{
    const navigate=useNavigate()

    const navHandle=(ahmm)=>{
        navigate(ahmm);
    }
    return <>
        <div className="Nav">
            <div className="Home NavItem" onClick={()=>navHandle("/")} id="home"><h3 >Home</h3></div>
            <div className="Team NavItem" onClick={()=>navHandle("team")} id="team"><h3>Our Team</h3></div> 
            {/* <Link to='/'>Home</Link>
            {/* <a href="/" className="Home NavItem" style={{color:"white"}}>Home</a>
            <a href="/team" className="Team NavItem" style={{color:"white" }}>Our Team</a> */}
        </div>
    </>
}
export default Nav