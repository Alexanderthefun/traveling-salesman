// Traveling-Salesperson
// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [23, 55, 15, 29]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0;
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const mile of weeklyMiles) {
    totalMiles += mile
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length;
// Output the average miles and the total miles to the console
console.log(`I average ${weeklyMiles} miles each week.`);
console.log(`I have driven a total of ${totalMiles} miles.`);