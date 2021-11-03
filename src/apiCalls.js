const key = 'RTUJ4VZBfLv4GhnIUf2Poxs7oWhYKT7Q'


export const getPopular = (arg) => {
 fetch(`https://api.nytimes.com/svc/mostpopular/v2/${arg}?api-key=${key}`)
  .then(res => res.json())
  .then(data => console.log(data))
}

// emailed/7.json  -- email
//  -- facebook
// viewed/1.json  -- viewed that dail
