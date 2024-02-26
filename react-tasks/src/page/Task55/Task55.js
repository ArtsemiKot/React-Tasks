import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task55() {
    const [text, setText] = useState()

    function keepValue(e) {
        setText(e.target.value)
    }


    function checkEmail() {
        try {
            if (!/^[\w\]+@+[a-z]+\.[a-z]{2,4}$/g.test(text)) {
                throw new Error('Ошибка почты');
            }
            return true
        } catch (error) {
            return error.message;
        }
    }

    return (
        <>
            <h1>Задача 55</h1>
            <p>Форма с использованием useState: Создайте компонент текстового поля, который
                позволяет пользователю вводить текст и проверять введенный текст регулярным
                выражением на почту по нажатию на кнопку. В заголовок отобразить true если
                введенная строка удовлетворяет регулярному выражению и false в противном
                случае.
            </p>
            <input onChange={keepValue}></input>
            <button onClick={checkEmail}>Click me</button>
            <h1>{checkEmail()}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task55;