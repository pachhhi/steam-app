import { Link } from "react-router-dom";
import badgegames from "../img/badgegames.png"
import "../styles/profilelinks.css"

function ProfileLinks(){
    return <div>
        <Link to="/badges">
            <ul>
                <li>
                    Badges
                </li>
            </ul>
            <div class="badgesdiv">
                <img src={badgegames}/>    
            </div> 
        </Link>
        <Link to="/games">
            <ul>
                <li>
                    Games
                </li>
            </ul>
        </Link>
        
    </div>
}

export default ProfileLinks;