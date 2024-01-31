import React, { useState } from 'react';

const AiBotChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = async () => {
    // Make an API call to the chatbot service
    // For example, using fetch or axios
    try {
      // ... existing code ...
    
      const response = await fetch('https://mediafiles.botpress.cloud/fe5faa63-5696-4f64-a2e2-fc5414b8fbda/webchat/bot.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageInput }),
      });
    
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    
      const data = await response.json();
    
      // ... rest of the code ...
    } catch (error) {
      console.error('Error sending message:', error);
    }
    
  };

  return (
    <div className="ai-bot-chat">
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`message ${entry.sender}`}>
            {entry.message}
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AiBotChat;
