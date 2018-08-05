export const DIALOG_VISIBILITY = 'DIALOG_VISIBILITY';

function dialogVisibility(visible) {
    return {
        type: DIALOG_VISIBILITY,
        visible
    }
}

export default dialogVisibility;