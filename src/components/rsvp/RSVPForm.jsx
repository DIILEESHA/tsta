// src/components/RSVPForm.jsx
import { useState } from 'react';
import { db, collection, addDoc } from '../../utils/firebase';

const RSVPForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState(false);
    const [guests, setGuests] = useState('One');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'guests'), { name, email, attending, guests });
            alert('RSVP submitted successfully');
            setName('');
            setEmail('');
            setAttending(false);
            setGuests('One');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Guest Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Guest Email" required />
            <label>
                <input type="checkbox" checked={attending} onChange={(e) => setAttending(e.target.checked)} />
                Attending
            </label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option value="One">One</option>
                <option value="Limited to 2 guests">Limited to 2 guests</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RSVPForm;
