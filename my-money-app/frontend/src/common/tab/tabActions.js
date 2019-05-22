export function selectTab(tabId) {

    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)   //aba que eu quero exibir
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}