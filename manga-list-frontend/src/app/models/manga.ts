import { Author } from "./author";
import { Illustrator } from "./illustrator";
import { Publisher } from "./publisher";

export interface Manga{
    id: number;
    title: string;
    description: string;
    author: Author;
    coAuthor: Author;
    illustrator: Illustrator;
    coIllustrator: Illustrator;
    publisher: Publisher;
}