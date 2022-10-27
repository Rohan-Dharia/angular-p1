import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Black-Noir' },
      { id: 2, name: 'Omega-Man' },
      { id: 3, name: 'Invinsible' },
      { id: 4, name: 'Starlight' },
      { id: 5, name: 'Bizzaro' },
      { id: 6, name: 'Batman' },
      { id: 7, name: 'Eternity' },
      { id: 8, name: 'Magma' },
      { id: 9, name: 'Tornado' }
    ];
    return {heroes};
  }

 
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}