# Microservice Project with NestJS, Prisma, MySQL, and NATS

This project demonstrates a microservices architecture built using **NestJS**, **Prisma**, **MySQL**, and **NATS**. It includes multiple microservices like **API Gateway**, **reader-mgt**, and **article-mgt** to manage readers and articles, along with communication using NATS.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **Docker** (for running MySQL container)
- **Postman** (for testing API calls)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
2. Install Dependencies
Install the required dependencies for all microservices:

npm install
3. Set Up MySQL Database with Docker
If you don’t have MySQL running, you can use Docker to run it:

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=mydb -p 3306:3306 -d mysql:5.7
This will start a MySQL instance accessible at localhost:3306 with the username root and password root.

4. Set Up Prisma
To use Prisma, follow these steps:

Install Prisma CLI and Prisma Client:
npm install prisma @prisma/client
Create the prisma folder and add the schema.prisma file.
Generate Prisma Client:
npx prisma generate
If you have made changes to the database schema, run migration:
npx prisma migrate dev
5. Configuration
Make sure to set your MySQL connection string in the .env file:

DATABASE_URL="mysql://root:root@localhost:3306/mydb"
6. Run the Microservices
Now, you are ready to run each service in development mode. To start the services, run:

npm run start:dev
Repeat this for each microservice (API Gateway, reader-mgt, and article-mgt).

API Endpoints

Once the services are up, you can use Postman to test the following endpoints via the API Gateway:

POST /api/save-reader: Save a new reader.
GET /api/get-all-readers: Retrieve all readers.
POST /api/save-article: Save a new article.
GET /api/get-all-articles: Retrieve all articles.
POST /api/delete-article: Delete an article by ID.
Conclusion

This project provides a solid foundation for building a microservices-based application using NestJS, Prisma, MySQL, and NATS. You can enhance this further by adding features like robust error handling, validation, and security measures. Consider using Docker for containerization and Kubernetes for orchestration in production environments.