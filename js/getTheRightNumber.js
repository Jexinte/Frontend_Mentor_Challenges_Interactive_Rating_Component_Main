const numberSelected = document.querySelector('.numberSelected');
const search = new URLSearchParams(window.location.search)
const valueOfNumberSelectedFromHomePage = search.get('number');
if(valueOfNumberSelectedFromHomePage) 
numberSelected.innerHTML = valueOfNumberSelectedFromHomePage;
