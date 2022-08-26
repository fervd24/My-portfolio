# Personal Portfolio

### React version

 
React 18.2.0 - channel stable  

* It's recomended to use the same version and channel
* Null safety enabled

## Up and Running

To get started, clone/fork or download as zip the repository.

##### Command to download packages
  npm install
##### Command to run the app
  npm start

### Folder Structure (Demo)

    ├── src                       # Contains all files used across the project  
        ├── api                      # All services that take care of the communication between the React application(frontend) and an API(backend)
        ├── assets                   # Contains images of the project 
        ├── components               # Collection of UI components
        ├── helpers                  # Contains helper functions
        ├── hooks                    # Contains custom hooks which are used in several components         
    ├── public                   # Contains all static files of the project
        ├── _redirects               # Contains redirect rules for SPA
        ├── index.html               
        ├── manifest.json            
        ├── robots.txt               
    ├── build                        # Contains production files for the application
    ├── README.md   
    ├── package.json
    ├── package.json.lock


------


### Todo's List

[x] API implementaion, src/api/.

[x] Add responsive styles.

[x] Add form validations src/helpers.

[ ] CI/CD integration.

[ ] Unit Tests.

[ ] Integration Tests.