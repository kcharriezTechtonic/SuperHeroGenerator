var addedHeroes = [];
var deletedHeroes = [];
function onDatabaseReady() {
    populateTableUI() // DO NOT TOUCH THIS LINE until step #4
}

function removeElement(elementId)
{
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function deleteChar(event) {
  db.super.delete(event).then(function () {
    deletedHeroes.push(event);
  }).catch(function (error) {
      console.log(`Ooops: ${error}`);
  });
}

function addChar(event) {
    addedHeroes.push(event);
    db.super.add(event).then(function () {
    }).catch(function (error) {
        console.log(`Ooops: ${error}`);
    });
}

function editHero(event, event2) {
    db.super.update(event, event2).then(function () {
    }).catch(function (error) {
        console.log(`Ooops: ${error}`);
    });
}
