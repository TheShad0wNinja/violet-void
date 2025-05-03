const jwt = require("jsonwebtoken");

const AuthMiddleWare = (req,res,next)=>
{
    const authHeader = req.header("Authorization");
    if(!authHeader) return res.status(401).json({message:"access denied"});

    const token = authHeader.split(" ")[1];
    if(!token) return res.status(401).json({message:"access denied, no token"});

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        console.log("Token verified calling backend");
        next();
    }
    catch(error)
    {
        if(error.name === "TokenExpiredError")
        {
            return res.status(401).json({message:"token expired, please login"});

        }
        console.error("JWT verification failed:", error);
        res.status(400).json({message:"invalid token"});
    }
}; 

module.exports = AuthMiddleWare;