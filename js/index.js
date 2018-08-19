(function(){
var storyList = [
  {text: "It's just another morning. You returned from school which was such a bore. You decided to spend your time playing Xbox with your gaming buddies. You log into your system and try to connect. It's taking too long to load.",
  optionsIndex: 0
  },
  {text: "Lorem Ipsum",
  optionsIndex: 1
  },
  {text: "Dollar Imet",
  optionsIndex: 0
  },
  {text: "Fucking shit",
  optionsIndex: 1
  }         
];

var optionsList = [
   [
     {text: 'Check internet connection',
      resultStoryIndex: 1
     },
     {text: 'Tap on the Xbox',
      resultStoryIndex: 2
     },
     {text: 'Pray for faster load',
      resultStoryIndex: 3
     }
   ],

   [
     {text: 'Yes',
      resultStoryIndex: 0
     },
     {text: 'No',
      resultStoryIndex: 1
     }
   ]
]
  var storySource = document.getElementById("story");
  var optionListElem = document.getElementById("options");
  var storyIndex = 0;
  var gameOver = false;
  var optionsClicked = false;
  
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
    currentOptions.forEach(function(item,index){
        var listItem = document.createElement("li");
        var listItemText = document.createTextNode(item.text);
        listItem.appendChild(listItemText);
        listItem.addEventListener('click', function(){updateStoryIndex(item.resultStoryIndex)});
        optionListElem.appendChild(listItem);
        console.log("DOM updating");
      });
  }

 addStoryAndOptions();
  
 setInterval(function(){
 	if(optionsClicked){
 		clearDom();
    	addStoryAndOptions();
    	optionsClicked = false;
 	}
 }, 1000/30);
  
})();
