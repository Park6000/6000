function fetchPage(page){
  fetch(page).then(function(response){
    response.text().then(function(text){
      document.querySelector('#Main').innerHTML = text;
    })
  });
}
function fetchList(src){
  fetch(src).then(function(response){
    response.text().then(function(text){
    
      document.querySelector('#List').innerHTML = text;
    })
  });
}
