import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'



const Navbar = () => {
    return (  
        <nav className="navbar">
            
            <Link to='/'><img src='../images/laptop1.jpg' alt='logo' style={{width: 200}}/></Link>
            <Link className='btn' to='/'><b>Home</b></Link>
            <Link className='btn' to='/Laptop'><b>Laptop</b></Link>
            <Link className='btn' to='/Notebook'><b>Notebook</b></Link>
            <CartWidget className='carrito'/>
            
        </nav>
    )
}

export default Navbar