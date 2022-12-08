import { Link } from 'react-router-dom'
import './Navbar.css'

import CartWidget from '../CartWidget/CartWidget'




const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Title</h1>
            <Link to='/'>Home</Link>
            <Link to='/category/laptop'>Laptop</Link>
            <Link to='/category/notebook'>Notebook</Link>
            <CartWidget />
        </nav>
    )
}

export default Navbar