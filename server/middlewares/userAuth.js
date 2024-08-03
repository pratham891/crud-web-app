import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const userAuth = async (req, res, next) => {
    try {
        // const token = req.headers.authorization.split(' ')[1];
        const token = req.headers.authorization;
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        // Attach the user ID to the request object
        req.userId = decodedToken.userId;
        next();
    } catch (err) {
        res.status(401).json({ err: "Please login again" });
    }
}

export default userAuth;
