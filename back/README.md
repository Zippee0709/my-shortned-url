# My shortened URL service

Back-end for my shortened Url service using Node.js with Prisma + PostgreSQL

# Usage

## Install dependencies

```bash
yarn install
```

## Run the server

```bash
yarn build && yarn start
```

Be sure to have a PostgreSQL database running on your machine. You can use Docker to run one:

Be sure to have a .env file in the root directory with the following variables:
```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```