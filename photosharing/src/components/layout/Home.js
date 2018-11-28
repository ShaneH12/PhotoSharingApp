import React, { Component } from 'react'
import { Posts } from '../containers'
import { MapNavigation }  from '../containers'

class Home extends Component {
  render() {
    const location = {
      lat: 40.7575285,
      long: -73.9884469
    }

    return (

      <div className="container">
        Home Layout
        <div className="row">

          <div className="col-md-3">
            <div style={{width:250, height:800, background:"red"}}>
              <MapNavigation center={location} />
            </div>
          </div>
          <div className="col-md-6">
            <Posts />
          </div>
          <div className="col-md-3">
            Account
            <form>
              <input type="text" placeholder="username" />
              <input type="text" placeholder="password" />
              <button>Login</button>
            </form>
          </div>

        </div>

      </div>

    )
  }
}

export default Home
