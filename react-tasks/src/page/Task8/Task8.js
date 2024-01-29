import { Link } from "react-router-dom";

function Task8() {
    const arr = [1, 2, 3];
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return (
        <>
            <h1>Задача№8</h1>
            <p>2. Реализуйте компонент, который принимает статичный массив чисел и выводит
                минимальное и максимальное значения на странице.</p>
            <p>Минимальное значение массива:{min}</p>
            <p>Максимальное значение массива:{max}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task8;