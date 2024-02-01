import { Link } from "react-router-dom";

function Task19() {
    const arr = [10, 20, 30];

    function result() {
        console.log(
            arr.reduce((sum, el) => {
                return sum + el;
            }, 0)
        );
    }

    return (
        <>
            <h1>Задача№19</h1>
            <p>Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
                вычислите и выведите сумму всех чисел из массива в консоль.</p>
            <p>Массив: {arr}</p>
            <button onClick={result}>Сlick me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task19;