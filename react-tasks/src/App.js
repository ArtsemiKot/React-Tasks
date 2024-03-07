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
import Task29 from "./page/Task29/Task29";
import Task30 from "./page/Task30/Task30";
import Task31 from "./page/Task31/Task31";
import Task32 from "./page/Task32/Task32";
import Task33 from "./page/Task33/Task33";
import Task34 from "./page/Task34/Task34";
import Task35 from "./page/Task35/Task35";
import Task36 from "./page/Task36/Task36";
import Task37 from "./page/Task37/Task37";
import Task38 from "./page/Task38/Task38";
import Task39 from "./page/Task39/Task39";
import Task40 from "./page/Task40/Task40";
import Task41 from "./page/Task41/Task41";
import Task42 from "./page/Task42/Task42";
import Task43 from "./page/Task43/Task43";
import Task44 from "./page/Task44/Task44";
import Task45 from "./page/Task45/Task45";
import Task46 from "./page/Task46/Task46";
import Task47 from "./page/Task47/Task47";
import Task48 from "./page/Task48/Task48";
import Task49 from "./page/Task49/Task49";
import Task50 from "./page/Task50/Task50";
import Task51 from "./page/Task51/Task51";
import Task52 from "./page/Task52/Task52";
import Task53 from "./page/Task53/Task53";
import Task54 from "./page/Task54/Task54";
import Task55 from "./page/Task55/Task55";
import Task56 from "./page/Task56/Task56";
import Task57 from "./page/Task57/Task57";
import Task58 from "./page/Task58/Task58";
import Task59 from "./page/Task59/Task59";
import Task60 from "./page/Task60/Task60";
import Task61 from "./page/Task61/Task61";
import Task62 from "./page/Task62/Task62";
import Task63 from "./page/Task63/Task63";
import Task64 from "./page/Task64/Task64";
import Task65 from "./page/Task65/Task65";
import Task66 from "./page/Task66/Task66";
import Task67 from "./page/Task67/Task67";
import Task68 from "./page/Task68/Task68";
import Task69 from "./page/Task69/Task69";
import Task70 from "./page/Task70/Task70";
import Task71 from "./page/Task71/Task71";
import Task72 from "./page/Task72/Task72";
import Task73 from "./page/Task73/Task73";
import Task74 from "./page/Task74/Task74";
import Task75 from "./page/Task75/Task75";
import Task76 from "./page/Task76/Task76";
import Task77 from "./page/Task77/Task77";
import Task78 from "./page/Task78/Task78";
import Task79 from "./page/Task79/Task79";
import Task80 from "./page/Task80/Task80";
import Task81 from "./page/Task81/Task81";
import Task82 from "./page/Task82/Task82";
import Task83 from "./page/Task83/Task83";
import Task84 from "./page/Task84/Task84";
import Task85 from "./page/Task85/Task85";
import { task80Context } from "./Context/Context";
import { task81Context } from "./Context/Context";
import { task82Context } from "./Context/Context";
import { task83Context } from "./Context/Context";
import { useState } from "react";
import Task86 from "./page/Task86/Task86";
import Task87 from "./page/Task87/Task87";
import Task88 from "./page/Task88/Task88";

