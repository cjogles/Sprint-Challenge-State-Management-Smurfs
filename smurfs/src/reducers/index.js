const initialState = [
    {
      name: "Jackson",
      age: 800,
      height: "8cm",
      id: 'me'
    }
  ]

export const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'AXIOS_SMURFS_LOADING':
          return [
              ...state
          ];
        case 'AXIOS_SMURFS_LOAD_SUCCESSFUL':
          return [
            {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id,
            }
        ];
        case 'SMURFS_LOAD_FAILURE':
          return [
            {
                ...state
            }
        ];
        default:
          return state;
      }
}
