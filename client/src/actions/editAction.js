import { CUSTOM_API, responseHelper } from './constants';
import { getTable } from './tablesAction';
import { fetchHelper } from './constants';

export function editAction(data, id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}/edit`, 'PUT', {data, id});
            if (responseHelper(response, dispatch)) {
                dispatch(getTable(pageName, 'edited')); 
            }
        })();
    }
}