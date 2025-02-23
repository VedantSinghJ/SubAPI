import {config} from 'dotenv';

config({path:`.env.${process.env.NODE_ENV || 'development'}.local`})

export const {
    PORT,NODE_ENV,SERVER_URL,
    DB_URL,
    JWT_SECRET,JWT_EXPIRES_IN,
    ARCJET_KEY,ARCJET_ENV,
    QSTASH_TOKEN, QSTASH_URL,} = process.env;