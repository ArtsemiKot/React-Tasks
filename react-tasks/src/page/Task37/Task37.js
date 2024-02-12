import { Link } from "react-router-dom";
import { useState } from 'react';
function Task37() {
    const [number, setNumber] = useState(0)

    function clickButton() {
        setNumber(number + 1)
    }

    return (
        <>
            <h1>Задача№37</h1>
            <p>Создай компонент, который будет отслеживать количество кликов по кнопке и отображать это количество</p>
            <button onClick={clickButton}>Счетчик</button>
            <div>{number}</div>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task37;