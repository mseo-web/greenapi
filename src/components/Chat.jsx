import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = ({ idInstance, apiTokenInstance }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [contact, setContact] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const fetchContact = async () => {
    setContact({ name: `Contact ${phoneNumber}`, phoneNumber });
  };

  // const fetchContact = async () => {
  //   const url = `https://api.green-api.com/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`;
  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 1000)); // Задержка в 1 секунду
  //     const response = await axios.post(url, {
  //       chatId: `${phoneNumber}@c.us`
  //     });
  //     const contactData = response.data;
  //     setContact({
  //       name: contactData.name || `Contact ${phoneNumber}`,
  //       phoneNumber
  //     });
  //     console.log("Contact data:", contactData);
  //   } catch (error) {
  //     console.error("Error fetching contact data:", error);
  //   }
  // };
  

  const sendMessage = async () => {
    console.log(phoneNumber);
    if(phoneNumber=='') {
      alert("Контакт не указан! Введите телефон.");
    }
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    await axios.post(url, {
      chatId: `${phoneNumber}@c.us`,
      message,
    });
    setMessages([...messages, { sender: 'You', message }]);
    setMessage('');
  };

  const fetchMessages = async () => {
    const url = `https://7103.api.greenapi.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
    try {
      const response = await axios.get(url);
      console.log("API response:", response.data);  // Вывод ответа в консоль
      const data = response.data;

      if (data && data.body && data.body.messageData && data.body.senderData && data.body.senderData.senderContactName!="" && data.body.messageData.extendedTextMessageData) {
        const msg = data.body.messageData.extendedTextMessageData.text;
        const sender = data.body.senderData.senderContactName;
        const newMessage = { sender, message: msg };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        console.log("New message added to state:", newMessage);

        // Удаляем уведомление после обработки
        await axios.delete(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`);
      } else {
        console.log("No new messages or unexpected data structure:", response.data);
        // Удаляем уведомление после обработки
        await axios.delete(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(fetchMessages, 5000); // Fetch messages every 5 seconds
  //   return () => clearInterval(interval);
  // }, [idInstance, apiTokenInstance]);

  useEffect(() => {
    console.log("Messages state updated:", messages);
  }, [messages]);

  return (
    <>
      <section className="mt-5">
          <div className="container" data-aos="fade-up">
              <div className="section-title">
                  <h2>Интерфейс WhatsApp</h2>
              </div>

              <div className="row">
                  <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                    <div className="mb-3">
                      <label className="form-label">Номер телефона получателя</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Номер телефона"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <button onClick={fetchContact} className="btn btn-primary">Начать чат</button>
                  </div>
              </div>

              <div id="chat" className="row mt-5">
                  <div className="col-lg-12 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                    <div className="chat-container">
                      <div className="sidebar">
                        <div className="sidebar-header">
                          Контакт
                        </div>
                        {contact && (
                          <div className="chat-contact">
                            <div className="chat-contact-avatar">
                              <i className="bi bi-person-fill"></i>
                            </div>
                            <span>{contact.phoneNumber}</span>
                          </div>
                        )}
                      </div>
                      <div className="chat-content">
                        <div className="chat-content-header">
                          <button onClick={fetchMessages} className="btn btn-secondary">Проверить входящие</button>
                        </div>
                        <div className="chat-messages" ref={chatRef}>
                          {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                              <b>{msg.sender}:</b> {msg.message}
                            </div>
                          ))}
                        </div>
                        <div className="chat-footer">
                          <textarea
                            placeholder="Введите ообщение"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                          <button onClick={sendMessage}>
                            {/* <i className="bi bi-send-fill"></i> */}
                            <svg
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                                preserveAspectRatio="xMidYMid meet"
                                className=""
                                version="1.1"
                                x="0px"
                                y="0px"
                                enableBackground="new 0 0 24 24"
                                // xml:space="preserve"
                            >
                                <path
                                    fill="currentColor"
                                    d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                                ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default Chat;
