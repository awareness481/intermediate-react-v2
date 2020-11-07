export default function location(state = "Athens, Greece", action) {
  if (action.type === 'CHANGE_LOCATION') {
    return action.payload;
  } else {
    return state;
  }
}
