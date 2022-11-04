const data = {
  firstName: "John",
  lastName: "Deer",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const dataBind = function () {
  console.log(this.getFullName() + " - you are good boy!");
};

const printBindSentence = dataBind.bind(data);

const printApplyAndCall = function (item1, item2, item3) {
  console.log(
    this.getFullName() + " eats " + item1 + " and " + item2 + " " + item3
  );
};

printBindSentence();
printApplyAndCall.call(data, "salad", "dessert", "method - call");
printApplyAndCall.apply(data, ["salad", "dessert", "method - apply"]);
