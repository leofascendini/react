import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'
import ItemDetail from '../ItemDetail/ItemDetail'





const ItemDetailContainer = () => {
    const [note, setNote] = useState({})
    const [loading, setLoading] = useState(true)

    const { noteId } = useParams()

    useEffect(() => {

        const notesRef = doc(db, 'notes', noteId)

        getDoc(notesRef)
            .then(response => {
                const data = response.data()
                const notesAdapted = { id: response.id, ...data}
                
                setNote(notesAdapted)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [noteId])

    if(loading) {
        return <h1>loading...</h1>
    }

   return(
        <div>
            <h1>Detalles del producto</h1>
            <ItemDetail {...note} />
        </div>
   )
}

export default ItemDetailContainer