# QNA (Questions and Answers)

## Overview
QNA is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a platform for users to engage in question-and-answer sessions, with a special feature allowing audio questions.

## Deployment Links
- **Frontend**: [QNA Frontend](https://qna-coral.vercel.app/)
- **Backend**: [QNA Backend](https://qna-fp99.vercel.app/)

## Features
- **Audio Questions**: Users can listen to audio questions, providing an interactive experience.
- **Question Management**: Users can manage questions, including adding and deleting them.
- **Responsive Design**: The application is designed to be responsive, ensuring optimal user experience across devices.

## Technologies Used
- **Frontend**: React.js, Material-UI, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Deployment**: Vercel (Frontend), Vercel (Backend)

## Usage
To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `frontend` directory and run `npm install` to install dependencies.
3. Similarly, navigate to the `backend` directory and run `npm install`.
4. Create a MongoDB Atlas account and set up a cluster.
5. Create a `.env` file in the `backend` directory and add your MongoDB connection URI as `MONGOURL` anp port as `PORT`.
6. Go to `/src/API/qustion.ts` in `frontend` and edit the `baseUrl` to `http://localhost:{Your Port}`
7. Run `npm start` in both the `frontend` and `backend` directories to start the development servers.
8. Access the application at `http://localhost:3000`.
