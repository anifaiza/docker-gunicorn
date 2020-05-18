# React js
eactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. 

A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code. The components are the heart of all React applications. These Components can be nested with other components to allow complex applications to be built of simple building blocks. ReactJS uses virtual DOM based mechanism to fill data in HTML DOM. The virtual DOM works fast as it only changes individual DOM elements instead of reloading complete DOM every time.

![my components in this project](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/promDiagram.png)


## fakeing api with JSON server
A folder named 'db' contains db.json file.
here the api is '/users' at localhost:3000.
To activate this, open terminal and run 

'json-server --watch db.json'
![db.json file](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/promContainer.png)

## Front-end
Our navbar has 3 components: login, register and userlist.
If a user is not logged in, he can register from the 'register' menu.

![register page](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/promYml.png)

user registered:

![user registration successful](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/promMetrics.png)

Login:

![login page](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/promInterfaeAt9090Port.png)

after sucessfull login, user is pushed to '/userlist'

![user logged in](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/prom_http_requests_total.png) 

response for successfull login

![response for successfull login](https://github.com/anifaiza/docker-gunicorn/blob/prometheus/screenshots/prom_http_requests_total_graph.png)

finally, by logging out, we clear all the local storage data

![user logged out](https://github.com/anifaiza/docker-gunicorn/bloggedb/prometheus/screenshots/prom_http_duration_seconds_sum.png) 
