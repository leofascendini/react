import { useEffect, useState  } from 'react'
import NotesList from '../NotesList/NotesList'
import './NotesContainer.css'
import { getNotes } from '../../asyncMock'


const NotesContainer = () => {
    const [notes, setNotes] = useState ([])

    useEffect(() => {
        getNotes()
          .then(response => {
            setNotes(response)
          })
          .catch(error => {
            console.log(error)
          }) 
      }, [])
// const arrayTransformado = notes.map(note => <h2>{note.title}</h2>)

    return(
        <div className='container'>
            <NotesList notes={notes}/>
        </div>
    )
}

export default NotesContainer