import { useState } from "react";
import { Link } from "react-router-dom";

function Task91() {
    const [number, setNumber] = useState(0)
    function clickButton1() {
        setNumber(number + 1)
    }
    function clickButton2() {
        setNumber(number - 1)
    }
    function clickButton3() {
        setNumber(0)
    }

    return (
        <>
            <h1>Задача 91</h1>
            <p>Создайте компонент, который отображает счетчик и кнопку "Сброс". При нажатии
                на кнопку, счетчик должен сбрасываться в ноль. Используйте useState, чтобы управлять
                значением счетчика.
            </p>
            <button onClick={clickButton1}>+1</button>
            <button onClick={clickButton3}>Сброс</button>
            <button onClick={clickButton2}>-1</button>
            <div>{number}</div>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task91;