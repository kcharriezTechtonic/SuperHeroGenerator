let initialTable = true;

async function populateTableUI(newsuperHero) {
  const tBody = document.querySelector('tbody');
  const columns = ['cover', 'superName', 'alterEgo', 'power', 'originStory', 'catchPhrase', 'rating'];

  if (initialTable) {
    let allHeroes = await db.super.where('alterEgo').aboveOrEqual(0).toArray()

    for (let i = allHeroes.length - 1; i >= 0; i--) {
      var row = document.createElement('tr');
      row.id = allHeroes[i].superName;
      for (let j = 0; j < columns.length; j++) {
        var td = document.createElement('td');
        var value = allHeroes[i][columns[j]]
        td.innerText = value ? value : null;
        row.append(td);
      }

      // creates a delete button with no functionality
      var deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete Heroes';
      row.append(deleteBtn)
      tBody.append(row);
      deleteBtn.addEventListener('click', function(){
        deleteChar(allHeroes[i].superName);
        var elem = document.getElementById(allHeroes[i].superName);
        elem.parentNode.removeChild(elem);
        // removeElement(row);
      });
    }

  } else {
    let newHero = await db.super.where('superName;').equals(newsuperHero).toArray()
    var row = document.createElement('tr');

    for (let j = 0; j < columns.length; j++) {
      var td = document.createElement('td');
      var value = newHero[0][columns[j]]
      td.innerText = value ? value : null;
      row.append(td);
      row.id = allHeroes[i].superName;
    }

    // creates a delete button with no functionality
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete character';
    row.id = allHeroes[i].superName;
    row.append(deleteBtn)
    tBody.append(row);
    deleteBtn.addEventListener('click', function(){
      var elem = document.getElementById(allHeroes[i].superName);
      elem.parentNode.removeChild(elem);
      deleteChar(allHeroes[i].superName);
      // removeElement(row);
    });
  }
  initialTable = false;
}
