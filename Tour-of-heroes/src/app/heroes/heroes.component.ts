import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

 //  hero = {
 //        id:1,
 //        name: "Deku",
 //        power: "One For All",
 //        origin: "My Hero Academica"
 // }
 heroesList :Hero[];
 clickedHero:Hero;
 // onClick(hero: Hero): void{
 //       this.clickedHero = hero;
 // }
  getHeroes(): void {
        // this.heroesList = this.heroService.getHeroes()
        // Cannot subscribe for some reason
        this.heroService.getHeroes().subscribe(heroes => this.heroesList = heroes);
  }
  add(name :string){
    name = name.trim();
    let power = name.toUpperCase();
    let origin = name.toLowerCase();
    if(!name){return;}
    this.heroService.addHero({name,power,origin} as Hero)
      .subscribe(hero => {
        this.heroesList.push(hero);
      })

  }
  delete(hero: Hero): void{
    this.heroesList = this.heroesList.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  ngOnInit() {
        this.getHeroes();
  }
}
