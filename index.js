let model = require('./student');
let students = [];
let aprobados = [];

let student = {
    name : 'Liliana Elizabeth Gonzalez Guzman',
    controlNumber: "16400919",
    email: "lielgonzalezgu@ittepic.edu.mx",
    grade: 90
};

let student2 = {
    name : 'Fatima Estefania Gonzalez Guzman',
    controlNumber: "14400598",
    email: "faesgonzalezgu@ittepic.edu.mx",
    grade: 90
};

students = model.create(student,students);
students = model.create(student2, students);

model.read(students);
students = model.erase(0, students);
console.log("*********** ESTUDIANTES *********")
model.read(students);

student = {
    name: 'Lili',
    controlNumber: "16400919",
    email: "lielgonzalezgu@ittepic.edu.mx",
    grade: 85
};


students = model.create(student,students);

model.read(students);
students = model.update(0,{name:"Nuevo Alumno", controlNumber: "22222919",email:"lili1404guzman@gmail.com", grade:90}, students);

console.log("------ Estudiante Actualizado------")
model.read(students);

console.log("------Busqueda por Num de control------")
model.readNC(students,"16400919");

console.log("------Borrar del numero de control------")
model.eraseNC("16400919",students);
model.read(students);

console.log("------Actualizar Estudiante------")
students = model.updateNC("12345678",{name:"Margarita", controlNumber: "88888888",email:"magoram@gmail.com", grade:60}, students);
model.read(students);

console.log("------Alumnos aprobados------")
model.grades(students,aprobados);


