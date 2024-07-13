///////////////////////FUNCTION///////////////////
//ANONYMOUS FUNCTION
let message = function () {
  console.log("Hello World");
};
message();
//WITH PARAMETERS
//WITH STRING
let seniorsStudent = function (name: string) {
  console.log("SeniorStudent name is ", name);
};
seniorsStudent("ASFA QASIM");
//WITH NUMBERS
let isEven = function (x: number) {
  if (x % 2 === 0) {
    console.log("it is an even number");
  } else {
    console.log("It is not an even number ");
  }
};
isEven(7);
isEven(8);
//TYPES OF PARAMETER
//1-OPTIONAL PARAMETERS
let teacher = function (name: string, slot: string, timing?: string) {
  console.log("Our teacher is", name, "his slot", slot);
};
teacher("HUMZA AHMED ALVI", "thursday");
//2-DEFAULT
let seniorTA = function (name: string, slot: string = "thursday morning") {
  console.log("Our seniorTA is", name, "her slot is", slot);
};
seniorTA("manahil jameel");
//2-REST PARAMETERS
let friend = function (...rest: any[]) {
  console.log(rest);
};
 friend("mutaiba",true,"asfa",true,"mibah",true,"others",false);
