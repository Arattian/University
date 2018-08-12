import { CUSTOM_API } from './constants';
import { getTotalData } from './totalDataAction';
import { showError } from './alertAction';

export function editAction(data, id, editFrom) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${editFrom}/edit`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({data, id}),
            });
            const res = await response.json();
            res.status ? dispatch(getTotalData('edited')) : dispatch(showError()); 
        })();
    }
}