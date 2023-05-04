# Overview

This software program aims at allowing users to sign into my application via email and password. Once the user has signed up then they can update their profiles display name, profile image, change password, change username and more. The user can also create posts onto the webpage. They can create a title, body, and delete their own posts. 

The purpose of this software is to create a simple login and blog form in which users can sign in securely and post onto a blog.

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running, a walkthrough of the code, and a view of the cloud database.}

[Software Demo Video](https://youtu.be/1HQnv_3xMqE)

# Cloud Database

The cloud datebase I am using is Firebase. Firebase is a Google owned entity in which it provided authorization, secure password and username funcitonality, and storage. 

The structure of my database is as follows. For users emails and passwords all information is written to the authentication. All usernames and profile pictures are stored in the storage component of firebase. Lastly all post are stored inside of the Firestore database. 

# Development Environment

{Describe the tools that you used to develop the software}
I mainly use JavaScript and React to develop this application. I also used sub tools of React such as React-Router-Dom, React-Scripts, and React-Bootstrap. I used a lot of these components to help boost productivity while building this application and create solid components that will work cross platform.

{Describe the programming language that you used and any libraries.}
* JavaScript
    * JavaScript is one of the main programming languages used in this application. It helped to aid the use of React into the application and adjust elements as the application loaded.
* React
    * React is also one of the main programming languages used in this application. Most of the components in this program used React or React components in order to display, run, or function properly.
* Firebase
    * Firebase is a library used to aid in connecting the application to my application. It helped to initialize the database and push and pull all the data necessary.
* React-Bootstrap
    * React Bootstrap is a library used to aid in the designing of webpages. Which comes preloaded with objects and object designs to aid in the productivity of a web application. This library was primarily used in the design of the login and signup pages.
* React-Router-Dom
    * React Router Dom was primary used in the navigation between pages. Which allowed for authenticated travel between pages, and correct navigation of the web application. 
* React-Scripts
    * React Scripts was primarily used in order to run the server needed for this application. React Scripts was used in order to boot the server up and correctly display the React application.

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Firebase JavaScript Docs](https://firebase.google.com/docs/reference/js?hl=en&authuser=0)
- [Firebase Firestore Docs](https://firebase.google.com/docs/firestore?authuser=0&hl=en)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Add more functionality to the website, and create more features for the user to use
- Design the posts page more and add more style to it. Possibly adding a feature to attach an image with the posts.
- Create a better designed blog page, and add a character limit to the posts.