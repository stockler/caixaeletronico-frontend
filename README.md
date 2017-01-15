##Requirements

- **`node`** >= **4.2.0**
- **`npm`** >= **3.0.0**

#Quick start
```bash
# clone the repo without git history
git clone --depth 1 https://github.com/stockler/desafio.git

# change current directory to desafio
cd desafio

# install dependencies
npm install

# build the project
gulp build-app
gulp build-html

# run the server
npm start
```
Go to [http://localhost:8080](http://localhost:8080) in your browser.

You may want to stop:
```bash
# stop the server
ctrl + c

```

##Unit Testing
```bash
# run unit tests (single run)
npm run unit

# run unit tests and start watch for changes
npm run unit:watch

```

##End-to-End Testing
For end-to-end tests you need to start Selenium Server (webdriver) first.
```bash

# update Selenium Server (webdriver)
npm run webdriver:update

# start Selenium Server (webdriver)
npm run webdriver:start

# run end-to-end test in another terminal (single run)
npm run e2e
```

#License
The MIT License (MIT)

Copyright (c) 2016 Rafael Stockler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
