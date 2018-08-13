import { CUSTOM_API } from './constants';
import { getTotalData } from './tablesAction';
import { showError } from './alertAction';

export function editAction(data, id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${pageName}/edit`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({data, id}),
            });
            const res = await response.json();
            res.success ? dispatch(getTotalData('edited')) : dispatch(showError()); 
        })();
    }
}