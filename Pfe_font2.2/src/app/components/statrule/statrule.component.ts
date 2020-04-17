import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RuleService } from '../Services/rule.service';
import { rule } from '../Services/rule';

import {Chart} from 'Chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stat',
  templateUrl: './statrule.component.html',
  styleUrls: ['./statrule.component.css']
})
export class StatruleComponent  {

  
  constructor(private ruleService1: RuleService,private httpClient: HttpClient,
    private router: Router) { }
  public isCollapsed = true;
  rules: Array<any>;

  
  clickedEvent = false;
  connect : any;
  url = 'http://localhost:8081/regle/listrule';  
  data: rule[];  
  date = ["Parcours","Routing"];  
  Run = [1,1,200,2,3,3,3,3,3,3,3,3,3];  
  Linechart = [];  
  myChart=[] ;
  calculRouting:Observable<rule[]>;
  calculParcours:Observable<rule[]>;
  calculpreCalcul:Observable<rule[]>;

  statpreCalculdelete:Observable<rule[]>;
  statroutingdelete:Observable<rule[]>;
  statParcoursdelete:Observable<rule[]>;

  statpreCalculupdate:Observable<rule[]>;
  statroutingupdate:Observable<rule[]>;
  statParcoursupdate:Observable<rule[]>;


  getx() {


    this.clickedEvent = true;
    this.ruleService1.getcalculRouting().subscribe(data => {
    this.calculRouting= data
    console.log('geting  (number of Routing)...');
      console.log(this.calculRouting)
    });

    this.clickedEvent = true;
    this.ruleService1.getcalculParcours().subscribe(data => {
    this.calculParcours= data
    console.log('geting  (number of PARCOURS)...');
      console.log(this.calculParcours)  
    });

    this.clickedEvent = true;
    this.ruleService1.getcalculpreCalcul().subscribe(data => {
    this.calculpreCalcul= data
    console.log('geting  (number of preCalcul)...');
      console.log(this.calculpreCalcul)  
    });







    this.clickedEvent = true;
    this.ruleService1.getstatpreCalculdelete().subscribe(data => {
    this.statpreCalculdelete= data
    console.log('geting  (number of preCalculdelete)...');
      console.log(this.statpreCalculdelete)
    });

    this.clickedEvent = true;
    this.ruleService1.getstatroutingdelete().subscribe(data => {
    this.statroutingdelete= data
    console.log('geting  (number of statroutingdelete)...');
      console.log(this.statroutingdelete)
    });
    this.clickedEvent = true;
    this.ruleService1.getstatParcoursdelete().subscribe(data => {
    this.statParcoursdelete= data
    console.log('geting  (number of statParcoursdelete)...');
      console.log(this.statParcoursdelete) 
    });



 



    this.clickedEvent = true;
    this.ruleService1.getstatpreCalculupdate().subscribe(data => {
    this.statpreCalculupdate= data
    console.log('geting  (number of statpreCalculupdate)...');
      console.log(this.statpreCalculupdate)
    });

    this.clickedEvent = true;
    this.ruleService1.getstatroutingupdate().subscribe(data => {
    this.statroutingupdate= data
    console.log('geting  (number of statroutingupdate)...');
      console.log(this.statroutingdelete)
    });
    this.clickedEvent = true;
    this.ruleService1.getstatParcoursupdate().subscribe(data => {
    this.statParcoursupdate= data
    console.log('geting  (number of statParcoursupdate)...');
      console.log(this.statParcoursupdate) 
    });





    this.httpClient.get(this.url).subscribe((result: rule[]) => {  
      result.forEach(x => {  
        this.date.push(x.date);  
      
      });  
      console.log(this.date);
      this.Linechart = new Chart('canvas', {  
        type: 'doughnut',  
        data: {  
         
        

          datasets: [  
            {  
              data: [this.calculRouting,this.calculParcours, this.calculpreCalcul] ,
              borderColor: '#3cb371',  
               backgroundColor: [  
                "#00FFEC",  
                "#17A7B6",  
                "#0BF57C",  
              
              ],   
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  




    




    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["PreCalcul", "Parcours", "Routing"],
        datasets: [{
          label: "number",
          backgroundColor: "#FB130C",
          borderColor: "rgba(2,117,216,1)",
          data: [this.statpreCalculdelete, this.statParcoursdelete,this.statroutingdelete]
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 25,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });


    
    var ctx = document.getElementById("myBarChart1");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["PreCalcul", "Parcours", "Routing"],
        datasets: [{
          label: "number",
          backgroundColor: "#0195FC",
          borderColor: "rgba(2,117,216,1)",
          data: [this.statpreCalculupdate, this.statParcoursupdate,this.statroutingupdate]
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 25,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
    



      
    var ctx = document.getElementById("myAreaChart1");
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Routing", "Parcours", "PreCalcul"],
        datasets: [{
          label: "Sessions",
          lineTension: 0.3,
          backgroundColor: "#CEFEF5",
          borderColor: "#06D4AD",
          pointRadius: 5,
          pointBackgroundColor: "#06D4AD",
          pointBorderColor: "#06D4AD",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data:  [this.calculRouting,this.calculParcours, this.calculpreCalcul] ,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 10,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });

    var ctx = document.getElementById('myChartnchalah');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },
    
        // Configuration options go here
        options: {}
    });





  }

 


  
///


  
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  ngOnInit() {}

}
