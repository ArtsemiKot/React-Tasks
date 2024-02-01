import { Link } from "react-router-dom";
import style from './style.module.css'
function Task13() {
    const arrEl = ['kot', 1, 'art', 2]
    const arr = ['red', 'black', 'green']
    const result = arrEl.map((el) => {
        const random =arr[Math.floor(Math.random() * 3)];
        return (
            <p className={style[random]}>{el}</p>
        );
    })
    return (
        <>
            <h1>Задача№13</h1>
            <p>Создайте компонент, который принимает статичный массив элементов и
                присваивает каждому элементу случайный цвет фона. Выведите элементы с их
                цветами на странице.</p>
                <div>{result}</div>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task13;