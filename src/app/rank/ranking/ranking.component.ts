import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  users;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.initialUsers();

    this.userService.subsVar = this.userService.ranking.subscribe(() =>
      this.ranking())
  }

  initialUsers() {
    this.userService.getUsers().subscribe(res => {
      this.userService.users = res;
      this.ranking();
      this.users = this.userService.users;
    });
  }

  ranking() {
    // FIRST sort star:
    this.userService.users.sort(this.sortStar);
    // THEN sort rainbow:
    this.userService.users.sort(this.sortRainbow);
    console.log("ranking users", this.userService.users);
  }

  sortRainbow(a, b) {
    const rainbowA = a.rewards.rainbow;
    const rainbowB = b.rewards.rainbow;
    let comparison = 0;
    if (rainbowA > rainbowB) {
      comparison = 1;
    }
    if (rainbowA < rainbowB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  sortStar(a, b) {
    const rainbowA = a.rewards.star;
    const rainbowB = b.rewards.star;
    let comparison = 0;
    if (rainbowA > rainbowB) {
      comparison = 1;
    }
    if (rainbowA < rainbowB) {
      comparison = -1;
    }
    return comparison * -1;
  }
}
