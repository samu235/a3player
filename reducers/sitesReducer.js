export const sitesReducer = (state = sites, action) => {
    if (action.type === '@sites/setSites') {
        let newSites = action.payload.sites
        state = {
            ...state,
            sites: newSites
        }
    } else if (action.type === '@sites/addOneSite') {
        let newSite = action.payload.site
        let newSites = state.sites
        newSites.push(newSite)
        state = {
            ...state,
            sites: newSites
        }
    } else if (action.type === '@sites/modifyOneSite') {
        let newSite = action.payload.site
        let newSites = state.sites.map(item => {
            if (item._id === newSite._id) {
                return newSite
            }
            return item
        })
        state = {
            ...state,
            sites: newSites
        }
    } else if (action.type === '@sites/deleteOneSite') {
        let idDelete = action.payload.id
        let newSites = state.sites.filter(item => item._id !== idDelete)
        state = {
            ...state,
            sites: newSites
        }
    }
    return state
}

const sites = {
    sites: []
}

export const setSitesAll = (newSites) => {
    return {
        type: "@sites/setSites",
        payload: {
            sites: newSites
        },
    }
}

export const addOneSite = (newSite) => {
    return {
        type: "@sites/addOneSite",
        payload: {
            site: newSite
        },
    }
}

export const modifyOneSite = (newSite) => {
    return {
        type: "@sites/modifyOneSite",
        payload: {
            site: newSite
        },
    }
}

export const deleteOneSite = (id) => {
    return {
        type: "@sites/deleteOneSite",
        payload: {
            id: id
        },
    }
}
