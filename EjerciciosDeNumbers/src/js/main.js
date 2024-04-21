/*
Declaramos las variables que usaremos en los siguientes ejercicios
*/
let numberOne = 10;
let numberTwo = 5;

//Exercise 1
console.groupCollapsed("Exercise 1");

console.warn(numberOne + numberTwo);
console.groupEnd();

// Exercise 2
console.groupCollapsed("Exercise 2");

console.warn(numberOne - numberTwo);
console.groupEnd();

// Exercise 3
console.groupCollapsed("Exercise 3");

console.warn(numberOne * numberTwo);
console.groupEnd();

// Exercise 4
console.groupCollapsed("Exercise 4");

console.warn(numberOne / numberTwo);
console.groupEnd();

// Exercise 5
console.groupCollapsed("Exercise 5");

console.warn(numberOne % numberTwo);
console.groupEnd();

// Exercise 6
console.groupCollapsed("Exercise 6");

let aleatoryNumber = parseInt(Math.random() * (10 - 1 + 1) + 1);

console.warn(aleatoryNumber);
console.groupEnd();

// Exercise 7
console.groupCollapsed("Exercise 7");

console.warn(Math.pow(numberOne, numberTwo));
console.groupEnd();

// Exercise 8
console.groupCollapsed("Exercise 8");

console.warn(Math.sqrt(numberOne));
console.groupEnd();

// Exercise 9
console.groupCollapsed("Exercise 9");

let celcius = 29;
let fahrenheit = 1.8 * 29 + 32;

console.warn(fahrenheit);
console.groupEnd();

// Exercise 10
console.groupCollapsed("Exercise 10");

let radius = 5;

console.warn(Math.PI * Math.pow(radius, 2));
console.groupEnd();

// Exercise 11
console.groupCollapsed("Exercise 11");

let fourSides = 10;

console.warn(fourSides * 4);
console.groupEnd();

// Exercise 12
console.groupCollapsed("Exercise 12");

console.warn((4 / 3) * Math.PI * Math.pow(10, 3));
console.groupEnd();

// Exercise 13
console.groupCollapsed("Exercise 13");

console.warn((numberTwo * numberTwo) / 2);
console.groupEnd();

// Exercise 14
console.groupCollapsed("Exercise 14");

let chartFive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.table(chartFive);
console.groupEnd();

// Exercise 15
console.groupCollapsed("Exercise 15");

console.warn(Math.max(3, 7, 2));
console.groupEnd();

// Exercise 16
console.groupCollapsed("Exercise 16");

console.warn(Math.min(10, 20, 5));
console.groupEnd();

// Exercise 17
console.groupCollapsed("Exercise 17");

console.warn((4 + 6 + 8) / 3);
console.groupEnd();

// Exercise 18
console.groupCollapsed("Exercise 18");

console.warn(5 * 4 * 3 * 2 * 1);
console.groupEnd();

// Exercise 19
console.groupCollapsed("Exercise 19");

console.warn(Math.round(3.6));
console.groupEnd();

// Exercise 20
console.groupCollapsed("Exercise 20");

let nine = 9;
function double(nine) {
  return nine * 2;
}

console.warn(double(9));
console.groupEnd();

// Exercise 21
console.groupCollapsed("Exercise 21");

let four = 4;
function triple(four) {
  return four * 3;
}

console.warn(triple(4));
console.groupEnd();

// Exercise 22
console.groupCollapsed("Exercise 22");

console.warn(6 ** 2);
console.groupEnd();

// Exercise 23
console.groupCollapsed("Exercise 23");

console.warn(3 ** 3);
console.groupEnd();

// Exercise 24
console.groupCollapsed("Exercise 24");

