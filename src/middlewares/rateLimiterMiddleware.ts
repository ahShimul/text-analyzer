import rateLimit from 'express-rate-limit';

const apiRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
  headers: true,
});

export default apiRateLimiter;
