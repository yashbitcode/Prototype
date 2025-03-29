import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LChart = ({chartData}) => {
    return (
        <div className="w-full max-w-[700px] h-[300px]"> 

			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={chartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="xaxis" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pointValue" stroke="#8884d8" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
        </div>
      );
}

export default LChart;