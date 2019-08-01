
# Acceptance Criteria

Create automation for the following test cases. The automation should be ideally done using Ruby/cypressJS.
When creating the automation, the following conditions should be followed:

- Use page object method when creating automation
- Ensure you provide information on how to run your code; list the ruby gems or the npm packages required to be installed
- If you are not able to complete the requested test but you have a framework/language your are familiar with, please submit the alternative working code with the relevant documentation on how to install and run your tests

# Test 1

## Scenario A

1. Visit https://elmosoftware.com.au/
2. Click on ‘Solutions’ navigation menu from the top
3. Click on ‘HR Core’
4. Verify that the URL is https://elmosoftware.com.au/solutions/core-hr/
5. Verify that the text ‘Key Benefits’ exists in the page
6. Click on the dropdown menu at the top beside ‘Learn about another product’
7. Click on ‘Payroll’ from the dropdown menu
8. Verify that the text ‘Seamless cloud-based payroll and HR solution’ exists in the page

## Scenario B

1. Open https://elmosoftware.com.au/careers/ in the browser
2. Verify that ‘Browse Jobs’ button exists in the page
3. Open https://elmosoftware.com.au/jobs/
4. Under `Search Jobs` section in the search text field, enter the text `Software Engineer` as search text
5. Click on `Select Job Type` under Job Type and select `Permanent – Full Time`
6. Verify that the returned result contains the any of the following job:
`Full Stack Software Engineer` at Sydney Location, Permanent – Full Time position
OR
`Back End Software Engineer` at Sydney Location, Permanent – Full Time position

# Test 2

- Go to URL https://www.weatherbit.io/api/swaggerui/weather-api-v2#/ and create an automation for API testing using JMeter or POSTMAN for the following:
- Get Current weather data for multiple places in the world based on Lat and Lon
- Get current weather data for multiple places in the world based on postcode

**NOTE:** If required, please use the API key: 270b8a7e672c4922800ba25ecbe8adc7
