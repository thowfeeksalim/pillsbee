# pillsbee

pillsbee is a project built on Parse Server that provides functionality to manage employee and workdata records. It includes various Parse Cloud Functions for creating tables, generating random employee details, deleting records, and listing records without associations.

## Features

- **Create Tables (parseClass):** This feature checks if the "employee" and "workdata" tables exist in the database. If not, it creates them.

- **Generate Random Employee Details:** This feature generates 500 random employee details, including their workdata, and stores them in the Parse Server database.

- **Delete Random Employees:** This feature randomly selects and deletes 100 employee records from the "employee" table.

- **Delete Random Workdata:** This feature randomly selects and deletes 100 workdata records from the "workdata" table.

- **List Employees without Workdata:** This feature retrieves and lists all the employee records from the "employee" table that do not have associated workdata.

- **List Workdata without Employees:** This feature retrieves and lists all the workdata records from the "workdata" table that do not have associated employees.

## Installation

1. Clone the repository:
git clone https://github.com/thowfeeksalim/pillsbee.git

markdown
Copy code

2. Install dependencies:
cd pillsbee
npm install

markdown
Copy code

3. Set up Parse Server:
- Follow the instructions in the [Parse Server Example repository](https://github.com/parse-community/parse-server-example) to set up Parse Server.
- Make sure to configure the `config.json` file in your Parse Server instance with the required settings.

4. Start the server:
node index.js

vbnet
Copy code

5. Access the Parse Dashboard:
- Open your web browser and navigate to `http://localhost:4040/dashboard`.
- Log in with your Parse Server credentials.
- You can use the Parse Dashboard to manage your Parse Server, including viewing data, running queries, and more.

## Usage

You can make use of the following Parse Cloud Functions:

- `createTables`: Call this function to create the "employee" and "workdata" tables if they don't already exist.

- `generateRandomEmployeeDetails`: Call this function to generate 500 random employee details and store them in the database.

- `deleteRandomEmployees`: Call this function to randomly delete 100 employee records from the "employee" table.

- `deleteRandomWorkdata`: Call this function to randomly delete 100 workdata records from the "workdata" table.

- `listEmployeesWithoutWorkdata`: Call this function to retrieve and list all employee records without associated workdata.

- `listWorkdataWithoutEmployees`: Call this function to retrieve and list all workdata records without associated employees.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
