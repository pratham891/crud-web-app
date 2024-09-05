const emailValidator = async (req, res, next) => {
    const email = req.body.email;

    try {
        if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            next();
        } else {
            res.status(403).json({ msg: "invalid email format" });
        }
    }
    
    catch (err) {
        res.status(500).json({ msg: "internal server error" });
    }
}

export default emailValidator;
