import React, {useState, useEffect} from 'react'
import LoadingCircle from '../components/LoadingCircle';
import "../styles/App.css"
import "../styles/Chat.css"
import { useSocket } from '../hooks/useSocket';
import { useParams } from 'react-router';

const ChatContent = () => {
  const [loading, setLoading] = useState(true);
  const {chatId} = useParams();

  const {messages, sendMessage} = useSocket(chatId);
  useEffect(() => {
    /**
     * Get data for different items in the dashboard content
     */
    setTimeout(() =>  setLoading(false), 1000)
   
  }, []);

  const handleSend = () => {
    console.log("sent")
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
                <input className="msg-bar"/>
                <button onClick={handleSend} className='send-btn'/>
            </div>
        </div>
    </div>
    
  )
  
}

export default ChatContent