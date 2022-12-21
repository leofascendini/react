import { Link } from 'react-router-dom'
import './Note.css'



const Note = ({ note }) => {
    return(
    <div className='note'> 
        <img  src={note.img} alt={note.name} style={{width: 190}}/>
        <h2>{note.name}</h2>
        <p><b>{note.category}</b></p>
        <p><b>${note.price}</b></p>
        <Link className="vermas" to={`/detail/${note.id}`}><b>Detalles</b></Link>
    </div>
    )
}

export default Note