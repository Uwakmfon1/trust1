






// for practice
// function sayhello(){
//     let s =prompt("what is your name:");
//     let a=prompt("How old are you: ");
//     document.write("welcome "+ s +", i am  "+ a+" years old.")
// }
// sayhello("uwakmfon uwem udoh")


// function User(name, interests){
//     this.name=name;
//     this.interests=interests;   
// }
// let me =new User("uwakmfon",["cooking","swimming","reading","footballing"])
// console.log(me);
// let you=new User("udoh",["eating","jumping","dancing","cooking"]);
// console.log(you)


// function createPerson(name){
//     console.log(`i am ${name}`);
// }
// createPerson("uwakmfon uwem udoh");

// function message(from, text){
//     if(text===undefined){
//         text='no text given';
//     }
//     console.log(from +": "+ text);
// }

// message("uwak","this is a name");
// message("come to me")
// message("you see where u are?","it is a place of great sights")



// function checkage(age){
//     if(age>18){
//         return true;
//     }else{
//         confirm("do you have permission from your parents?")
//     }
// }

// let age =prompt("enter age",18);
// // if(checkage(age)){
// //     alert("access granted")
// // }else{
// //     alert("access denied")
// // }

// function showmovie(age){
//     if(!checkage(age)){
//         return;
//     }else{
//         alert("showing the movie")
//     }
// }

// let amount=prompt("Enter the amount you have: ");
// function dataRate(amount,data){
//     if(amount==200)
// }
// 



// let amount=prompt("enter amount:");
// switch(amount){
//     case "200":console.log("1gb");
//     break;
//     case "300":console.log("1.5gb");
//     break;
//     case "500":alert("2gb");
//     break;
//     case "700":alert("3.5gb");
// }


// let func = new Function("x","y","return x  + y;");

// function secondfunc(){
//     let result;
//     result= func(x,y);
//     alert(result);

// }
// let x=prompt("enter x:");
// let y=prompt("enter y:");
// // let z=prompt("enter z:");
// secondfunc();



// let str="good morning \"dear monica\" hope you are \"ok\"";
// alert(str);

// let person={};
// Object.defineProperty(person,"name",{
//     writable:true,
//     value:"uwakmfon"
// });
// console.log(person.name);
// person.name="greg";
// console.log(person.name);

// let func = function(x,y){
//     return x+y
// };
// function secondfunction(){
//     let result;
//     result=func(10,20);
//     console.log(result);
// }
//     secondfunction()

let arrowsum=(a)=>{
    return "goodmorning to you "+a;
};
alert(arrowsum("uwakmfon"));
let pin=prompt("enter your 4 digit pin to continue:");
function secondfunction(){
    if (pin.length===4){
        alert("welcome to the event");
        let choice=confirm("do you wish to continue \
         the sales?");
        if(true){
            alert("great choice");
        }
    }else{
        prompt("incorrect pin, try again")
    }
}
secondfunction();
