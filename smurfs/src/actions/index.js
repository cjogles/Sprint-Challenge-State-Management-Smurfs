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
export const getSmurfs = () => dispatch => {
    dispatch(smurfsLoading());
    return (
        axios.get(`http://localhost:3333/smurfs`)
        .then(res => dispatch(smurfsLoadSuccesful(res)))
        .catch(error => dispatch(smurfsLoadFailure(error)))
    )
}
export const postSmurfs = (smurf) => dispatch => {
    dispatch(smurfsLoading());
    console.log("POST smurf: ", smurf)
    return (
        axios.post(`http://localhost:3333/smurfs`, smurf)
        .then(res => console.log("post response", res))
        .catch(error => dispatch(smurfsLoadFailure(error)))
    )
}
