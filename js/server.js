"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authController_1 = __importDefault(require("./src/contrellers/authController"));
const postController_1 = __importDefault(require("./src/contrellers/postController"));
const userController_1 = __importDefault(require("./src/contrellers/userController"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '3001');
app.use(express_1.default.json());
app.use('/auth', authController_1.default);
app.use('/post', postController_1.default);
app.use('/user', userController_1.default);
app.listen(port, () => console.log(`Server running on port ${port}`));
