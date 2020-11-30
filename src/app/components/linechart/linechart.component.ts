import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { rule } from '../Services/rule';

@Component({  
  selector: 'app-linechart',  
  templateUrl: './linechart.component.html',  
  styleUrls: ['./linechart.component.css']  
})  
export class LinechartComponent implements OnInit {  
  url = 'http://localhost:8081/regle/listrule';  
  data: rule[];  
  date = [];  
  Run = [2,2,2,2,3,3,3,3,3,3,3,3,3];  
  Linechart = [];  
  myChart=[] ;
  constructor(private httpClient: HttpClient) { }  
  ngOnInit() {  












    this.httpClient.get(this.url).subscribe((result: rule[]) => {  
      result.forEach(x => {  
        this.date.push(x.date);  
      
      });  
      console.log(this.date);
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.date,
        

          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
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
  }  

}


