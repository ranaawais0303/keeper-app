import "./App.css";
import Header from "./components/Header";
import notes from "./components/notes";
import Footer from "./components/Footer";
import Note from "./components/Note";

// const createNotes = (note) => (
//   <Note key={note.id} title={note.title} content={note.content} />
// );

function App() {
  return (
    <div>
      <Header />
      {/* <Note titel={notes.title} /> */}
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      {/* <Note title={notes[0].title} content="sdjfklasjdf" /> */}
      <Footer />
    </div>
  );
}

export default App;
