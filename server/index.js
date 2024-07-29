import express from 'express';
const app = express();
import "dotenv/config";
const PORT = process.env.PORT || 3003;
import './database/conn.js';
import cors from 'cors';
import router from './routes/router.js';
import userRoutes from './routes/userRoutes.js';

app.use(cors());
app.use(express.json());

app.use(cors(
    {
        origin:["https://crud-web-app-nine.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));

app.use(router);
app.use(userRoutes);

app.get("/", (req,res) => {
    res.send(`this is root route`);
});

app.listen(PORT, () => {console.log(`server is listening on port ${PORT}`)});
