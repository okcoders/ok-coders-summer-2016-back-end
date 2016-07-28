function genSleepTime() {
   return Math.random() * 20000
}

function sleep() {
  var sleepTime = genSleepTime()
  console.log("sleeping:", sleepTime)
  var stop = new Date().getTime()
  while(new Date().getTime() < stop + sleepTime) {
    ;
  }
}

module.exports = {
  sleep: sleep
}
