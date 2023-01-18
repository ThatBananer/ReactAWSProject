import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import StudentReadOut from './Pages/StudentReadOut'
import AssignmentGrades from './Pages/AssignmentGrades';
import StudentSurveys from './Pages/StudentSurveys'

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";







class StudentProfile {
  constructor(firstName, lastName, grade, gbPrediction, schalPrediction, studentAssignments, id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.gbPrediction = gbPrediction;
    this.schalPrediction = schalPrediction;
    this.studentAssignments = studentAssignments;
    this.id = id;
  }

  getFullName() {
    return this.firstName +  " " + this.lastName;
  }
  getGrade(){
    return this.grade;
  }
  getGBPrediction(){
    return  this.gbPrediction;
  }
  getSchalPrediction(){
    return this.schalPrediction;    
  }
  getStudentAssignments(){
    return [this.studentAssignments];
  }
}

class StudentAssignment {
  constructor ( assignmentTitle, maxPoints, givenPoints, id ) {
    this.assignmentTitle = assignmentTitle;
    this.maxPoints = maxPoints;
    this.givenPoints = givenPoints;
    this.id = id;    
  }
}

class AssignmentHeader {
  constructor (assignmentTitle ,id) {
    this.assignmentsTitle = assignmentTitle;
    this. id = id
  }
}


function StudentGradeItem(props) {
  return <>
  <div className="studentListItem">
      <div className="headerTitle">{props.name}</div>
      <div className="userPic"> {props.grade} </div>
      <div className="userPic"> {props.schalPrediction} </div>
      <div className="userPic"> {props.GBPrediction} </div>
  </div>
  </>;
}






function ListGradesByDivs(props) {
  return <>
  <div className="assGrades" > {props.input}</div>
  </>
}

function StudentGradeReadOut(props) {
  return <>
  <div className="Sheader">
      <div className="headerTitle">{props.name}</div>
      <div className="userPic"> {props.grade} </div>
      {props.assignments.map((grade) => <ListGradesByDivs key={ grade.id } input={ 100 * (grade.givenPoints / grade.maxPoints) } />)}
      
  </div>
  </>;
}



//-----------------------------PLACE HOLDER DATA--------------------------------------------------------------------------

let ass1 = new StudentAssignment('hw1', 10, 9, 1)
let ass2 = new StudentAssignment('hw2', 10, 7.5, 2)
let ass3 = new StudentAssignment('exam1', 20, 16, 3)
let ass4 = new StudentAssignment('hw3', 10, 8, 4)
let ass5 = new StudentAssignment('hw4', 10, 9, 5)
let ass6 = new StudentAssignment('hw5', 10, 9, 5)
let asses = [ass1, ass2, ass3, ass4, ass5, ass6]

let stuAss1 = new AssignmentHeader("HW 1", 1);
let stuAss2 = new AssignmentHeader("HW 2", 2);
let stuAss3 = new AssignmentHeader("Exam 1", 3);
let stuAss4 = new AssignmentHeader("HW 3", 4);
let stuAss5 = new AssignmentHeader("HW 4", 5);
let stuAss6 = new AssignmentHeader("HW 5", 6);

let studentAssignments = [stuAss1,  stuAss2, stuAss3, stuAss4, stuAss5, stuAss6]


let student1 = new StudentProfile("1", "lastName", ""+"grade", "gbPrediction", "schalPrediction", asses, 1);
let student2 = new StudentProfile("2", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 2);
let student3 = new StudentProfile("3", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 3);
let student4 = new StudentProfile("4", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 4);
let student5 = new StudentProfile("5", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 5);
let student6 = new StudentProfile("6", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 6);
let student7 = new StudentProfile("7", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 7);
let student8 = new StudentProfile("8", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 8);
let student9 = new StudentProfile("9", "lastName", "grade", "gbPrediction", "schalPrediction", asses, 9);


var placeHolderStudents = [student1,student2,student3,student4,student5,student6,student7,student8,student9];


//------------------------------------------------------------------------------------------------------------------------







function App() {

  let Component
    switch (window.location.pathname){
        case"/":
            Component = Dashboard;
            break
            case "/StudentReadOut":
                Component = StudentReadOut;
                break
                case "/AssignmentGrades":
                    Component = AssignmentGrades;
                    break
                    case "/StudentSurveys":
                      Component = StudentSurveys;
    }

  return (
        <div className="wrapper">
            <div className="sidebar">
            <img src="images/logo.PNG" alt="" width="17" height="17"/>
                <ul>
                    
                    <li><a href="/"><i className="mStats"></i>
                        <div className="mItem">
                            <img src="images/dashBlue.PNG" width="17" height="17"/>
                             Class Stats
                        </div>
                        
                    </a></li>
                    <li><a href="/StudentReadOut"><i className="mStudentList"></i>
                        <div >
                            <img src="images/studentListBlue.PNG" alt="" width="17" height="17"/>
                            Student List
                        </div>
                        
                    </a></li>
                    <li><a href="/AssignmentGrades"><i className="mGrades"></i>
                        <div className="mItem">
                            <img src="images/gradeBookBlue.PNG"  width="17" height="17"/>
                                            
                            Add Grades
                        </div>
                    </a></li>
                    <li><a href="/StudentSurveys"><i className="mSurveys"></i>
                        <div className="mItem">
                            <img src="images/surveysBlue.PNG"  width="17" height="17"/>
                                            
                            Student Surveys
                        </div>
                    </a></li>
                    <div className="spacer"></div>

                </ul> 
                <div className="social_media">
                    <ul>
                        <li><a href="#"><i className="fas fa-map-pin"></i><img src="images/backBlue.PNG"  width="17" height="17"/></a></li>
                    </ul>
              </div>
            </div>
            <div className="main_content">
                <div className="header">
                    <div className="headerTitle">CLASS ID Stats Dashboard</div>
                    <div className="userPic"> Pic icon here </div>
                </div>  
                
                <div className="">
                <Component/>
                </div>
            </div>
        </div>
  );
}




export default App;
