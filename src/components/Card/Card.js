import './Card.css'
// import { useState } from 'react'
// const longmsg = 'a very long message'
// const newmsg = 'a new message'

function Card(props) {
    // const [text, setMessage] =  useState('Initial Message');

    // function changeMessage() {
    //     setMessage('New message');
    // }

    return (
        <div className='card container mt-3'>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {/* <button onClick={changeMessage}>Button</button> */}
        </div>
    )
}

export default Card;