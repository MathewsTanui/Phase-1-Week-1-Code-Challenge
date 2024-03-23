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