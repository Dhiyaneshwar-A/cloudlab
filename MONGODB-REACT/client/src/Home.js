import { Link } from 'react-router-dom';

function Home()
{
    const navLinks = [
        {
            display: "HOME",
            url: "/"
        },
        {
            display: "ADD NEW MEMBER",
            url: "/addMember"
        },
        {
            display: "VIEW ALL MEMBERS",
            url: "/viewMembers"
        },
        {
            display: "UPDATE MEMBER",
            url:"/updateMember"
        }
    ];

    return (
        <div>
            <ul>
                {navLinks.map((item, index)=>(
                <li key={index}>
                    <Link to={item.url}>{item.display}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;