console.warn(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
console.groupEnd();

// Exercise 25
console.groupCollapsed("Exercise 25");

console.warn(50 - 25);
console.groupEnd();

// Exercise 26
console.groupCollapsed("Exercise 26");

console.warn(7 * 9);
console.groupEnd();

// Exercise 27
console.groupCollapsed("Exercise 27");

console.warn(144 / 12);
console.groupEnd();

// Exercise 28
console.groupCollapsed("Exercise 28");

console.warn(17 % 4);
console.groupEnd();

// Exercise 29
console.groupCollapsed("Exercise 29");

aleatoryNumber = parseInt(Math.random() * (30 - 20 + 1) + 20);

console.warn(aleatoryNumber);
console.groupEnd();

// Exercise 30
console.groupCollapsed("Exercise 30");

console.warn(Math.pow(2, 8));
console.groupEnd();

// Exercise 31
console.groupCollapsed("Exercise 31");

console.warn(Math.sqrt(144));
console.groupEnd();

// Exercise 32
console.groupCollapsed("Exercise 32");

celcius = 100;
fahrenheit = 1.8 * 100 + 32;

console.warn(fahrenheit);
console.groupEnd();

// Exercise 33
console.groupCollapsed("Exercise 33");

console.warn(numberOne * numberTwo);
console.groupEnd();

// Exercise 34
console.groupCollapsed("Exercise 34");

console.warn(Math.PI * (6 + 6));
console.groupEnd();

// Exercise 35
console.groupCollapsed("Exercise 35");

console.warn(4 ** 3);
console.groupEnd();

// Exercise 36
console.groupCollapsed("Exercise 36");

console.warn((numberOne * 8) / 2);
console.groupEnd();

// Exercise 37
console.groupCollapsed("Exercise 37");

console.warn(((10 + 6) * 4) / 2);
console.groupEnd();

// Exercise 38
console.groupCollapsed("Exercise 38");

let chartEight = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

console.table(chartEight);
console.groupEnd();

// Exercise 39
console.groupCollapsed("Exercise 39");

console.warn(Math.max(15, 20, 25));
console.groupEnd();

// Exercise 40
console.groupCollapsed("Exercise 40");

console.warn(Math.min(50, 75, 100));
console.groupEnd();

// Exercise 41
console.groupCollapsed("Exercise 41");

console.warn((7 + 9 + 12) / 2);
console.groupEnd();

// Exercise 42
console.groupCollapsed("Exercise 42");

console.warn(7 * 6 * 5 * 4 * 3 * 2 * 1);
console.groupEnd();

// Exercise 43
console.groupCollapsed("Exercise 43");

console.warn(Math.round(7.9));
console.groupEnd();

// Exercise 44
console.groupCollapsed("Exercise 44");

let fifteen = 15;
function double(fifteen) {
  return fifteen * 2;
}

console.warn(double(15));
console.groupEnd();

// Exercise 45
console.groupCollapsed("Exercise 45");

let six = 6;
function triple(six) {
  return six * 3;
}

console.warn(triple(6));
console.groupEnd();

// Exercise 46
console.groupCollapsed("Exercise 46");

console.warn(8 ** 2);
console.groupEnd();

// Exercise 47
console.groupCollapsed("Exercise 47");

console.warn(4 ** 3);
console.groupEnd();

// Exercise 48
console.groupCollapsed("Exercise 48");

console.warn(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15);
console.groupEnd();

// Exercise 49
console.groupCollapsed("Exercise 49");

console.warn(100 - 55);
console.groupEnd();

// Exercise 50
console.groupCollapsed("Exercise 50");

console.warn(6 * 8);
console.groupEnd();

// Exercise 51
console.groupCollapsed("Exercise 51");

console.warn(225 / 15);
console.groupEnd();

// Exercise 52
console.groupCollapsed("Exercise 52");

console.warn(20 % 7);
console.groupEnd();

// Exercise 53
console.groupCollapsed("Exercise 53");

aleatoryNumber = parseInt(Math.random() * (50 - 40 + 1) + 40);

console.warn(aleatoryNumber);
console.groupEnd();

// Exercise 54
console.groupCollapsed("Exercise 54");

console.warn(Math.pow(3, 4));
console.groupEnd();

// Exercise 55
console.groupCollapsed("Exercise 55");

console.warn(Math.sqrt(169));
console.groupEnd();

// Exercise 56
console.groupCollapsed("Exercise 56");

celcius = 80;
fahrenheit = 1.8 * 80 + 32;

console.warn(fahrenheit);
console.groupEnd();

// Exercise 57
console.groupCollapsed("Exercise 57");

console.warn(12 * 8);
console.groupEnd();

// Exercise 58
console.groupCollapsed("Exercise 58");

console.warn(Math.PI * (8 + 8));
console.groupEnd();

// Exercise 59
console.groupCollapsed("Exercise 59");

console.warn(5 ** 3);
console.groupEnd();

// Exercise 60
console.groupCollapsed("Exercise 60");

console.warn((16 * 12) / 2);
console.groupEnd();

// Exercise 61
console.groupCollapsed("Exercise 61");

console.warn(((12 + 8) * 6) / 2);
console.groupEnd();

// Exercise 62
console.groupCollapsed("Exercise 62");

let chartNine = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];

console.table(chartNine);
console.groupEnd();

// Exercise 63
console.groupCollapsed("Exercise 63");

console.warn(Math.max(25, 30, 35));
console.groupEnd();

// Exercise 64
console.groupCollapsed("Exercise 64");

console.warn(Math.min(80, 95, 110));
console.groupEnd();

// Exercise 65
console.groupCollapsed("Exercise 65");

console.warn((8 + 10 + 14) / 3);
console.groupEnd();

// Exercise 66
console.groupCollapsed("Exercise 66");

