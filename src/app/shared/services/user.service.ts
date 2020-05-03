import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      userId: 150001,
      firstName: 'Joanna',
      lastName: 'Wu',
      userName: 'Mu_Yan',
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
      userId: 190001,
      firstName: 'Chloe',
      lastName: 'Wu',
      userName: 'Mu_Zhi',
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
