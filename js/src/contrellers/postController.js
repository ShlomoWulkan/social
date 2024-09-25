"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postService_1 = __importDefault(require("../services/postService"));
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    try {
        const result = await postService_1.default.getAllPosts();
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
        throw error;
    }
});
// protected route
router.post('/', async (req, res) => {
    const result = await postService_1.default.createNewPost(req.body);
    try {
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
router.get('/search/', async (req, res) => {
    try {
        const data = await postService_1.default.getAllPosts();
        const result = data.filter((post) => post.content.includes(req.query.q));
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
router.get('/:id', async (req, res) => {
    try {
        const result = await postService_1.default.getPostById(req.params.id);
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
// protected route
router.patch('/like', async (req, res) => {
    try {
        const result = await postService_1.default.createLikePost(req.body.postId, req.body.userId);
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
        res.status(500).json({
            error: true,
            message: error
        });
    }
});
exports.default = router;
