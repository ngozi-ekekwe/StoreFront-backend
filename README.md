# StoreFront-backend : WIP

A NodeJS API to be consumed by a frontend application to allow users to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page.


## API Features

## Pre-requisites
```
- Postgres
- NodeJS
```



## Local Development

Clone Repository
```
- git clone https://github.com/ngozi-ekekwe/StoreFront-backend.git
- cd StoreFront-backend

```

Enviromental Variables Set up
```
- create a `.env` file in your root folder then copy the content from  `.env.sample and replace the values with your environment configuration / secrets`

DB_DEV=testDB
DB_TEST = store_front
POSTGRES_USER = db_user
POSTGRES_PASSWORD=db_password
POSTGRES_HOST = 5432
SALT_ROUNDS = 10
PEPPER = pepper
JWT_SECRET= secret
NODE_ENV= dev
```

Database

```
 - Create database store_front_dev in postgres

 - Add your database configuration setting to your `.env` file
```


Install Dependencies

```sh
  $ cd StoreFront-backend
  $ npm install
```

Run migrations

```sh
  $ npm run migration
```

Testing

```sh
  $ npm run test
```

Prettier

```sh
  $ npm run prettier
```

Start Server
```sh
  $ npm run start
```

Running Ports

- Server will start on port 3000 and the database on port 5432




