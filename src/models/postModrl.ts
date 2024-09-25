import { v4 as uuid, v4 } from 'uuid';
class Post {
    public id: string;
    public createdAt: Date;
    public likes: string[] = [];

    constructor(
        public authorId: string,
        public content: string,
        public ref?: string,
    ) {
        this.id = v4();
        this.createdAt = new Date();
    }
}
