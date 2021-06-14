import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import './body.css';

const Main = () => {
  
   const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);}
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const [categories, setCategories] = useState(new Set());

  const addCategory = e => {
    if (item.trim()) {
      setCategories(new Set(categories).add(item.trim()));
    }
  };
  const inputEvent = (event) => {
    setItem(event.target.value);
  }

  const addEvent = () => {
    

    setNewItem((prev)=>{
      return [...prev, item]
    });
    
    setItem("");
    
  }
  
  const deleteEvent = () => {
    setNewItem([]);
  }
  
  return(
    <div>
      <br />
      <br />
      <div className="childOne">
      <form>
        <input type="text" value={item} placeholder="Add a task" onChange={inputEvent}
                                              />
        <Button className="AddBtn" onClick={addEvent}>
          <AddIcon />
        </Button>
        <br />
        <br />
        <ul className="textFont">
          {
            newItem.map((val) => {
              return <li> <Checkbox/> {val} <Button className="delBtn" onClick={deleteEvent}>
          <DeleteIcon />Delete All
        </Button></li>;
            })
          }
        </ul>
        </form>
      </div>
      <br />
      <br />
      <div className="childTwo">
        <Button className="delBtn" onClick={deleteEvent}>
          <DeleteIcon />Delete All
        </Button>
      </div>
    </div>
  );
}


export default Main;