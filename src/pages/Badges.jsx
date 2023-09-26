import Layout from "../components/Layout"
import "../styles/badges.css"
import Badge from "../components/Badge"
import Ubicacion from "../components/Ubicacion"

// import badges
import badgegames from "../img/badgegames.png"
import badgefreedom from "../img/badgefreedom.png"
import communityleader from "../img/badgecommunity.png"
import badgeyears from "../img/badgeyears.png"
import badgecounterstrike from "../img/badgecounterstrike.png"

function Badges(){
    return <div>
        <Layout/>
        <Ubicacion/>
        <div class="badgecontent">
            <Badge nombre="Automatic Adquisitor" ruta={badgegames} experiencia="536 XP"/>
        </div>
        <div class="badgecontent">
            <Badge nombre="Minimalism" ruta={badgefreedom} experiencia="Nivel 3, 300 XP"/>  
        </div>
        <div class="badgecontent ">
            <Badge nombre="Community Leader" ruta={communityleader} experiencia="Nivel 5, 1000 XP"/>  
        </div>
        <div class="badgecontent ">
            <Badge nombre="Ages of service" ruta={badgeyears} experiencia="300 XP"/>  
        </div>
        <div class="badgecontent">
            <Badge nombre="Counter Strike: Global Offensive" ruta={badgecounterstrike} experiencia="Nivel 5, 500 XP"/>  
        </div>
        
    </div>
}

export default Badges