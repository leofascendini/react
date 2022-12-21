import { Link } from 'react-router-dom'
import './Navbar.css'





const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'><img src='../images/laptop1.jpg' alt='logo' style={{width: 200}}/></Link>
            <Link className='btn' to='/'><b>Home</b></Link>
            <Link className='btn' to='/Laptop'><b>Laptop</b></Link>
            <Link className='btn' to='/Notebook'><b>Notebook</b></Link>
            <Link className='carrito' to='/Cart'>
            <img src={"./images/carrito.png"} alt="cart-widget"></img></Link>
        </nav>
    )
}

export default Navbar