import axios from 'axios';

export const smurfsLoading = () => {
    return {
        type: 'AXIOS_SMURFS_LOADING'
    }
}
export const smurfsLoadSuccesful = data => {
    return {
        type: 'AXIOS_SMURFS_LOAD_SUCCESSFUL',
        payload: data
    }
}
export const smurfsLoadFailure = error => {
    return {
        type: 'SMURFS_LOAD_FAILURE',
        payload: error
    }
}
export const axiosSmurfs = () => dispatch => {
    dispatch(smurfsLoading());
    return (
        axios.get(`http://localhost:3333/smurfs`)
        .then(res => console.log(res))
        .catch(error => dispatch(smurfsLoadFailure(error)))
    )
}
