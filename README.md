# Car warehouse management system

A vehicle warehouse management system designed to help manage the warehouse. This system allows inventory tracking, product management, and also the management of warehouse workers.

## Requirements

- **React**
- **Node.js**
- **npm**
- **Sequelize** (for ORM and database management)
- **Database**: MSSQL.

## Server dependencies

- **cors**
- **dotenv**
- **express**
- **sequelize**
- **sequelize-cli**
- **tedious**

## Client dependencies

- **axios**
- **bootstrap**
- **react-bootstrap**
- **react-redux**
- **redux**

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rawad96/Assignment.git
   ```
2. npm install

## before running the system

1. Please change the username, password and host in .env to connect to database
2. Run
   ```bash
    sequelize db:migrate
    sequelize db:seed:all
    node .\index.js
   ```
   I hope this will be helpful, and I look forward to your feedback. 😊