function App() {

  const obj = {
    id: 1,
    name: 'Artsemi',
    email: 'kot@mail.ru'
  }

  const [language, setLanguage] = useState('rus')
  const languages = { language, setLanguage }

  const wether = {
    id: 1,
    temp: '82%',
    humidity: 'Умеренная',
    speedWind: '12м/c'
  }

  const [flag, setFlag] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState('white');
  const [backgroundBlack, setBackgroundBlack] = useState('black');

  return (
    <>
      <task80Context.Provider value={obj}>
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
          <Route path='/task29' element={<Task29></Task29>}></Route>
          <Route path='/task30' element={<Task30></Task30>}></Route>
          <Route path='/task31' element={<Task31></Task31>}></Route>
          <Route path='/task32' element={<Task32></Task32>}></Route>
          <Route path='/task33' element={<Task33></Task33>}></Route>
          <Route path='/task34' element={<Task34></Task34>}></Route>
          <Route path='/task35' element={<Task35></Task35>}></Route>
          <Route path='/task36' element={<Task36></Task36>}></Route>
          <Route path='/task37' element={<Task37></Task37>}></Route>
          <Route path='/task38' element={<Task38></Task38>}></Route>
          <Route path='/task39' element={<Task39></Task39>}></Route>
          <Route path='/task40' element={<Task40></Task40>}></Route>
          <Route path='/task41' element={<Task41></Task41>}></Route>
          <Route path='/task42' element={<Task42></Task42>}></Route>
          <Route path='/task43' element={<Task43></Task43>}></Route>
          <Route path='/task44' element={<Task44></Task44>}></Route>
          <Route path='/task45' element={<Task45></Task45>}></Route>
          <Route path='/task46' element={<Task46></Task46>}></Route>
          <Route path='/task47' element={<Task47></Task47>}></Route>
          <Route path='/task48' element={<Task48></Task48>}></Route>
          <Route path='/task49' element={<Task49></Task49>}></Route>
          <Route path='/task50' element={<Task50></Task50>}></Route>
          <Route path='/task51' element={<Task51></Task51>}></Route>
          <Route path='/task52' element={<Task52></Task52>}></Route>
          <Route path='/task53' element={<Task53></Task53>}></Route>
          <Route path='/task54' element={<Task54></Task54>}></Route>
          <Route path='/task55' element={<Task55></Task55>}></Route>
          <Route path='/task56' element={<Task56></Task56>}></Route>
          <Route path='/task57' element={<Task57></Task57>}></Route>
          <Route path='/task58' element={<Task58></Task58>}></Route>
          <Route path='/task59' element={<Task59></Task59>}></Route>
          <Route path='/task60' element={<Task60></Task60>}></Route>
          <Route path='/task61' element={<Task61></Task61>}></Route>
          <Route path='/task62' element={<Task62></Task62>}></Route>
          <Route path='/task63' element={<Task63></Task63>}></Route>
          <Route path='/task64' element={<Task64></Task64>}></Route>
          <Route path='/task65' element={<Task65></Task65>}></Route>
          <Route path='/task66' element={<Task66></Task66>}></Route>
          <Route path='/task67' element={<Task67></Task67>}></Route>
          <Route path='/task68' element={<Task68></Task68>}></Route>
          <Route path='/task69' element={<Task69></Task69>}></Route>
          <Route path='/task70' element={<Task70></Task70>}></Route>
          <Route path='/task71' element={<Task71></Task71>}></Route>
          <Route path='/task72' element={<Task72></Task72>}></Route>
          <Route path='/task73' element={<Task73></Task73>}></Route>
          <Route path='/task74' element={<Task74></Task74>}></Route>
          <Route path='/task75' element={<Task75></Task75>}></Route>
          <Route path='/task76' element={<Task76></Task76>}></Route>
          <Route path='/task77' element={<Task77></Task77>}></Route>
          <Route path='/task78' element={<Task78></Task78>}></Route>
          <Route path='/task79' element={<Task79></Task79>}></Route>
          <Route path='/task80' element={<Task80></Task80>}></Route>
          <Route path='/task84' element={<Task84></Task84>}></Route>
          <Route path='/task85' element={<Task85></Task85>}></Route>
          <Route path='/task86' element={<Task86></Task86>}></Route>
          <Route path='/task87' element={<Task87></Task87>}></Route>
          <Route path='/task88' element={<Task88></Task88>}></Route>
        </Routes>
      </task80Context.Provider>
      <task81Context.Provider value={languages}>
        <Routes>
          <Route path='/task81' element={<Task81></Task81>}></Route>
        </Routes>
      </task81Context.Provider>
      <task82Context.Provider value={wether}>
        <Routes>
          <Route path='/task82' element={<Task82></Task82>}></Route>
        </Routes>
      </task82Context.Provider>
      <task83Context.Provider value={{ flag, setFlag, backgroundWhite, setBackgroundWhite, backgroundBlack, setBackgroundBlack}}>
        <Routes>
          <Route path='/task83' element={<Task83></Task83>}></Route>
        </Routes>
      </task83Context.Provider>
    </>
  );
}

export default App;
