// Import express module
let express = require('express');
// Create router for the portfolio pages
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {

  // Stores information about my projects
  let Projectlist = [
    {
      name: 'Hands-on 1: AWS, SSH, AWS CLI',
      description: 'This project involved setting up and configuring an AWS environment using AWS CLI commands and SSH to work with cloud resources.'
    },
    {
      name: 'Lab 2 Assignment',
      description: 'This lab involved implementing and testing various AWS services and tools to gain hands-on experience with cloud computing.'
    },
    {
      name: 'Assignment #1 - Stakeholder Identification and Analysis',
      description: 'My group identified and analyzed stakeholders to understand their needs, expectations and influence on the project.'
    },
    {
      name: 'Term Project Proposal',
      description: 'This project involved proposing a product based on market demand and creating a plan for its implementation.'
    }
  ];

  // Passes the project information to the EJS view
  res.render('projects', {
    title: 'Projects',
    Projectlist: Projectlist
  });
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
// Export the router so app.js can use it
module.exports = router;
