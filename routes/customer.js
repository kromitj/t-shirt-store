const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('./validation/register');
const validateLoginInput = require('./validation/login');

// Load User model
const models = require('../models')
const Customer = models.Customer
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// // @route   POST api/users/register
// // @desc    Register user
// // @access  Public
router.post('/register', (req, res) => {
  console.log(req.body)
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(errors, isValid)
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  } 

  Customer.findOne({where: {email: req.body.email }}).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });

      Customer.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        shipping_region_id: 1,
      }).then((customer) => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(customer.password, salt, (err, hash) => {
            if (err) throw err;
            customer.password = hash;
            customer
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });       
      })
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find customer by email
  Customer.findOne({where: {email: email} }).then(customer => {
    // Check for customer
    if (!customer) {
      errors.email = 'Customer not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, customer.password).then(isMatch => {
      if (isMatch) {
        // Customer Matched
        const payload = { id: customer.customer_id, name: customer.name, email: customer.email }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          'secret',
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.customer_id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
