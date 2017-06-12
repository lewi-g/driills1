function whoAmI(name, age) {
	if ( name === undefined || age === undefined) { 
		console.log("Arguments not valid"); 
	} else {
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	console.log("I was born in " + yearOfBirth(age));
	}
}

function yearOfBirth(age){
	throw new Error("Age cannot be negative");
	return 2016 - age;
}

whoAmI();