console.warn(8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
console.groupEnd();

// Exercise 67
console.groupCollapsed("Exercise 67");

console.warn(Math.round(9.2));
console.groupEnd();

// Exercise 68
console.groupCollapsed("Exercise 68");

let eighteen = 18;
function double(eighteen) {
  return eighteen * 2;
}

console.warn(double(18));
console.groupEnd();

// Exercise 69
console.groupCollapsed("Exercise 69");

let seven = 7;
function triple(seven) {
  return seven * 3;
}

console.warn(triple(7));
console.groupEnd();

// Exercise 70
console.groupCollapsed("Exercise 70");

console.warn(10 ** 2);
console.groupEnd();

// Exercise 71
console.groupCollapsed("Exercise 71");

console.warn(5 ** 3);
console.groupEnd();

// Exercise 72
console.groupCollapsed("Exercise 72");

console.warn(
  1 +
    2 +
    3 +
    4 +
    5 +
    6 +
    7 +
    8 +
    9 +
    10 +
    11 +
    12 +
    13 +
    14 +
    15 +
    16 +
    17 +
    18 +
    19 +
    20
);
console.groupEnd();

// Exercise 73
console.groupCollapsed("Exercise 73");

console.warn(200 - 75);
console.groupEnd();

// Exercise 74
console.groupCollapsed("Exercise 74");

console.warn(9 * 11);
console.groupEnd();

// Exercise 75
console.groupCollapsed("Exercise 75");

console.warn(300 / 25);
console.groupEnd();

// Exercise 76
console.groupCollapsed("Exercise 76");

console.warn(30 % 9);
console.groupEnd();

// Exercise 77
console.groupCollapsed("Exercise 77");

aleatoryNumber = parseInt(Math.random() * (70 - 60 + 1) + 60);

console.warn(aleatoryNumber);
console.groupEnd();

// Exercise 78
console.groupCollapsed("Exercise 78");

console.warn(Math.pow(4, 5));
console.groupEnd();

// Exercise 79
console.groupCollapsed("Exercise 79");

console.warn(Math.sqrt(196));
console.groupEnd();

// Exercise 80
console.groupCollapsed("Exercise 80");

celcius = 120;
fahrenheit = 1.8 * 120 + 32;

console.warn(fahrenheit);
console.groupEnd();

// Exercise 81
console.groupCollapsed("Exercise 81");

console.warn(15 * numberOne);
console.groupEnd();

// Exercise 82
console.groupCollapsed("Exercise 82");

console.warn(Math.PI * (10 + 10));
console.groupEnd();

// Exercise 83
console.groupCollapsed("Exercise 83");

console.warn(6 ** 3);
console.groupEnd();

// Exercise 84
console.groupCollapsed("Exercise 84");

console.warn((18 * 14) / 2);
console.groupEnd();

// Exercise 85
console.groupCollapsed("Exercise 85");

console.warn(((15 + 10) * 8) / 2);
console.groupEnd();

// Exercise 86
console.groupCollapsed("Exercise 86");

let chartTen = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.table(chartTen);
console.groupEnd();

// Exercise 87
console.groupCollapsed("Exercise 87");

console.warn(Math.max(35, 40, 45));
console.groupEnd();

// Exercise 88
console.groupCollapsed("Exercise 88");

console.warn(Math.min(90, 105, 120));
console.groupEnd();

// Exercise 89
console.groupCollapsed("Exercise 89");

console.warn((9 + 11 + 15) / 3);
console.groupEnd();

// Exercise 90
console.groupCollapsed("Exercise 90");

console.warn(9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
console.groupEnd();

// Exercise 91
console.groupCollapsed("Exercise 91");

console.warn(Math.round(10.8));
console.groupEnd();

// Exercise 92
console.groupCollapsed("Exercise 92");

let twentyOne = 21;
function double(twentyOne) {
  return twentyOne * 2;
}

console.warn(double(21));
console.groupEnd();

// Exercise 93
console.groupCollapsed("Exercise 93");

let eight = 8;
function triple(eight) {
  return eight * 3;
}

console.warn(triple(8));
console.groupEnd();

// Exercise 94
console.groupCollapsed("Exercise 94");

console.warn(12 ** 2);
console.groupEnd();

// Exercise 95
console.groupCollapsed("Exercise 95");

console.warn(6 ** 3);
console.groupEnd();

// Exercise 96
console.groupCollapsed("Exercise 96");

console.error(
  1 +
    2 +
    3 +
    4 +
    5 +
    6 +
    7 +
    8 +
    9 +
    10 +
    11 +
    12 +
    13 +
    14 +
    15 +
    16 +
    17 +
    18 +
    19 +
    20 +
    21 +
    22 +
    23 +
    24 +
    25
);
console.groupEnd();
