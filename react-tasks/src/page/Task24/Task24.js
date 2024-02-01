import { Link } from "react-router-dom";
import { useState } from "react";
function Task24() {
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')
    function valueInput1(e) {
        setInp1(e.target.value)
    }
    function valueInput2(e) {
        setInp2(e.target.value)
    }

    function isChekMail() {
        try {
            if (inp1 !== inp2) {
                throw new Error('Значения не равны');
            }
            console.log(true);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Задача№24</h1>
            <p>Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
                данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
                Результат отображать в консоль
            </p>
            <input onChange={valueInput1}></input>
            <input onChange={valueInput2}></input>
            <button onClick={isChekMail}>Click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task24;