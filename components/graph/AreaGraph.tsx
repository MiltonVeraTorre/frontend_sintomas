import React from "react";
import { GraficaData } from "@/types/AppTypes";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Registro } from "@/types/ModelTypes";

interface Props {
  data: Registro[];
  startGradient ?: string
  endGradient ?: string
  strokeColor ?:string
}

export default function AreaGraph({ data,startGradient="#38BDF8",endGradient="#E0F2FE",strokeColor= "#38BDF8"}: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={600}
        height={300}
        data={data}
      >
        <defs>
          <linearGradient id="colorGradiente" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={startGradient} stopOpacity={0.2} />
            <stop offset="100%" stopColor={endGradient} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="valor"
          stroke={strokeColor}
          activeDot={{ r: 8 }}
          fillOpacity={1}
          fill="url(#colorGradiente)"
        >

        <LabelList  dataKey="valor" position="top" />

        </Area>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
