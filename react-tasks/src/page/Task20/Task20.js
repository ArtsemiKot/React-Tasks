import { Link } from "react-router-dom";

function Task20() {
    const arr = ['red', 'white', 'green', 'black']
    function array(e) {
        console.log(e.target = `${arr[Math.round(Math.random()) * 3]}`);
    }
    return (
        <>
            <h1>Задача№20</h1>
            <p>Создайте компонент с массивом элементов и кнопкой. При каждом клике на
                кнопку выбирайте случайный элемент из массива и отображайте его в консоль.</p>
            <button onClick={array}>click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task20;