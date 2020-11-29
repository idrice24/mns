export class Comment {
// tslint:disable-next-line: max-line-length
favorite = false;	notablePeople: Person[];
// tslint:disable-next-line: max-line-length
constructor(	public name: string,	public code: number, public like: number, public unlike: number, public email: string,	public comment: string,	public previousComment: string	){	this.notablePeople = []; }
}

export class Person{	name: string;	title: string;	email: string;
}
