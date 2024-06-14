import Notes from "./Components/Notes";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Notes key={notes.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
