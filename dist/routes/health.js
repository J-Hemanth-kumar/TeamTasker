"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = __importDefault(require("@/config/redis"));
const database_1 = __importDefault(require("@/config/database"));
const router = express_1.default.Router();
router.get('/health', async (req, res) => {
    try {
        // Check database
        await database_1.default.authenticate();
        // Check Redis
        await redis_1.default.ping();
        res.status(200).json({ status: 'OK', message: 'Backend, database, and Redis are running' });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        res.status(500).json({ status: 'ERROR', message: 'Health check failed', error: errorMessage });
    }
});
exports.default = router;
