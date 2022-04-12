# Api Typescript

creator: Ari Setiawan

### Documentation

Postman: https://documenter.getpostman.com/view/4749281/UVz1Mrh4

Variable Environment: https://prnt.sc/4LOMKwMngipY

### How to run

1. install node modules
    > npm install
2. create database name "dot_test" with mysql
3. configuration database with ENV you must create new .env and copy paste config below:
    > ENV=development<br/>PORT=3000<br/>JWT_SECRET=secret<br/>API_URL=https://jsonplaceholder.typicode.com<br/>BASE_URL=http://localhost:3000<br/>DB_HOST=localhost<br/>DB_NAME=dot_test<br/>DB_PASSWORD=<br/>DB_USERNAME=root<br/>DB_PORT=3306<br/>DB_DIALECT=mysql<br/>
4. migrate database
    > sequelize db:migrate
5. seeder database
    > sequelize db:seed:all
6. run service
    > npm run dev
7. to deployment ""
    > npm run build
