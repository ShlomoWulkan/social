import express from 'express';
const router = express.Router();
router.post('/login', async (req, res) => {
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
router.post('/logout', async (req, res) => {
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
