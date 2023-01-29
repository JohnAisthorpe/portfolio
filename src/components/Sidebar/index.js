import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logo-j.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

 const SideBar = () => {
    return (
    <div className='nav-bar'>
    <Link className='logo' to='/portfolio'>
        <img src={LogoJ} alt="logo"/>
    </Link>

    <nav>
        <NavLink exact="true" activeclassname="active" to="/" >
        <FontAwesomeIcon icon={ faHome } color='#4d4d4e'/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" to="/about" className='about-link'>
        <FontAwesomeIcon icon={ faUser } color='#4d4d4e' />
        </NavLink>

        <NavLink exact="true" activeclassname="active" to="/contact" className='contact-link'>
        <FontAwesomeIcon icon={ faEnvelope } color='#4d4d4e' />
        </NavLink>
    </nav>
    </div>
    )
}

 export default SideBar;
