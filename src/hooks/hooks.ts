import {useSelector} from "react-redux";
import {RootState} from "../store/store";

/*export const useAppDispatch = useDispatch.withTypes<AppDispatch>()*/

export const useAppSelector = useSelector.withTypes<RootState>()