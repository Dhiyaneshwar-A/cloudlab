import { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
function ViewMember()
{
    const [datalist, setDatalist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3035/read").then((response) => {
            console.log("Data read successfully");
            setDatalist(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const deleteMember = (id) => {
        axios.delete(`http://localhost:3035/remove/${id}`).then((response) => {
            console.log("Deleted successfully");

        }).catch((error) => {
            console.log(error);
        });
    }   
    return (
        <div>
            <Home></Home>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Register Number</th>
                        <th>Email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {datalist.map((val,index)=>(
                    <tr key={index}>
                    <td>{val.Id}</td>
                    <td>{val.Name}</td>
                    <td>{val.RegNo}</td>
                        <td>{val.Email}</td>
                        <td><button onClick={() => deleteMember(val.Id)}>delete</button>
</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewMember;