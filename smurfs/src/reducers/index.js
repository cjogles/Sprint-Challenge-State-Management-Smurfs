const initialState = [
    
      {
        name: "Jackson",
        age: 800,
        height: "8cm",
        id: 0
      },
      {
        name: "Bob",
        age: 2,
        height: "1cm",
        id: 1
      }
    
  ]

export const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'AXIOS_SMURFS_LOADING':
          return [
              ...state
          ];
        case 'AXIOS_SMURFS_LOAD_SUCCESSFUL':
          console.log(action.payload.data);
          return [
            {
                name: action.payload.data[0].name,
                age: action.payload.data[0].age,
                height: action.payload.data[0].height,
                id: action.payload.data[0].id,
            }
        ];
        case 'SMURFS_LOAD_FAILURE':
          return [
            
                ...state
            
        ];
        default:
          return state;
      }
}
