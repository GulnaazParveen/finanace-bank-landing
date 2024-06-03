
  document.getElementById('hamburger-menu').addEventListener('click', function () {
      var sideNav = document.getElementById('side-nav');
      if (sideNav.classList.contains('active')) {
          sideNav.classList.remove('active');
      } else {
          sideNav.classList.add('active');
      }
  });
