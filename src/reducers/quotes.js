export default (state = [], action) => {

  let newState;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      newState = state.map(quote => {
        return quote.id === action.quoteId ? { ...quote, votes: quote.votes + 1 } : { quote }
      })
      return newState
    case 'DOWNVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return { ...quote, votes: quote.votes - 1 }
        } else {
          return quote
        }
      })
      return newState
    default:
      return state;
  }
}

// Should look like this >

// [{
//   id: '23423424242-42342423424242-fafdb',
//   content: 'One Awesome Quote',
//   author: 'Luke Ghenco'
// }]