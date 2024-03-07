import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.inp) {
        case 'getInputValue':
            return action.value
    }
}
function Task88() {

    const [inp1, dispatch1] = useReducer(reducer, '')
    const [inp2, dispatch2] = useReducer(reducer, '')
    return (
        <>
            <h1>Задача 88</h1>
            <p>Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
                сумму 2 input. По клику на кнопку отображать результат в консоль
            </p>
            <input onChange={(e) => dispatch1({ inp: 'getInputValue', value: e.target.value })}></input>
            <input onChange={(e) => dispatch2({ inp: 'getInputValue', value: e.target.value })}></input>
            <button onClick={() => console.log(+inp1 + +inp2)}>ClisckSum</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task88;