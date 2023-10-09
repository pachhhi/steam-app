import Layout from "../components/Layout";
import Ubicacion from "../components/Ubicacion"
import Game from "../components/Game"
import "../styles/game.css"

// import imgs
import  counterstrike  from "../img/gamesimg/counterstrikegame.jpg"
import brotato from "../img/gamesimg/brotatogame.jpg"
import hades from "../img/gamesimg/hadesgame.jpg"
import nomansky from "../img/gamesimg/nomanskygame.jpg"
import blender from "../img/gamesimg/blendergame.jpg"
import darksouls from "../img/gamesimg/darksoulsgame.jpg"
import devtycoon from "../img/gamesimg/devtycoongame.jpg"
import doom from "../img/gamesimg/doomgame.jpg"
import loophero from "../img/gamesimg/loopherogame.jpg"
import residentevil from "../img/gamesimg/residentevilgame.jpg"
import satisfactory from "../img/gamesimg/satisfactorygame.jpg" 

function Games(){
    return <div>
        <Layout/>
        <Ubicacion/>
        <div>
            <input type="search" placeholder="Buscar un juego" class="inputgames"/>
        </div>
        <div class="space">
            <Game img={ counterstrike } nombre="Counter Strike 2" tiempo="1.800 HS"/>
            <Game img={ darksouls } nombre="Dark Souls REMASTERED" tiempo="245 HS"/>
            <Game img={ loophero } nombre="Loop Hero " tiempo="140 HS"/>
            <Game img={ hades } nombre="Hades" tiempo="125 HS"/>
            <Game img={ blender } nombre="Blender" tiempo="120 HS"/>
            <Game img={ brotato } nombre="Brotato" tiempo="68 HS"/>
            <Game img={ devtycoon } nombre="Game Dev Tycoon" tiempo="60 HS"/>
            <Game img={ satisfactory } nombre="Satisfactory" tiempo="40 HS"/>
            <Game img={ nomansky } nombre="No Man's Sky" tiempo="36 HS"/>
            <Game img={ doom } nombre="Doom" tiempo="24 HS"/>
            <Game img={ residentevil } nombre="Resident Evil 7" tiempo="22 HS"/>
        </div>
    </div>
}

export default Games