console.log('customers ');
const productsData = {
    "products": [
      {
        "id": "p01",
        "name": "Bike Insurance"
      },
      {
        "id": "p02",
        "name": "Car Insurance"
      },
      {
        "id": "p03",
        "name": "Home Insurance"
      },
      {
        "id": "p04",
        "name": "Pet Insurance"
      }
    ],
    "customers": [
      { "id": "c01", "firstname": "Rachel", "lastname": "Jane" },
      { "id": "c02", "firstname": "Leilah", "lastname": "Mandi" },
      { "id": "c03", "firstname": "Campbell", "lastname": "Kendall" },
      { "id": "c04", "firstname": "Madonna", "lastname" : "Sammie" }
    ],
    "purchases": [  
      {
        "customerId": "c01",
        "purchases": [
          {
            "productId": "p02",
            "purchasedAt": "2021-08-03T00:00:00.000Z"
          },
          {
            "productId": "p02",
            "purchasedAt": "2021-08-04T00:00:00.000Z"
          },
          {
            "productId": "p01",
            "purchasedAt": "2021-09-12T00:00:00.000Z"
          },
          {
            "productId": "p01",
            "purchasedAt": "2021-09-12T00:00:00.000Z"
          }
        ]
      },
      {
        "customerId": "c03",
        "purchases": [
          {
            "productId": "p04",
            "purchasedAt": "2021-08-03T00:00:00.000Z"
          },
          {
            "productId": "p04",
            "purchasedAt": "2021-09-12T00:00:00.000Z"
          },
          {
            "productId": "p03",
            "purchasedAt": "2021-09-12T00:00:00.000Z"
          },
          {
            "productId": "p01",
            "purchasedAt": "2021-09-12T00:00:00.000Z"
          }
        ]
      },
      {
        "customerId": "c02",
        "purchases": [
          {
            "productId": "p01",
            "purchasedAt": "2021-09-12T00:00:00.000Z"
          }
        ]
      }
    ]
  }

const getCustomers = () =>{
    const customers = [];
    productsData.purchases.map(purchase=>{
      const { customerId} = purchase;
        customers.push(productsData['customers'][customerId])
    });
     console.log('customers ', customers);
} 
console.log('customers ', customers);
getCustomers();
