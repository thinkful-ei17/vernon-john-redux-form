
export const SUBMIT = 'SUBMIT';
export const submitting = (value) => dispatch => {
    console.log(value);
    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: value
    })
        .then(res => {
            
            if(res.ok){
                dispatch(successful('Your issue has been received'));
            }else{
            return Promise.reject(
                dispatch(failed(res.statusText)));
            }
        })
        .catch(err => console.log(err));
};

export const FAIL = 'FAIL';
export const failed = (value) => ({
    type: FAIL,
    value
});

export const SUCCESS = 'SUCCESS';
export const successful = (value) => ({
    type: SUCCESS,
    value
});

