# Guitar Repair Inventory Management System (G.R.I.M.S. App)

## Overview
GRIMS is a full-stack application designed to help guitar repair technicians log, manage, and track client repairs efficiently.

## Features
- **Client Management**: Technicians can add, edit, and delete client repair logs.
- **Database Integration**: Uses MongoDB for storing repair records.
- **REST API**: Backend built with Express.js for handling API requests.
- **React Frontend**: Interactive UI for easy data entry and retrieval.
- **Authentication (Future Implementation)**: Secure login for technicians.

## Technologies Used
- **Frontend**: React.js, React Router, Webpack
- **Backend**: Node.js, Express.js, MongoDB (NoSQL Database)
- **Development Tools**: Docker, Webpack, Mongoose (for database modeling)

## Installation
### Prerequisites
- Node.js (LTS version recommended)
- MongoDB installed or a cloud MongoDB instance (e.g., MongoDB Atlas)
- Docker (optional for containerized development)

### Steps to Run Locally
1. **Clone the Repository**:
   ```sh
   git clone <repo-url>
   cd grims
   ```
2. **Install Dependencies**:
   ```sh
   npm install
   ```
3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     PORT=5000
     ```
4. **Start the Backend Server**:
   ```sh
   npm run server
   ```
5. **Start the Frontend**:
   ```sh
   npm start
   ```

## API Endpoints
| Method | Endpoint        | Description           |
|--------|---------------|----------------------|
| GET    | `/clients`    | Fetch all clients    |
| POST   | `/clients`    | Add a new client     |
| PUT    | `/clients/:id` | Update client details |
| DELETE | `/clients/:id` | Remove a client      |

## Deployment
For production deployment, you can use:
- **Docker**: `docker-compose up --build`
- **Vercel (Frontend)** and **Railway/Render (Backend)**

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Create a pull request

## License
This project is licensed under the MIT License.

