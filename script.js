document.getElementById('toggleButton').addEventListener('click', function() {
  var searchBar = document.getElementById('searchBar');
  if (searchBar.classList.contains('hidden')) {
    searchBar.classList.remove('hidden');
  } else {
    searchBar.classList.add('hidden');
  }
});

