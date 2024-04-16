import React, { useState, useEffect } from "react";
import mqtt from "mqtt";
import cert from "../emqxsl-ca.crt";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Estudiantes que entraron hoy",
    },
  },
  scales: {
    x: {
      type: 'linear',
      min: 1,
      stepSize: 1,
    }
  }
};

export default function Charts() {
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const client = mqtt.connect(
      "wss://mf631bef.ala.us-east-1.emqxsl.com:8084/mqtt",
      {
        username: "pi3",
        password: "12345",
        cert: cert,
        clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
      }
    );

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe("historial/alumno/#", (err) => {
        if (!err) {
          console.log("Subscribed to topic historial/alumno/#");
        }
      });
    });

    client.on("message", () => {
      setMessageCount((count) => count + 1);
    });

    return () => {
      client.end();
    };
  }, []);

  // Simular datos para el gráfico
  const data = {
    labels: Array.from({ length: 100 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Alumnos que entraron hoy",
        data: Array.from({ length: 100 }, (_, i) => (i + 1 <= messageCount ? 1 : 0)),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h2 className="mt-3 mb-4">Estudiantes que entraron hoy: {messageCount}</h2>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
