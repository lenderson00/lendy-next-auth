export class LKSignInError extends Error {
  constructor () {
    super()
    this.name = 'SignInError'
    this.message = 'Error on try SingIn'
  }
}
