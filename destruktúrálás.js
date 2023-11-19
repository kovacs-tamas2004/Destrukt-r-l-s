//1. feladat
let car = ['Ford', 'Mustang', '2022', 'blue'];
let [brand, model,year,color ] = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);

//2. feladat
let book = {
    title: 'Javascript: The Good Parts',
    author : 'Douglas Crackford',
    publicationYear: 2008,
    language: 'English'
};

let{title: bookTitle, author:bookAuthor, publicationYear, language} = book;
console.log(bookTitle);
console.log(bookAuthor);
console.log(publicationYear);
console.log(language);

//3. feladat
function printStudentInfo({  name, age, grade, subjects}) {
    console.log(`${name}, ${grade}, ${subjects}, ${age} éves`);
}
  
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};

printStudentInfo(student);