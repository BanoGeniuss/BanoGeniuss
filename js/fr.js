function showContent(contentNumber) {
  // Hide all content elements
  var contentElements = document.getElementsByClassName('content-item');
  for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].style.display = 'none';
  }

  // Show the selected content element
  var selectedContent = document.getElementById('content' + contentNumber);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}
