import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Statistics = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://parcel-management-server-sigma.vercel.app/itemsCart')
      .then(res => res.json())
      .then(data => {
        console.log('Data from API:', data); // Log the data to inspect its structure
        // Map data to the format expected by ApexCharts
        const chartData = data.map(item => ({
          x: item.delivery_date,
          y: item.parcel_weight,
        }));
        // Update state with the mapped data
        setCarts(chartData);
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Set loading to false in case of an error
        setLoading(false);
      });
  }, []);

  // If data is still loading, display a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // If data has loaded, render the chart
  return (
    <div  className="bg-purple-800">
      <Chart data-aos="fade-down"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
        type="bar"
        height={500}
        series={[
          {
            name: "Social Media",
            data: carts,
          },
        ]}
        options={{
          colors: ["#f90000"],
          theme: { mode: "light" },
          xaxis: {
            tickPlacement: "on",
            categories: carts.map(item => item.x),
            title: {
              text: 'Delivery Date',
              style: { color: '#f90000', fontSize: 30 },
            },
          },
          yaxis: {
            labels: {
              formatter: (val) => `${val}`,
              style: {
                fontSize: '15', colors: ["#f90000"]
              },
            },
            title: {
              text: "Parcel Weight",
              style: { fontSize: 18 },
            },
          }
        }}
      />
    </div>
  );
};

export default Statistics;
