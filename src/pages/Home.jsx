import { Button, Skeleton, TextField } from "@mui/material";
import SearchSuggestions from "../components/SearchSuggestions";
import ErrorState from "../components/ErrorState";
import Result from "../components/Result";
import useHomeData from "../hooks/useHomeData";

const Home = () => {
    const [searchInp, setSearchInp, sugg, loading, fetchSuggestion, handleQueryProcessing, handleBlur, summary, chart, error] = useHomeData();

    return (
        <div className="w-full">
            <div className="w-full min-sm:max-w-[550px] flex gap-[13px]">
                <div className="w-full relative">
                    <TextField label="User Search Query" variant="outlined" className="w-full" size="small" value={searchInp} onChange={(e) => setSearchInp(e.target.value)} onFocus={fetchSuggestion} onBlur={handleBlur} />
                    
                    <SearchSuggestions sugg={sugg} />
                </div>
                <Button variant="contained" className="w-[120px]" onClick={handleQueryProcessing}>Search</Button>
            </div>
            {
                loading ? <Skeleton variant="rounded" className="w-full mt-[1rem] h-[400px]" height={400} /> : (!error && error !== null) ? <Result summary={summary} chart={chart} /> : (error !== null) && <ErrorState />
            }
        </div>
    );
};

export default Home;