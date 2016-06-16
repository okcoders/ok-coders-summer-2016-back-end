var name = 'Justin'
var age = 35
var legalDrinkingAge = 21
var ageDiff = age - legalDrinkingAge

if (age >= legalDrinkingAge) {
    console.log(name + " is old enough to drink!")
    console.log(name + " is " + ageDiff + " years older than the legal drinking age!")
}

else if (age < legalDrinkingAge) {
    console.log(name + " is not old enough to drink!")
    console.log(name + " is " + Math.abs(ageDiff) + " years younger than the legal drinking age!")
}

else {
    console.log("FAIL.")

}


