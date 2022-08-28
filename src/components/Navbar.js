import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight:isActive ? 'bold': '',
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'Red' : 'Green'
        }
    }

    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='about'>About</NavLink>
            <NavLink style={navLinkStyles} to='products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='users'>Users</NavLink>
            <NavLink style={navLinkStyles} to='profile'>Profile</NavLink>
        </nav>
    )
}
