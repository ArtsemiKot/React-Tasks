import { Link } from "react-router-dom";
import { useState } from 'react';
function Task42() {
const [math, setMath] = useState(0)
function doMath(e){
setMath(e.target.value)
}

function clickButton() {
    setMath(eval(math))
}
    return (
        <>
            <h1>Задача№42</h1>
            <p>Сделайте инпут в который вводится математическое выражение
                по клику на кнопку посчитать результат мат выражения (eval()) и отобразить  результат в h1</p>
            <hr></hr>
            <input onChange={doMath}></input>
            <div><button onClick={clickButton}>Нажми</button></div>
            <h1>{math}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task42;