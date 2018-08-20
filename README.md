
# Story Maps Training Project 


This application consists of Bootstrap cards on the left panel and the right hand panel corresponds to a geographical map. There are few custom points plotted on the map which correspond to the location of bridges (in this case) on the graph. 
This is a web appliation implemented using JavaScript, JQuery, Bootstrap, arcGIS APIs such as Map, InfoWindow, Popups etc. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software : 
Node Package Manager : (npm)
Localhost Server : (XAMPP) or any other

### Installing and Running

A step by step series of examples that tell you how to get a development env running

Go to the directory when you download the zip or clone the project and when you are inside the project directory run

```
npm install
```
This will install all the dependencies that are required by the application.
```
npm run build
```
This command will run all the build scripts that will pre-configure all the things that you need to run this project.
After this step, run this project on your localhost 

## Screenshots
This is the landing page of the web application which consists of a header, left and right panel. Left panel consists of Bootstrap cards that display an image and its description. The right panel consists of a geographical map.
Here is the screenshot of the landing page of my application : 

![image](https://user-images.githubusercontent.com/8556558/41982236-e4a2f940-79f8-11e8-8d7b-94694bd244e3.png)

Once the user clicks on any of the card, the card gets highlighted and the location of that card (bridge, in our case) gets highlighted. Here is the screenshot of it : 

![image](https://user-images.githubusercontent.com/8556558/41982193-c82f7810-79f8-11e8-8584-521051fc1df2.png)

Finally, if the user clicks on any one of the point of the map, he can see its description as the infoWindow pops up. Simultaneously, the bootstrap card that represents the location gets highlighted which makes it easy for the user if he/she wishes to see the information other way round. Here is the screenshot of it : 

![image](https://user-images.githubusercontent.com/8556558/41982263-fa42bc18-79f8-11e8-9b36-884fcf89c34e.png)

## Technologies Used

* [HTML5](https://www.w3schools.com/html/html5_intro.asp) - Standard markup language for creating Web pages.
* [Sass](https://sass-lang.com/guide) - Extension of CSS that adds power and elegance to the basic language
* [Bootstrap](https://getbootstrap.com/) - Building responsive, mobile-first projects on the web.
* [ARCGIS](https://developers.arcgis.com/) - ArcGIS is a platform for organizations to create, manage, share, and analyze spatial data. It consists of server components, mobile and desktop applications, and developer tools.
* [npm](https://npmjs.com) - Default package manager for the JavaScript runtime environment Node.js
 

## Authors

* **Kunal Bidkar** - *Initial work* - [Kunal Bidkar](https://github.com/kunalbidkar)

## Acknowledgments

* Story Maps ArcGIS APIs.
* Stephen Sylvia for throughout guidance & suggestions in the project.
