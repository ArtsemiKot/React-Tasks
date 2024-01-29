import { Routes, Route } from "react-router-dom";
import Home from './page/Home/Home'
import Task1 from "./page/Task1/Task1";
import Task2 from "./page/Task2/Task2";
import Task3 from "./page/Task3/Task3";
import Task4 from './page/Task4/Task4'
import Task5 from './page/Task5/Task5'
import Task6 from './page/Task6/Task6'
import Task7 from './page/Task7/Task7'
import Task8 from "./page/Task8/Task8";
import Task9 from "./page/Task9/Task9";
import Task10 from "./page/Task10/Task10";
import Task11 from "./page/Task11/Task11";
import Task15 from "./page/Task15/Task15";
import Task16 from "./page/Task16/Task16";
import Task17 from "./page/Task17/Task17";
import Task18 from "./page/Task18/Task18";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/task1' element={<Task1></Task1>}></Route>
        <Route path='/task2' element={<Task2></Task2>}></Route>
        <Route path='/task3' element={<Task3></Task3>}></Route>
        <Route path='/task4' element={<Task4></Task4>}></Route>
        <Route path='/task5' element={<Task5></Task5>}></Route>
        <Route path='/task6' element={<Task6></Task6>}></Route>
        <Route path='/task7' element={<Task7></Task7>}></Route>
        <Route path='/task8' element={<Task8></Task8>}></Route>
        <Route path='/task9' element={<Task9></Task9>}></Route>
        <Route path='/task10' element={<Task10></Task10>}></Route>
        <Route path='/task11' element={<Task11></Task11>}></Route>
        <Route path='/task15' element={<Task15></Task15>}></Route>
        <Route path='/task16' element={<Task16></Task16>}></Route>
        <Route path='/task17' element={<Task17></Task17>}></Route>
        <Route path='/task18' element={<Task18></Task18>}></Route>
      </Routes>
    </>
  );
}

export default App;
