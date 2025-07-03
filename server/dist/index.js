"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const clientDist = path_1.default.join(__dirname, '../../client/dist');
// Serve static frontend
app.use(express_1.default.static(clientDist));
// API routes
app.use('/api', api_1.default);
// Handle invalid /api routes
app.use('/api', (_req, res) => {
    res.status(404).json({ message: 'API route not found' });
});
// Catch-all for React Router frontend
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(clientDist, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
