import { useSelector } from "react-redux";
import { useParams } from "react-router";

const useHistoryInfo = () => {
    const {historyId} = useParams();
    const history = useSelector((store) => store.history.history)[historyId - 1];

    return history;
};

export default useHistoryInfo;