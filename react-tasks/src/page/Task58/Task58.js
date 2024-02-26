import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Task58() {
    const [inp, inpValue] = useState('')
    const [answer, setAnswer] = useState('')
    function getValue(event) {
        inpValue(event.target.value)
    }
    async function getAnswer() {
        const result = await axios.get('https://yesno.wtf/api')
        setAnswer(result.data.answer)
    }
    return (
        <>
            <h1>Задача 58</h1>
            <p>Форма с отправкой запроса к API с использованием useState: Создайте
                компонент, который предоставляет input, button. После ввода данных в input по
                нажатию кнопку необходимо отправлять асинхронный запрос к API
                https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
                Отобразить результат в заголовок. Таким образом у вас получается игра в
                предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
                заданный вопрос.
            </p>
            <input onChange={getValue}></input>
            <button onClick={getAnswer}>Получить</button>
            <p>Вопрос-{inp}-Ответ-{answer}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task58;