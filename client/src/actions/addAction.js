import { CUSTOM_API, fetchHelper, responseHelper } from './constants';
import { getTable } from './tablesAction';

export function addAction(data, pageName, needToRedirect) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}`, 'POST', {data});
            if (responseHelper(response, dispatch)) {
                needToRedirect ? dispatch(getTable(pageName, 'added', response.id)) : dispatch(getTable(pageName, 'added'));
             }
        })();
    }
}
