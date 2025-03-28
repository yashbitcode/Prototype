import { Button, TextField } from "@mui/material";
import Summary from "../components/Summary";
import { useEffect, useState } from "react";
import SearchSuggestions from "../components/SearchSuggestions";
import getRes from "../services/gemini";

const Home = () => {
    const [searchInp, setSearchInp] = useState("");
    const [sugg, setSugg] = useState([]);

    const fetchSuggestion = async () => {
        
        if(searchInp) {
            const data = await getRes(searchInp);
            console.log(data);
            setSugg(data);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchSuggestion()
        }, 1000);

        return () => clearTimeout(timer);
    }, [searchInp]);

    return (
        <div className="w-full">
            <div className="w-full max-w-[550px] flex gap-[13px]">
                <div className="w-full relative">
                    <TextField label="User Search Query" variant="outlined" className="w-full" size="small" value={searchInp} onChange={(e) => setSearchInp(e.target.value)} onFocus={fetchSuggestion} onBlur={() => setSugg([])} />
                    
                    <SearchSuggestions sugg={sugg} />
                </div>
                <Button variant="contained" className="w-[120px]">Search</Button>
            </div>
            <div className="w-full bg-white mt-[1rem] rounded-[5px] p-[1rem]">
                <Summary />

                {/* main charts */}
                <div className="p-[10px] mt-[1rem] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.1)]">


                </div>
            </div> 
        </div>
    );
};

export default Home;