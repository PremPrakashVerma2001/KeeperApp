function Note(props){
return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>{props.emoji}</p>
        <p>{props.unique_key}</p>
    </div>
);
}

export default Note;