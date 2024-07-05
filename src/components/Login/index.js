import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {onClickLogin} = this.props
    return (
      <div className="button-center">
        <button type="button" className="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    )
  }
}

export default Login
