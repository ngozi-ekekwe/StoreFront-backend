# StoreFront-backend : WIP

A NodeJS API to be consumed by a frontend application to allow users to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page.


## API Features

## Tech Stack

```
- Postgres
- NodeJS
- Express
- TypeScript
- Jasmine

```


## Local Development

Clone Repository
```
git clone https://github.com/ngozi-ekekwe/StoreFront-backend.git
```

Copy Environment Secrets
```
create a `.env` file in your root folder then copy the content from  `.env.sample and replace the values with your environment configuration / secrets`
```

Database

```
 - Create a database to hold records for your store, after that is setup properly, you should have access to the Username, password, host and user

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

Start Server
```sh
  $ npm run start
```

Testing

```sh
  $ npm run test
```


