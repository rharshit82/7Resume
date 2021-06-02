export const resumeCreateReducer = (state= {}, action) =>{
    switch(action.type){
        case RESUME_CREATE_REQUEST:
            return {loading:true}
        case RESUME_CREATE_SUCCESS:
            return {loading:false,success:true,resume: action.payload}
        case RESUME_CREATE_FAIL:
            return {loading: false, error: action.payload}
        case RESUME_CREATE_RESET:
            return {}
        default:
            return state
    }
}