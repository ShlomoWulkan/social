interface NewPostDto {
    authorId: string
    content: string
    hashtags: string[]
    ref?: string
}

export default NewPostDto