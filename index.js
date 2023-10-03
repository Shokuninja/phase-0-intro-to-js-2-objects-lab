// Write your solution in this file!

const employee = {
    name: "Dave",
    streetAddress: "450 Pickle St.",
};

// console.log(`'employee: ${[employee]}`);

function updateEmployeeWithKeyAndValue(emp, key, value) {
    return {
        ...emp,
        [key]: value,
    };
}

// console.log(updateEmployeeWithKeyAndValue(employee, 'name', "Max"));

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp;
}

// console.log(employee);
// destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Duke');
// console.log(employee);

function deleteFromEmployeeByKey(employeeObj, key) {
    const newObj = {...employeeObj};
    delete newObj[key];
    return newObj;
}


// console.log(employee);
// console.log(deleteFromEmployeeByKey(employee, 'name'));


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// console.log(employee);
// destructivelyDeleteFromEmployeeByKey(employee, "name");
// console.log(employee);