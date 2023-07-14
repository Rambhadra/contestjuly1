let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = employees
      .filter(employee => employee.profession === "developer")
      .map(employee => employee.name);
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
  }
  
  function concatenateArray() {
    const newArray = [
        { id: 5, name: "alex", age: "22", profession: "manager" },
        { id: 6, name: "lisa", age: "25", profession: "designer" },
        { id: 7, name: "mike", age: "30", profession: "developer" }
      ];
      const concatenatedArray = employees.concat(newArray);
      console.log(concatenatedArray);
  }