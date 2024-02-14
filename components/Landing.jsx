import { useState, useEffect, useRef } from 'react'
import bear from '../src/assets/bear.gif'
import { Link } from 'react-router-dom';
import './App.css'

function Landing() {
    const [message, setMessage] = useState("No!");
    const [count, setCount] = useState(0);
    const yesRef = useRef(null);

    function handleNo() {
        setCount(c => c + 1);
    }

    useEffect(() => {
        switch (count) {
            case 0:
                setMessage("No! 😒");
                break;

            case 1:
                setMessage("Are you suuure?! 😟");
                yesRef.current.style.width = '100px';
                yesRef.current.style.height = '100px';
                yesRef.current.style.fontSize = '2.85rem';
                break;

            case 2:
                setMessage("I'll be saaad! 😭");
                yesRef.current.style.width = '200px';
                yesRef.current.style.height = '200px';
                yesRef.current.style.fontSize = '4.25rem';
                break;

            case 3:
                setMessage("But I love you!! 👩‍❤️‍💋‍👨");
                yesRef.current.style.width = '300px';
                yesRef.current.style.height = '300px';
                yesRef.current.style.fontSize = '7.85rem';
                break;

            case 4:
                setMessage("PLEAAASE!! 💔");
                yesRef.current.style.width = '400px';
                yesRef.current.style.height = '400px';
                yesRef.current.style.fontSize = '10.85rem';
                break;

            default:
                break;
        }

    }, [message, count])


    return (
        <div className='container'>
            <div>
                <img className='bear' src={bear}></img>
            </div>
            <div className='text'>
                Will you be my Valentine 🥰?
            </div>
            <div className='buttons'>
                <Link to='/yes'>
                    <button className='yes' ref={yesRef} >Yes!</button>
                </Link>
                <button className='no' onClick={handleNo}>{message}</button>
            </div>
        </div>
    )
}

export default Landing;
