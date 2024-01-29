import { Link } from "react-router-dom";

function Task17() {
    function chek(e) {
        if (e.key === 'Enter') {
            console.log(e.target.value === e.target.value.split('').reverse().join('') ? true : false);
        }
    }
    return (
        <>
            <h1>Задача№17</h1>
            <p>По нажатию на enter в input onKeyDown выявлять является ли введенное слово
                палиндромом. Результат проверки отобразить в консоль</p>
            <input onKeyDown={chek}></input>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task17;