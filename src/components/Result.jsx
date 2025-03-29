import { useSelector } from "react-redux";
import LChart from "./LineChart";
import Summary from "./Summary";

const Result = () => {
    const summary = useSelector((store) => store.current.summary);
    const chart = useSelector((store) => store.current.chart);

    return (
        <div className="w-full bg-white mt-[1rem] rounded-[5px] p-[1rem]">
            <Summary summary={summary} />

            <div className="p-[10px] mt-[1rem] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.1)] rounded-[5px] w-full">
                <LChart chartData={chart} />
            </div>
        </div>
    );
};

export default Result;