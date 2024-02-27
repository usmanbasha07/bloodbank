# Blood Bank Web Application

This is a web application developed using Node.js and MongoDB Atlas. The application serves as a platform to manage and access data of blood donors nearby.

## Features

- **User Registration and Authentication:** Users can register with the application and authenticate themselves to access the features.
- **Donor Management:** The application allows the management of donor information including their blood type, contact details, and location.
- **Search Functionality:** Users can search for blood donors based on their location and blood type.
- **Admin Panel:** Administrators can manage donor records, view statistics, and perform CRUD operations on donor data.
- **Responsive Design:** The application is designed to be responsive, ensuring a seamless experience across devices.

## Installation

1. Clone the repository:

git clone https://github.com/usmanbasha07/bloodbank


2. Install dependencies:

npm install


3. Set up MongoDB Atlas:
   
   - Create a MongoDB Atlas account if you don't have one.
   - Create a cluster and obtain the connection URI.
   - Replace the connection URI in `config/db.js` with your MongoDB Atlas connection URI.

4. Start the application:

npm start


## Technologies Used

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB Atlas:** Cloud-hosted MongoDB database service.
- **HTML/CSS/JavaScript:** Frontend development technologies.
- **ReactBootstrap:** Frontend framework for building responsive and mobile-first websites.
- **Passport.js:** Authentication middleware for Node.js.
- **EJS:** Embedded JavaScript templating for generating HTML markup with plain JavaScript.


