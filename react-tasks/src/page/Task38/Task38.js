import { Link } from "react-router-dom";
import { useState } from 'react';
function Task38() {
    const [inp, setInp] = useState('')
    function showValue(e) {
        setInp(e.target.value)
    }

    return (
        <>
            <h1>Задача№38</h1>
            <p>Отображать в h1 каждое введенное значение из input </p>
            <input onChange={showValue}></input>
            <h1>{inp}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task38;