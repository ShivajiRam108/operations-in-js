   

  console.log("...............Q -1...............")
console.log(true  &&  false);                 //false

console.log("..............Q -2...........")
console.log(false  ||  true);                   //true


console.log(".................Q -3............")

const result = !true;
console.log(result);                          //false

console.log(".............Q -4..................")

console.log(10 > 5 && 3 < 4);                 //true

console.log("...........Q -5 ...............")

console.log(5 === 5 || 5 > 10);                //true

console.log(".............Q -6................")

const x = false;
const y = true;
console.log(x && y || !x);                     //true

console.log("...............Q -7..................")

console.log(!!(5 > 3));                        //true

console.log("..................Q -8.............")

const res = false || 0 || "hello";            //"hello"
console.log(res);

console.log('................. Q -9 ............')

console.log(null && "JavaScript");            //null

console.log("............Q -10..................")

console.log(true || false && false);         //true

console.log("...............Q -11..........")

console.log(!("hello" && 0));               //true

console.log("...............Q -12.................")

console.log(10 || 0 && 5);                  //10

console.log("...............Q -13............")

const resul = "abc" && "def" || "";        //def 
console.log(resul);

console.log("..........Q -14.............")

console.log(3 > 2 && 2 > 4);               //false

console.log("............. Q -15...............")

console.log(false || NaN || undefined);   //undefined

console.log("............Q -16..............")


var attendance = 80;
var a = (attendance>=75) ? "Eligible" : "Not Eligible";
console.log(`The student  is ${a}`)
    
console.log("...................Q -17....................")

var age = 16;
var a = age < 13 ? "Child":(age >= 13 && age <= 19) ? "Teenager" : "Adult" 
console.log(`He is a ${a}`)

console.log("...............Q -18.............")

var a = "Id";
var b = "Active";
var c =( a && b)? "Wellcome back" : "Please log in";
console.log(`Login status ${c}`)

        // (Or)
        
var i = true;
var r = true;
var  q =(i && r) ? "Wellcome back" : "Please lo in";
console.log(q);

console.log("............Q -19 ................")

var score= 70;
var a =(score>=90 )? "A Grade" : (score>=80) ? "B Grade" : (score>=70) ? " C Grade": "Fail";
console.log(`The student grade is ${a}`);

console.log(".......Q -20............")

var product = 100;
var a =(product>100)? "20%" : "10%" ;
console.log(` The Product  Discount is ${a}`);
