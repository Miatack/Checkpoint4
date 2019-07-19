import React, { Component } from 'react'
import './Maps.scss'

export default class Maps extends Component {
  render() {
    return (
      <div class="maps">
        <div id="mapid">
          <h3>Maps</h3>
        </div>
        <div className="mapinfo">
          <p>City:</p>
          <p>Adress:</p>
          <p>Date:</p>
        </div>
      </div>
    )
  }
}
