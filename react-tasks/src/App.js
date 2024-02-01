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
import Task12 from "./page/Task12/Task12";
import Task13 from "./page/Task13/Task13";
import Task14 from "./page/Task14/Task14";
import Task15 from "./page/Task15/Task15";
import Task16 from "./page/Task16/Task16";
import Task17 from "./page/Task17/Task17";
import Task18 from "./page/Task18/Task18";
import Task19 from "./page/Task19/Task19";
import Task20 from "./page/Task20/Task20";
import Task21 from "./page/Task21/Task21";
import Task22 from "./page/Task22/Task22";
import Task23 from "./page/Task23/Task23";
import Task24 from "./page/Task24/Task24";
import Task25 from "./page/Task25/Task25";
import Task26 from "./page/Task26/Task26";
import Task27 from "./page/Task27/Task27";
import Task28 from "./page/Task28/Task28";

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
        <Route path='/task12' element={<Task12></Task12>}></Route>
        <Route path='/task13' element={<Task13></Task13>}></Route>
        <Route path='/task14' element={<Task14></Task14>}></Route>
        <Route path='/task15' element={<Task15></Task15>}></Route>
        <Route path='/task16' element={<Task16></Task16>}></Route>
        <Route path='/task17' element={<Task17></Task17>}></Route>
        <Route path='/task18' element={<Task18></Task18>}></Route>
        <Route path='/task19' element={<Task19></Task19>}></Route>
        <Route path='/task20' element={<Task20></Task20>}></Route>
        <Route path='/task21' element={<Task21></Task21>}></Route>
        <Route path='/task22' element={<Task22></Task22>}></Route>
        <Route path='/task23' element={<Task23></Task23>}></Route>
        <Route path='/task24' element={<Task24></Task24>}></Route>
        <Route path='/task25' element={<Task25></Task25>}></Route>
        <Route path='/task26' element={<Task26></Task26>}></Route>
        <Route path='/task27' element={<Task27></Task27>}></Route>
        <Route path='/task28' element={<Task28></Task28>}></Route>
      </Routes>
    </>
  );
}

export default App;
