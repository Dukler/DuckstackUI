// const setJson = (json) => useCallback(
//     () => {
//         const { components, wrappers, contentRoutes, linkList } = json;
//         dispatch({ type: 'SET_COMPONENTS', payload: components })
//         dispatch({ type: "setContent", payload: contentRoutes })
//         dispatch({ type: "setLinkList", payload: linkList })
//         dispatch({ type: "setWrappers", payload: wrappers })
//         setLoading(false);
//     },
//     [json],
// )