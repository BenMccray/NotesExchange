import React, {useState, useEffect} from 'react'
import LoadingCircle from '../components/LoadingCircle';
import "../styles/App.css"
import "../styles/Chat.css"
import { useParams } from 'react-router';
import { useSocket } from '../contexts/SocketContext';


const ChatContent = () => {
  const [loading, setLoading] = useState(true);
  const {chatId} = useParams();
  const {socket, joinRoom} = useSocket();
  const [message, setMessage] = useState("");

  // const {messages, sendMessage} = useSocket(chatId);
  useEffect(() => {
    /**
     * Get data for different items in the dashboard content
     */
    joinRoom(chatId);

    setLoading(false);
  }, [chatId, joinRoom]);

  const handleSend = () => {
    socket.emit("message", {message, className: "msg user-msg"})
  }
  if (loading) {
    return (
    <div className='content-wrapper'>
      <div className='content'>
        <LoadingCircle/>
      </div>
    </div>)
  }
  return (
    <div className='content-wrapper'>
        <div className='content chat-content'>
            <div className='chat-feed'>
                <div className='msg other-msg'><span className='msg-text'>hello</span></div>
                <div className=' msg user-msg'><span className='msg-text'>hello back</span></div>
            </div>
            <div className="chat-form-container">
                <input onChange={setMessage} className="msg-bar"/>
                <button onClick={handleSend} className='send-btn'/>
            </div>
        </div>
    </div>
    
  )
  
}

export default ChatContent