// alert("Hello Best 5");
// clear();
// console.log("Hello Best 5");
// console.log(300);
// console.error("This is error message")
// console.warn("This is warning message")
// let name = "Han Nwe Soe";
// let age = 27;
// age = 30;
// age =15;
// name = "HTML";
// console.log(age);
// console.log(name);
// const city = "Yangon";
// city = "Mdy";
// console.log(city);
// const name = "Han Nwe soe";
// const age = 24;
// const rating = 1.5;
// const isCool = true;
// const x = null;
// let z;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof z);
// const s = "Hello Batch 5";

// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase ());
// console.log(s.toLowerCase ());
// console.log(s.substring (0,5) .toUpperCase ());
// console.log(s.substring (6,13) .toUpperCase ());
// console.log(s.split(""));
// // concatenation
// const firstName = "HanNwe";
// const lastName = "Soe";
// const age = 24;
// console.log("My name is" +" "+ firstName +lastName+ ". I am" +" "+age + "years old.");

// template string
// console.log(`My name is ${firstName}${lastName}. I am ${age} years old.`)

// const animals = { name: "Dalier", age: 2, type: "Cat" };
// console.log(animals);
// console.log(animals.name);
// console.log(animals.age);
// console.log(animals.type);

// const person = {
//     firstName: "Han",
//     middleName: "Nwe",
//     lastName: "Soe",
//     age: 24,
//     gender: "F",
//     hobbies: ["music", "movies","sports"],
//     address: {
//         number: "no.37",
//         street: "Bo",
//         township: "Dala",
//         city: "Yangon",
//      },
//     email: "hannwe064@gmail.com",
//     phone: 09979609621,
// };
// person.maritalStatus = "Singel";
// person.address.country = "Myanmar";
// person.hobbies[3] = "Song";

// console.log(person);
// console.log(person.firstName, person.middleName, person.lastName);
// console.log(person.hobbies[0]);
// console.log(person.address.township);

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isComplete: true,
    },
    {
        id: 2,
        text: "Meeting with boss",
        isComplete: true,
    },
    {
        id: 3,
        text: "Go to clinic",
        isComplete: true,
    },
];
// console.log(todos);
// console.log(todos[2].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For loop
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].id);
    console.log(todos[i].text);
    console.log(todos[i].isComplete);
}
// for (let i = 0; i <= 10; i++) {
//     console.log(`for loop number: ${i}`);
// }

