import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import axios from 'axios';

function Task79() {
    const [array, setArray] = useState(['1', '2', '3'])
    const [inp, setInp] = useState('')


    function changeValue(event) {
        setInp(event.target.value)
    }
    const addTask = useCallback(function () {
        setArray([...array, inp])
    },[array, inp])

    const deleteTask = useCallback(function (e) {
        const arrayFiltered = array.filter((el) => el !== e.target.id)
        setArray(arrayFiltered)
    },[array, inp])
    return (
        <>
            <h1>Задача 79</h1>
            <p>Создайте компонент, который позволяет пользователю добавлять и удалять
                элементы из списка. Используйте useCallback, чтобы оптимизировать функции
                добавления и удаления элементов.
            </p>
            <div>
                {array.map((el) => {
                    return <p>{el}<button id={el} onClick={deleteTask}>delete</button></p>
                })}
            </div>
            <input onChange={changeValue}></input>
            <button onClick={addTask}>add</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task79;