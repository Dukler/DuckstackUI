import update from "immutability-helper";

export function subtractComponent(treePosition, state, action, storeReducer) {
    if (
        treePosition.storeReducer === storeReducer &&
        state.byIds[treePosition.id].components.includes(action.payload.id)
    ) {
        const deleteIndex = state.byIds[treePosition.id].components.indexOf(
            action.payload.id
        );
        return update(state, {
            byIds: {
                [treePosition.id]: {
                    components: {$splice: [[deleteIndex, 1]]},
                },
            },
        });
    }
    return state;
}

export function addComponent(treePosition, state, action, storeReducer) {
    return treePosition.storeReducer === storeReducer &&
        !state.byIds[treePosition.id].components.includes(action.payload.id)
        ? update(state, {
              byIds: {
                  [treePosition.id]: {
                      components: {$push: [action.payload.id]},
                  },
              },
          })
        : state;
}
