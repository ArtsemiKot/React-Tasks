import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
function Task32() {
    const [inp, setInp] = useState('')
    function getData(e) {
        setInp(e.target.value);
    }

    useEffect(() => {
        console.log(inp);;
    }, [inp])
    return (
        <>
            <h1>Задача№32</h1>
            <p>Форма ввода с использованием useState и useEffect: Создайте компонент React, который содержит форму с полем ввода. Используйте
                хук useState для хранения значения введенного текста и хук useEffect для отслеживания изменений этого значения. При каждом
                изменении значения в поле ввода, выводить его в консоль с помощью useEffect</p>
            <input onChange={getData} value={inp}></input>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task32;