// Code your solution in this file
function findMatching(drivers, match){
  let matchingDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === match.toLowerCase()
  });
  return matchingDrivers;
}
