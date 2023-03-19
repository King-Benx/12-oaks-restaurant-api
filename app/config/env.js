require('dotenv/config');

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 4001;
export const YELP_API_KEY = process.env.YELP_API_KEY;
