
import React, { useState } from 'react';
import './App.css';
import  { Link } from 'react-router-dom';
import shopButton from './shop_button.png'
import friendButton from './friendList_button.png'
function App() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([""]);

  const onChangeHandler = (event) => {
      setText(event.target.value);
  };

  const onSendHandler = (event) => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            
         <a href="#"><Link to="/friend-list"> <img src={shopButton}></img> </Link></a>
         <a href="#"><Link to="/shop"> <img src={friendButton}></img> </Link></a>
         <a href="#">Link 3</a>
          </div>
        </div>
      </div>

      

     
    <div className="App-chatroom">
        {

          lines.map((value, index) => {
            return <div key={index} className="App-chatroom-text">
                {value}
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" onChange={onChangeHandler} value={text}/>
        <div className="App-textbox-send" onClick={onSendHandler}>ส่ง!</div>

      </div>
      
    </div>

    
  );
}

export default App;
