export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '37.036472',
      bl_lng: '27.425467',
      tr_lat: '41.11295',
      tr_lng: '42.70228',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '4987035418mshdebef18890f1b4ap14ca4ajsn0f715a51bec2',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };