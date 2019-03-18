# t-shirt-store
Developer Set-Up Steps:
1. npm client-install
2. npm client-build
3. npm install
4. npm run test
5. npm start

##Schema
![Pic of Schema](./Schema.png "Schema")

##Mobile Landing Page
![Pic of Schema](./WireFrames/Mobile-Landing.png "Schema")

##About Aplication:
* App is hosted at: https://tshirtstore612.herokuapp.com/
* Uses MERN stack except mySQL instead of MongoDB.
* Includes integration tests on the Models and the Controllers
* Pictures are hosted on Cloudinary.com
* MySQL DB is hosted on ScaleGrid.com
* Front-end uses React with Redux

* Cart information is stored on users localstorage using their ipAdress + 'tShirtStore' as the key
* Once a user logs in a jwtToken is saved on their localStorage and is good for 1 hour
* Admin page is hosted on app.forestadmin.com/39151/dashboard/65877
* Checkout and Credit-Card processing is handled by Stripe
* [Schema Design:](https://github.com/kromitj/t-shirt-store/blob/master/Schema.png)
* [Api Design:] (https://github.com/kromitj/t-shirt-store/blob/master/notes/api-design.txt )

* [Wire frames can be found here:](https://github.com/kromitj/t-shirt-store/tree/master/WireFrames)

