export interface CommentIf {
    id: number
    body: string
    string: string
}

export class Comment implements CommentIf {
    constructor(
        public id: number = 1,
        public body: string = '',
        public string: string = ''
    ) {}
}