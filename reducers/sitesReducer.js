export const sitesReducer = (state = sites, action) => {
    if (action.type === '@sites/setSites') {
        let isLoading = action.payload.isLoading
        state = {
            ...state,
            isLoading
        }
    } 
    return state
}

const sites = {
    sites : []
}

export const setSites = (sites) => {
    return {
        type: "@sites/setSites",
        payload: {
            sites: sites
        },
    }
}
