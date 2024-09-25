"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
router.post('/register', async (req, res) => {
    try {
        const result = await userService_1.default.createNewUser(req.body);
        if (result) {
            res.status(200).json({
                error: false,
                message: 'Success',
                data: req.body
            });
        }
        else {
            res.status(500).json({
                error: true,
                message: 'Failed'
            });
        }
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error
        });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const result = await userService_1.default.getUser(req.params.id);
        if (result) {
            res.status(200).json({
                error: false,
                message: 'Success',
                data: result
            });
        }
        else {
            res.status(500).json({
                error: true,
                message: 'Failed'
            });
        }
        return result;
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error
        });
    }
});
router.post('/follow', async (req, res) => {
    try {
        const result = await userService_1.default.createFollowUser(req.body.userId, req.body.followerId);
        if (result) {
            res.status(200).json({
                error: false,
                message: 'Success',
                data: req.body,
                result
            });
        }
        else {
            res.status(500).json({
                error: true,
                message: 'Failed'
            });
        }
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error
        });
    }
});
router.get('/search', async (req, res) => {
    try {
        res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error
        });
    }
});
// protected route
router.get('/profile', async (req, res) => {
    try {
        res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error
        });
    }
});
// protected route
router.get('/followers', async (req, res) => {
    try {
        res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error
        });
    }
});
// protected route
router.get('/following', async (req, res) => {
    try {
        res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error
        });
    }
});
exports.default = router;
