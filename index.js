// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Simulated sensor data
    const sensorData = {
        humidity: 55,
        temperature: 23,
        nitrogen: 200,
    };

    // Update sensor values
    const updateSensorData = () => {
        document.getElementById("humidityValue").textContent = `${sensorData.humidity}%`;
        document.getElementById("temperatureValue").textContent = `${sensorData.temperature}°C`;
        document.getElementById("nitrogenValue").textContent = `${sensorData.nitrogen}ppm`;

        // Simulate real-time changes
        sensorData.humidity = Math.random() * 100;
        sensorData.temperature = (Math.random() * 15 + 20).toFixed(1);
        sensorData.nitrogen = Math.random() * 300;
    };

    setInterval(updateSensorData, 3000); // Update every 3 seconds

    // Chart.js for trends
    const ctx = document.getElementById("dataChart").getContext("2d");
    const dataChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["1 min", "2 min", "3 min", "4 min", "5 min"],
            datasets: [
                {
                    label: "Humidity (%)",
                    borderColor: "#74c69d",
                    data: [55, 60, 65, 70, 75],
                },
                {
                    label: "Temperature (°C)",
                    borderColor: "#52b788",
                    data: [20, 22, 24, 23, 25],
                },
                {
                    label: "Nitrogen (ppm)",
                    borderColor: "#40916c",
                    data: [100, 150, 200, 250, 300],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});

