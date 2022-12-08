import { useEffect, useState  } from 'react'
import NotesList from '../NotesList/NotesList'
import { getNotes, getNoteByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import './NotesContainer.css'


const NotesContainer = () => {
    const [notes, setNotes] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
      if(categoryId) {
        getNoteByCategory(categoryId)
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.log(error)
        })
      } else {
        getNotes()
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
      }, [categoryId]) 

    return(
        <div className='container'>
            <NotesList notes={notes}/>
        </div>
    )
}

export default NotesContainer