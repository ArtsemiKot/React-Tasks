import { Link } from "react-router-dom";
import { useState } from 'react';
function Task40() {
    const [randomString, setrandomString] = useState([])
    const arr = ['art', 'kot', '22']
    function showString() {
        setrandomString(arr[Math.round(Math.random() * 3)])
    }
    return (
        <>
            <h1>Задача№40</h1>
            <p>Напишите компонент, который будет показывать случайную строку в h1 по нажатии на кнопку. Слова хранятся в массиве</p>
            <button onClick={showString}>Click me</button>
            <h1>{randomString}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task40;