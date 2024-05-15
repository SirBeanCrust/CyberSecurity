import React, {useState} from 'react';

import { Link } from "react-router-dom";
import "./Routing.jsx";

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setFormSubmitted(true);
    };
  
    return (
      <div>
        <h2>Kontakt oss</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Navn:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Melding:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Send</button>
        </form>
        {formSubmitted && <p>Takk for meldingen!</p>}
      </div>
    );
  };
const Contact = () => {
  return (
    <div>
      <ContactForm/>
      <Link to="/">
              <button>Tilbake</button>
            </Link>
    </div>
  );
};

export default Contact;