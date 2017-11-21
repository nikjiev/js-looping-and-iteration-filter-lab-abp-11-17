// Code your solution in this file
function findMatching(drivers, match){
  let matchingDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === match.toLowerCase()
  });
  return matchingDrivers;
}

function fuzzyMatch(drivers, match) {
  let matchingDrivers = drivers.filter(function(driver){
    if (driver[0] === match [0]) {
      return match
    }
  });
  return matchingDrivers;
}
