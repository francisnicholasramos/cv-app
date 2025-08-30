const data = {
  sections: {
    car: [
      {
        id: 1,
        name: 'Fiat',
        type: 'sedan',
        transmission: 'manual',
        brand: 'toyota',
      },
      {
        id: 2,
        name: 'Lancer',
        type: 'sedan',
        transmission: 'manual',
        brand: 'toyota'
      }
    ],

    bicycle: [
      {
        id: 1,
        variant: 'roadbike',
        speed: '10speed',
        brand: 'colnago',
        color: 'pearl_white'
      },
      {
        id: 2,
        variant: 'mountainbike',
        speed: '11speed',
        brand: 'SantaCruz',
        color: 'Army Green',
      },
      {
        id: 3,
        variant: 'gravel',
        speed: '11speed',
        brand: 'unbranded',
        color: 'Lemon Yellow'
      }
    ]
  }
    
}

const extract = data.sections;
const test = extract["car"]
console.log(test)
