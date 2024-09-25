import express, { Router , Request, Response } from 'express';
import NewPostDto from '../DTO/newPostDTO';
import PostService from '../services/postService';
const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
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
router.post('/', async (
    req: Request<any, any, NewPostDto>, 
    res: Response
): Promise<void> => {
    const result = await PostService.createNewPost(req.body);
    try {
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

// protected route
router.patch('/like/:id', async (req: Request, res: Response): Promise<void> => {
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