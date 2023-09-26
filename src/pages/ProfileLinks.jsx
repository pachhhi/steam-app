import { Link } from "react-router-dom";
import "../styles/profilelinks.css"

// import badges img
import badgegames from "../img/badgegames.png"
import badgeyears from "../img/badgeyears.png"
import badgecommunity from "../img/badgecommunity.png"
import badgecounterstrike from "../img/badgecounterstrike.png"

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
                <img src={badgeyears} class="badgestyle"/>
                <img src={badgecommunity} class="badgestyle"/>
                <img src={badgecounterstrike} class="badgestyle"/>

            </div> 
        </Link>
        <Link to="/games">
            <ul>
                <li>
                    Games
                </li>
            </ul>
        </Link>
        <Link to="/captures">
            <ul>
                <li>
                    Captures
                </li>
            </ul>
        </Link>
        
    </div>
}

export default ProfileLinks;