var name = 'test'
var age = 23

var legalDrinkingAge = 21

if (age >= legalDrinkingAge && name === 'Zach') {
  console.log("You can drink!")
  console.log("Be safe!")
} else if (age >= legalDrinkingAge) {
  if(name === 'Bertrand') {
    console.log("you are dead, but have a cold one.")
  } else {
    console.log("whatever")
  }
} else {
  console.log("really sorry")
}



