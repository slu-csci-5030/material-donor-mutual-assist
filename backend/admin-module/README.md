# Donor Tracking System

## Overview
The Donor Tracking System is a web application designed to streamline the process of tracking donors and donations for a nonprofit organization. It provides features for managing donor information, recording donations, generating reports, and analyzing donor trends.

## Features
- **User Authentication:** Secure login and registration system for administrators and users.
- **Donor Management:** Add, edit, and delete donor profiles with detailed information.
- **Donation Recording:** Record donations with date, amount, donor information, and purpose.
- **Reporting:** Generate reports on donation trends, donor demographics, and fundraising campaigns.
- **Analytics:** Analyze donor behavior, retention rates, and fundraising effectiveness.
- **Admin Dashboard:** Centralized dashboard for administrators to manage users, donations, and reports.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Node.js, Express.js, PostgresDB
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** PostgresDB
- **Deployment:** AWS

## Installation
1. Clone the repository:
    git clone https://github.com/your-username/donor-tracking-system.git
2. Navigate to the project directory:
    cd donor-tracking-system
3. Install dependencies:
    npm install
4. Configure environment variables:
- Create a `.env` file in the root directory.
- Add environment variables for MongoDB connection URI, JWT secret, and other configuration settings.
  ```
  POSTGRESDB_URI=your_postgresdb_uri
  JWT_SECRET=your_jwt_secret
  ```
5. Run test cases:
    npm test
6. Start the development server:
    npm start
7. Access the application in your browser at `http://localhost:5000`.

## Usage
- Register as an administrator or user to access the application.
- Add donors and record donations through the intuitive user interface.
- Generate reports and analyze donor data to make informed decisions.
- Admins can manage users, donations, and reports from the dashboard.

## Contributing
This repository is contributed by students of Saint Louis University. Please fork the repository and submit pull requests for any improvements, bug fixes, or new features.
