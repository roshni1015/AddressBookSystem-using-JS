const prompt = require("prompt-sync")();
class Contact {
    firstName;  lastName;  
    address;    city;   state;  zip;
    phoneNumber;    email;

constructor (firstName, lastName, address, city, state, zip, phoneNumber, email)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.address=address;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phoneNumber=phoneNumber;
    this.email=email;
}

get firstName(){   return this._firstName; }
get lastName(){   return this._lastName; }
get address(){   return this._address; }
get city(){   return this._city; }
get state(){   return this._state; }
get zip(){   return this._zip; }
get phoneNumber(){   return this._phoneNumber; }
get email(){   return this._email; }

set firstName(firstName){ this._firstName=firstName; }
set lastName(lastName){ this._lastName=lastName; }
set address(address){ this._address=address; }
set city(city){ this._city=city; }
set state(state){ this._state=state; }
set zip(zip){ this._zip=zip; }
set phoneNumber(phoneNumber){ this._phoneNumber=phoneNumber; }
set email(email){ this._email=email; }

Display()
{
    return "Name : "+this.firstName+" "+this.lastName+"\t|\t Address : "+this.address+", "+this.city+", "+this.state+"\t|\t PIN: "+this.zip+"\nContact number : "+this.phoneNumber+"\t|\t Email : "+this.email;
}

}

let personContact= new Contact("Roshni","A","A1","Pune","MH",411013,9999999999,"roshni@mail.com");
let personContact1= new Contact("Mahesh","B","B1","Pune","MH",411013,9999999999,"mahesh@mail.com");
let personContact2= new Contact("Lavnya","C","C1","Banglore","KT",411013,9999999999,"lavnaya@mail.com");
let personContact3= new Contact("Vivek","D","D1","Mumbai","MH",411013,9999999999,"vivek@mail.com");


console.log(personContact.Display());
console.log(personContact1.Display());
console.log(personContact2.Display());
console.log(personContact3.Display());

var map1= new Map();
map1.set(1,personContact);
map1.set(2,personContact1);
map1.set(3,personContact2);
map1.set(4,personContact3);

console.log("Number of Person Contacts in AddressBook : " +map1.size);

var array=[];
array.push(personContact);
array.push(personContact1);
array.push(personContact2);
array.push(personContact3);
console.log(array[0].firstName);
function addDetails(){
    var contact = new Contact();
    contact.firstName = prompt("Please enter the firstName :");
    contact.lastName = prompt("Please enter the lastName :");
    contact.address = prompt("Please enter the address :");
    contact.city = prompt("Please enter the city :");
    contact.state = prompt("Please enter the state :");
    contact.zip = prompt("Please enter the zip :");
    contact.phoneNumber = prompt("Please enter the phoneNumber :");
    contact.email = prompt("Please enter the email :");
    array.push(contact);
}
function editContact(){
    var name = prompt("Please enter the firstname of contact you want to Edit :");
    for(let i=0;i<array.length;i++){
        if(array[i].firstName == name){
            var choice = prompt("Please choose what you want to edit : \n1)firstName \n2)lastName \n3)Address \n4)city \n5)State \n6)Zip \n7)Phone Number \n8)Email \n");
            switch(choice){
                case "1":
                    array[i].firstName=prompt("Please enter the firstName :");
                    break;
                case "2":
                    array[i].lastName = prompt("Please enter the lastName :");
                    break;
                case "3":
                    array[i].address = prompt("Please enter the address :");
                    break;
                case "4":
                    array[i].city=prompt("Please enter the city :");
                    break;
                case "5":
                    array[i].state = prompt("Please enter the state :");
                    break;
                case "6":
                    array[i].zip = prompt("Please enter the zip :");
                    break;
                case "7":
                    array[i].phoneNumber=prompt("Please enter the phoneNumber :");
                    break;
                case "8":
                    array[i].email = prompt("Please enter the email :");
                    break;
                default:
                    console.log("Please choose correct option!");
                    break;
            }
        }
    }
}
function display(){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
while(true){
    console.log("Please choose the option");
    var option = prompt("1)Display Contacts in AddressBook. \n2)Add Details in AddressBook\n3) Edit Contact using FirstName \n");
    switch(option){
        case "1":
            Display();
            break;
        case "2":
            addDetails();
            break;
        case "3":
            editContact();
            break;
    }
}

