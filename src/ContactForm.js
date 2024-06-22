// ContactForm.js
import React, { useState } from 'eact';

const ContactForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState(null);
const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
            if (!name ||!email ||!subject ||!message) {
                setError('Please fill in all fields');
    } else {
                setError(null);
            setSent(true);
            }
    };

    return (
    <form onSubmit={handleSubmit}>
            <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <br />
    <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <br />
    <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
    </label>
    <br />
    <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
    </label>
    <br />
    <button type="submit">Send</button>
    {error && <div style={{ color: 'ed' }}>{error}</div>}
    {sent && <div style={{ color: 'green' }}>Message sent successfully!</div>}
    </form>
    );
};

export default ContactForm;