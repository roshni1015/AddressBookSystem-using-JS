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

let personContact= new Contact("omkar","B","A1","Ratnagiri","MH",415000,7778889995,"omkarb@mail.com");

console.log(personContact.Display());