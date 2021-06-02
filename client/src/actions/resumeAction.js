import axios from 'axios'

export const createResume = async (dispatch, getState ) =>{
    try{
        dispatch({
            type:RESUME_CREATE_REQUEST
        })
        const {data} = await axios.post(`/api/createResume`, {})
        dispatch({
            type: RESUME_CREATE_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:RESUME_CREATE_FAIL,
            payload: message
        })
    }
}