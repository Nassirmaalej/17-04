import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rule } from '../Services/rule';
import { Router } from '@angular/router';
import { RuleService } from "../Services/rule.service";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  rules: Array<any>;
  rule: Observable<rule[]>;
  connect: Observable<rule[]>;
  clickedEvent = false;

  constructor(private ruleService: RuleService,
    private router: Router) { }
  public isCollapsed = true;

  
  public data = [
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},];
    title = 'angulardatatables';
    dtOptions: any = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'print']


  } } ;


  getconnect(){
  this.clickedEvent = true;
  this.ruleService.getconnect().subscribe(data => {
  this.connect = data
  
    console.log(this.connect)
  });
  console.log('connected');
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  async getevent() {
    this.clickedEvent = true;
    this.ruleService.getevent().subscribe(data => {
    this.rule = data
      console.log(this.rule)
    });
    console.log('geting data ...');
    await this.delay(3000);
    this.getevent();
  
  }

  }



