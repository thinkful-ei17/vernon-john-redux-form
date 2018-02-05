const initialState = {
    successMsg: ''
};

export default(state=initialState, action) => {
    if(action.type === 'FAIL'){
        return Object.assign({}, state, {
            successMsg: action.value
        });
    }else if(action.type === 'SUCCESS'){
        return Object.assign({}, state, {
            successMsg: action.value
        });
    }
    return state;
};