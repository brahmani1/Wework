const API_URL = 'https://deckofcardsapi.com/';

export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function drawCardsFromDeck(deckId, no_of_players=2){
  //  Draw 2 cards for 2 players
  const response = await fetch(API_URL + `/api/deck/${deckId}/draw/?count=${no_of_players}`);
  return response.json();
}

export async function getNewDeck() {
  const response = await fetch(API_URL + '/api/deck/new/shuffle/?deck_count=1');
  return response.json();
}

export async function saveRequestToken(requestToken) {
  const response = await fetch('http://127.0.0.1:5000/api/v1/request-token',
  								{
								    method: "POST",
								    body: JSON.stringify({ requestToken })
								});
  return response.json();	
}