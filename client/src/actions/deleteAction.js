import { CUSTOM_API } from './constants';
import { getTotalData } from './totalDataAction';
import { showSuccess, showError } from './alertAction';

export function deleteAction(id, deleteFrom) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${deleteFrom}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({id}),
            });
            const res = await response.json();
            res.status ? dispatch(showSuccess('deleted')) : dispatch(showError());
            dispatch(getTotalData());
        })();
    }
}