import { Link } from "react-router-dom";
import { useState } from 'react';
function Task41() {
    const [stringValue, setStringValue] = useState('')

    function clickButton(e) {
        setStringValue(e.target.textContent)
    }

    return (
        <>
            <h1>Задача№41</h1>
            <p>у вас есть 3 кнопки: о нас, цена, главная страница
                h1  содержит текст активной(нажатой) кнопки
                (если нажали на ,,цена,, отображать слово ,,цена,, в h1)</p>
            <div><button onClick={clickButton}>О нас!</button></div>
            <div><button onClick={clickButton}>Цена!</button></div>
            <div><button onClick={clickButton}>Главная страница!</button></div>
            <h1>{stringValue}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task41;