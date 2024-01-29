import { Link } from "react-router-dom";

function Task6() {
    const arr = [{
        title: 'mov1',
        description: 'description1'
    }, {
        title: 'mov2',
        description: 'description2'
    }, {
        title: 'mov3',
        description: 'description3'
    }]

    const new_arr = arr.map((el) => {
       return <div><h1>{el.title}</h1><p>{el.description}</p></div>
    })

    return (
        <>
            <h1>Задача№6</h1>
            <p>6. на входе массив из объектов.
                каждый объект содержит title с названием фильма и  description с кратким описанием фильма. В h1 отобразить каждый title, в p - description
            </p>
            <p>Объект:{JSON.stringify(arr)}</p>
            <p>Результат:{new_arr}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task6;