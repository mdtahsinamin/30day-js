const year = 2059;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year':", year);
} else {
  console.log("Not Leap year':", year);
}
