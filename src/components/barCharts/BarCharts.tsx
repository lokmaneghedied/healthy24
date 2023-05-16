import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import './barCharts.css'

interface State {
  options: {
    chart: {
      id: string;
    };
    xaxis: {
      categories: string[];
    };
    dataLabels: {
      enabled: boolean;
    };
    plotOptions: {
      bar: {
        borderRadius: number;
      };
    }
    tooltip: {
      enabled: boolean;
      custom: ({ series, seriesIndex, dataPointIndex, w }: any) => string;
    };
    };
  series: {
    data: number[];
  }[];
}

class BarCharts extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ['01', '02', '03', '04', '05', '06'],
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
          },
        },
        tooltip: {
          enabled: true,
          custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            const value = series[seriesIndex][dataPointIndex];
            return value.toString();
          },
        },
      },
      series: [
        {
          data: [30, 40, 50, 25, 35, 35],
        },
      ],
    };
  }

  render() {
    return (
      <div className="appex">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarCharts;