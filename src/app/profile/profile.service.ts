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
  };

  rewards = {
    stars: {
      number: 0,
      colors: ["red", "orange", "yellow", "green", "blue", "purple"],
    }
  }

  constructor() { }
}
