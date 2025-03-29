import { useSelector } from "react-redux"
import NotFound from "../components/NotFound";
import { Link } from "react-router";

const HistoryShowcase = () => {
    const history = useSelector((store) => store.history.history);

    return (
        <div className="bg-white p-[1rem] w-full rounded-[5px]">
            <h1 className="text-2xl">{"Found " + history.length + " Results"}</h1>
            {
                (history.length !== 0) ? (
                    <div className="mt-[1rem]">
                        <ul className="flex flex-col gap-[10px]">
                            {
                                history?.map((el, idx) => (
                                   <Link to={"/history/" + (idx + 1)}>
                                        <li className="text-xl bg-slate-300 py-[5px] px-[12px] rounded-[5px]">{idx + 1}. {el.searchQuery}</li>
                                   </Link>
                                ))
                            }
                        </ul>
                    </div>
                ) : <NotFound />
            }
        </div>
    );
};

export default HistoryShowcase;