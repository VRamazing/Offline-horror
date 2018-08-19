(function(){
var storyList = [
  {text: "It's just another morning. You returned from school which was such a bore. You decided to spend your time playing Xbox with your gaming buddies. You log into your system and try to connect. It's taking too long to load.",
  optionsIndex: 0
  },
  {text: "You tapped on the box. Nothing happened. You saw a spider running frantically",
  optionsIndex: 0
  },
  {text: "You prayed for faster load. Still nothing",
  optionsIndex: 0
  },
  {text: "Checked for internet connection. There is no network. That's odd. This has never happened before.",
  optionsIndex: 1
  },
  {text: "You tried calling your network provider but there is no cellular network as well",
  optionsIndex: 1
  },
  {text: "You give a call to mom but there is no response.",
  optionsIndex: 2
  },
  {text: "You storm back into your room. You see a dirty room with nowhere to lay down.",
  optionsIndex: 3
  }     
     

];

var optionsList = [
   [
     {text: 'Check internet connection',
      resultStoryIndex: 3
     },
     {text: 'Tap on the Xbox',
      resultStoryIndex: 1
     },
     {text: 'Pray for faster load',
      resultStoryIndex: 2
     }
   ],
   [
     {text: 'Call the network provider',
      resultStoryIndex: 4
     },
     {text: 'Ask mom if she payed bill',
      resultStoryIndex: 5
     },
     {text: 'Storm angrily back to room cause your mood is destroyed.',
      resultStoryIndex: 6
     }
   ],

   [
     {text: 'Call the network provider',
      resultStoryIndex: 4
     },
     {text: 'Storm angrily back to room cause your mood is destroyed.',
      resultStoryIndex: 6
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
