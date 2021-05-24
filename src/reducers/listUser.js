const listUsers =[
    {name:'Fabricio'},
    {name:'Valera'},
    {name:'Bob'},
    {name:'Jon'},
    {name:'Gracio'},
    
]
export default (users=listUsers,action)=>{
    switch (action.type){
        case 'LIST_USER':
            return [...users,action.payload]
        default:
            return users;
    }
}