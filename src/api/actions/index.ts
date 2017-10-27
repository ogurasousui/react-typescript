import { Action } from 'redux';

export const getDetail = (index: number) => {
    console.log('action getDetail');
    return {
        type: 'GET_DETAIL',
        index: index
    }
}

export const getList = () => {
    console.log('action getList');
    return {
        type: 'GET_LIST'
    }
}