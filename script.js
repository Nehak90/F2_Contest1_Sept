const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
   data.filter(person => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");

  const newData = { name, age, profession };
  data.push(newData);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let newData = data.filter(person=>{
    return person.profession!== 'admin';
})
console.log(newData);
}

// 4. Concatenate Array
function concatenateArray() {
  const Array = [
    { name: "Riya", age: 30, profession: "developer" },
    { name: "Rima", age: 35, profession: "admin" },
  ];

  const concatenatedArray = data.concat(Array);
  console.log(concatenatedArray);
}

// 5. Average Age
function averageAge() {
  const sum=0;
  data.map(person=>
    {
      sum+=person.age;
    })

    console.log(sum/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.filter(person=>
    person.age>25);
    console.log(isAbove25);
  
}

// 7. Unique Professions
function uniqueProfessions() {
  const unique_values = [
    ...new Set(data.map((element) => element.profession)),
];

console.log(unique_values)
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.map(person=>{
    if(person.name=='john'){
      person.profession='manager'
    }
  
  })
    console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  const unique_values = [
    ...new Set(data.map((element) => element.profession)),
];

console.log(unique_values.length)
}