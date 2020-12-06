import { Topic } from './topic';

export class Comment {
  // tslint:disable-next-line: max-line-length
  favorite = false; notablePeople: Person[];
  // tslint:disable-next-line: max-line-length
  constructor(public comment: string, public code: number, public previousComment: string) { this.notablePeople = []; }
}

export class Person {
  name: string; title: string; email: string;
}

// @Idrice: Use Suitable name ie. TopicComment, BlogComment
export interface TopicComment {
  id?: number;
  content?: string;
  topicId?: number; // Relationship with Topic
  topic?: Topic; // // Relationship with Topic
}
