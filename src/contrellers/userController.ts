import express, { Router , Request, Response } from 'express';
import NewUserDto from '../DTO/newUserDto';
import UserService from '../services/userService';
const router: Router = express.Router();

router.post('/register', async (
    req: Request<any, any, NewUserDto>, 
    res: Response
): Promise<void> => {
    try {
        const result = await UserService.createMNewUser(req.body);
        if (result) {
            res.status(200).json({
            error: false,
            message: 'Success',
            data: req.body
            })
        }  
        else {
            res.status(500).json({ 
                error: true,
                message: 'Failed'         
            });
        }             
    } catch (error) {
        res.status(400).json({ 
            error: true,
            message: error         
        });
    }
})

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
