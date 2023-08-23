function shuffleStudentsIntoGroups(studentList, minGroupSize) {
    // Shuffle the array of students
    for (let i = studentList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [studentList[i], studentList[j]] = [studentList[j], studentList[i]];
    }

    const numStudents = studentList.length;
    const numGroups = Math.floor(numStudents / minGroupSize);
    let remainingStudents = numStudents % minGroupSize;

    const groups = [];
    let start = 0;

    for (let i = 0; i < numGroups; i++) {
        let groupSize = minGroupSize;
        if (remainingStudents > 0) {
            groupSize++;
            remainingStudents--;
        }

        const group = studentList.slice(start, start + groupSize);
        groups.push(group);
        start += groupSize;
    }

    return groups;
}

// Example usage
const students = ['Genesis', 'Kaylee', 'Jessica', 'William', 'Clifford', 'Gerald', 'Ryan', 'Nani', 'David', 'Kyle', 'Daniel', 'Jeremiah', 'Luis'];
const minGroupSize = 2;
const groups = shuffleStudentsIntoGroups(students, minGroupSize);

groups.forEach((group, index) => {
    console.log(`Group ${index + 1}: ${group.join(', ')}`);
});