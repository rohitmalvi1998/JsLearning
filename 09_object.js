 /*
 Syntax of object creation
    let objectName={
    property:value
    property:value
    property:value

    }
    */

let personRM={
   empID:12134,
    
    designer:"TL",
    
    city : "Pune",
    state:"MH" ,
    isMarried:true,
    show: function(arg1){
        console.log(arg1);
        console.log(" Function Inside object!!");
    } 
}

   
    //console.log(personRM);
    //console.log(typeof personRM);
    //console.log(`Emp ID: ${personRM.empID}`);//Dot Notation
    
    //console.log(`Emp City: ${personRM.city}`);//Dot Notation
    personRM.city="NewYork";// syntax for updating the property of an object
    personRM.state="USA"
    delete personRM.isMarried; // syntax for Deleting the property of an object

    console.log(personRM);
   //how to create an empty object
   let bank={

   }
   bank.bankName="BNY";
   bank.bankCode=1234;
   console.log(bank);

   const array=[];
   array[0]=0
   array[1]=1
   array[2]=2
   console.log(array);
let bank2={
    bankName1:"BNY",
    bankCode1:1234,
    address:{
    houseNumber:101,
    street:"Killa Road",
    city:"Nagpur",
    state:"Maharashtra",
    telephone:1234,
    getAddress:function(){
        console.log(`Bank Address: ${this.street}, ${this.city}`);
    }
},
    empName:["Rohit", "Ronny","Shruti"]

}
console.log(bank2.address);

/*

let address={
    houseNumber:101,
    street:"Killa Road",
    city:"Nagpur",
    state:"Maharashtra"
}
*/
personRM.show("Hello");
/*
console.log(bank2.address.telephone);
console.log(bank2.address.city);
delete bank2.address.telephone;
console.log(bank2.address);
console.log(bank2.empName[2]);
bank2.empName.push("Seema");
bank2.empName.push("steve");
console.log(bank2.empName);

bank2.empName.pop();
console.log(bank2.empName);
console.log(bank2.empName[bank2.empName.length-3]);
bank2.empName.unshift("Bunny");

console.log(bank2.empName);
*/
console.log(bank2.address.getAddress("hello"));

