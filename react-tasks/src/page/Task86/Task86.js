import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.text) {
        case 'changeState':
            return action.value
    }
}
function Task86() {

    const [state, dispatch] = useReducer(reducer, '')

    return (
        <>
            <h1>Задача 86</h1>
            <p>Создайте компонент отслеживающий вводимое значение в input. Результат
                отображать в h1
            </p>
            <p>{state}</p>
            <input onChange={(e) => dispatch({ text: 'changeState', value: e.target.value })}></input>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task86;