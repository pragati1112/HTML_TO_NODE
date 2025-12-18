const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Home
router.get('/', pageController.home);

// Anime pages
router.get('/anime-details', pageController.animeDetails);
router.get('/anime-watching', pageController.animeWatching);

// Other pages
router.get('/categories', pageController.categories);
router.get('/contact', pageController.contact);
router.get('/our-blog', pageController.ourBlog);
router.get('/sign-up', pageController.signUp);

// FORM POST (FIX HERE 👇)
router.post('/register', pageController.registerUser);

module.exports = router;
