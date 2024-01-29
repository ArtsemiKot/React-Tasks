import { Link } from "react-router-dom";

function Task16() {
   function show(e){
    console.log(e.target.value);
   }

    return (
        <>
            <h1>Задача№16</h1>
            <p>По событию изменения input отображать в консоль каждое вводимое значение</p>
            <input onChange={show}></input>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task16;