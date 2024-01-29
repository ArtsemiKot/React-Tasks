import { Link } from "react-router-dom";

function Task9() {
    const arr = ['dfdf', 'sddfsdg', 'sdfsdfs']
    const result = arr.filter(el => el.length < 10)
    return (
        <>
            <h1>Задача№9</h1>
            <p>Создайте компонент, который принимает массив строк и фильтрует строки,
                оставляя только те, длина которых не превышает 10 символов.</p>
            <p>Результат:{result}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task9;