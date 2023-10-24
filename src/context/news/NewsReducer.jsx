const NewsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_NEWS":
      return {
        ...state,
        allNews: action.payload,
      };

      case "GET_NEWS":
        return {
            ...state ,
            allNews : action.payload,
        };

        case "GET_WEATHER":
                  return{
          ...state,
             allNews: action.payload,
        }

    default:
      return state;
  }
};

export default NewsReducer;
