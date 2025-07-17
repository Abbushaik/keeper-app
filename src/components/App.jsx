import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() 
{

   const [notes, setNotes] = useState([]);

  function addNote(note)
  {
     setNotes((prevNote)=>
      {
         return [...prevNote,note];
      });
  }

  function deleteNote(id)
  {
     setNotes((prevNotes)=>
      {
         return prevNotes.filter((noteItem,index)=>{
            return id !==index;
         });
      })
  }

  return (
    <div>
      <Header />

      <CreateArea 
        onAdd={addNote}
      />
        {notes.map((noteItem,index)=>(
              <Note 
                key={index} 
                id={index}
                onDelete={deleteNote}
                title={noteItem.title} 
                content={noteItem.content} 
              />
            ))}
      <Footer />
    </div>
  );
}

export default App;
