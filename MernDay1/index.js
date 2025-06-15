/*console.log('Hello, World!');
console.log("Thamalee Shakeela")
let age = 26
let name = 'Thamali'
console.log(age)
console.log(name)
age = 30
name = "peter"
console.log(age)
console.log(name)

let x = 5
let y = 8
let sum = x+y
console.log(sum)
console.log(y-x)

let a = 100
let b = 69
let value = a>b
console.log(value) 

let savedpassword = 'abcd'
let givenpassword = 'abc'
let iscorrect = savedpassword == givenpassword

if(iscorrect){
    console.log('correct password')
    console.log('loggin succesfully')
}
else{
    console.log('invalid password')
    console.log('try again')
}

let female = 'f'
let male = 'm'
let gender = 'f'
if(gender){
    console.log('you can acces this site')

}
else{
    console.log('you can not access this site')
}

let marks = [45,80,69,75,90]
let names = ['john','nimal','kamal','jack']

console.log(marks)
console.log(names)

marks[2] = 89
console.log(marks)

function makeTea(){
    console.log('Boil some water');
    console.log('Add tea powder');
    console.log('pour some milk');
    console.log('Add suger');
    console.log('Tea is ready');
    console.log('Enjoy your tea');
}

makeTea()

function great(name,time){
    console.log('Good'+' '+time+' '+name)
    console.log('Have a nice day')
}
great('John','evening')

function calculateInterest(loan){
    let interestValue = 0.1 * loan;
    //console.log(interestValue);
    return interestValue;
}
let interest1 = calculateInterest(30000)
console.log(interest1)

let students=[
    {
          name : 'Alice',
          maths : 67,
          science : 90,
          english : 85
    },
    {
        name : 'bob',
        maths : 78,
        science : 65,
        english : 50
    },
    {
        name : 'rose',
        maths : 90,
        science : 88,
        english : 96
    }
    
]
console.log(students[1])
students[2].name = 'jack'
console.log(students[2])*/

//d67a9431
function search(){
    console.log('Searching...')
    let inputTag = document.getElementById('name')
    let movieName = (inputTag.value)
    let key = "d67a9431"
    let url = 'http://www.omdbapi.com/?apikey = d67a9431'+'&t='+movieName
    console.log(url)

    let httpRequest = new XMLHttpRequest()
    httpRequest.open('GET',url)
    httpRequest.responseType = 'json'
    httpRequest.send()

    httpRequest.onload = function(){
        console.log(httpRequest.response)
    }
}








