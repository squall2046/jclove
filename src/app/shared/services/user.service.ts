import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      userName: 'Mu_Yan',
      firstName: 'Joanna',
      lastName: 'Wu',
      email: 'joanna.wu@gmail.com',
      userImage: './../../../assets/images/logo/joanna.jpg',
      rewards: {
        star: 0,
        rainbow: 0,
        stars: [],
        rainbows: [],
      }
    },
    {
      userName: 'Mu_Zhi',
      firstName: 'Chloe',
      lastName: 'Wu',
      email: 'chloe.wu@gmail.com',
      userImage: './../../../assets/images/logo/chloe.jpg',
      rewards: {
        star: 0,
        rainbow: 0,
        stars: [],
        rainbows: [],
      }
    }
  ]


  constructor() { }
}
