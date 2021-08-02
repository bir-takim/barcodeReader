import{
    POST_BARCODE,
    POST_BARCODE_SUCCESS
} from "../actions/appAction";

const INITIAL_STATE = {

}
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case POST_BARCODE:
            return{
                ...state
            }
        case POST_BARCODE_SUCCESS:
            return{
                ...state
            }
        default:
            return state;
    }
}