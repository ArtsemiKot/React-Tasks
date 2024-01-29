import { Link } from "react-router-dom";

function Task7() {

    const arr = [-1, 1, -2, 2, -3, 3]
    const result = arr.map((el) =>
        el > 0 ? `${el} положительный` : `${el} отрицательное`)
    return (
        <>
            <h1>Задача№7</h1>
            <p>1. Создайте компонент, который принимает статичный массив чисел и выводит в
                параграф информацию о положительности и отрицательности числа.</p>
            <p>Массив: {arr}</p>
            <p>Результат:{result}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task7;