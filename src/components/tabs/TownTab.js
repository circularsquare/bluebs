import React, { Component } from 'react'

class HomeTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var birbs = this.props.birbs
    return (
      <div label="home">
        give ur birbs jobs <br/>
        u currently have {birbs.unemployed} free birbs <br/>
        <button onClick={() => this.props.hireBlueb(1)}> +1 </button> u currently have {birbs.farmers} farmers <br/>
        <button onClick={() => this.props.hireWood(1)}> +1 </button> u currently have {birbs.woodpeckers} woodpeckers <br/>
      </div>
    )
  }
}

export default HomeTab
