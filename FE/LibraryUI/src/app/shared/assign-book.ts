export class AssignBook {
    constructor(
        public bookId: number,
        public title: string,
        public assignee: string,
        public startDate: Date,
        public dueDate: Date
      ) {  }
}
