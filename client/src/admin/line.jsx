import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export default function Line() {
  const [registrationData, setRegistrationData] = useState({ customers: [], sellers: [] });

  useEffect(() => {
    axios.get("http://localhost:8080/api/getRegistrationTimes")
      .then((response) => {
        setRegistrationData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching registration times:", error);
      });
  }, []);

  const state = {
    series: [
      {
        name: "Customer Registrations",
        data: registrationData.customers,
      },
      {
        name: "Seller Registrations",
        data: registrationData.sellers,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "User Registration Times",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
        title: {
          text: "Count",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    },
  };

  return (
    <div className="helo">
      <div className="he">hello</div>
      <div id="chart">
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}
