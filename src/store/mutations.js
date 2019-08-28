const loginUser = function (state, user) {
  state.loginUser = user
}

const joinFamily = function (state, family) {
  state.family = family
}

export {
  loginUser,
  joinFamily
}
