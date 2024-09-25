import express, { Router , Request, Response } from 'express';
const router: Router = express.Router();

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
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

router.post('/follow', async (req: Request, res: Response): Promise<void> => {
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

router.get('/search', async (req: Request, res: Response): Promise<void> => {
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

// protected route
router.get('/profile', async (req: Request, res: Response): Promise<void> => {
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

// protected route
router.get('/followers', async (req: Request, res: Response): Promise<void> => {
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

// protected route
router.get('/following', async (req: Request, res: Response): Promise<void> => {
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
