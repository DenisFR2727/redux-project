const  WEEKDAYS = 
       [{day:'Monday'}, 
        {day:'Tuesday'}, 
        {day:'Wednesday'}, 
        {day:'Thursday'}, 
        {day:'Friday'}, 
        {day:'Saturday'}, 
        {day:'Sunday'}
       ];

       export default (days = WEEKDAYS, action)=>{
       if(action.type === "LIST_DAYS"){
            return [...days,action.payload]
       }
       else if(action.type === "ADD_DAY"){
            return [...  'hello']
          //   console.log('000')
          //   console.log(action.payload)
          //   let final = "777"
          //   console.log(final)
          //    return [...days,action.payload]
       }
           return days
}       