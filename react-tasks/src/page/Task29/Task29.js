import { Link } from "react-router-dom";
import { useState } from 'react';
function Task29() {
    const [num, setNum] = useState(0);
    function plusCount() {
        setNum(num + 1)
    }

    function minusCount() {
        setNum(num - 1)
    }

    function deleteCount() {
        setNum(0)
    }
    return (
        <>
            <h1>Задача№29</h1>
            <p>Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку "Сброс". При нажатии на
                кнопку, счетчик должен сбрасываться в ноль. Используйте useState, чтобы управлять значением счетчика.</p>
            <h1>{num}</h1>
            <button onClick={plusCount}>+1</button>
            <button onClick={minusCount}>-1</button>
            <button onClick={deleteCount}>Сброс</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task29;