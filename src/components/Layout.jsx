import "../styles/layout.css"
import logo from "../img/logo-steam2.png"
import background from "../img/backgroundsteam.mp4"
import { Route, Link } from "react-router-dom"

function Layout() {
    return <div>
        <nav>
                <img  src={logo}/>
                
            
        </nav>
        <div>
            <video autoPlay muted loop>
                <source src={background} type="video/mp4"/>
            </video>
        </div>
    </div>
}

export default Layout;