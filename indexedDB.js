const baseUrl = 'https://us-central1-fir-cb-backend.cloudfunctions.net/api';

document.addEventListener('DOMContentLoaded', async function () {
    var getHeroes = await fetch("./super.JSON").then(req => req.json()).then(data => data);
    window.db = new Dexie("superdatabase");

    db.version(1).stores({
        comments: '_id,comment',
        super: 'superName,alterEgo,power,cover,originStory,catchPhrase,rating'
    });
    db.super.bulkPut(getHeroes).then(function () {
        return db.super.each(hero => {
              // console.log(hero);
        });
    }).catch(function (error) {
        console.error(`Ooops`);
    });

    onDatabaseReady();
});
