import { useState } from "react";
import { Link } from "react-router-dom";

function Task90() {
    const [flage, setFlage] = useState(false)
    const [name, setName] = useState('')
    function changeInput(e) {
        setName(e.target.value)
    }
    function sayHello() {
        setFlage(true)
    }
    return (
        <>
            <h1>Задача 90</h1>
            <p>Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
                поле и нажатии на кнопку, компонент должен отображать приветственное сообщение с
                именем, введенным пользователем
            </p>
            <input placeholder='Ведите Ваше имя' onChange={changeInput}></input>
            <button onClick={sayHello}>Привет</button>
            <p>Сообщение о приветсвии:{flage ? `Привет ${name}` : null}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task90;