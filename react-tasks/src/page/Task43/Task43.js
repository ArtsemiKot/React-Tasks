import { Link } from "react-router-dom";
import { useState } from 'react';
function Task43() {
    const [value, setValue] = useState(0)

    function doCountPlus() {
        setValue(value + 1)
    }

    function doCountMinus() {
        setValue(value - 1)
    }
    function doReset() {
        setValue(0)
    }
    return (
        <>
            <h1>Задача№43</h1>
            <p>Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на кнопку "+1"
                значение счётчика увеличивается на 1, при нажатии на кнопку "-1" значение
                счётчика уменьшается на 1, а при нажатии на кнопку "Сброс" значение счётчика
                обнуляется. Значение счетчика отображать в h1</p>
            <button onClick={doCountPlus}>+1</button>
            <button onClick={doCountMinus}>-1</button>
            <button onClick={doReset}>Сброс</button>
            <h1>{value}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task43;