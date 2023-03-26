import '../views/Nav.scss';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='menus'>
            <ul>
                <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/timer">Timer App</NavLink></li>
                <li><NavLink activeClassName="active" to="/todo">To do Apps</NavLink></li>
                <li><NavLink activeClassName="active" to="/blog">Blog Apps</NavLink></li>
                <li><NavLink activeClassName="active" to="/secret">Secret</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;