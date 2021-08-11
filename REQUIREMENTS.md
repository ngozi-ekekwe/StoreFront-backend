## API Endpoints

Swagger API endpoints are defined in the [`swagger.json`](./src/swagger.json) file.
Also after starting the application, navigating to `localhost:{port}/api-docs` will show the API documentation.

After successfully creating a user, a token will be generated and can be used to authenticate the user.This token can also be added to swagger document by clicking on the "Authorize" button

## Data Shapes

#### Product

- id
- name
- price
- category

products(id: serial PRIMARY KEY, name: VARCHAR, price: VARCHAR, category: VARCHAR)

#### User

- id
- firstName
- lastName
- password

users(id: serial PRIMARY KEY, firstName: VARCHAR, lastName: VARCHAR, password: VARCHAR)

#### Orders

- id
- user_id
- status of order (active or complete)

orders(id: serial PRIMARY KEY, status: VARCHAR(15), user_id: bigint REFERENCES users(id))

#### OrderProducts

- id
- product_id of each product in the order
- order_id
- quantity of each product in the order

order_products(id: SERIAL PRIMARY KEY, quantity: integer, order_id: bigint REFERENCES orders(id), product_id: bigint REFERENCES products(id)
)

### Products

- Create Product [token required]

  - `Method:` POST

  - `URL:` {{URL}}/api/v1/products

  - **_Example Body :_**

```js
     {
       "product": {
         "name": "janeDow",
         "price": 0,
         "category": "drinks"
       }
     }
```

- Index: List all products [token NOT required]

  - `Method:` GET

  - `URL:` {{URL}}/api/v1/products

- Show: Show a product [token NOT required]

  - `Method:` GET

  - `URL:` {{URL}}/api/v1/products/{id}

- Top 5 most popular products [token NOT required]

  - `Method:` GET

  - `URL:` {{URL}}/api/v1/products?category=lemon

### Users

- Create User [token required]

  - `Method:` POST

  - `URL:` {{URL}}/api/v1/users

  - **_Example Body :_**

  ```js
      {
      "user": {
        "firstName": "Jane",
        "lastName": "Snow",
        "password": "password"
      }
    }
  ```

- Login

  - `Method:` POST

  - `URL:` {{URL}}/api/v1/login



- Index: Show a list of Users [ token required ]

  - `Method:` GET

  - `URL:` {{URL}}/api/v1/users

- Show single product [ token required ]

  - `Method:` GET

  - `URL:` {{URL}}/api/v1/users/{id}

#### Orders

- Create New Order [ token required ]

  - `Method:` POST
  - `URL:` {{URL}}/api/v1/orders/{userId}

  - **_Example Body :_**

  ```js
      {
        "order": {
          "orderItems": [
            {
              "productId": "string",
              "quantity": 0
            }
          ]
        }
    }
  ```

- Get all orders [token required]

  - `Method:` GET

  - `URL:` {localhost:}/api/v1/orders/{userId}


- Get Single Order for a customer (args: user id)[token required]

  - `Method:` GET

  - `URL:` {localhost:}/api/v1/orders/{userId}/{orderId}

- Update Order (args: user id)[token required]

  - `Method:` PUT

  - `URL:` {localhost:}/api/v1/orders/{userId}/{orderId}


