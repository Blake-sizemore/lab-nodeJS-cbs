const path = require('path');
const fs = require('fs');
const axios = require('axios');
// Downlaoding an image
// images for fecth need to look at blob


fetch(`https://api-ghibli.herokuapp.com/films`)
.then(res => res.json())
.then((films) => {
  console.time('start')
  films.forEach((film, i) => {
      let imageUrl  = `${film.movie_banner}`;
      let imageLoad = `download/${i}_${film.title}.jpeg`;
      let ext = path.extname(imageLoad);
      async function downloadImage(url, filename) {
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        fs.writeFile(filename, response.data, (err) => {
          if (err) throw err;
          // 
          console.log('successfully!', [filename, imageUrl],ext);
        });
      }
      downloadImage(imageUrl, imageLoad);
    });
  })
  .catch(error => console.log(error));
