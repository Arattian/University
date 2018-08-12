import { CUSTOM_API } from './constants';
import { getTotalData } from './totalDataAction';
import { showError } from './alertAction';

export function addAction(data, addTo, needToRedirect) {
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
            if(res.status) {
                needToRedirect ? dispatch(getTotalData('added', addTo, res.id)) : dispatch(getTotalData('added', addTo));
             } else {
                dispatch(showError());
             }
        })();
    }
}
