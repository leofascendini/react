import './Note.css'



const Note = ({ note }) => {
    return(
    <div className='note'> 
        <img src={note.img} alt={note.name} style={{width: 200}}/>
        <h2>{note.name}</h2>
        <p><b>${note.price}</b></p>  
    </div>
    )
}

export default Note