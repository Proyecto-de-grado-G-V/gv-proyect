import { useState, useEffect } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import '../../styles/floatingChat.css';

type Message = {
  type: 'bot' | 'user';
  text: string;
  time: string;
};

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isOpen) {
      const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const mensajeInicial: Message = {
        type: 'bot',
        text: '¡Hola! ¿En qué puedo ayudarte hoy?',
        time: hora,
      };
      setMessages([mensajeInicial]);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage: Message = {
      type: 'user',
      text: input,
      time: hora,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <button className="floating-cart" onClick={toggleChat} style={{ backgroundColor: isOpen ? '#f0eeed' : '#d40813', color: isOpen ? '#d40813' : 'white' }}>
        {isOpen ? '▼' : <RiRobot2Line size={24} />}
      </button>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <RiRobot2Line size={20} />
            <span className="chat-title">G&A</span>
            <button className="close-chat" onClick={toggleChat}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.type === 'bot' && (
                  <div className="avatar"><RiRobot2Line /></div>
                )}
                <div className={`bubble ${msg.type === 'bot' ? 'bot-bubble' : 'user-bubble'}`}>
                  {msg.text}
                </div>
                <span className="time">{msg.time}</span>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}