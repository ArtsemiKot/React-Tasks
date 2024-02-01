import { Link } from "react-router-dom";
function Task12() {
    const arr = [1, 2, 3, 4, 5, 6]
    const result = arr.map((el) => {
        if (el % 2 === 0) {
            return (<p>{el} четное</p>)
        } else {
            return (<p>{el} нечетное</p>)
        }
    })
    return (
        <>
            <h1>Задача№12</h1>
            <p>Создайте компонент, который принимает статичный массив чисел и выводит
                информацию о том, является ли каждое число четным или нечетным.</p>
            <div>{result}</div>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task12;