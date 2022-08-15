import React from "react";

const students = [
    {
        id: 1,    // map()함수를 쓰기위해 key값을 활용해야 된다. id를 지정해주었다.
        name: "아무개"
    },
    {
        id: 2,
        name: "아무개2"
    },
    {
        id: 3,
        name: "아무개3"
    },
    {
        id: 4,
        name: "아무개4"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                // return <li key={student.id}>{student.name}</li>
                // return <li key={`student-id-${student.id}`}>{student.name}</li>  //포맷팅된 문자열을 키값으로 사용가능
                return <li key={index}>{student.name}</li>           // 인덱스로도 지정 가능
            })}
        </ul>
    );
}

export default AttendanceBook;