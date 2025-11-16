import React from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const StatistikBaca = () => {
    const data = [
    { name: "Sen", pv: 40 },
    { name: "Sel", pv: 55 },
    { name: "Rab", pv: 45 },
    { name: "Kam", pv: 60 },
    { name: "Jum", pv: 50 },
    { name: "Sab", pv: 65 },
    { name: "Min", pv: 80 },
  ];
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Statistik Membaca
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
  )
}

export default StatistikBaca