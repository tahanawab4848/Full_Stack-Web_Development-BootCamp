//const generateStupidName = require("sillyname");
//import generateStupidName from "sillyname";
//import {randomSuperhero} from 'superheroes';


//const mySuperheroName = randomSuperhero();
//console.log(`My superhero name is ${randomSuperhero()}.`);

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {message: "Type Url:", name: "url"},
  ])
  .then((answers) => {
    const url=answers.url;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

   
  
