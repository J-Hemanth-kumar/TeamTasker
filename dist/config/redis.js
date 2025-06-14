"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const redisClient = redis_1.default.createClient({});
redisClient.enableLegacyMode?.();
redisClient.connect().catch(console.error);
redisClient.on('connect', () => {
    console.log('Redis connected');
});
redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});
exports.default = redisClient;
