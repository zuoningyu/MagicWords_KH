//build table
  const array = {
    Golden : ["a","and","be","I","in","is","it","of","that","the","to","was"],
    Blue : ["an","by","do","go","if","me","my","no","or","up"],
    Red : ["all","are","as","at","but","for","had","have","he","her","his","not","on","one","said","so","they","we","with","you"]
  }

  var table = document.getElementById('myTable');
  var navTitles = document.querySelectorAll('a.nav-link');
  var aAudio;
  var navTitle = "Golden";
  var cells;

  creatTable(navTitle);
  clickWords();

  for (var i = 0; i < navTitles.length; i++) {
    navTitles[i].addEventListener('click', (event) => {
      navTitle = event.target.innerText;      //"golden blue red"
      var title = document.getElementById('navTitle');
      title.innerText = navTitle + "  Words";
      creatTable(navTitle);
      clickWords();
    });

  }

//click event listener
function clickWords() {
  cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (event) => {
      var word = event.target.innerText;
      myAudioFunction(navTitle,word)
    });
  }
}

//play audio
  function myAudioFunction(navTitle,word) {
    if (aAudio) {
      aAudio.pause();
    }
    aAudio = new Audio('audio/' + navTitle + '/' + word + '.wav')
    aAudio.play();
  }

  function creatTable(navTitle) {
    table.innerHTML = "";
    let rows = getTableDim(array[navTitle].length);
    let columns = array[navTitle].length / rows;
  //  console.log(rows, columns);

    for(var i = 0; i < rows; i++)
        {
            // create a new row
            var newRow = table.insertRow(table.length);
            for(var j = 0; j < columns; j++)
            {
                // create a new cell
                var cell = newRow.insertCell(j);

                // add value to the cell
                cell.innerHTML = array[navTitle][i*columns+j];
            }
        }
  }

  function getTableDim(size){
    let root = Math.floor(Math.sqrt(size));
    while (size % root != 0){
      root = root - 1;
    }
  //  let columns = size / root;
    return root;
 }

  function randomWords() {
    var randomArray = array[navTitle].slice();
    randomArray.sort(function(a, b){return 0.5 - Math.random()});
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = randomArray[i]
    }
  }

  function reset(){
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = array[navTitle][i];
    }
  }
