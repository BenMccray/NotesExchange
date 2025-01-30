import React, {useState, useEffect} from 'react'
import LoadingCircle from '../components/LoadingCircle';
import "../styles/App.css"
import "../styles/Chat.css"

const ChatContent = () => {
    const [loading, setLoading] = useState(true);
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
            <form className="chat-form-container" onSubmit={handleSend}>
                <input className="msg-bar"/>
                <button type="submit" className='send-btn'/>
            </form>
        </div>
    </div>
    
  )
  
}

export default ChatContent