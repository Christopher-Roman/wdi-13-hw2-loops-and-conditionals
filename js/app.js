console.log('It is working!');

// Easy Going

for(let i = 1; i <= 20; i++){
	console.log(i)
}

// Get Even

for(let i = 0; i <= 200; i+=2){
	if(i % 2 === 0){
		console.log(i);
	}
}

// Excited Kitten

for(let i = 1; i <= 20; i++){
	if(i % 2 === 0){
		const response = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
		const catResponse = response[Math.floor(response.length * Math.random())]
		console.log(catResponse)
	} else {
		console.log("Love me, pet me! HSSSSSS!");
	}
}

// Fizz Buzz

for(let i = 1; i <= 100; i++){
	console.log(i)
	if(i % 3 === 0 && i % 5 === 0){
		console.log("FizzBuzz");
	} else if(i % 3 === 0){
		console.log("Fizz")
	} else if(i % 5 === 0){
		console.log("Buzz")
	} 
}

// Getting to Know You

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];


shahzad[0] = "Gameboy";
daniel[1] = daniel[1] + 1;
ryan[2] = "Gotham City";
reuben.pop(2);
reuben.push("Chicago");
//jim.pop(2);
//jim.push("Chicago", "Orlando", "Charlotte");
jim.splice(2, 1, "Chicago", "Orlando", "Charlotte");
jim.splice(4);

// Yell at the Ninja Turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let i = 0; i < ninjaTurtles.length; i++){
	console.log(ninjaTurtles[i].toUpperCase());
}

// Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

const kristynsShoe = [];

kristynsShoe.push(kristynsCloset[0]);

console.log(kristynsShoe);

thomsCloset[2].push(kristynsShoe[0])

console.log(thomsCloset[2]);

// Thom's Outifts

console.log(`Thom will be wearing ${thomsCloset[0][2]} with a comfortable pair of ${thomsCloset[1][2]} and what will really pull the outfit together is ${thomsCloset[2][3]}`)

console.log(`Thom will be wearing ${thomsCloset[0][1]} with a comfortable pair of ${thomsCloset[1][1]} and what will really pull the outfit together is ${thomsCloset[2][2]}`)

console.log(`Thom will be wearing ${thomsCloset[0][0]} with a comfortable pair of ${thomsCloset[1][0]} and what will really pull the outfit together is ${thomsCloset[2][1]}`)

// Kristyn's Outfits

console.log(`Kristyn is doing laundry so she is wearing ${kristynsCloset[0]} and ${kristynsCloset[2]} and ${kristynsCloset[3]} and ${kristynsCloset[4]}.`)

console.log(`Kristyn is doing laundry so she is wearing ${kristynsCloset[0]} and ${kristynsCloset[1]} and ${kristynsCloset[3]} and ${kristynsCloset[5]}.`)

console.log(`Kristyn is doing laundry so she is wearing ${kristynsCloset[3]} and ${kristynsCloset[5]} and ${kristynsCloset[1]}.`)




