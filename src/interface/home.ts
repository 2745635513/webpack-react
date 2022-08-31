export interface NoteCard {
  title: string;
  children: {
    id: string,
    title: string,
    author: string,
  }[];
}
