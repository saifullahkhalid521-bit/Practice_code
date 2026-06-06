import {students_info} from "./data.js";

console.log(students_info);

const studentBody = document.querySelector(".student-body");

const displayStudents = (students) => {
  studentBody.innerHTML = "";

  students_info.forEach((student) => {
    
    const result = student.marks >= 40 ? "Pass" : "Fail";

    studentBody.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>${result}</td>
      </tr>
    `;
  });
}

displayStudents();

const std_id = document.querySelector("#std-ID");
const std_name = document.querySelector("#std-name");
const std_marks = document.querySelector("#std-marks");
const Add_btn = document.querySelector(".Add_Student");

const addStudent = () => {

  const newStudent = {
    id: std_id.value,
    name: std_name.value,
    marks: Number(std_marks.value)
  };

  students_info.push(newStudent);

  displayStudents();
}

Add_btn.addEventListener("click" , addStudent);

//Search Students
const std_name_in = document.querySelector(".std-name-in");
const sech_btn = document.querySelector(".sech");

const searchStudent = () => {
  const stdValue = std_name_in.value.toLowerCase();
  const result = students_info.find((student) => {
    return stdValue === student.name.toLowerCase();
  });

  if(result){
  const marks_result = result.marks >= 40 ?"Pass":"Fail";

  studentBody.innerHTML = "";
  studentBody.innerHTML += `
  <tr>
    <td>${result.id}</td>
    <td>${result.name}</td>
    <td>${result.marks}</td>
    <td>${marks_result}</td>
  </tr>
  `;
  }else {
    alert("Student not found!");
  }
};

sech_btn.addEventListener("click" , searchStudent);