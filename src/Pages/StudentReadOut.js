import {placeHolderStudents} from "../PlaceHolderData"
import '../App.css';


export default function StudentReadOut(){
    return <><StudentGradeItemList/></>
}

function StudentGradeItem(props) {
    return <>
    <div className="Sheader">
        <div className="headerTitle">{props.name}</div>
        <div className="userPic"> {props.grade} </div>
        <div className="userPic"> {props.schalPrediction} </div>
        <div className="userPic"> {props.GBPrediction} </div>
    </div>
    </>;
  }
  
  function StudentGradeItemList() {
    return (
      <>     
          {placeHolderStudents.map((student) => <StudentGradeItem key={student.id} name={student.firstName + " " + student.lastName} grade={"##"} schalPrediction={"##"} GBPrediction={"##"}/>)}
      </>
    );
  }