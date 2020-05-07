export class User {
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userImage?: string;
  rewards?: {
    star?: number;
    rainbow?: number,
    stars?: number[],
    rainbows?: number[],
  }
}
