import { Link, useNavigate } from "react-router-dom"

const Nav = ()=>{
    // const navigate=useNavigate()
    const clickHandle=()=>{
        
    }
    return <>
        <div className="Nav">
            {/* <div className="Home NavItem" onClick={clickHandle} id="home"><h3 >Home</h3></div>
            <div className="Team NavItem" onClick={clickHandle} id="team"><h3>Our Team</h3></div> */}
            {/* <Link to='/'>Home</Link> */}
            <a href="/" className="Home NavItem" style={{color:"white"}}>Home</a>
            <a href="/team" className="Team NavItem" style={{color:"white" }}>Our Team</a>
        </div>
    </>
}
export default Nav