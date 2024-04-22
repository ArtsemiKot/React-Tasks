import { useState } from "react";
import { Link } from "react-router-dom";

function Task89() {
    const [num, setNum ] = useState(0)

    function changeCounter() {
        setNum(num + 1)
    }
    return (
        <>
            <h1>Задача 89</h1>
            <p>Создайте компонент, который отображает кнопку и счетчик. При каждом нажатии
                на кнопку значение счетчика должно увеличиваться на
            </p>
            <p>Увеличение значения счетчика:{num}</p>
            <p>Нажми на +1</p>
            <button onClick={changeCounter}>+1</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task89;