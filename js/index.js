(function(){
  var storySource = document.getElementById("story");
  var optionListElem = document.getElementById("options");
  var storyIndex = 0;
  var gameOver = false;
  var optionsClicked = false;
  var gameStarted = false;
  //for testing
  document.addEventListener('keydown', function(event){
    if(event.key == 'd'){
      console.log("Button Clicked");
      updateStoryIndex(0);
    }
  })
  
  var updateStoryIndex = function(val){
	  storyIndex = val
	  optionsClicked = true;
    console.log(val);
  }
  
  var clearDom = function(){
    storySource.innerHTML = "";
    optionListElem.innerHTML = "";
  }
  
  var addStoryAndOptions = function(){
    var currentStory = storyList[storyIndex];
    var currentOptions = optionsList[currentStory.optionsIndex];
    storySource.innerHTML = currentStory.text;

    if(currentStory.optionsIndex == 0){
        setTimeout(function(){ 
          if(currentStory.hasOwnProperty('storyUpdateIndex')){
            var story = currentStory.storyUpdateIndex;
            updateStoryIndex(story); 
          }
          console.log("DOM updating");}, 3000);
    }
    else{
       currentOptions.forEach(function(item,index){
        var listItem = document.createElement("li");
        var listItemText = document.createTextNode(item.text);
        listItem.appendChild(listItemText);
        listItem.addEventListener('click', function(){updateStoryIndex(item.resultStoryIndex)});
        optionListElem.appendChild(listItem);
        console.log("DOM updating");
      });
    }    
  }
  if(gameStarted){
    addStoryAndOptions();
  }
  else{
     storySource.innerHTML = "O &nbsp; F &nbsp; F &nbsp; - &nbsp; L &nbsp; I &nbsp; N &nbsp; E";
      var listItem = document.createElement("li");
      var listItemText = document.createTextNode("Start game");
      listItem.appendChild(listItemText);
      listItem.addEventListener('click', function(){gameStarted = true; updateStoryIndex(0)});
      optionListElem.appendChild(listItem);

  }
  
 setInterval(function(){
 	if(optionsClicked && gameStarted){
 		  clearDom();
    	addStoryAndOptions();
    	optionsClicked = false;
 	}
 }, 1000/30);
  
})();
