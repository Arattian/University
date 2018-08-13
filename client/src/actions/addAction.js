import { CUSTOM_API } from './constants';
import { getTotalData } from './tablesAction';
import { showError } from './alertAction';

export function addAction(data, pageName, needToRedirect) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${pageName}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({data}),
            });
            const res = await response.json();
            if(res.success) {
                needToRedirect ? dispatch(getTotalData('added', pageName, res.id)) : dispatch(getTotalData('added', pageName));
             } else {
                dispatch(showError());
             }
        })();
    }
}
