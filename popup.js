chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

  var title = tabs[0].title
  console.log('title ==> ', title);

})
