## API Endpoints

Swagger API endpoints are defined in the [`swagger.json`](./src/swagger.json) file. 
Also after starting the application, navigating to  ```localhost:{port}/api-docs``` will show the API documentation.

After successfully creating a user, a token will be generated and can be used to authenticate the user.This token can also be added to swagger document by clicking on the "Authorize" button

## Data Shapes

#### Product
-  id
- name
- price
- category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- user_id
- status of order (active or complete)

##### OrderProducts
- id 
- product_id of each product in the order
- order_id
- quantity of each product in the order


#### Products
- Index 
  localhost:{port}/api/v1/products
  
- Show
  localhost:{port}/api/v1/products/1

- Create [token required]
  localhost:{port}/api/v1/products

- Top 5 most popular products 

- Products by category (args: product category)
  localhost:{port}/api/v1/products?category=lemon


#### Users
- Index [token required]
  localhost:{port}/api/v1/users

- Show [token required]
  localhost:{port}/api/v1/users/1

- Create [token required]
  localhost:{port}/api/v1/users



#### Orders
- Current Order by user (args: user id)[token required]
{localhost:}/api/v1/orders/customer/1

- Completed Orders by user (args: user id)[token required]

