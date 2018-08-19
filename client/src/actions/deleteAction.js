import { CUSTOM_API } from './constants';
import { getTable } from './tablesAction';
import { fetchHelper, responseHelper } from './constants';

export function deleteAction(id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}`, 'DELETE', {id});
            if (responseHelper(response, dispatch)) {
                dispatch(getTable(pageName, 'deleted'));
            }
        })();
    }
}

