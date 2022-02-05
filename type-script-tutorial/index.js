var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'Hello'];
//Tuple
var person = [1, 'Brad', true];
//tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
//Union
var pid;
pid = '22';
// Enum
var Driection1;
(function (Driection1) {
    Driection1[Driection1["UP"] = 1] = "UP";
    Driection1[Driection1["Down"] = 2] = "Down";
    Driection1[Driection1["Left"] = 3] = "Left";
    Driection1[Driection1["Right"] = 4] = "Right";
})(Driection1 || (Driection1 = {}));
var Driection2;
(function (Driection2) {
    Driection2["Up"] = "Up";
    Driection2["Down"] = "Down";
    Driection2["Left"] = "Left";
    Driection2["Right"] = "Right";
})(Driection2 || (Driection2 = {}));
var user = {
    id: 1,
    name: 'John'
};
var cid = 1;
var customerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
//Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordan');
// SubClasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shawn', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'John', 'Jill']);
numArray.push('hello');
console.log(numArray);
