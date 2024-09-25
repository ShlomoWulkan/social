import NewPostDto from '../DTO/newPostDTO';
import Post from '../models/postModel';
import { getFileData, saveFileData } from '../config/fileDataLayer';

class PostService {

    public static async getAllPosts(): Promise<Post[]> {
        const posts: Post[] = await getFileData<Post>('posts') as Post[];
        if (!posts)  return [];
        return posts;   
    }

    public static async getPostById(id: string): Promise<Post | undefined> {
        const posts: Post[] = await getFileData<Post>('posts') as Post[];
        if (!posts)  return undefined;
        return posts.find(post => post.id === id);
    }

    public static async createNewPost(newPost: NewPostDto): Promise<boolean> {
        const { authorId, content, hashtags, ref } = newPost;
        const post: Post = new Post(
           authorId,
           content,
           hashtags,
           ref
        );

        let posts: Post[] = await getFileData<Post>('posts') as Post[];
        if (!posts)  posts = [];
        posts.push(post);
        return await saveFileData('posts', posts);
    }

    public static async createLikePost(postId: string, userId: string): Promise<Post | undefined> {
        const posts: Post[] = await getFileData<Post>('posts') as Post[];
        if (!posts)  return undefined;
        const post = posts.find(post => post.id === postId);
        if (!post)  return undefined;
        post.likes = post.likes || [];
        post.likes.push(userId);
        await saveFileData('posts', posts);
        return post;
    }
}

export default PostService;
