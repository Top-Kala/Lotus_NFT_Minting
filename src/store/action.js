import {actionConstants} from './constants';

export const setButtonTitle = (value) => {
    return {
        type: actionConstants.SET_BUTTON_TITLE,
        payload: value
    }
}
