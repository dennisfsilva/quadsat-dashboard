import React from 'react';
import Chart from 'react-apexcharts';

const FlightPathChart3D = ({ data }) => {
  // Extracting data for latitude, longitude, altitude, and timestamps
  const latitudeData = data.measurements.map((measurement) => measurement.latitude);
  const longitudeData = data.measurements.map((measurement) => measurement.longitude);
  const altitudeData = data.measurements.map((measurement) => measurement.altitude);
  const timestamps = data.measurements.map((measurement) => measurement.timestamp);

  // Configuration options for the ApexCharts
  const chartOptions = {
    chart: {
      id: 'flight-path-3d-chart',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 500,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    xaxis: {
      categories: timestamps,
      type: 'datetime',
      title: {
        text: 'Timestamp',
      },
      tickAmount: 10,
    },
    yaxis: [
      {
        title: {
          text: 'Latitude',
        },
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Longitude',
        },
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Altitude',
        },
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
    ],
    grid: {
      borderColor: '#f1f1f1',
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
  };

  // Data series for the ApexCharts
  const chartSeries = [
    {
      name: 'Latitude',
      data: latitudeData,
    },
    {
      name: 'Longitude',
      data: longitudeData,
    },
    {
      name: 'Altitude',
      data: altitudeData,
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Flight Path 3D</h1>
      {/* ApexCharts component */}
      <Chart options={chartOptions} series={chartSeries} type="line" height={400} />
    </div>
  );
};

export default FlightPathChart3D;
