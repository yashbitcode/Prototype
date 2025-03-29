const Summary = ({summary}) => {
    return summary && (
        <div className="p-[10px] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.1)] rounded-[5px]">
            <h1 className="text-xl">Summary</h1>
            <div className="mt-[10px]">
                <ul>
                    {
                        summary.map((el, idx) => (
                            <li key={idx}>{idx + 1}. {el}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Summary;