// Task: 1

/*
 * print day
 */

const dayArray = 7;

switch (true) {
  case dayArray === 1:
    console.log("Sunday");
    break;
  case dayArray === 2:
    console.log("Monday");
    break;
  case dayArray === 3:
    console.log("Tuesday");
    break;
  case dayArray === 4:
    console.log("Wednesday");
    break;

  case dayArray === 5:
    console.log("Thursday");
    break;
  case dayArray === 6:
    console.log("Friday");
    break;
  case dayArray === 7:
    console.log("Sunday");
    break;

  default:
    break;
}

// Task: 2

/*
 * print grade
 */

const score = 40;

switch (true) {
  case score >= 80:
    console.log("A", score);

    break;
  case score >= 70 && score < 79:
    console.log("B", score);
    break;
  case score >= 60 && score < 69:
    console.log("C", score);
    break;
  case score >= 50 && score < 59:
    console.log("D", score);
    break;
  case score >= 40 && score < 49:
    console.log("F", score);
    break;

  default:
    break;
}
