import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodata from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButton_function from './chapter_08/ConfirmButton_function';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

// 3
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 4
// 시계
// const root = createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

// 5
// 댓글창
// const root = createRoot(document.getElementById('root'));
// root.render(
//  <React.StrictMode>
//     <CommentList/>
//  </React.StrictMode>
// );


//6
// state
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <NotificationList/>
// );

//7
// hook
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <Accommodata/>    
// );

//8
// 클릭 이벤트
// const root = createRoot(document.getElementById('root'));
// root.render(
//     // <ConfirmButton/>
//     <ConfirmButton_function/>
// );

//9
// 로그인, 로그아웃 버튼
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <LandingPage/>
// );

//10
// map() 함수 활용
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <AttendanceBook/>
// );

//11
// 사용자 정보 입력받기
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <SignUp/>
// );

//12
// 화씨, 섭씨
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <Calculator/>
// );

//13
// composition 활용
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <ProfileCard/>
// );

//14
// Context 테마 변경
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <DarkOrLight/>
// );

//15
// styled component 활용
const root = createRoot(document.getElementById('root'));
root.render(
    <Blocks/>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
