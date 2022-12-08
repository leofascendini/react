import { Link } from 'react-router-dom'
import './Note.css'



const Note = ({ note }) => {
    return(
    <div className='note'> 
        <img src={note.img} alt={note.name} style={{width: 200}}/>
        <h2>{note.name}</h2>
        <p><b>{note.category}</b></p>
        <p><b>${note.price}</b></p>
        <Link to={`/detail/${note.id}`}>Ver mas</Link>
    </div>
    )
}

export default Note