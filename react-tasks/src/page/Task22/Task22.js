import { Link } from "react-router-dom";
import { useState } from "react";
function Task22() {
    const [inp, setInp] = useState('')
    function changeInput(e) {
        setInp(e.target.value)
    }

    function isPalindrom() {
        if (inp === inp.split('').reverse().join('')) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    return (
        <>
            <h1>PЗадача№22</h1>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
                данные из input и проверить вводимую строку на палиндром. Результат
                отображать в консоль</p>
            <input onChange={changeInput}></input>
            <button onClick={isPalindrom}>Click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task22;