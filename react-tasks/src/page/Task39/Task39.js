import { Link } from "react-router-dom";
import { useState } from 'react';
function Task39() {
    const [inp, setInp] = useState({})

    function showValue(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    function chek() {
        console.log(inp);
    }
    return (
        <>
            <h1>Задача№39</h1>
            <p>Получить значение из 2 инпутов и отобразить это в консоль по клику на кнопку (одним useState)</p>
            <input name='Значение 1' onChange={showValue}></input>
            <input name='Значение 2' onChange={showValue}></input>
            <button onClick={chek}>Нажми</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task39;