

//console.log('Hello ');
//console.log('I like girls');

//window.alert('DEI GAY!!');

//document.getElementById("myID").textContent= 'gommale!';
//document.getElementById("myP").textContent= 'summa sonen da kochikathe..';

let name = "Thibaan Raj";
let phone_no = "0102752152";
let price1 =20.77;
let gender="LELAKI"
let username;

const PI=3.1452;
let radius;
let circumference;


//console.log(`your number is ${age}`);
document.getElementById("myID").textContent=`your name is ${name} `;
document.getElementById("myP").textContent= `your phone number is ${phone_no}`;
document.getElementById("myP1").textContent= gender;

document.getElementById("sub").onclick=function(){

    username=document.getElementById("inp").value;
    document.getElementById("h2").textContent=`Hello da punde ${username}`;
    

}

document.getElementById("calc").onclick=function(){
   radius= document.getElementById("myrad").value;
   radius=Number(radius); // if you dont put also no problem. this is just conversion of string radius to number.
    circumference=2* radius* PI;
    document.getElementById("myh2").textContent=circumference + "cm";


}

const email="thibaanraj@gmail.com";
let usernamee=email.slice(0,email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1);
let nama="Thibaan Raj";

let firstname=nama.slice(0,nama.indexOf(" "));
let lastname=nama.slice(nama.indexOf(" ")+1);

console.log(usernamee);
console.log(extension);
console.log(firstname);
console.log(lastname);


//2d array
const matrix= [ [1,2,3],
                [4,5,6],
                [7,8,9],
                ['#',0,'*']];
                
  

            for(let row of matrix){
            const rowString=row.join(' ');
            console.log(rowString);
        }


    const people=[  {Name:"Spongebob", Age: 30, GPA:3.0 },
                    {Name:"Ahibaan Raj",Age:21,GPA:4.0},
                    {Name:"Rovena Benjamin",Age:20,GPA:4.0}
    ]

    people.sort((a,b)=> a.Name.localeCompare(b.Name)); 
    console.log(people);


    const btn=document.getElementById("btn");
    const img=document.getElementById("img");

    btn.addEventListener("click", event => {

//after clicking, it will check if the img is hidden or not.. 
        if(img.style.visibility==="hidden"){
            img.style.visibility="visible";
            btn.textContent="HIDE"; 
            btn.style.backgroundColor=""
        }

        else{
            img.style.visibility="hidden";
            btn.textContent="SHOW";
            btn.style.backgroundColor="black"
        }
   
        


    })


    function walkdog() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Take the dog for a walk");
                resolve(); // Resolve the promise when done
            }, 1000);
        });
    }
    
    function walkcat() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Take the cat for a walk");
                resolve(); // Resolve the promise when done
            }, 1000);
        });
    }
    
    function takesampah() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Take the sampah to buang");
                resolve(); // Resolve the promise when done
            }, 1000);
        });
    }
    
    // Chain the Promises together
    walkdog()
        .then(() => takesampah())
        .then(() => walkcat())
        .then(() => {
            console.log("All tasks completed!");
        });
    




