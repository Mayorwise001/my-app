import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>Resume Creator</h1>

        <div className="links">
        <Link to="/">Home
        <FontAwesomeIcon icon={faHouse} />
        </Link>
            <Link to="/create">New CV
            <FontAwesomeIcon icon={faPlus} />
            </Link>
        </div>
        </nav>
     );
}
 
export default Navbar ;