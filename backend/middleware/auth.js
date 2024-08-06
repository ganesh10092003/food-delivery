import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.json({ success: false, message: "Not Authorised. Login Again" })
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { id: tokenDecode.id }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })
  }
}

export default authMiddleware