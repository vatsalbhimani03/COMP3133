var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// object = instance of class 
var customer = new Customer();
customer.firstName = "Vatsal";
customer.lastName = "Bhimani";
customer.greeter();
