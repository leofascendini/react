import Note from "../Note/Note"
import './NoteList.css'

const NotesList = ({ notes }) => {
    return (
        <div className="notelist">
             {notes.map(note => (
             <Note key={note.id} note={note}/>
         ))}
        </div>
    )
}

export default NotesList