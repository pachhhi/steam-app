import "../styles/layout.css"
import logo from "../img/logo-steam2.png"
import background from "../img/backgroundsteam.mp4"

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