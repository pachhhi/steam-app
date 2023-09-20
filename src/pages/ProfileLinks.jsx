import { Link } from "react-router-dom";

function ProfileLinks(){
    return <div>
        <ul>
            <li>
                <Link to="/badges">Badges</Link>
            </li>
        </ul>
    </div>
}

export default ProfileLinks;