// Model class for Member
export class Member {
    id: string;
    name: string;
    joinDate: string;
    status: string;
    sections: Section;
  }

  // Model class for Section
  export class Section {
    first: string;
    second: string;
    third: string;
    fourth: string;
  }