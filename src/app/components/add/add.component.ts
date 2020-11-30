import { Component, OnInit } from '@angular/core';
import { RegleService } from '../Services/regle.service';
import { Router } from '@angular/router';
import { Regle } from '../Services/regle';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  regle: Regle = new Regle();
  submitted = false;
  constructor( private regleService: RegleService , private router: Router ) { }

  ngOnInit(): void {

    this.regle=this.regleService.getter()
    console.log(this.regle)
    this.regle = new Regle();
  }


  newRegle(): void {
    this.submitted = false;
    this.regle = new Regle();
  }

  save() {
    this.regleService.createregle(this.regle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.regle = new Regle();
    this.router.navigate(['/crud']);

    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

 

  }















