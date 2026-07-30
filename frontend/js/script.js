document.addEventListener("DOMContentLoaded", function () {

  // movie info keyed by img alt text
  var movieData = {
    "Show 1":  { title: "Stranger Things", genre: ["Sci-Fi","Horror","Drama"], year: "2022", rating: "8.7", duration: "50 min", desc: "When a boy vanishes, a small town uncovers a mystery involving secret experiments and a strange little girl." },
    "Show 2":  { title: "Breaking Bad", genre: ["Crime","Drama","Thriller"], year: "2008", rating: "9.5", duration: "47 min", desc: "A chemistry teacher teams up with a former student to cook meth and secure his family's future." },
    "Show 3":  { title: "The Crown", genre: ["Drama","History"], year: "2020", rating: "8.6", duration: "58 min", desc: "Follows Queen Elizabeth II's reign and the events that shaped the second half of the 20th century." },
    "Show 4":  { title: "Money Heist", genre: ["Crime","Action","Thriller"], year: "2021", rating: "8.2", duration: "45 min", desc: "A criminal mastermind known as The Professor plans the biggest heist in recorded history." },
    "Show 5":  { title: "Dark", genre: ["Sci-Fi","Mystery","Thriller"], year: "2017", rating: "8.8", duration: "60 min", desc: "A family saga with a supernatural twist set in a German town after two kids go missing." },
    "Show 6":  { title: "Peaky Blinders", genre: ["Crime","Drama"], year: "2019", rating: "8.8", duration: "60 min", desc: "A gangster family epic set in 1900s England, led by Tommy Shelby." },
    "Show 7":  { title: "Squid Game", genre: ["Thriller","Drama","Action"], year: "2021", rating: "8.0", duration: "55 min", desc: "Broke players accept a strange invite to compete in children's games for a deadly prize." },
    "Show 8":  { title: "The Boys", genre: ["Action","Comedy","Sci-Fi"], year: "2022", rating: "8.7", duration: "60 min", desc: "Vigilantes take down corrupt superheroes who abuse their powers." },
    "Show 9":  { title: "Ozark", genre: ["Crime","Drama","Thriller"], year: "2020", rating: "8.4", duration: "60 min", desc: "A financial advisor moves his family to the Ozarks to launder money for a drug boss." },
    "Show 11": { title: "Succession", genre: ["Drama","Comedy"], year: "2021", rating: "8.9", duration: "60 min", desc: "The Roy family controls a huge media company, but the future is uncertain." },
    "Show 12": { title: "Westworld", genre: ["Sci-Fi","Drama","Thriller"], year: "2020", rating: "8.5", duration: "62 min", desc: "A theme park where every human appetite can be indulged — until things go wrong." },
    "Show 13": { title: "House of Cards", genre: ["Drama","Thriller"], year: "2018", rating: "8.1", duration: "50 min", desc: "Frank Underwood and his wife Claire climb the political ladder through manipulation." },
    "Movie 1": { title: "Avengers: Endgame", genre: ["Action","Sci-Fi","Adventure"], year: "2019", rating: "8.4", duration: "3h 1m", desc: "The Avengers assemble again to reverse Thanos' actions and restore the universe." },
    "Movie 2": { title: "Spider-Man: No Way Home", genre: ["Action","Adventure","Sci-Fi"], year: "2021", rating: "8.3", duration: "2h 28m", desc: "Peter asks Doctor Strange for help, but a spell goes wrong and opens the multiverse." },
    "Movie 3": { title: "Doctor Strange", genre: ["Action","Adventure","Fantasy"], year: "2022", rating: "7.4", duration: "2h 6m", desc: "Strange casts a forbidden spell that opens a rift in the multiverse." },
    "Movie 4": { title: "Black Panther", genre: ["Action","Adventure","Sci-Fi"], year: "2018", rating: "7.3", duration: "2h 14m", desc: "T'Challa returns to Wakanda to lead his people after his father's death." },
    "Movie 5": { title: "Interstellar", genre: ["Sci-Fi","Drama","Adventure"], year: "2014", rating: "8.6", duration: "2h 49m", desc: "Explorers travel through a wormhole to find a new home for humanity." },
    "Movie 6": { title: "Inception", genre: ["Action","Sci-Fi","Thriller"], year: "2010", rating: "8.8", duration: "2h 28m", desc: "A thief who steals secrets through dreams is tasked with planting an idea instead." },
    "Movie 7": { title: "The Dark Knight", genre: ["Action","Crime","Drama"], year: "2008", rating: "9.0", duration: "2h 32m", desc: "Batman faces the Joker as chaos spreads across Gotham." },
    "Movie 8": { title: "Oppenheimer", genre: ["Drama","History","Thriller"], year: "2023", rating: "8.9", duration: "3h", desc: "The story of J. Robert Oppenheimer and the atomic bomb." },
    "Recently Added 1": { title: "John Wick 4", genre: ["Action","Thriller","Crime"], year: "2023", rating: "7.7", duration: "2h 49m", desc: "John Wick looks for a way to defeat the High Table and earn his freedom." },
    "Recently Added 2": { title: "Fast X", genre: ["Action","Adventure","Crime"], year: "2023", rating: "5.8", duration: "2h 21m", desc: "Dom and his family are targeted by the son of drug lord Hernan Reyes." },
    "Recently Added 3": { title: "Guardians of the Galaxy 3", genre: ["Action","Adventure","Comedy"], year: "2023", rating: "7.9", duration: "2h 30m", desc: "Peter Quill rallies the Guardians to protect one of their own." },
    "Recently Added 4": { title: "Mission: Impossible", genre: ["Action","Adventure","Thriller"], year: "2023", rating: "7.7", duration: "2h 43m", desc: "Ethan Hunt and his IMF team race to stop a new weapon from falling into the wrong hands." },
    "Recently Added 5": { title: "Indiana Jones 5", genre: ["Action","Adventure","Sci-Fi"], year: "2023", rating: "6.9", duration: "2h 34m", desc: "Indy races to retrieve a legendary artifact before villains get to it first." },
    "The Call": { title: "The Call (2020)", genre: ["Thriller","Horror","Mystery"], year: "2020", rating: "7.3", duration: "1h 52m", desc: "Two women in different eras are connected by a phone call that changes both their lives." },
    "The Revenant": { title: "The Revenant (2015)", genre: ["Drama","Adventure","Thriller"], year: "2015", rating: "8.0", duration: "2h 36m", desc: "A frontiersman fights for survival after being left for dead by his own hunting team." },
    "The Boys": { title: "The Boys", genre: ["Action","Comedy","Sci-Fi"], year: "2019", rating: "8.7", duration: "60 min", desc: "Vigilantes take down corrupt superheroes who abuse their powers." },
    "Peaky Blinders": { title: "Peaky Blinders", genre: ["Crime","Drama"], year: "2013", rating: "8.8", duration: "60 min", desc: "Tommy Shelby leads a razor-blade gang in 1900s Birmingham." },
    "Breaking Bad": { title: "Breaking Bad", genre: ["Crime","Drama","Thriller"], year: "2008", rating: "9.5", duration: "47 min", desc: "Walter White teams up with a former student to cook meth after a cancer diagnosis." },
    "The Batman": { title: "The Batman", genre: ["Action","Crime","Drama"], year: "2022", rating: "7.8", duration: "2h 56m", desc: "Batman tracks a sadistic killer leaving cryptic clues around Gotham." },
    "Batman": { title: "The Batman", genre: ["Action","Crime","Drama"], year: "2022", rating: "7.8", duration: "2h 56m", desc: "Batman tracks a sadistic killer leaving cryptic clues around Gotham." },
    "Vampire Diaries": { title: "The Vampire Diaries", genre: ["Drama","Fantasy","Horror"], year: "2017", rating: "7.7", duration: "42 min", desc: "Supernatural drama set in Mystic Falls, Virginia." },
    "Sistas": { title: "Tyler Perry's Sistas", genre: ["Drama","Comedy"], year: "2019", rating: "5.5", duration: "45 min", desc: "Four women deal with relationships and everyday life." },
    "John Wick": { title: "John Wick: Chapter 4", genre: ["Action","Crime","Thriller"], year: "2023", rating: "7.7", duration: "2h 49m", desc: "John Wick looks for a way to defeat the High Table and earn his freedom." },
    "Dune": { title: "Dune (2021)", genre: ["Sci-Fi","Adventure","Drama"], year: "2021", rating: "8.0", duration: "2h 35m", desc: "Paul Atreides must protect Arrakis, home of the galaxy's most valuable resource." },
    "Dark": { title: "Dark", genre: ["Sci-Fi","Mystery","Thriller"], year: "2017", rating: "8.8", duration: "60 min", desc: "A family saga with a supernatural twist spanning multiple timelines." },
    "Game Of Thrones": { title: "Game of Thrones", genre: ["Fantasy","Drama","Action"], year: "2011", rating: "9.2", duration: "57 min", desc: "Noble families fight for control of Westeros while an ancient enemy returns." },
    "Brahmastra": { title: "Brahmastra Part One: Shiva", genre: ["Action","Fantasy","Drama"], year: "2022", rating: "5.5", duration: "2h 27m", desc: "Shiva discovers a mysterious connection with the Brahmastra." },
    "World War Z": { title: "World War Z", genre: ["Action","Horror","Sci-Fi"], year: "2013", rating: "7.0", duration: "1h 56m", desc: "Gerry Lane races around the world to stop a zombie pandemic." },
    "Rings Of Power": { title: "Rings of Power", genre: ["Fantasy","Adventure","Drama"], year: "2022", rating: "7.1", duration: "60 min", desc: "Heroes rise as darkness returns to Middle-earth in the Second Age." },
    "Them": { title: "Them", genre: ["Horror","Drama","Thriller"], year: "2021", rating: "7.2", duration: "55 min", desc: "A Black family moves to an all-white LA neighborhood in 1953 and faces dark forces." },
    "The Notebook": { title: "The Notebook", genre: ["Drama","Romance"], year: "2004", rating: "7.8", duration: "2h", desc: "A poor young man falls in love with a rich young woman, then they get pulled apart." },
    "Jurassic World": { title: "Jurassic World Dominion", genre: ["Action","Adventure","Sci-Fi"], year: "2022", rating: "5.6", duration: "2h 27m", desc: "Dinosaurs now live and hunt alongside humans all over the world." },
    "Planet Of Apes": { title: "Planet of the Apes", genre: ["Action","Drama","Sci-Fi"], year: "2011", rating: "7.6", duration: "1h 45m", desc: "Caesar gains self-awareness and leads a rebellion of intelligent apes." },
    "Avengers": { title: "Avengers: Endgame", genre: ["Action","Sci-Fi","Adventure"], year: "2019", rating: "8.4", duration: "3h 1m", desc: "The Avengers assemble again to undo Thanos' actions." },
    "Spider Man": { title: "Spider-Man: No Way Home", genre: ["Action","Adventure","Sci-Fi"], year: "2021", rating: "8.3", duration: "2h 28m", desc: "Peter asks Doctor Strange for help, but a spell goes wrong and opens the multiverse." },
    "Attack On Titan": { title: "Attack on Titan", genre: ["Anime","Action","Drama"], year: "2013", rating: "9.0", duration: "24 min", desc: "Humanity lives behind walls while giant Titans threaten their survival." },
    "Show 17": { title: "Loki", genre: ["Sci-Fi","Fantasy","Adventure"], year: "2021", rating: "8.2", duration: "50 min", desc: "Loki continues his role as God of Mischief after the events of Endgame." },
    "Show 18": { title: "WandaVision", genre: ["Fantasy","Drama","Sci-Fi"], year: "2021", rating: "7.9", duration: "40 min", desc: "Wanda and Vision live a suburban life in Westview — but something is off." },
    "Comedy 1": { title: "Brooklyn Nine-Nine", genre: ["Comedy","Crime"], year: "2013", rating: "8.4", duration: "22 min", desc: "Jake Peralta works with his hard-nosed boss Ray Holt at a Brooklyn precinct." },
    "Comedy 2": { title: "The Office", genre: ["Comedy","Drama"], year: "2005", rating: "9.0", duration: "22 min", desc: "A mockumentary about everyday life at a paper company office." },
    "Comedy 3": { title: "Parks and Recreation", genre: ["Comedy"], year: "2009", rating: "8.6", duration: "22 min", desc: "The quirky staff of a small-town parks department try to improve their city." },
    "Comedy 4": { title: "Schitt's Creek", genre: ["Comedy","Drama"], year: "2015", rating: "8.3", duration: "22 min", desc: "A wealthy family loses everything and ends up living in a town they once bought as a joke." },
    "Comedy 5": { title: "Ted Lasso", genre: ["Comedy","Drama","Sport"], year: "2020", rating: "8.8", duration: "30 min", desc: "An American football coach gets hired to manage an English soccer team." },
    "Comedy 6": { title: "What We Do in the Shadows", genre: ["Comedy","Horror"], year: "2019", rating: "8.6", duration: "30 min", desc: "A mockumentary about vampire roommates living in New York." },
    "Show 25": { title: "The Witcher", genre: ["Fantasy","Drama","Action"], year: "2019", rating: "8.2", duration: "60 min", desc: "Geralt of Rivia hunts monsters in a world where people can be worse than beasts." },
    "Show 26": { title: "Cobra Kai", genre: ["Drama","Action","Comedy"], year: "2018", rating: "8.6", duration: "30 min", desc: "Johnny Lawrence reopens the Cobra Kai dojo decades after his karate tournament loss." },
    "Show 27": { title: "Mandalorian", genre: ["Sci-Fi","Action","Adventure"], year: "2019", rating: "8.8", duration: "40 min", desc: "A lone bounty hunter travels the outer reaches of the galaxy." },
    "Show 28": { title: "Arcane", genre: ["Anime","Action","Fantasy"], year: "2021", rating: "9.0", duration: "40 min", desc: "Origin story of two League of Legends champions set between Piltover and Zaun." },
    "Show 29": { title: "Euphoria", genre: ["Drama","Romance","Thriller"], year: "2019", rating: "8.4", duration: "58 min", desc: "High school students deal with drugs, identity, trauma and social media." }
  };

  function getMovieInfo(alt) {
    if (movieData[alt]) return movieData[alt];
    var lower = alt.toLowerCase();
    for (var key in movieData) {
      if (lower.indexOf(key.toLowerCase()) !== -1 || key.toLowerCase().indexOf(lower) !== -1) {
        return movieData[key];
      }
    }
    return {
      title: alt,
      genre: ["Drama"],
      year: "2024",
      rating: "8.0",
      duration: "N/A",
      desc: "Available to stream on Prime Video."
    };
  }

  // toast
  var toastTimer;
  function showToast(msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove("show");
    }, 3000);
  }

  // wishlist
  var wishlist = JSON.parse(localStorage.getItem("primeWishlist") || "[]");

  function saveWishlist() {
    localStorage.setItem("primeWishlist", JSON.stringify(wishlist));
  }

  function toggleWishlist(title, btn) {
    var idx = wishlist.indexOf(title);
    if (idx === -1) {
      wishlist.push(title);
      saveWishlist();
      btn.classList.add("added");
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
      showToast('"' + title + '" added to My List');
    } else {
      wishlist.splice(idx, 1);
      saveWishlist();
      btn.classList.remove("added");
      btn.innerHTML = '<i class="fa-solid fa-plus"></i> My List';
      showToast('"' + title + '" removed from My List');
    }
  }

  // movie modal
  var movieOverlay = document.getElementById("movieModalOverlay");
  var movieBanner = document.getElementById("movieModalBanner");
  var movieBadge = document.getElementById("movieModalBadge");
  var movieTitleEl = document.getElementById("movieModalTitle");
  var movieMeta = document.getElementById("movieModalMeta");
  var movieDescEl = document.getElementById("movieModalDesc");
  var movieTagsEl = document.getElementById("movieModalTags");
  var modalWatchBtn = document.getElementById("modalWatchBtn");
  var modalWishlist = document.getElementById("modalWishlistBtn");
  var movieClose = document.getElementById("movieModalClose");

  function openMovieModal(imgSrc, alt) {
    var info = getMovieInfo(alt);
    movieBanner.src = imgSrc;
    movieBanner.alt = info.title;
    movieBadge.innerHTML = '<i class="fa-solid fa-star"></i> Prime Video';
    movieTitleEl.textContent = info.title;
    movieMeta.innerHTML =
      '<span class="rating"><i class="fa-solid fa-star"></i> ' + info.rating + "</span>" +
      '<span><i class="fa-regular fa-calendar"></i> ' + info.year + "</span>" +
      '<span><i class="fa-regular fa-clock"></i> ' + info.duration + "</span>";
    movieDescEl.textContent = info.desc;
    movieTagsEl.innerHTML = "";
    info.genre.forEach(function (g) {
      var tag = document.createElement("span");
      tag.className = "movie-tag";
      tag.textContent = g;
      movieTagsEl.appendChild(tag);
    });

    if (wishlist.indexOf(info.title) !== -1) {
      modalWishlist.classList.add("added");
      modalWishlist.innerHTML = '<i class="fa-solid fa-check"></i> Added';
    } else {
      modalWishlist.classList.remove("added");
      modalWishlist.innerHTML = '<i class="fa-solid fa-plus"></i> My List';
    }

    modalWishlist.onclick = function () {
      toggleWishlist(info.title, modalWishlist);
    };
    modalWatchBtn.onclick = function () {
      showToast('Playing "' + info.title + '"...');
    };

    movieOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMovieModal() {
    if (!movieOverlay) return;
    movieOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (movieClose) movieClose.addEventListener("click", closeMovieModal);
  if (movieOverlay) {
    movieOverlay.addEventListener("click", function (e) {
      if (e.target === movieOverlay) closeMovieModal();
    });
  }

  document.querySelectorAll(".movie-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var img = card.querySelector("img");
      if (img) openMovieModal(img.src, img.alt);
    });
  });

  // auth
  var authOverlay = document.getElementById("authModalOverlay");
  var authCloseBtn = document.getElementById("authModalClose");
  var authTabs = document.querySelectorAll(".auth-tab");
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var authSuccess = document.getElementById("authSuccess");
  var authSuccessTitle = document.getElementById("authSuccessTitle");
  var authSuccessMsg = document.getElementById("authSuccessMsg");
  var signinBtn = document.getElementById("signinBtn");
  var mobileSigninBtn = document.getElementById("mobileSigninBtn");
  var userAvatar = document.getElementById("userAvatar");
  var currentUser = JSON.parse(localStorage.getItem("primeUser") || "null");

  function updateAuthUI() {
    if (currentUser) {
      if (signinBtn) signinBtn.style.display = "none";
      if (mobileSigninBtn) mobileSigninBtn.style.display = "none";
      if (userAvatar) {
        userAvatar.classList.add("show");
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
        userAvatar.title = currentUser.name;
      }
    } else {
      if (signinBtn) signinBtn.style.display = "";
      if (mobileSigninBtn) mobileSigninBtn.style.display = "";
      if (userAvatar) userAvatar.classList.remove("show");
    }
  }

  function clearFormErrors() {
    document.querySelectorAll(".form-group input").forEach(function (i) {
      i.classList.remove("error");
    });
    document.querySelectorAll(".field-error").forEach(function (e) {
      e.classList.remove("show");
    });
  }

  function openAuthModal(tab) {
    if (!authOverlay) return;
    authOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    authSuccess.classList.remove("show");
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
    authTabs.forEach(function (t) {
      t.classList.remove("active");
    });

    var targetTab = tab || "login";
    var tabBtn = document.querySelector('[data-tab="' + targetTab + '"]');
    if (tabBtn) tabBtn.classList.add("active");
    var targetForm = document.getElementById(targetTab + "Form");
    if (targetForm) targetForm.classList.add("active");
    clearFormErrors();
  }

  function closeAuthModal() {
    if (!authOverlay) return;
    authOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (signinBtn) {
    signinBtn.addEventListener("click", function () {
      openAuthModal("login");
    });
  }
  if (mobileSigninBtn) {
    mobileSigninBtn.addEventListener("click", function () {
      openAuthModal("login");
    });
  }
  if (authCloseBtn) authCloseBtn.addEventListener("click", closeAuthModal);
  if (authOverlay) {
    authOverlay.addEventListener("click", function (e) {
      if (e.target === authOverlay) closeAuthModal();
    });
  }

  // tap avatar to sign out
  if (userAvatar) {
    userAvatar.addEventListener("click", function () {
      if (!currentUser) return;
      showToast("Signed in as " + currentUser.name);
      setTimeout(function () {
        currentUser = null;
        localStorage.removeItem("primeUser");
        updateAuthUI();
        showToast("Signed out");
      }, 1500);
    });
  }

  authTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");
      authTabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      loginForm.classList.remove("active");
      signupForm.classList.remove("active");
      var f = document.getElementById(target + "Form");
      if (f) f.classList.add("active");
      authSuccess.classList.remove("show");
      clearFormErrors();
    });
  });

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function setFieldError(inputEl, errEl, hasError) {
    inputEl.classList.toggle("error", hasError);
    errEl.classList.toggle("show", hasError);
    return !hasError;
  }

  // ── API base URL ──────────────────────────────────────────────────
  var API = 'http://localhost:5000/api';

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email    = document.getElementById("loginEmail");
      var password = document.getElementById("loginPassword");
      var ok = true;
      ok = setFieldError(email,    document.getElementById("loginEmailErr"),    !isValidEmail(email.value.trim())) && ok;
      ok = setFieldError(password, document.getElementById("loginPasswordErr"), password.value.length < 6) && ok;
      if (!ok) return;

      // call backend API
      fetch(API + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value.trim(), password: password.value })
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.token) {
          currentUser = { name: data.user.name, email: data.user.email };
          localStorage.setItem("primeUser",  JSON.stringify(currentUser));
          localStorage.setItem("primeToken", data.token);
          loginForm.classList.remove("active");
          authSuccessTitle.textContent = "Welcome back, " + data.user.name + "!";
          authSuccessMsg.textContent   = "You're signed in.";
          authSuccess.classList.add("show");
          updateAuthUI();
          setTimeout(closeAuthModal, 2000);
        } else {
          setFieldError(email, document.getElementById("loginEmailErr"), true);
          document.getElementById("loginEmailErr").textContent = data.message || "Login failed.";
        }
      })
      .catch(function() {
        showToast("Server not reachable. Please try again.");
      });
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name     = document.getElementById("signupName");
      var email    = document.getElementById("signupEmail");
      var password = document.getElementById("signupPassword");
      var ok = true;
      ok = setFieldError(name,     document.getElementById("signupNameErr"),     name.value.trim().length < 2) && ok;
      ok = setFieldError(email,    document.getElementById("signupEmailErr"),    !isValidEmail(email.value.trim())) && ok;
      ok = setFieldError(password, document.getElementById("signupPasswordErr"), password.value.length < 6) && ok;
      if (!ok) return;

      // call backend API
      fetch(API + '/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.value.trim(), email: email.value.trim(), password: password.value })
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.token) {
          currentUser = { name: data.user.name, email: data.user.email };
          localStorage.setItem("primeUser",  JSON.stringify(currentUser));
          localStorage.setItem("primeToken", data.token);
          signupForm.classList.remove("active");
          authSuccessTitle.textContent = "Account created!";
          authSuccessMsg.textContent   = "Welcome, " + data.user.name + ".";
          authSuccess.classList.add("show");
          updateAuthUI();
          setTimeout(closeAuthModal, 2000);
        } else {
          setFieldError(email, document.getElementById("signupEmailErr"), true);
          document.getElementById("signupEmailErr").textContent = data.message || "Signup failed.";
        }
      })
      .catch(function() {
        showToast("Server not reachable. Please try again.");
      });
    });
  }

  document.querySelectorAll(".auth-google-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentUser = { name: "Google User", email: "google@example.com" };
      localStorage.setItem("primeUser", JSON.stringify(currentUser));
      document.querySelectorAll(".auth-form").forEach(function (f) {
        f.classList.remove("active");
      });
      authSuccessTitle.textContent = "Welcome!";
      authSuccessMsg.textContent = "Signed in with Google.";
      authSuccess.classList.add("show");
      updateAuthUI();
      setTimeout(closeAuthModal, 2000);
    });
  });

  updateAuthUI();

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMovieModal();
      closeAuthModal();
    }
  });

  // sticky nav style on scroll
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  // search toggle
  var searchToggleBtn = document.getElementById("searchToggleBtn");
  var searchBox = document.getElementById("searchBox");
  if (searchToggleBtn && searchBox) {
    searchToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      searchBox.classList.toggle("open");
      if (searchBox.classList.contains("open")) {
        var inp = searchBox.querySelector("input");
        if (inp) inp.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (!searchBox.contains(e.target) && e.target !== searchToggleBtn) {
        searchBox.classList.remove("open");
      }
    });
  }

  // mobile menu
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
      }
    });
  }

  // hero slider
  var slides = document.querySelectorAll(".hero-slide");
  var dots = document.querySelectorAll(".dot");
  var nextBtn = document.getElementById("heroNext");
  var prevBtn = document.getElementById("heroPrev");
  var progressBar = document.getElementById("heroProgress");
  var heroEl = document.querySelector(".hero-carousel");
  var currentSlide = 0;
  var autoSlide = null;
  var slideDelay = 5500;
  var paused = false;

  function setProgress(pct, animateMs) {
    if (!progressBar) return;
    progressBar.style.transition = "none";
    progressBar.style.width = pct + "%";
    if (animateMs != null) {
      void progressBar.offsetWidth;
      progressBar.style.transition = "width " + animateMs + "ms linear";
      progressBar.style.width = "100%";
    }
  }

  function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      s.classList.toggle("active", i === currentSlide);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === currentSlide);
    });
    if (!paused) setProgress(0, slideDelay);
    else setProgress(0);
  }

  function startAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(function () {
      if (!paused) showSlide(currentSlide + 1);
    }, slideDelay);
  }

  function goTo(index) {
    paused = false;
    showSlide(index);
    startAuto();
  }

  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(currentSlide + 1); });
  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(currentSlide - 1); });
  dots.forEach(function (d, i) {
    d.addEventListener("click", function () { goTo(i); });
  });

  if (heroEl) {
    heroEl.addEventListener("mouseenter", function () {
      paused = true;
      if (progressBar) {
        var w = parseFloat(getComputedStyle(progressBar).width);
        var parentW = progressBar.parentElement.offsetWidth || 1;
        setProgress((w / parentW) * 100);
      }
    });
    heroEl.addEventListener("mouseleave", function () {
      paused = false;
      setProgress(0, slideDelay);
      startAuto();
    });
  }

  document.querySelectorAll(".hero-slide").forEach(function (slide) {
    function getTitle() {
      return slide.getAttribute("data-title") ||
        (slide.querySelector(".hero-title") ? slide.querySelector(".hero-title").textContent.trim() : "");
    }

    function openSlide() {
      var src = slide.style.backgroundImage.replace(/url\(['"]?/, "").replace(/['"]?\)/, "").trim();
      openMovieModal(src, getTitle());
    }

    var watchBtn = slide.querySelector(".watch-btn");
    var infoBtn = slide.querySelector('.icon-circle-btn[aria-label="More info"]');
    var plusBtn = slide.querySelector('.icon-circle-btn[aria-label="Add to list"]');

    if (watchBtn) watchBtn.addEventListener("click", openSlide);
    if (infoBtn) infoBtn.addEventListener("click", openSlide);

    if (plusBtn) {
      plusBtn.addEventListener("click", function () {
        var title = getTitle();
        var idx = wishlist.indexOf(title);
        if (idx === -1) {
          wishlist.push(title);
          saveWishlist();
          plusBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
          showToast('"' + title + '" added to My List');
        } else {
          wishlist.splice(idx, 1);
          saveWishlist();
          plusBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
          showToast('"' + title + '" removed from My List');
        }
      });
    }
  });

  // swipe on mobile
  if (heroEl) {
    var touchX = 0;
    heroEl.addEventListener("touchstart", function (e) {
      touchX = e.touches[0].clientX;
    }, { passive: true });
    heroEl.addEventListener("touchend", function (e) {
      var diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? currentSlide + 1 : currentSlide - 1);
      }
    }, { passive: true });
  }

  showSlide(0);
  startAuto();

  // search
  var searchInput = document.getElementById("searchInput");
  var mobileSearchInput = document.getElementById("mobileSearchInput");
  var allCards = document.querySelectorAll(".movie-card");

  function filterCards(val) {
    var q = val.toLowerCase().trim();
    allCards.forEach(function (card) {
      var img = card.querySelector("img");
      var title = img ? img.alt.toLowerCase() : "";
      card.classList.toggle("hidden", !!q && title.indexOf(q) === -1);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      filterCards(this.value);
      if (mobileSearchInput) mobileSearchInput.value = this.value;
    });
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", function () {
      filterCards(this.value);
      if (searchInput) searchInput.value = this.value;
    });
  }

  // drag to scroll rows
  document.querySelectorAll(".movie-row").forEach(function (row) {
    var dragging = false;
    var startX = 0;
    var scrollStart = 0;

    row.addEventListener("mousedown", function (e) {
      dragging = true;
      startX = e.pageX - row.offsetLeft;
      scrollStart = row.scrollLeft;
      row.classList.add("dragging");
    });

    document.addEventListener("mouseup", function () {
      dragging = false;
      row.classList.remove("dragging");
    });

    row.addEventListener("mouseleave", function () {
      dragging = false;
      row.classList.remove("dragging");
    });

    row.addEventListener("mousemove", function (e) {
      if (!dragging) return;
      e.preventDefault();
      row.scrollLeft = scrollStart - (e.pageX - row.offsetLeft - startX) * 1.8;
    });
  });

});

