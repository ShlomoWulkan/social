import express, { Router , Request, Response } from 'express';
const router: Router = express.Router();

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({ 
            error: true,
            message: error         
        });
    }
})

router.post('/logout', async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({ 
            error: true,
            message: error         
        });
    }
})

export default router
