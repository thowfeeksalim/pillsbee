const ParseServer = require('parse-server').ParseServer;
const express = require('express');
const ParseDashboard = require('parse-dashboard');
const path = require('path');

const app = express();
const config = require('./config.json');

const api = new ParseServer(config);


app.use('/parse', api);


const dashboardConfig = require('./dashboard-config.json');
const dashboard = new ParseDashboard(dashboardConfig, {
  allowInsecureHTTP: true,
});


app.use('/dashboard', dashboard);


app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log(`Parse Server is running on port ${port}`);
});
