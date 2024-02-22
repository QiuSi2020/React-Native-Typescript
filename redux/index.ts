import { createStore } from 'redux'

const defState = {
    count: 100
}

const reducer = (state = defState, action: any) => {
    switch (action.type) {
        case 'add': state.count += action.payload
        break
    }
    return state
}

const store = createStore(reducer)

export default store
