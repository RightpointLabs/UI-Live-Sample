[deprecated]

# UI-Live-Sample
UI Live makes it trivial to upload code live via gulp watch + FTP to an existing Azure Web App with defined FTP deployment credentials.

## Prerequisites
This has been tested with the following dependencies:
- Node.js (v6.9.1) - test with command: `$ node -v`
- NPM (v4.0.3) - test with command: `$ npm --version`
  - Install with command: `$ npm install npm -g` (sudo if you are on a Mac)
- Gulp (v3.9.1) - test with command: `$ gulp -v`
  - Install with command: `$ npm install gulp -g` (sudo if you are on a Mac)

## Instructions
1. Clone this repository
2. Run command: `$ npm install`
3. Set ui-live config values. "app-name" needs to be unique, as this will ultimately determine your public URL
  - Example URL: `https://{web-app-name}.azurewebsites.net/apps/{app-name}`
4. Set ui-live credentials values. Credentials come from FTP deployment credentials from destination Azure Web App. Please contact [@brbarnett](https://github.com/brbarnett) for RP credentials
5. Setup gulpfile.js file to match your file structure. Globs should be able to find all of your static content
6. Run command `$ gulp push-all` to perform an initial push of your static files to the Web App
7. Navigate to `https://{web-app-name}.azurewebsites.net/apps/{app-name}`

For subsequent development, run command `$ gulp watch` to watch file system for changes and upload to Azure on the fly
