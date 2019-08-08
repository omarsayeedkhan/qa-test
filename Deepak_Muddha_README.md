1. TEST 1


To get started, we need to clone the git repository 

clone the git repository(qa-test) and checkout to below branch

````
cd /qa-test/deepakmuddha_QA_technical_assessment

````


Now make sure the system has Node.js, if not download and install Node.js

````
Install node.js on Windows or Mac (https://nodejs.org/download/)

````

Go to the project path 

```
cd /your/project/path

```


Now install Cypress using NPM

```

npm install cypress --save-dev

```


You can also download and install Cypress directly

````

https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download 

check under "Direct download" section

````

Now open cypress 

````

$(npm bin)/cypress open (OR) by clicking on the downloaded link

````

````
On Cypress, drag the project or select manually by going through the instructions on cypress app
````

````
Copy the .js files into the Cypress > integration folder inorder to run the tests

````

````

Now click on the each file of the available 2 files

````

````

Cypress will open Google Chrome and will run the tests 

````

2. TEST 2


To get started, first install Node.js

````
Install node.js on Windows or Mac (https://nodejs.org/download/)

````

After installing Node.js. Install Newman from npm globally on your system, which allows you to run it from anywhere.

````
$ npm install -g newman

````


Once the Newman is installed make sure you are in the correct directory(qa-test [deepakmuddha_QA_technical_assessment]), then run the API json file using the below command to verify the API automation.

````
$ newman run Test2_API_testing.json

````

3. Test 3 (Run API queries on Postman)

In order to run the API query on Postman, follow the below steps


Make sure Postman is installed in your laptop, if not install from 

````
https://www.getpostman.com/downloads/
````

Once downloaded, open Postman

Under "builder" tab open a new tab

Select "GET" query

In the URL section enter the following for LAT and LON query

````
http://api.weatherbit.io/v2.0/current?key=9d37284f5d294aad9770644c85274741&lat=90.123&lon=80.543
````

Now under "Authorisation" tab, select "Basic auth" as a type

Now enter username

````
Master API Key
````

Password

````
270b8a7e672c4922800ba25ecbe8adc7
````

Click on "Preview request"

Under "Body" tab at the bottom, select "JSON"

Now click on "Send" button on top right side.

#For weather data for multiple places in the world based on postcode

Enter URL 

````
http://api.weatherbit.io/v2.0/current?key=9d37284f5d294aad9770644c85274741&postal_code=2150
````

and follow the same procedure as above.

