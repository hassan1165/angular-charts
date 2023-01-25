import { Component } from '@angular/core';
import { BarChartOption, ChartData, ChartOption, ChartView, DonutChartView, PieChartView } from 'ngx-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-charts';

  // pie chart
  chartData: ChartData[] = [
    { name: "India", value: 132, color: "#61b15a" },
    { name: "Nepal", value: 772, color: "#adce74" },
    { name: "USA", value: 142, color: "#fff76a" },
    { name: "UK", value: 112, color: "#ffce89" },
    { name: "Brazil", value: 162, color: "#d8f8b7" }
  ];
  pieView: PieChartView= {
    height:400,
    width:400,
    radius:160
  }
  chartOptions: ChartOption = {
    showLegend: true,
    legendTitle: 'Total'
  }

  // donut chart
  chartData2: ChartData[] = [
    { name: "India", value: 132, color: "#61b15a" },
    { name: "Nepal", value: 772, color: "#adce74" },
    { name: "USA", value: 142, color: "#fff76a" },
    { name: "UK", value: 112, color: "#ffce89" },
    { name: "Brazil", value: 162, color: "#d8f8b7" }
  ];
  donutView: DonutChartView = {
    height: 400,
    width: 400,
    radius: 160,
    donutSize:40
  }
  chartOptions2: ChartOption = {
    showLegend: true,
    legendTitle: 'Total'
  }
}
