import { useEffect, useState } from "react";
import { addHistory } from "../services/historySlice";
import getRes from "../services/geminiSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { addSugg } from "../services/suggestionSlice";
import getProcessedData from "../services/geminiData";
import { addCurrentData, clearCurrentState } from "../services/currentResultSlice";

const useHomeData = () => {
    const [searchInp, setSearchInp] = useState("");
    const [sugg, setSugg] = useState([]);
    const [loading, setLoading] = useState(false);

    const suggCache = useSelector((store) => store.sugg.suggestionCache);
    const {summary, chart, error} = useSelector((store) => store.current);

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

    useEffect(() => {
        return () => dispatch(clearCurrentState());
    }, []);

    return [searchInp, setSearchInp, sugg, loading, fetchSuggestion, handleQueryProcessing, handleBlur, summary, chart, error];
};

export default useHomeData;