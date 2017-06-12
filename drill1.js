function whoAmI(name, age) {
	if ( name === undefined || age === undefined || typeof age != 'number' || typeof name != 'string') { 
		console.log("Arguments not valid"); 
	} else {
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	console.log("I was born in " + yearOfBirth(age));
	}
}

function yearOfBirth(age){
	if(age < 0) {
	throw new Error("Age cannot be negative");
	} else {
	return 2016 - age;
	}
}

whoAmI('Chris', 29);
