export const getCommentsError = (status: any) => ({
    type: 'GET_COMMENTS_ERROR',
    hasError: status
})

export const loadComments = (status: any) => ({
    type: 'LOAD_COMMENTS',
    isLoading: status
})

export const fetchCommentsSuccess = (comments: any) => ({
    type: 'FETCH_COMMENTS_SUCCESS',
    comments
})

export const fetchComments = (url: any) => {
    return (dispatch: any) => {
        dispatch(loadComments(true));

        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loadComments(false));

                return response;
            })
            .then((response) => response.json())
            .then((comments) => dispatch(fetchCommentsSuccess(comments)))
            .catch(() => dispatch(getCommentsError(true)));
    }
}