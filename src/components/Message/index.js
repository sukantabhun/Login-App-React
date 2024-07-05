import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {login} = this.props
    if (login === true) {
      return <h1>Welcome User</h1>
    }
    return <h1>Please Login</h1>
  }
}

export default Message
