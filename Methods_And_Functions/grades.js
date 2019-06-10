function grades(studentGrade) {
    let grade = "";
    if (studentGrade >= 2.00 && studentGrade <= 2.99) {
        grade = "Fail";
    } else if (studentGrade >= 3.00 && studentGrade <= 3.49) {
        grade = "Poor";
    } else if (studentGrade >= 3.50 && studentGrade <= 4.49) {
        grade = "Good";
    } else if (studentGrade >= 4.50 && studentGrade <= 5.49) {
        grade = "Very good";
    } else if (studentGrade >= 5.50 && studentGrade <= 6.00) {
        grade = "Excellent";
    }
    return grade;
}

console.log(grades(3.33));
