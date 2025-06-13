"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const database_1 = __importDefault(require("./config/database"));
const auth_1 = __importDefault(require("./routes/auth"));
const project_1 = __importDefault(require("./routes/project"));
const task_1 = __importDefault(require("./routes/task"));
const health_1 = __importDefault(require("./routes/health"));
const sockets_1 = require("./sockets");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use('/api/auth', auth_1.default);
app.use('/api/projects', project_1.default);
app.use('/api/tasks', task_1.default);
app.use('/api', health_1.default);
app.get('/', (req, res) => {
    res.send('Backend server is running');
});
database_1.default.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));
database_1.default.sync({ force: true }).then(() => {
    console.log('Database synced');
    const server = (0, http_1.createServer)(app);
    (0, sockets_1.registerSocket)(server);
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
