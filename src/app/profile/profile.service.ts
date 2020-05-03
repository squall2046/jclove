import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: User = {
    userId: 150001,
    firstName: 'Joanna',
    lastName: 'Wu',
    userName: 'Mu Yan',
    email: 'joanna.wu@gmail.com',
    userImage: './../../../assets/images/logo/joanna.jpg',
    rewards: {
      star: 0,
      rainbow: 0,
      stars: [],
      rainbows: [],
    }
  };

  constructor() { }
}
