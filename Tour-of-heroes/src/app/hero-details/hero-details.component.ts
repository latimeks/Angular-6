// Straightforward implementation
import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';

// For implementation of the router
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
 @Input() hero:Hero;
  constructor(private route: ActivatedRoute, private heroService :HeroService, private location :Location) { }
  getHero() :void{
    const id = +this.route.snapshot.paramMap.get('id');
    //this.hero = this.heroService.getHero(id);
    //For observable
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  write():void{
    this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
  ngOnInit() {
    this.getHero();
  }

}
