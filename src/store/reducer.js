import { createStore } from 'redux'
import { actionConstants } from './constants';

const initialState = {
    buttonTitle: 'Connect Wallet',
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionConstants.SET_BUTTON_TITLE:
            return {
                ...state,
                buttonTitle: payload
            }
        default:
            return state
    }
}

export const getButtonTitle = (state) => {
    return state.buttonTitle;
}
