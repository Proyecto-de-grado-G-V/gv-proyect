import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import '../../styles/report.css';
import expedientesData from '@/data/expedientes.json'

const Report = () => {
  const [materiaData, setMateriaData] = useState<any>([]);
  const [fechaData, setFechaData] = useState<any>([]);
  const [estadoData, setEstadoData] = useState<any>([]);

  const generateReport = () => {
    const materiaCount: any = {};
    const fechaCount: any = {};
    const estadoCount: any = {
      Activo: 0,
      Abandonado: 0,
      Finalizado: 0,
    };

    expedientesData.forEach((exp) => {
      if (materiaCount[exp.materia]) {
        materiaCount[exp.materia] += 1;
      } else {
        materiaCount[exp.materia] = 1;
      }

      const fecha = exp.fechaCreacion.split("T")[0];
      if (fechaCount[fecha]) {
        fechaCount[fecha] += 1;
      } else {
        fechaCount[fecha] = 1;
      }

      if (estadoCount[exp.estado]) {
        estadoCount[exp.estado] += 1;
      } else {
        estadoCount[exp.estado] = 1;
      }
    });

    setMateriaData(Object.keys(materiaCount).map((key) => ({ name: key, value: materiaCount[key] })));
    setFechaData(Object.keys(fechaCount).map((key) => ({ name: key, value: fechaCount[key] })));
    setEstadoData(Object.keys(estadoCount).map((key) => ({ name: key, value: estadoCount[key] })));
  };

  useEffect(() => {
    generateReport();
  }, []);

  return (
    <div>
      <h2>Reporte de Expedientes</h2>

      <h3>Expedientes por Materia</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={materiaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#c49b63" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Expedientes por Estado</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={estadoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#1a1205" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Report;
