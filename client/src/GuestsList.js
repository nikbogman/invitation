import React from 'react';
import './GuestsList.css';

function GuestsList() {
    const [all, setAll] = React.useState();

    React.useEffect(() => {
        fetch(`http://api.confest.im/teachers/`)
            .then(res => res.json())
            .then(data => setAll(data))
    }, [])

    const listItems = all ? all.map((guest) =>
        <li>{guest.name} - {guest.coming ? <p style={{ color: "green" }}>да</p> : <p style={{ color: "red" }}>не</p>}</li>
    ) : " ";

    return <div className='GuestList'>
        <ul>{listItems}</ul>
    </div>
}


export default GuestsList;
