// Create a database called "orders"

// use orders

// Create document in "suppliers" collection

db.suppliers.insertOne(
  {
    supplier_name: "Trees 'R' Us",
    location: "Waterford",
    contact: "Mary"
  }
)

db.suppliers.insertOne({supplier_name: "Trees 'R' Us",location: "Waterford",contact: "Mary"})

db.suppliers.insertOne({ supplier_name: "Trees 'R' Us", location: "Waterford", contact: "Mary" })



// Note the ObjectId of the supplier - yours will be different

// db.suppliers.find().pretty() 
// {
//         "_id" : ObjectId("5f9848da7f54d218161ba200"),
//         "supplier_name" : "Trees 'R' Us",
//         "location" : "Waterford",
//         "contact" : "Mary"
// }


// Create document in "products" collection

db.products.insertOne({description: "Olive Tree",price: 39.99,supplier_id: ObjectId("5f9848da7f54d218161ba200"),prod_type: ["Garden", "Outdoors", "Plants"]}
)

// db.products.find().pretty() 
// {
//         "_id" : ObjectId("5f98496c7f54d218161ba201"),
//         "description" : "Olive Tree",
//         "price" : 39.99,
//         "supplier_id" : ObjectId("5f9848da7f54d218161ba200"),
//         "prod_type" : [
//                 "Garden",
//                 "Outdoors",
//                 "Plants"
//         ]
// }


// Create document in "customers" collection

db.customers.insertOne(
 {
   first_name: "James",
   last_name: "Ford",
   phone: "087-1234567",
   email: "jford@gmail.com",
   shipping_address: [
     {
       line_1: "25 Congress Place",
       county: "Waterford", 
       eircode: "X91T5EW"
     },
     {
       line_1: "JF Interiors",
       line_2: "5 Main Street",
       county: "Waterford", 
       eircode: "X919UR6"
     }
   ],
   payment_details: {
     card_type: "Visa Debit",
     card_name: "JF Interiors",
     card_number: "0000 1234 5678 9999",
     card_expiry: "02/21"
   }
 }
)

// db.customers.find().pretty()
// {
//         "_id" : ObjectId("5f984b657f54d218161ba202"),
//         "first_name" : "James",
//         "last_name" : "Ford",
//         "phone" : "087-1234567",
//         "email" : "jford@gmail.com",
//         "shipping_address" : [
//                 {
//                         "line_1" : "25 Congress Place",
//                         "county" : "Waterford",
//                         "eircode" : "X91T5EW"
//                 },
//                 {
//                         "line_1" : "JF Interiors",
//                         "line_2" : "5 Main Street",
//                         "county" : "Waterford",
//                         "eircode" : "X919UR6"
//                 }
//         ],
//         "payment_details" : {
//                 "card_type" : "Visa Debit",
//                 "card_name" : "JF Interiors",
//                 "card_number" : "0000 1234 5678 9999",
//                 "card_expiry" : "02/21"
//         }
// }


// Create document in "orders" collection

db.orders.insertOne(
  {
    order_date: new Date("2020-10-23"),
    cust_id: ObjectId("5f984b657f54d218161ba202"),
    order_line: [
      {
        product_id: ObjectId("5f98496c7f54d218161ba201"),
        quantity: 2
      }
    ]
  }
)

// db.orders.find().pretty()

// {
//         "_id" : ObjectId("5f984d0f7f54d218161ba203"),
//         "order_date" : ISODate("2020-10-23T00:00:00Z"),
//         "cust_id" : ObjectId("5f984b657f54d218161ba202"),
//         "order_line" : [
//                 {
//                         "product_id" : ObjectId("5f98496c7f54d218161ba201"),
//                         "quantity" : 2
//                 }
//         ]
// }
