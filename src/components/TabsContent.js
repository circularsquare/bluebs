import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Tabs from './Tabs'
import Map from './Map'
//the tab structure is taken from alligator.io/react/tabs-component/

class TabsContent extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <Tabs
        unlockedScience = {true}
      >
        <div label="home">
          ur at home! <br/>
          <button onClick={() => this.props.pickBlueb(1)}> pick blueb </button>
        </div>
        <div label="town">
          give ur birbs jobs <br/>
          u currently have {this.props.unemployed} free birbs <br/>
          <button onClick={() => this.props.addFarmer(1)}> +1 </button> u currently have {this.props.farmers} farmer
        </div>
        <div label="map">
          its a map.
          <Map />
        </div>
      </Tabs>
    )
  }
}

export default TabsContent
