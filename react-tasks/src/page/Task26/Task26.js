import { Link } from "react-router-dom";
import { useState } from "react";
function Task26() {
    const [flage, setFlage] = useState(false)

    function hideText() {
        if (flage) {
            setFlage(false)
        } else {
            setFlage(true)
        }
    }
    return (
        <>
            <h1>Задача№26</h1>
            <p>Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
                текст должен появляться или исчезать
            </p>
            <button onClick={hideText}>Показать/Скрыть текст</button>
            <p>{flage ? 'Скрытый текст' : null}</p>
            <Link to='/'>Главная страница</Link>
        </>
    );
}

export default Task26;