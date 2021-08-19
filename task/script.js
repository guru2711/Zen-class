// let a = fetch("https://restcountries.eu/rest/v2/region/europe")
//   .then((e) => e.json())
//   .then((countries) => countries.filter( count => count["languages"][0].name == "Spanish"))
//   .then(a => console.log(a))

const a = new Promise((resolve,reject) => {
    let index = 10

    if(index > 0){
        resolve("hi")
    }
    else{
        reject("welcome")
    }
})

// find all countries in europe who speaks spanish
let Spanish = fetch("https://restcountries.eu/rest/v2/region/europe")
  .then((data) => data.json())
  .then(countries => countries.filter((element) => element["languages"][0].name == "Spanish"))
//   .then(a => console.log(a))



  let english = fetch("https://restcountries.eu/rest/v2/region/europe")
  .then((data) => data.json())
  .then(countries => countries.filter((element) => element["languages"][0].name == "English"))
//   .then(b => console.log(b))


 Promise.all([english,Spanish])
    .then((all) => console.log(all.concat.apply([], all)))
