import { useState, useEffect } from 'react'
import { getNoteById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemCount from '../Counter/ItemCounter'

const ItemDetailContainer = () => {
    const [note, setNote] = useState({})

    const { noteId } = useParams()

    useEffect(() => {
        getNoteById(noteId)
            .then(response => {
                setNote(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [noteId])

    const handleOnAdd = (quantity) => {
        console.log('se agrego al carrito correctamente ' + quantity)
    }

    return(
        <div>
            <h1>Detalle del producto</h1>
            <div>
                <h1>{note.name}</h1>
                <img src={note.img} alt={note.name}/>
                <p>{note.description}</p>
                <h2>$ {note.price}</h2>
                <ItemCount stock={note.stock} onAdd={handleOnAdd}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer