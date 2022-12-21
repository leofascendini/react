import ItemCount from "../Counter/ItemCounter";
import { useContext } from "react";
import { CartContext } from "../../App";

const ItemDetail = ({id, name, img, description, price, stock}) => {

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        addItem({id, name, price, quantity})
    }

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name} style={{width: 400}}/>
            <p>{description}</p>
            <h2>$ {price}</h2>
             <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail