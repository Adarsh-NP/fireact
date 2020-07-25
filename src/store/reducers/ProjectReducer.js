const initialState = {
    projects: [
        {id: '1', title:'hey', description:'what you doin'},
        {id: '2', title:'Yo', description:'what up'},
        {id: '3', title:'Hello', description:'how are ya'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
    }
    return state
}

export default projectReducer