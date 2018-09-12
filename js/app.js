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