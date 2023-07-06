import "./App.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import db from './firebase';
import firebase from "firebase";

function App() {
  const [inputval, setInputval] = useState("");
  const [message, setMessage] = useState([
  ]);
  const [username, setUsername] = useState("");
  const useEffRan = useRef(false);

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc =>({id:doc.id, username:doc.data().username, text:doc.data().text})))
    })
  }, []);

  useEffect(() => {
    if (useEffRan.current) return;
    useEffRan.current = true;
    const user = prompt("Enter your username");
    if(user==="") setUsername("Unknown user");
    else setUsername(user);
  }, []);

  const handleInput = (event) => {
    console.log("msg "+event.target.value);
    setInputval(event.target.value);
  };

  const handleSend = (event) => {
    console.log("send "+inputval);
    event.preventDefault();
    if (inputval !== "") {

      db.collection('messages').add({
        text:inputval,
        username:username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() 
      })

    }
    setInputval("");
  };

  const handleClear = () => {
    setInputval("");
  };

  return (
    <div className="App flex-container">
    <div className="headingBox">
      <h2 className="my-3">RealTime Messenger</h2>
      <h5 className="my-3">Welcome {username} !!!</h5>
    </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 box">
          <form className="InputandBtn">
            <textarea type="text"
              className="my-2 inputbox form-control"
              placeholder="Enter your message"
              wrap="soft"
              value={inputval}
              onChange={handleInput} rows="2"></textarea>
            <button type="submit" className="my-3 btn sendBtn" onClick={handleSend}>
              Send
            </button>
            {/* <button type="reset" className="my-3 btn" onClick={handleClear}>
              Clear Input
            </button> */}
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 chatbox">
        {message.length!==0 ?
          <ul>
            {message.map((eachmessage) => {
              return (
                <div key={eachmessage.id} className={(username===eachmessage.username)?"myMsg":"commonMsg"}>
                  {(username===eachmessage.username)?null:<p className="usernameTag">{eachmessage.username}</p>}
                  <div className={(username===eachmessage.username)?"card myCard":"card commonCard"}>
                    <div className="card-body">
                      <p className={(username===eachmessage.username)?"myMsg":"commonMsg"}>
                        {eachmessage.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
          : <p className="noMsg">No message to display</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
