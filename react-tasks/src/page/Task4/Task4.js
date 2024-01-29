import { Link } from "react-router-dom";
import img1 from './assets/1.png'
function Task4() {
    const arr = ['art', 'kot', 'age']
    const new_arr = arr.map((el) => <div><p>{el}</p><img alt="img" src={img1} /></div>)
    return (
        <>
            <h1>Задача№4</h1>
            <p>4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
                массива, а также картинку. Каждая итерация будет возвращать {"<div><p>el</p><img /></div>"}
            </p>
            <p>Массив:{arr}</p>
            <div>Результат:{new_arr}</div>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task4;