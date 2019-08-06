// import * as dirObj from "dir-obj";

// const project = dirObj.readDirectory(__dirname);
// const test: number | null = 1;
// test = null;
// console.log(JSON.stringify(project, null, 2));

const hello = (s: number): string => {
    if (s) {
        return "sss";
    } else {
        return "okoko";
    }
};

console.log(hello(213) + "helloooo");


// (() => {
//     const test: number = 123;
//     if (test === 123) {
//         const test = "aaa";
//         console.log(test);
//     }
//
//     console.log(hello());
//     //     test = 456;
//     //
//     //     console.log(test);
// })();
// const hello = 123;

//
// import * as _ from "lodash";
// console.log(_.padStart("Helccclo!", 20, " "));


// declare module "app-module-path";
//
// import { addPath } from "app-module-path";
// addPath(__dirname);
//
// import hey from "hello";
//
// hey();

// console.log("index");
// class Student {
//
//     public fullName: string;
//
//     constructor(
//         public firstName: string,
//         public middleInitial: string,
//         public lastName: string,
//     ) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
//
// interface IPerson {
//     firstName: string;
//     lastName: string;
// }
//
// const greeter = ({ ...person }: IPerson) => {
//     return "Hello, " + person.firstName + " " + person.lastName;
// };
//
// const user = new Student("Jane", "M.", "User");
//
// const test = { firstName: "123", lastName: "world" };
// console.log(greeter({ ...test, lastName: "world2" }));
