import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './heroes-list'
import {MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  // Non-observable synchronous code
 //  getHeroes() :Hero[]{
 //         this.messageService.add('HeroService: fetched heroes');
 //        return HEROES;
 // }
 // getHero(id: number) :Hero{
 //   this.messageService.add(`HeroService: Fetched hero id:${id}`);
 //   return HEROES.find(hero => hero.id === id);
 // }
  /*Observable bug */
  private heroesUrl = 'api/heroes';
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation='operation',result?: T){
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }
  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes',[]))
      );
  }
  // getHeroes() :Observable<Hero[]>{
  //       this.messageService.add('HeroService: fetched heroes');
  //       return of(HEROES);
  // }
  getHero(id: number) :Observable<Hero>{
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url)
  .pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
  }

  updateHero (hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  return this.http.put(this.heroesUrl, hero, httpOptions)
  .pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

addHero(hero :Hero) : Observable<Hero>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  .pipe(
    tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
}

deleteHero (hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.delete<Hero>(url, httpOptions)
  .pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}

}
