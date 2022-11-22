import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'



const Navbar = (props) => {

    const handleOnClick = () => {
        alert("hice click en home")
    }
    const handOnClick2 = () => {
        alert("hice click en about")
    }
    const handOnclick3 = () => {
        alert("hice click en contact")
    }


    return (
        <><nav className="navbar">
            <h1 style={{ color: props.colorTitle }}>Title</h1>
            <Button text="Home" colorText="blue" func={handleOnClick} />
            <Button text="About" colorText="blue" func={handOnClick2} />
            <Button text="Contact" colorText="blue" func={handOnclick3} />
            <CartWidget />
        </nav></>
    )
}

export default Navbar