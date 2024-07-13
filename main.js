///////////////////////FUNCTION///////////////////
//ANONYMOUS FUNCTION
var message = function () {
    console.log("Hello World");
};
message();
//WITH PARAMETERS
//WITH STRING
var seniorsStudent = function (name) {
    console.log("SeniorStudent name is ", name);
};
seniorsStudent("ASFA QASIM");
//WITH NUMBERS
var isEven = function (x) {
    if (x % 2 === 0) {
        console.log("it is an even number");
    }
    else {
        console.log("It is not an even number ");
    }
};
isEven(7);
isEven(8);
//TYPES OF PARAMETER
//OPTIONAL PARAMETERS
var teacher = function (name, slot, timing) {
    console.log("Our teacher is", name, "his slot", slot);
};
teacher("HUMZA AHMED ALVI", "thursday");
//DEFAULT
var seniorTA = function (name, slot) {
    if (slot === void 0) { slot = "thursday morning"; }
    console.log("Our seniorTA is", name, "her slot is", slot);
};
seniorTA("manahil jameel");
//REST PARAMETERS
var friend = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
};
friend("mutaiba", true, "asfa", true, "mibah", true, "others", false);
