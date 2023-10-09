import "../styles/profilecontent.css"
import "../styles/screenshots.css"
import Game from "./Game";
import ProfileLinks from "../pages/ProfileLinks";
import { Link } from "react-router-dom";

// import imagenes
import macroblank from "../img/macroblank.jpg"

import brotatogame from "../img/gamesimg/brotatogame.jpg"
import hadesgame from "../img/gamesimg/hadesgame.jpg";
import nomanskygame from "../img/gamesimg/nomanskygame.jpg"

function ProfileContent (){
    return <div>
        <div class="row profilecontent container">
            <div class="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div class="tittlediv">
                    <h4>Favorite Guide</h4>
                </div>
                <div class="guide">
                    <img src={macroblank}/>
                    <div class="guidetext">
                        <h4>ꓘN∀⅂ꓭOꓤϽ∀ꟽ</h4>  
                        <small>
                            Created by - <p> pachhhi ,</p>
                        </small>  
                    </div>    
                </div>
            </div>
            
            <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="onlinetittle">
                    <h4>Currently Online</h4>
                        <div>
                            <ProfileLinks/>
                        </div>
                </div>
            </div>
            
        </div>
        <div class="gamesplayed">
                <div>   
                    <div>
                        <h4>Recent activity</h4>
                    </div>
                </div>
                <div>
                    <div class="space">
                        <Link to="/games">
                            <Game img={brotatogame} nombre="Brotato" tiempo="68 HS"/>
                        </Link>
                    </div>
                    <div class="space">
                        <Game img={hadesgame} nombre="Hades" tiempo="125 HS"/>
                    </div>
                    <div class="space">
                        <Game img={nomanskygame} nombre="No Man's Sky" tiempo="36 HS"/>
                    </div>
                    
                </div>
            </div>
                
        
        <aside>
            <h3>IN PROCESS...</h3>
        </aside>
    </div>
}

export default ProfileContent;