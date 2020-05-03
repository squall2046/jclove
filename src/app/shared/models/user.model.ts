export class User {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  userImage: string;
  rewards: {
    star: number;
    rainbow: number,
    stars: number[],
    rainbows: number[],
  }
}
