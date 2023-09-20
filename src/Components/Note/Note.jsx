import "./Note.css";

const Note = ({ note , onNoteUpdate }) => {
  const noteTextUpdated = (event) => {
    const newTextValue = event.currentTarget.textContent
    const updatedNote = ({
      ...note,
      text: newTextValue
    })
    onNoteUpdate(updatedNote)
  };
  return (
    <div className="note">
      <div
        onBlur={noteTextUpdated}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="note__text"
      >
        {note.text}
      </div>
      <div className="note__link">
        <a href={note.link} target="_blank">
          {note.link}
        </a>
      </div>
    </div>
  );
};

export default Note;
