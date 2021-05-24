import React from "react";
import { connect } from "react-redux";
import "../Components/style.css"
import { listUser } from '../actions'

class MainComponent extends React.Component{
      constructor(props){
              super(props)
              this.state = {

              }
      }

    render(){
        const {users} = this.props
        const ListUsers = users.map((item,index)=>{
            return <div key={index}>
                   {item.name}  
            </div>
        })
        return(
            <div>
                Users
                {ListUsers}
            </div>
        )
    }
}
const mapStateToProps =(state)=>({
      users:state.users
})

const mapDispatchToProps = {
    listUser
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)

