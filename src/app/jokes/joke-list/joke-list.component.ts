import {Component} from '@angular/core';
import {JokeService} from '../services/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
  providers: [JokeService]
})
export class JokeListComponent {

  private jokeService: JokeService;

  constructor(jokeService: JokeService) {
    this.jokeService = jokeService;
  }

  addJoke(joke) {
    // Push new joke to the front
    this.jokeService.addJoke(joke);
  }

  deleteJoke(joke) {
    this.jokeService.deleteJoke(joke);
  }

}
