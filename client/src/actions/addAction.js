import { CUSTOM_API } from './constants';
import { getTotalData } from './totalDataAction';
import { showSuccess, showError } from './alertAction';

export function addAction(data, addTo) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${addTo}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({data}),
            });
            const res = await response.json();
            res.status ? dispatch(showSuccess('added')) : dispatch(showError());
            dispatch(getTotalData());
        })();
    }
}
