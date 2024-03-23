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

