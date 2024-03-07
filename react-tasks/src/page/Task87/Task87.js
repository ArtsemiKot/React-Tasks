import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.changeColor) {
        case 'changeState':
            return action.value
        case 'returnState':
            return state
    }
}
function Task87() {

    const [state, dispatch] = useReducer(reducer, 'black')

    return (
        <>
            <h1>Задача 87</h1>
            <p>Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
                кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
                кнопке.
            </p>
            <p style={{ color: state }}>Привет</p>
            <button onClick={(e) => dispatch({ changeColor: 'changeState', value: e.target.textContent })}>red</button>
            <button onClick={(e) => dispatch({ changeColor: 'changeState', value: e.target.textContent })}>blue</button>
            <button onClick={(e) => dispatch({ changeColor: 'changeState', value: e.target.textContent })}>purple</button>
            <button onClick={(e) => dispatch({ changeColor: 'changeState', value: e.target.textContent })}>pink</button>
            <button onClick={(e) => dispatch({ changeColor: 'returnstate'})}>Back</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task87;