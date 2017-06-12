function whoAmI(name, age) {
	
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	console.log("I was born in " + yearOfBirth(age));
}

function yearOfBirth(age){
	throw new Error("Age cannot be negative");
	return 2016 - age;
}

whoAmI("chris",-29);
