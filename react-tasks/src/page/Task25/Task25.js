import { Link } from "react-router-dom";
import { useState } from "react";
function Task25() {
    const [flage, setFlage] = useState(false)
    const [inp, setInp] = useState('')
    function changeInput(e) {
        setInp(e.target.value)
    }

    function sayHi() {
        setFlage(true)
    }
    return (
        <>
            <h1>Задача№25</h1>
            <p>Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
                поле и нажатии на кнопку, компонент должен отображать приветственное
                сообщение с именем, введенным пользователем
            </p>
            <input onChange={changeInput}></input>
            <button onClick={sayHi}>Hello</button>
            <p>Результат:{flage ? inp : null}</p>
            <Link to='/'>Главная страница</Link>
        </>
    );
}

export default Task25;