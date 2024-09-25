import NewPostDto from '../DTO/newPostDTO';
import Post from '../models/postModel';
import { getFileData, saveFileData } from '../config/fileDataLayer';

class PostService {
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
}

export default PostService;
