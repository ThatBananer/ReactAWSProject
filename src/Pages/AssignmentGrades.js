import {placeHolderStudents, studentAssignments} from "../PlaceHolderData"
import '../App.css';

export default function AssignmentGrades() {
    return ( <>
    <StudentAssignmentHeader/>
    <StudentsGradeList/>
    </>)
}

function StudentAssignmentHeader() {
    return <>
    <div className="Sheader">
        <div className="headerTitle">Student Name</div>
        <div className="userPic"> Grade </div>
        {studentAssignments.map((assNames) => <ListGradesByDivs key={ assNames.id } input={assNames.assignmentsTitle} />)}
    </div>
    </>;
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

function StudentsGradeList() {
  
    return (
        <>     
        {placeHolderStudents.map((student) => <StudentGradeReadOut key={student.id} name={student.firstName + " " + student.lastName} grade={student.grade} assignments={student.studentAssignments}/>)}
        </>
    );
}

function ListGradesByDivs(props) {
    return <>
    <div className="assGrades" > {props.input}</div>
    </>
}