# PhotoSharingApp
A photo sharing app using Reactjs framework and Express.

The app allows for a user to sign in and upload photos that are attributed to a location of the users choosing on a map. 

The uploaded photos are generated with a caption and show what user uploaded the photo.

The photo feed relates to the geo location of the upload. 

A user can scroll to different areas of the map and photos that have been uploaded in those areas will be visible on the photo feed.

If a user scrolls away from a location, the photo feed will change. 

Deployed on Heroku: https://sh-photosharing.herokuapp.com/

# Getting Started 

Download or clone repo

Will need to sign up for Google API for generated key. API key needs to be implemented on the Views/index.js

Also will need cloudinary account to store uploaded images. This info will need to be implemented in the src/components/view/createPost.js

In terminal run:

npm install

npm run build

nodemon

Direct browser to local host

# Built With

React

Express

Node.js

Mongodb

Strata HTML Template

# Authors

Shane Holbein - https://github.com/ShaneH12

# Lincense 

This project is licensed under the MIT License - see the LICENSE.md file for details

# Acknowledgments

Turbo 360

