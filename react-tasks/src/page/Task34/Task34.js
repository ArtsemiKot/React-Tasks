import { Link } from "react-router-dom";
import { useState } from 'react';
function Task34() {
    const [flag, setFlag] = useState(false)

    function clickButton() {
        if (!flag) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }
    return (
        <>
            <h1>Задача№34</h1>
            <p>есть кнопка с названием ,,добавить цвет,,.
                по клику на кнопку твоя задача поменять цвет шрифта h1. при повторном клике цвет вернуть в первоначальное состояние </p>
            <button onClick={clickButton}>Добавить цвет</button>
            <h1 style={{color:(flag ? 'green' : null)}}>Цвет красный</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task34;