import { Link } from "react-router-dom";
import { useState } from "react";
function Task23() {
    const [inp, setInp] = useState('')
    function changeInput(e) {
        setInp(e.target.value)
    }

    function isChekMail() {
        try {
            if (!/^[\w\]+@+[a-z]+\.[a-z]{2,4}$/g.test(inp)) {
                throw new Error('Ошибка почты');
            }
            console.log(true);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Задача№23</h1>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
                данные из input и проверить вводимую строку на почту. Результат отображать в
                консоль</p>
            <input onChange={changeInput}></input>
            <button onClick={isChekMail}>Click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task23;