import { useState } from 'react';
import axios from 'axios';
import Home from './Home';

function AddMember() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const submit = () => {
        const data = {
            id: id,
            name: name,
            regno: regno,
            email: email
        };

        axios.post("http://localhost:3035/add", data)
            .then((response) => {
                console.log(response);
                // Clear form fields after successful submission
                setId('');
                setName('');
                setRegno('');
                setEmail('');
                setError('');
            })
            .catch((error) => {
                console.log(error);
                // Display error message to the user
                setError('Failed to add member. Please try again.');
            });
    };

    return (
        <div>
            <Home />
            <h1>Add member</h1>
            <label>Id:</label>
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <label>Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <label>Register number:</label>
            <input type="text" onChange={(e) => setRegno(e.target.value)} value={regno} />
            <label>Email:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            <button onClick={() => { submit() }}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default AddMember;
