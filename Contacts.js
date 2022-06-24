
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
    return "Name : "+this.firstName+" "+this.lastName+"\t|\t Address : "+this.address+", "+this.city+", "+this.state+"\t|\t PinCode: "+this.zip+"\nPhone Number : "+this.phoneNumber+"\t|\t EmailID : "+this.email;
}

}

let personContact1= new Contact(
    "Roshni","A","A1","Pune","MH",411013,9999999999,"roshni@mail.com"
);
console.log(personContact1.Display());

let personContact2= new Contact(
    "Shravanthi","P","P1","Old Alwal","Tg",400003,9988776655,"shravanthi@mail.com"
);
let personContact3= new Contact(
    "Amisha","B","B1","Pune","MH",411113,9944556633,"amisha@mail.com"
);
let personContact4= new Contact(
    "Mahesh","R","R1","Pune","MH",422223,9922334455,"mahesh@mail.com"
);

console.log(personContact1.Display());
console.log(personContact2.Display());
console.log(personContact3.Display());
console.log(personContact4.Display());

var map1= new Map();
map1.set(1,personContact1);
map1.set(2,personContact2);
map1.set(3,personContact3);
map1.set(4,personContact4);
console.log(map1.size);