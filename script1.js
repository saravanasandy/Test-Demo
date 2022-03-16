// var a = 10;
// var b = 20;
// var linebreak ="<br/>";

// function check(){
//     console.log("Answer is : "+ " "+( a + b));
//     console.log(linebreak);
//     console.log("Answer is : "+ " "+(a*b));
// return a,b,linebreak;

// }

// check(a,b,linebreak);

// var student =[{name : "john",marks:30},{name : "alice",marks: 40},{name: "bob",marks:50}];
// var res = (student.map((num)=>num+20));
// console.log(res);

// var arr=[11,12,13,14];
// var res=arr.reduce((sum,cv)=>sum+cv,110);
// console.log(res);
//expected output:50

//print the sum of the array  

//step 01: use for loop
//step 02:declare a sum=0 variable
//setp 03:arr[i]=arr[i]+sum;
//step 04:print sum

//reduce 
//reduce the entire array into single values 
//syntax:arrayname.reduce(function(acc,cv));

//acc:accumulator:initial values
//cv:current element:array element 

//2 cases are there 

//if sum=0 is not given (if initial value is not given)
//arrayname[0] will be given to sum (first element) 

//if sum=0 is given then sum will be 0






class car {
    constructor(color,brand){
        
        this.color = color;
        this.brand = brand;
    }

    BrandName(){
        return `I Have ${this.brand} car`;

    }

    BrandColor(){
        return `I Have  ${this.color} car`;
    }
}
class mahendra extends car{
    // constructor(brand){
        // super(brand);
    // }
    constructor(color){
        super(color);
    }

    display(){
        return this.BrandColor();
    }
}
var child = new mahendra("Royal Blue");
console.log(child.display());
































