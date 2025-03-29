import Result from "../components/Result";
import ErrorState from "../components/ErrorState";
import useHistoryInfo from "../hooks/useHistoryInfo";

const SpecificHistory = () => {
    const history = useHistoryInfo();

    return (
        <div className="mt-[1rem] w-full">
            <h1 className="text-2xl underline">Search Query: {history.searchQuery}</h1>
            {
                !history.result.error ? <Result summary={history.result.summary} chart={history.result.chartdata} /> : <ErrorState />
            }
        </div>
    );
};

export default SpecificHistory;