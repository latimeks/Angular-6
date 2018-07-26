import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
            id:1,
            name: "Deku",
            power: "One For All",
            origin: "My Hero Academica"
     },
      {
            id:2,
            name:"Ichigo",
            power:"Zanpakuto",
            origin:"Bleach"
      },
      {
            id:3,
            name:"Kakarot",
            power:"Kaioken",
            origin:"Dragon Ball"
      },
      {
            id:4,
            name:"Misaka",
            power:"Esper",
            origin:"A Certain Scientific Railgun"
      },
      {
            id:5,
            name:"Straw-hat",
            power:"Devil Fruit",
            origin:"One Piece"
      },
    ];
    return {heroes};
  }
}
