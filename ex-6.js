const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  for(let i = 0; i < carCollection.length; i++) {
    if (carBrand === carCollection[i]) {
      return `${carBrand} has already existed in the 1 position of car collection.`
    }
    else {
      carCollection.push(carBrand);
      return `new car collection is : ${carCollection}.`
    }
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.