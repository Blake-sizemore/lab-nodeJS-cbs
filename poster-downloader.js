const path = require('path');
const fs = require('fs');
const axios = require('axios');


fetch(`https://api-ghibli.herokuapp.com/films`)
.then(res => res.json())
.then((films) => {
  films.forEach(film => {
      let imageUrl  = `${film.movie_banner}`;
      let imageLoad = `download/${film.title}.jpeg`;
      async function downloadImage(url, filename) {
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        fs.writeFile(filename, response.data, (err) => {
          if (err) throw err;
          console.log('successfully!', [filename, imageUrl]);
        });
      }
      downloadImage(imageUrl, imageLoad);

    });
  })
