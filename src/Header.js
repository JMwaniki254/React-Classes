import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
    return (
        <div className='top-nav'>
            <Link className='Link' to="/">Home</Link>
            <Link className='Link' to="/Services">Services</Link>
            <Link className='Link' to="/Login" >Log-in</Link>
            <Link className='Link' to="/Register">Register</Link>
        </div>
    );
}

export default Header;