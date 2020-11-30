import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegleService } from '../Services/regle.service';
import { Observable } from 'rxjs';
import { Regle } from '../Services/regle';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  regle: Observable<Regle[]>;
  regles: Array<any>;
  clickedEvent = false;

  constructor(private regleService: RegleService,
    private router: Router) {}

  ngOnInit() {
    this.clickedEvent = true;
    this.regleService.getregleList().subscribe(data => {
    this.regle = data
      console.log(this.regle)
    });
    console.log('geting data ...');
  }

 

    
  

  deleteregle(regle) {
    this.regleService.deleteregle(regle)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.router.navigate(['/crud']);

  }

  updateregle(regle) {
    this.regleService.setter(regle);
    this.router.navigate(['/add']);

  }










}
