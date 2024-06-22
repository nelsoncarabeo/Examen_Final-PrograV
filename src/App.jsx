import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFormData = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.subject && formData.message) {
      setFormSubmitted(true);
      setFormError('');
      // Puedes realizar aquí cualquier lógica adicional, como enviar datos a un backend (que no es necesario según los requisitos).
      // Después de enviar, reseteamos el formulario.
      setFormData(initialFormData);
    } else {
      setFormError('Por favor completa todos los campos.');
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Contacto</h1>
      {formSubmitted ? (
        <div className="success-message">
          ¡El mensaje fue enviado sin problemas!
          <br></br><button onClick={() => setFormSubmitted(false)}>Enviar otro mensaje</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre Completo</label>
            
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          {formError && <p className="error-message">{formError}</p>}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default App;
