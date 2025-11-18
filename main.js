function toggleSidebar() {
    hiddenNav.style.display = 'none';
    subNav.style.display = 'block';
  }

  function closeSubNav() {
    subNav.style.display = 'none';
    hiddenNav.style.display = 'block';
  }

  // Make sure the correct one shows when resizing
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      hiddenNav.style.display = 'none';
      subNav.style.display = 'none';
    } else {
      hiddenNav.style.display = 'block';
      subNav.style.display = 'none';
    }
  });