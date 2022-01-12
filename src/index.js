const cities = ["Bogota", "Mexico city", "Santiago de chile", "Arequipa", "Buenos aires", "Guadalajara"];

const randomCity = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  console.log(city)
  return city;
};

const reverseStr1 = (str)=>{
  return new Promise((resolve, reject)=>{
    if(!str){
      reject(Error("Error"))
    }
    resolve(str.split("").reverse().join(""))
  });
};

module.exports = randomCity;