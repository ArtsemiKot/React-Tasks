import { Link } from "react-router-dom";

function Task3() {
    const arr = ['art@', 'kot@', 'chris']
    const new_arr = arr.filter((el) => el.includes('@'))
    return (
        <>
            <h1>Задача№3</h1>
            <p>3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
                странице только те строки, которые содержат знак @</p>
            <p>Массив числе:{arr}</p>
            <p>Новый массив чисел:{new_arr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task3;