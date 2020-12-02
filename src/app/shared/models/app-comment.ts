export class Comment {
// tslint:disable-next-line: max-line-length
favorite = false;	notablePeople: Person[];
// tslint:disable-next-line: max-line-length
constructor(	public comment: string,	 public code: number,	public previousComment: string	){	this.notablePeople = []; }
}

export class Person{	name: string;	title: string;	email: string;
}
