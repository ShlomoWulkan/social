"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/:id', async (req, res) => {
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
router.post('/follow', async (req, res) => {
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
