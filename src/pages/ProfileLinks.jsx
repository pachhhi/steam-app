import { Link } from "react-router-dom";

function ProfileLinks(){
    return <div>
        <Link to="/">
          Hola
        </Link>
        <Link to="/badges">
          Badge
        </Link>
    </div>
}

export default ProfileLinks;