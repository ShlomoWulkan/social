import express from 'express';
const router = express.Router();
router.get('/', async (req, res) => {
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
router.post('/', async (req, res) => {
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
router.patch('/like/:id', async (req, res) => {
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
export default router;
