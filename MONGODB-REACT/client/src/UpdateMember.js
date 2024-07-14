import { useState } from 'react';
import axios from 'axios';
function UpdateMember()
{
    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const updateMember = () => {
        const data = {
            name: name,
            regno: regno,
            email: email,
            id:id
        }
        axios.put("http://localhost:3035/update", data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        }
    
    return (
        <div>
            <h1>Update member</h1>
            <label>Id :</label>
            <input type="text" onChange={(e)=> setId(e.target.value)} value={id}/>
            <label>Name :</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <label>Register number :</label>
            <input type="text" onChange={(e) => setRegno(e.target.value)} value={regno} />
            <label>Email :</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            <button onClick={() => { updateMember() }}>Submit</button>
        </div>
    );
}

export default UpdateMember;