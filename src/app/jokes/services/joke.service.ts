import {Injectable} from '@angular/core';
import {Joke} from '../joke';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JokeService {

  private apiUrl = 'http://127.0.0.1:8080/jokes';

  jokes: Joke[];

  constructor(private http: HttpClient) {
    this.initJokes();
    this.getJokesFromBackend();
  }

  private initJokes() {
    this.jokes = [];
    this.getJokesFromBackend().subscribe(
      values => {
        for (const value of values) {
          this.addJoke(new Joke(value.setup, value.punchline));
        }
      }
    );
  }

  private getJokesFromBackend(): Observable<any> {
    return this.http.get(this.apiUrl);
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
