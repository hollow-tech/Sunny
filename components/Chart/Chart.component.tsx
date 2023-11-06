import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartStyled } from "./Chart.styles";
const data = [
  {
    usd: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "15.06.2021",
    usd: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "29.06.2021",
    usd: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "07.07.2021",
    usd: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "07.08.2021",
    usd: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12.08.2021",
    usd: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "18.09.2021",
    usd: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12.10.2021",
    usd: 5000,
    pv: 4300,
    amt: 2100,
  },
];

const CustomizedAxisTick = ({ x, y, stroke, payload }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
        {`USD ${payload.value}`}
      </text>
    </g>
  );
};

export const Chart = (props: any) => {
  return (
    <ChartStyled {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            left: 30,
          }}
        >
          <CartesianGrid horizontal vertical={false} strokeWidth={2} />
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis tick={<CustomizedAxisTick />} tickCount={4} axisLine={false} tickLine={false} />
          <Tooltip />
          <Area type="linear" dataKey="usd" fill="none" stroke="#00439F" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartStyled>
  );
};
