/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
};

console.log('C++: ', cpp.getRequirements());
cpp.setTeacher(cTeacher);
console.log('C++ teacher: ', cpp.getAvailableTeacher());

console.log('Java: ', java.getRequirements());
java.setTeacher(cTeacher);
console.log('Java teacher: ', java.getAvailableTeacher());

console.log('React: ', react.getRequirements());
react.setTeacher(cTeacher);
console.log('React teacher: ', react.getAvailableTeacher());
