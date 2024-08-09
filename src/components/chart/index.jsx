import React from "react";
import Chart from 'react-apexcharts';

const TransactionChartSummary = ({ expense, income }) => {
  const options = {
    labels: ["Income", "Expense"],
    colors: ["#213ebf", "#FD5E53"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#213ebf", "#FD5E53"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };

  const series = [income, expense];

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
    />
  );
};

export default TransactionChartSummary;
