import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { task80Context } from '../../Context/Context';

function Task80() {

    const data = useContext(task80Context)
    return (
        <>
            <h1>Задача 80</h1>
            <p>Используйте useContext, чтобы сохранять данные о текущем пользователе.
                Отобразите эту информацию в компоненте, используя контекст
            </p>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task80;