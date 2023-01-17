
class AssignmentHeader {
    constructor (assignmentTitle ,id) {
      this.assignmentsTitle = assignmentTitle;
      this. id = id
    }
}
  
  
  
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
  
export {AssignmentHeader, StudentAssignment, StudentProfile};