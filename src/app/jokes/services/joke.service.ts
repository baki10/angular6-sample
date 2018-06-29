import {Injectable} from '@angular/core';
import {Joke} from '../joke';

@Injectable()
export class JokeService {

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
    ];
  }

  addJoke(joke) {
    // Push new joke to the front
    this.jokes.unshift(joke);
  }

  deleteJoke(joke) {
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }
}
