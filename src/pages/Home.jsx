import { Button, Skeleton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchSuggestions from "../components/SearchSuggestions";
import getRes from "../services/geminiSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { addSugg } from "../services/suggestionSlice";
import getProcessedData from "../services/geminiData";
import { addCurrentData } from "../services/currentResultSlice";
import ErrorState from "../components/ErrorState";
import Result from "../components/Result";
import { addHistory } from "../services/historySlice";

const Home = () => {
    const [searchInp, setSearchInp] = useState("");
    const [sugg, setSugg] = useState([]);
    const [loading, setLoading] = useState(false);

    const suggCache = useSelector((store) => store.sugg.suggestionCache);
    const error = useSelector((store) => store.current.error);

    const dispatch = useDispatch();

    const fetchSuggestion = async () => {
        if(searchInp) {
            if(suggCache[searchInp]) {
                setSugg(suggCache[searchInp]);
                return;
            }

            const data = await getRes(searchInp);
            setSugg(data);

            dispatch(addSugg({searchQuery: searchInp, sugg: data}));
        }
    };

    const handleQueryProcessing = async () => {
        if(searchInp) {
            setLoading(true)
            const data = await getProcessedData(searchInp);
            console.log(data);

            dispatch(addCurrentData(data));
            dispatch(addHistory({searchQuery: searchInp, result: data}));
            setLoading(false);
        }
    };

    const handleBlur = () => setTimeout(() => setSugg([]), 300);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchSuggestion()
        }, 300);

        return () => clearTimeout(timer);
    }, [searchInp]);

    return (
        <div className="w-full">
            <div className="w-full max-w-[550px] flex gap-[13px]">
                <div className="w-full relative">
                    <TextField label="User Search Query" variant="outlined" className="w-full" size="small" value={searchInp} onChange={(e) => setSearchInp(e.target.value)} onFocus={fetchSuggestion} onBlur={handleBlur} />
                    
                    <SearchSuggestions sugg={sugg} />
                </div>
                <Button variant="contained" className="w-[120px]" onClick={handleQueryProcessing}>Search</Button>
            </div>
            {
                loading ? <Skeleton variant="rounded" className="w-full mt-[1rem] h-[400px]" height={400} /> : (!error && error !== null) ? <Result /> : (error !== null) && <ErrorState />
            }
        </div>
    );
};

export default Home;