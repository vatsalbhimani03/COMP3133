class Customer{
    firstName: string;
    lastName: string;

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
 // object = instance of class 
let customer = new Customer();
customer.firstName = "Vatsal";
customer.lastName = "Bhimani";
customer.greeter();

