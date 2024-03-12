// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

// // Display all users
// router.get('/', async (req, res) => {
//   const users = await User.find();
//   res.render('index', { users });
// });

// // Display add user form
// router.get('/add', (req, res) => {
//   res.render('add');
// });

// // Add new user
// router.post('/add', async (req, res) => {
//   const { name, email } = req.body;
//   const newUser = new User({ name, email });
//   await newUser.save();
//   res.redirect('/');
// });

// // Display edit user form
// router.get('/edit/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.render('edit', { user });
// });

// // Update user
// router.post('/edit/:id', async (req, res) => {
//   const { name, email } = req.body;
//   await User.findByIdAndUpdate(req.params.id, { name, email });
//   res.redirect('/');
// });

// // Delete user
// // router.get('/delete/:id', async (req, res) => {
// //   const deleteuser = await User.findByIdAndRemove(req.params.id);
// //   if (!deleteuser) {
// //     return res.status(404).send("User not found");
// //   }
// //   else{
    
// //     res.redirect('add');
// //   }
// // });

// router.get('/delete/:id', async (req, res) => {
//   try {
//     const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

//     if (!deletedUser) {
//       return res.status(404).send("User not found");
//     }

//     // Optional: You can perform additional actions or send a success message here

//     res.redirect('/add'); // Assuming 'add' is the route where you want to redirect
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Display all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});

// Display add user form
router.get('/add', (req, res) => {
  res.render('add');
});

// Add new user
router.post('/add', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.redirect('/');
});

// Display edit user form
router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('edit', { user });
});

// Update user
router.post('/edit/:id', async (req, res) => {
  const { name, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, email });
  res.redirect('/');
});

// Delete user
router.get('/delete/:id', async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

    if (!deletedUser) {
      return res.status(404).send("User not found");
    }

    // Optional: You can perform additional actions or send a success message here

    res.redirect('/'); // Redirect to the index route after successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
