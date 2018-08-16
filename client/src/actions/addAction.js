import { CUSTOM_API, fetchHelper } from './constants';
import { getTable } from './tablesAction';
import { showError } from './alertAction';

export function addAction(data, pageName, needToRedirect) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}`, 'POST', {data});
            const res = await response.json();
            if(res.success) {
                needToRedirect ? dispatch(getTable(pageName, 'added', res.id)) : dispatch(getTable(pageName, 'added'));
             } else {
                dispatch(showError());
             }
        })();
    }
}
