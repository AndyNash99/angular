import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillin',
    id: uuid(),
    power: 1000
  }, {
    name: 'Goku',
    id: uuid(),
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    for (let i = 0; i < this.characters.length; i++) {
      if (this.characters[i].id === id) {
        this.characters.splice(i, 1);
        break;
      }
    }
  }
}
