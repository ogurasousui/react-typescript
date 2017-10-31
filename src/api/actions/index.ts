import { Action } from 'redux';

export const actionGetDetail = (data: string) => {
    console.log('**** actionGetDetail');
    return {
        type: 'GET_DETAIL',
        detail: data
    }
}

export const actionFetchDetail = (index: number) => {
    return (dispath: any) => {
        fetch('http://localhost:3000/api/detail?index='+index).then((response) => {
            return response.json()
        }).then((data) => {
            dispath(actionGetDetail(data))
        })
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
        fetch('http://localhost:3000/api/list').then((response) => {
            return response.json()
        }).then((data) => {
            dispath(actionGetList(data))
        })
    }

}