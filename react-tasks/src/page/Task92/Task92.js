import { Link } from "react-router-dom";

function Task92() {
    const arrColor = ['red', 'white', 'yellow']
    function changeColor(e) {
        e.target.style = `color:${arrColor[Math.round(Math.random()) * 2]}`
    }

    return (
        <>
            <h1>Задача 92</h1>
            <p>Создайте компонент с кнопкой "Изменить цвет текста". При нажатии на кнопку
                текст внутри компонента должен менять цвет рандомно.
            </p>
            <button onClick={changeColor}>Изменить цвет текста</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task92;