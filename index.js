function generateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const pointsPerDemerit = 1;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit) * pointsPerDemerit;
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.1;

    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        tax,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}


