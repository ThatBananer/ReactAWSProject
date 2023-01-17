import {AssignmentHeader, StudentAssignment, StudentProfile} from "./SupportingClasses"

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


 let placeHolderStudents = [student1,student2,student3,student4,student5,student6,student7,student8,student9];

 
 export  {placeHolderStudents, studentAssignments};
 
