import { Link } from 'react-router-dom'
import { useReducer } from 'react'

function reducer(state, action) {
    switch (action) {
        case 'plus':
            return state + 1;
        case 'minus':
            return state - 1;
        case 'zero':
            return 0;
        default:
            throw new Error();
    }
}
function Task84() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h1>Задача 84</h1>
            <p>Создайте компонент счетчика, который может увеличивать, уменьшать,
                сбрасывать значение при нажатии на соответствующие кнопки.
            </p>
            <h1>{state}</h1>
            <button onClick={() => dispatch('plus')}>+1</button>
            <button onClick={() => dispatch('zero')}>Zero</button>
            <button onClick={() => dispatch('minus')}>-1</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task84;