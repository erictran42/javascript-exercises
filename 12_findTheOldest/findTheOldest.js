const findTheOldest = function(array) {
    return array.reduce( (oldest, current) => {
        let oldestAge = findAge(oldest);
        age = findAge(current);
        return oldestAge < age ? current : oldest;
    });
};

function findAge(obj) {
    const currentYear = 2024;
    if (!obj.yearOfDeath) {
        obj.yearOfDeath = currentYear;
    }
    let age = obj.yearOfDeath - obj.yearOfBirth;
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
