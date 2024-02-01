import { Link } from "react-router-dom";
function Task14() {
    const arr = [1, 1, 'art', 'kot', 'ffc', 'ffc']
    const result = arr.reduce((sum, el)=>{
        if(sum.includes(el)){
            return sum
        }
        return [...sum, el]
    },[])
    return (
        <>
            <h1>Задача№14</h1>
            <p>Реализуйте компонент, который принимает статичный массив и отображает
                только уникальные значения, убирая повторяющиеся.</p>
                <div>Массив:{arr}</div>
                <div>Результат:{result}</div>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task14;