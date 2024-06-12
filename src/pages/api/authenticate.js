import rateLimit from 'express-rate-limit';

// Initialize the rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {"message":'Too many login attempts from this IP, please try again after 15 minutes'}
});

export default function handler(req, res) {
  // Apply rate limiting
  limiter(req, res, () => {
    const { username, password } = req.body;

    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  });
}
