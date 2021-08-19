


// find all countries in europe who speaks spanish
let Spanish = fetch("https://restcountries.eu/rest/v2/region/europe")
  .then((data) => data.json())
  .then(countries => countries.filter((element) => element["languages"][0].name == "Spanish"))
//   .then(a => console.log(a))


// find all countries in europe who speaks english
  let english = fetch("https://restcountries.eu/rest/v2/region/europe")
  .then((data) => data.json())
  .then(countries => countries.filter((element) => element["languages"][0].name == "English"))
//   .then(b => console.log(b))


 


async function hi(){
await Promise.all([english,Spanish])
.then((all) => console.log(all.concat.apply([], all)))
}
hi()



// practise project ice cream 

/*
var stocks = {
  liquid : ["ice","water"],
  fruits : ["strawberry","orange","apple","banana"],
  toppings : ["chocolate","blueberry","caramel"]
}

var shop_is_open = true; 

    let order = (time, work) => {
      return new Promise ( ( resolve, reject) => {
        if(shop_is_open){
          setTimeout(() => {
                resolve(work())
          }, time)
      
        }
        else{
          reject(console.log("our shop is closed"))
        }
      })
    }
    order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
    .then(() => {
     return order(2000, () => console.log(`${stocks.fruits[3]} was selected`))
    })
    .catch(()=>{
      console.log("Customer left")
    })
    .finally(()=>{
     console.log("end of day")
    })

*/
