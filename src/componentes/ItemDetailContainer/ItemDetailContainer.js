import { useState, useEffect } from 'react'
import { getNoteById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'



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

   return(
        <div>
            <h1>Detalles del producto</h1>
            <ItemDetail {...note} />
        </div>
   )
}

export default ItemDetailContainer