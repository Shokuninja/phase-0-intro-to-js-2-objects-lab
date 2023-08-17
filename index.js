// Write your solution in this file!

const employee = {
    name: "Dave",
    streetAddress: "450 Pickle St.",
};

function updateEmployeeWithKeyAndValue(emp, key, value) {
    return {
        ...emp,
        [key]: value,
    };
}

// console.log(employee);
// console.log(updateEmployeeWithKeyAndValue(employee, "name", "Max"));

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {

    emp[key] = value;

    return emp;
}

// console.log(employee);
// destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Harry");
// console.log(employee);


function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

// console.log(employee);
// const myObj = deleteFromEmployeeByKey(employee, "name");
// console.log(myObj);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(employee);
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee);