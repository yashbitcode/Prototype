import Divider from '@mui/material/Divider';

const SearchSuggestions = ({sugg}) => {
    return (sugg.length !== 0) && (
        <ul className="w-full absolute bg-slate-300 rounded-[7px] p-[10px] flex flex-col gap-[8px] top-[50px] z-[10]">
            {
                sugg.map((el, idx) => (
                    <div key={idx}>
                        <li className="mb-[10px] cursor-pointer">{el}</li>
                        <Divider />
                    </div>
                ))
            }
        </ul>
    );
};

export default SearchSuggestions;