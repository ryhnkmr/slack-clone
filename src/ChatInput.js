import React, { useState } from 'react';
import './ChatInput.css'
import { Button } from "@material-ui/core"
import db from './firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider';

function ChatInput({channelName, channelId}) {
  const [input, setInput] = useState('');
  const [{user}] = useStateValue();

  const sendMessage = e => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      })
    }
  }
  return (
    <div className="chatInput">
      <form action="">
        <input onChange={e => setInput(e.target.value)} type="text" placeholder={`Message #${channelName?.toLowerCase()}`}/>
        <Button type="submit" onClick={sendMessage}>SEND</Button>
      </form>
    </div>
  )
}

export default ChatInput
