import Layout from "../components/Layout"
import "../styles/badges.css"
import Badge from "../components/Badge"

// import badges
import badgegames from "../img/badgegames.png"
import badgefreedom from "../img/badgefreedom.png"

function Badges(){
    return <div>
        <Layout/>
        <div class="badgecontent container">
            <Badge nombre="Automatic Adquisitor" ruta={badgegames} experiencia="536 XP"/>
            <Badge nombre="Minimalism" ruta={badgefreedom} experiencia="Nivel 3, 300 XP"/>  
        </div>
    </div>
}

export default Badges