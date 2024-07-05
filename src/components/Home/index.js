import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  log = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="container">
        <div className="elements">
          <Message login={isLogin} />
          {isLogin ? (
            <Logout onClickLogout={this.log} />
          ) : (
            <Login onClickLogin={this.log} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
