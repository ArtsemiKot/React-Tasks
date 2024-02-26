import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task54() {
    const [array, setArray] = useState(['sleep', 'read', 'eat'])
    const [inp, setInp] = useState('')


    function changeValue(event) {
        setInp(event.target.value)
    }
    function addTask() {
        setArray([...array, inp])
    }
    function deleteTask(e) {
        const arrayFiltered = array.filter((el) => el !== e.target.id)
        setArray(arrayFiltered)
    }


    return (
        <>
            <h1>Задача 54</h1>
            <p>Список задач с использованием useState: Создайте компонент списка задач,
                который позволяет пользователю добавлять и удалять задачи из списка.
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

export default Task54;