// To iterate over a json for all types of for loops(for, forEach ,forin ,forof)
  
// json object

let obj= [ { "person":"Name 1", "age":"2" , "company":"Guvi"},
           { "person":"Name 2", "age":"7" , "company":"Guvi Geek"},
           { "person":"Name 3", "age":"10", "company":"Guvi Geek Networks"}]

// Normal For loop to iterate over a json object

for(let i=0;i<obj.length;i++){
    console.log(`
    NAME:${obj[i].person}
    AGE:${obj[i].age}
    COMPANY:${obj[i].company} 
    `)
}

//normal for loop OUTPUT:
// NAME:Name 1
// AGE:2
// COMPANY:Guvi 

// json.js:12 
// NAME:Name 2
// AGE:7
// COMPANY:Guvi Geek 

// json.js:12 
// NAME:Name 3
// AGE:10
// COMPANY:Guvi Geek Networks 

//ForEach loop to iterate over a json object

obj.forEach((data)=>{
    console.log(`
    NAME:${data.person}
    AGE:${data.age}
    COMPANY:${data.company}
    `)
})

// forEach loop OUTPUT:
// NAME:Name 1
// AGE:2
// COMPANY:Guvi

// json.js:22 
// NAME:Name 2
// AGE:7
// COMPANY:Guvi Geek

// json.js:22 
// NAME:Name 3
// AGE:10
// COMPANY:Guvi Geek Networks

//Forin loop to iterate over the json object

for (index in obj){
    console.log(`
    NAME:${obj[index].person}
    AGE:${obj[index].age}
    COMPANY:${obj[index].company}
    `)
}

// forin loop OUTPUT:


// NAME:Name 1
// AGE:2
// COMPANY:Guvi

// json.js:62 
// NAME:Name 2
// AGE:7
// COMPANY:Guvi Geek

// json.js:62 
// NAME:Name 3
// AGE:10
// COMPANY:Guvi Geek Networks

//basic.html:39 Live reload enabled.

//Forof loop to iterate over the json object

for(let object of obj){
    console.log(`
    NAME:${object.person}
    AGE:${object.age}
    COMPANY:${object.company}
    `)
}

// forof loop OUTPUT:


// NAME:Name 1
// AGE:2
// COMPANY:Guvi

// json.js:91 
// NAME:Name 2
// AGE:7
// COMPANY:Guvi Geek

// json.js:91 
// NAME:Name 3
// AGE:10
// COMPANY:Guvi Geek Networks

// basic.html:39 Live reload enabled.