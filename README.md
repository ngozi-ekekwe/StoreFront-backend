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

Copy Environment Secrets
```
- create a `.env` file in your root folder then copy the content from  `.env.sample and replace the values with your environment configuration / secrets`

DB_DEV={DEV DATABASE}
DB_TEST={TEST DATABASE}
POSTGRESS_USER={Database User}
POSTGRES_PASSWORD={}
POSTGRESS_HOST={Database Host}
SALT_ROUNDS={number of rounds for the salt hashing algorithm}
PEPPER={pepper for hashing}
JWT_SECRET={JWT Secret }
NODE_ENV={Test / development Environment}
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
  $ npm run db-migrate
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




