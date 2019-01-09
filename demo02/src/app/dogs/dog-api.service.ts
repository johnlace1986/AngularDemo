import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBreed } from './breed';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  private _baseAddress: string = 'https://dog.ceo/api/'

  constructor(private _client: HttpClient) {

  }

  private mapMessage<T>(response: any): Observable<T> {
    const doMap = map((response: any) => {
      return response.message;
    });

    return doMap(response);
  }

  getRandomImage(): Observable<string> {
    return this.mapMessage<string>(this._client.get<any>(this._baseAddress + 'breeds/image/random'));
  }

  getBreeds(): Observable<Array<IBreed>> {

    const doMap = map((response: any) => {
      let message = response.message;

      let breeds = new Array<IBreed>();

      for (let breed in message) {

        let subBreeds = message[breed];

        breeds.push({
          name: breed,
          subBreeds: subBreeds
        });
      }

      return breeds;
    });

    return doMap(this._client.get<any>(this._baseAddress + 'breeds/list/all'));
  }

  getByBreed(breed: string): Observable<Array<string>> {
    return this.mapMessage<Array<string>>(this._client.get<any>(this._baseAddress + 'breed/'+ breed + '/images'))
  }
}
