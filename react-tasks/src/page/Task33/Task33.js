import { Link } from "react-router-dom";
import { useState } from 'react';
function Task33() {
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
            <h1>Задача№33</h1>
            <p> есть кнопка с названием ,,поздороваться,,.
                по клику на кнопку твоя задача отобразить в h1 ,,привет,,. при повторном клике на кнопку ,,поздороваться,, убирать ,,привет,, из h1 </p>
            <button onClick={clickButton}>Поздороваться</button>
            <h1>{flag ? 'Hello' : null}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task33;