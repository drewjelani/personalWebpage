export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            };
        case 'ARCHIVED_DATE':
            return {
                result: action.payload
            };
        default:
            return state
    }
}