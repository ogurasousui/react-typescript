import { Action } from 'redux';
import Api from '../util/Api'

export const actionGetDetail = (data: string) => {
    console.log('**** actionGetDetail');
    return {
        type: 'GET_DETAIL',
        detail: data
    }
}

export const actionFetchDetail = (index: number) => {
    return (dispath: any) => {
        Api.fetch('detail?index='+index).then((data: any) => {
            dispath(actionGetDetail(data))
        });
    }
}

export const actionGetList = (data: any) => {
    console.log('**** actionGetList', data);
    return {
        type: 'GET_LIST',
        list: data
    }
}

export const actionFetchList = () => {
    return (dispath: any) => {
        Api.fetch('list').then((data: any) => {
            dispath(actionGetList(data))
        });
    }
}

export const actionToggleMenu = () => {
    return  {
        type: 'TOGGLE_MENU',
    }
}

export const actionGetMenu = (data: any) => {
    return  {
        type: 'GET_MENU',
        list: data
    }
}

export const actionFetchMenu = () => {
    return (dispath: any) => {
        Api.fetch('menu').then((data: any) => {
            dispath(actionGetMenu(data))
        });
    }
}