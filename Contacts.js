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


