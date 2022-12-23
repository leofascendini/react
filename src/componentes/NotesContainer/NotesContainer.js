import { useEffect, useState  } from 'react'
import NotesList from '../NotesList/NotesList'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { db } from '../services/firebase/firebaseConfig'
import './NotesContainer.css'



const NotesContainer = () => {
    const [notes, setNotes] = useState ([])
    const [loading, setLoading ] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
      setLoading(true)
      
      const notesRef = categoryId ? query(collection(db, 'notes'), where('category', '==', categoryId))
                                  : collection(db, 'notes')
      getDocs(notesRef)
        .then(response => {
          const notesAdapted = response.docs.map(doc => {
            const data = doc.data()

            return { id: doc.id, ...data}
          })
          setNotes(notesAdapted)
        })
        .finally(() => {
            setLoading(false)
        })
      }, [categoryId]) 
      if(loading) {
        return <h1>loading...</h1>
      }

    return(
        <div className='container'>
            <NotesList notes={notes}/>
        </div>
    )
}

export default NotesContainer