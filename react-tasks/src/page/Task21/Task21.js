import { Link } from "react-router-dom";
import { useState } from "react";

function Task21() {
    const [inp, setInp] = useState('')
    function changeStateInput(e) {
        setInp(e.target.value)
    }
    return (
        <>
            <h1>Задача№21</h1>
            <p>Создайте компонент с полем ввода и параграфом. При вводе данных в input
                отображать вводимое значение в параграф текущей страницы
            </p>
            <input onChange={changeStateInput}></input>
            <p>Результат:{inp}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task21;