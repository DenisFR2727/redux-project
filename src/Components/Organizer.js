import React from 'react';
import { connect } from 'react-redux';
import "../Components/style.css";
import { listDays ,addDay } from '../actions';
class Organizer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            work:"",
            inputCheked:"false",
            arrChek:[]
        }
    }
    clickButton(e){
        e.preventDefault()
        console.log(this.state.work)
        console.log(this.state.inputCheked)
           let checkboxesChecked = this.state.arrChek
           checkboxesChecked.push([
               this.state.inputCheked,
               this.state.work
            ])
            this.setState({arrChek:checkboxesChecked})
            console.log(checkboxesChecked)
    }
    onChangeFavorite(e){
        this.state.inputCheked = e.target.value
       
    }
  /// Не получается вызвать метод из редюсера на компоненте 
    render(){
        const {daysCheked} = this.props;
        // console.log(this.props.addDay.dispatch({type:'ADD_DAY'}))
        console.log(addDay(this.state.inputCheked))
        console.log(this.props)
        const listDays = daysCheked.daysCheked.map((item,index)=>{
            return <div key={index}>
                   <input type="radio" 
                          value={item.day} 
                          name="inputDay" 
                          id="chekboxId"
                          onChange={this.onChangeFavorite.bind(this)}
                          defaultChecked={false} />
                          {item.day}
                   </div>
        })
        return<div>
                <form className="organizer">
                     <div>
                         {listDays}
                        <input 
                              type="text" 
                              placeholder="work" 
                              name="work"
                              onChange={ (e)=>{
                                this.setState({work:e.target.value})
                            }} 
                        />
                        <button 
                               type="submit"
                               onClick={this.clickButton.bind(this)}
                            
                        >Add Work</button>
                     </div>
                </form>
        </div>
    }
}
const mapStateToProps = (state)=>({
    daysCheked:state
})
const mapDispatchToProps = {
    listDays,
    addDay
}
export default connect(mapStateToProps,mapDispatchToProps)(Organizer);