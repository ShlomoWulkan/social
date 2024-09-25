import express, { Router , Request, Response } from 'express';
import NewPostDto from '../DTO/newPostDTO';
import PostService from '../services/postService';
import Post from '../models/postModel';
const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<Post[]> => {
    try {
        const result = await PostService.getAllPosts();
        if (result) {
            res.status(200).json({
            error: false,
            message: 'Success',
            data: result
        })
        }   
        else {
            res.status(500).json({ 
                error: true,
                message: 'Failed'         
            });
        }  
        return result;           
    } catch (error) {
        res.status(400).json({ 
            error: true,
            message: error         
        });
        throw error
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


router.get('/search/', async (req: Request, res: Response): Promise<Post[] | undefined> => {
    try {
        const data = await PostService.getAllPosts();
        const result = data.filter((post: Post) => post.content.includes(req.query.q as string));        
        if (result) {
             res.status(200).json({
            error: false,
            message: 'Success',
            data: result
        })
        }
        else {
            res.status(500).json({ 
                error: true,
                message: 'Failed'         
            });
        }
        return result
       
    } catch (error) {
        res.status(400).json({ 
            error: true,
            message: error         
        });
    }
})

router.get('/:id', async (req: Request, res: Response): Promise<Post | undefined> => {
    try {
        const result = await PostService.getPostById(req.params.id);
        if (result) {
             res.status(200).json({
            error: false,
            message: 'Success',
            data: result
        })
        }
        else {
            res.status(500).json({ 
                error: true,
                message: 'Failed'         
            });
        }
        return result
       
    } catch (error) {
        res.status(400).json({ 
            error: true,
            message: error         
        });
    }
})

// protected route
router.patch('/like', async (
    req: Request,  
    res: Response
): Promise<Post | undefined> => {
    try {
        const result = await PostService.createLikePost(req.body.postId, req.body.userId);
        if (result) {
            res.status(200).json({
                error: false,
                message: 'Success',
                data: result
            })
        }
        else {
            res.status(500).json({ 
                error: true,
                message: 'Failed'         
            });
        }
        return result
    } catch (error) {
        res.status(500).json({ 
            error: true,
            message: error         
        });
    }
})
export default router