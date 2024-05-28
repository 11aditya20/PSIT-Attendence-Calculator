function calculateAttendance() {
    const totalLectures = document.getElementById('total-lectures').value;
    const totalAbsent = document.getElementById('total-absent').value;
    const totalDelegation = document.getElementById('total-delegation').value;
    
    if (totalLectures === '' || totalAbsent === '' || totalDelegation === '') {
        alert('Please fill in all fields');
        return;
    }

    const totalLecturesNum = parseFloat(totalLectures);
    const totalAbsentNum = parseFloat(totalAbsent);
    const totalDelegationNum = parseFloat(totalDelegation);

    if (isNaN(totalLecturesNum) || isNaN(totalAbsentNum) || isNaN(totalDelegationNum)) {
        alert('Please enter valid numbers');
        return;
    }

    const percentage = 100 - (((totalAbsentNum - totalDelegationNum) / totalLecturesNum) * 100);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Attendance Percentage: ${percentage.toFixed(2)}%`;
}

function calculateMissedLectures() {
    const currentAttendance = document.getElementById('current-attendance').value;
    const targetAttendance = document.getElementById('target-attendance').value;
    const futureLectures = document.getElementById('future-lectures').value;

    if (currentAttendance === '' || targetAttendance === '' || futureLectures === '') {
        alert('Please fill in all fields');
        return;
    }

    const currentAttendanceNum = parseFloat(currentAttendance);
    const targetAttendanceNum = parseFloat(targetAttendance);
    const futureLecturesNum = parseFloat(futureLectures);

    if (isNaN(currentAttendanceNum) || isNaN(targetAttendanceNum) || isNaN(futureLecturesNum)) {
        alert('Please enter valid numbers');
        return;
    }

    const currentAttendanceFraction = currentAttendanceNum / 100;
    const targetAttendanceFraction = targetAttendanceNum / 100;

    const currentLecturesAttended = currentAttendanceFraction * futureLecturesNum;
    const futureLecturesAttended = targetAttendanceFraction * futureLecturesNum;
    const lecturesToMiss = currentLecturesAttended - futureLecturesAttended;

    const missResultElement = document.getElementById('miss-result');
    missResultElement.textContent = `You can miss ${lecturesToMiss.toFixed(2)} more lectures to achieve ${targetAttendanceNum.toFixed(2)}% attendance.`;
}
