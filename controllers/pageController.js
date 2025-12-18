exports.home = (req, res) => {
    res.render('index');
};

exports.animeDetails = (req, res) => {
    res.render('pages/anime-details');
};

exports.animeWatching = (req, res) => {
    res.render('pages/anime-watching');
};

exports.categories = (req, res) => {
    res.render('pages/categories');
};

exports.contact = (req, res) => {
    res.render('pages/contact');
};

exports.ourBlog = (req, res) => {
    res.render('pages/our-blog');
};

exports.signUp = (req, res) => {
    res.render('pages/sign-up');
};

exports.registerUser = (req, res) => {
  console.log(req.body);   // 👈 pehle ye dekho

  const { email, password } = req.body;

  res.render('pages/success', {
    email,
    password
  });
};






