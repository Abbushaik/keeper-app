import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) 
{


    const [isExpanded, setExpanded]= useState(false);

    const [note, setNote] = useState({
      title:"",
      content:""
    });

    function expand()
    {
      setExpanded(true);
    }
    function submitNote(event)
    {
      event.preventDefault();
      props.onAdd(note);
      setNote({
        title:"",
        content:""
      });
    }

    const handleChange=(event)=>
    { 
      const {name, value} = event.target;

      setNote((prevNote)=>
      {
        return {
          ...prevNote,
          [name] :value
        };
      });
    }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded ? 
           <input 
              name="title" 
              onChange={handleChange} 
              value = {note.title}  
              placeholder="Title" 
            /> : null
        }
        

        <textarea 
          name="content" 
          onClick={expand}
          onChange={handleChange} 
          value={note.content} 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} />

        <Zoom in={isExpanded}>
            <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
