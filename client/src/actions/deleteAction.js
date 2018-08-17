import { CUSTOM_API } from './constants';
import { getTable } from './tablesAction';
import { showError } from './alertAction';
import { fetchHelper } from './constants';

export function deleteAction(id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}`, 'DELETE', {id});
            const res = await response.json();
            res.success ? dispatch(getTable(pageName, 'deleted')) : dispatch(showError(res.message)); 
        })();
    }
}