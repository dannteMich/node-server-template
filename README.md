# node-server-template
a basic template setup for node projects.

## includes
1. Babel setup to use ES6 imports
2. Jest configured with said Babel
3. Some useful npm scripts for running (testing, running while developing and compiling)

## folder structure and scripts
- all code is written inside the ```src``` folder.
    - the entry point of the package is ```src\index.js```
- run ```npm start``` to start the **nodemon** developing server. note this will run your program from the ```src``` folder
- run ```npm run build``` to compile (using Babel) your code. this will create **a ner folder named _lib_** in the root dir with the transpiled code
- run ```npm run start:prod``` to run the transpiled index.js
