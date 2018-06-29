import {Injectable} from '@angular/core';
import {Joke} from '../joke';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JokeService {

  private apiUrl = 'http://127.0.0.1:8080/jokes';

  jokes: Joke[];

  constructor(private http: HttpClient) {
    this.getJokesFromBackend();
  }

  private getJokesFromBackend() {
    this.jokes = [];

    this.http.get(this.apiUrl).subscribe(
      values => {
        for (let i = 0; i < values.length; i++) {
          const joke = new Joke(values[i].setup, values[i].punchline);
          this.addJoke(joke);
        }
      }
    );
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
