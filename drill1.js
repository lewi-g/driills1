function whoAmI(name, age) {
	var yearOfBirth;
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	console.log(`I was born in ${yearOfBirth}`)
}

function yearOfBirth(age){
	return 2016 - age;
}

whoAmI("chris","29");
