# MERN Stack CRUD Web App

## Description
This is a robust CRUD (Create, Read, Update, Delete) Web Application utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack.
Deployed on Vercel, the project showcases proficiency in full-stack development, incorporating Bootstrap and Material-UI for a responsive and visually appealing user interface.

## For running the application locally
### Clone this repository in your local machine
```
git clone https://github.com/pratham891/crud-web-app
```

## Installation
1. Clone this repository to your local machine.
2. Install Node.js from [Node.js website](https://nodejs.org/).
3. Install MongoDB from [MongoDB website](https://www.mongodb.com/).
4. Navigate to the project directory in the terminal/command prompt.
5. Run `npm install` to install the necessary dependencies.
6. Configure the MongoDB connection in the backend code.

### For running the client-side server
Enter the client directory
```
cd "crud-web-app/client"
```

Install the dependencies
```
npm i
```

Start the client server
```
npm run dev
```

### For running the backend server
Enter the server directory
```
cd "crud-web-app/server"
```

Configure the MongoDB connection in the backend code in the file:
```
/server/database/conn.js
```

Install the dependencies
```
npm i
```

Add env file in the src folder and add the following environment variables in the file:
```
PORT
DB
ACCESS_TOKEN
```

Start the backend server
```
npm start
```
or
```
npm run dev
```

## Usage
1. Ensure MongoDB is running.
2. Navigate to the project directory in the terminal/command prompt.
3. Run `node app.js` to start the server.
4. Open a web browser and visit `http://localhost:PORT` (replace `PORT` with the port number specified in the code) to access the application.

## Technologies Used
- MongoDB
- Express.js
- React.js
- Redux (Toolkit)
- Node.js
- Mongoose
- Bootstrap
- Material UI

## Contributors
- [Pratham Singh](https://www.github.com/pratham891)

## Contact
For inquiries or support, please contact [prathambsingh891@gmail.com](mailto:prathambsingh891@gmail.com)
