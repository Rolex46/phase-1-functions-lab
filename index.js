// Code your solution in this file!

const Hq = 42;

function distanceFromHqInBlocks(block) {
    let distance = Math.abs(block- Hq); 
    return distance; 
    }
distanceFromHqInBlocks(43)

function distanceFromHqInFeet(destination) {
    let distance = Math.abs(destination - Hq) * 264;
    return distance;
}
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start);
    return distance * 264
}
distanceTravelledInFeet(43, 48);

function calculatesFarePrice(start, destination) {
    let distance =Math.abs(destination - start) * 264;
    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        let difference = distance - 400;
        return difference * 0.02
    }
    else if (distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
calculatesFarePrice(50, 58);

