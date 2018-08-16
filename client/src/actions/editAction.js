import { CUSTOM_API } from './constants';
import { getTable } from './tablesAction';
import { showError } from './alertAction';
import { fetchHelper } from './constants';

export function editAction(data, id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}/edit`, 'PUT', {data, id});
            const res = await response.json();
            res.success ? dispatch(getTable(pageName, 'edited')) : dispatch(showError()); 
        })();
    }
}