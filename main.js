
const Parse = require('parse/node');


Parse.initialize('001', null, '500');
Parse.serverURL = 'http://localhost:1337/parse';


Parse.Cloud.define('createTables', async (request) => {
  try {
    const Employee = Parse.Object.extend('Employee');
    const Workdata = Parse.Object.extend('Workdata');

   
    const employeeExists = await new Parse.Query(Employee).first();
    const workdataExists = await new Parse.Query(Workdata).first();

    
    if (!employeeExists) {
      const employeeACL = new Parse.ACL();
      employeeACL.setPublicReadAccess(true);
      employeeACL.setPublicWriteAccess(false);

      const employee = new Employee();
      employee.setACL(employeeACL);
      employee.save(null, { useMasterKey: true });
    }

    if (!workdataExists) {
      const workdataACL = new Parse.ACL();
      workdataACL.setPublicReadAccess(true);
      workdataACL.setPublicWriteAccess(false);

      const workdata = new Workdata();
      workdata.setACL(workdataACL);
      workdata.save(null, { useMasterKey: true });
    }

    return 'Tables created successfully.';
  } catch (error) {
    throw new Parse.Error(500, 'Failed to create tables.');
  }
});


Parse.Cloud.define('generateRandomEmployeeDetails', async (request) => {
  try {
    const Employee = Parse.Object.extend('Employee');
    const Workdata = Parse.Object.extend('Workdata');

    const employees = [];

    for (let i = 0; i < 500; i++) {
      const employee = new Employee();
      employee.set('name', generateRandomName());
      employee.set('gender', generateRandomGender());
      employee.set('age', generateRandomAge());

      const workdata = new Workdata();
      workdata.set('salary', generateRandomSalary());
      workdata.set('joiningDate', generateRandomJoiningDate());
      workdata.save(null, { useMasterKey: true });

      employee.set('workData', workdata);
      employees.push(employee);
    }

    await Parse.Object.saveAll(employees, { useMasterKey: true });

    return 'Random employee details generated and saved successfully.';
  } catch (error) {
    throw new Parse.Error(500, 'Failed to generate random employee details.');
  }
});


Parse.Cloud.define('deleteRandomEmployees', async (request) => {
  try {
    const Employee = Parse.Object.extend('Employee');
    const query = new Parse.Query(Employee);
    query.limit(100);

    const employees = await query.find({ useMasterKey: true });

    await Parse.Object.destroyAll(employees, { useMasterKey: true });

    return 'Random employees deleted successfully.';
  } catch (error) {
    throw new Parse.Error(500, 'Failed to delete random employees.');
  }
});


Parse.Cloud.define('deleteRandomWorkdata', async (request) => {
  try {
    const Workdata = Parse.Object.extend('Workdata');
    const query = new Parse.Query(Workdata);
    query.limit(100);

    const workdata = await query.find({ useMasterKey: true });

    await Parse.Object.destroyAll(workdata, { useMasterKey: true });

    return 'Random workdata deleted successfully.';
  } catch (error) {
    throw new Parse.Error(500, 'Failed to delete random workdata.');
  }
});


Parse.Cloud.define('listEmployeesWithoutWorkdata', async (request) => {
  try {
    const Employee = Parse.Object.extend('Employee');
    const query = new Parse.Query(Employee);
    query.doesNotExist('workData');

    const employees = await query.find({ useMasterKey: true });

    return employees.map((employee) => employee.toJSON());
  } catch (error) {
    throw new Parse.Error(500, 'Failed to list employees without workdata.');
  }
});


Parse.Cloud.define('listWorkdataWithoutEmployees', async (request) => {
  try {
    const Workdata = Parse.Object.extend('Workdata');
    const query = new Parse.Query(Workdata);
    query.doesNotExist('employee');

    const workdata = await query.find({ useMasterKey: true });

    return workdata.map((data) => data.toJSON());
  } catch (error) {
    throw new Parse.Error(500, 'Failed to list workdata without employees.');
  }
});



module.exports = Parse.Cloud;
