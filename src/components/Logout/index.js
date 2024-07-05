import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {onClickLogout} = this.props
    return (
      <div className="button-center">
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
