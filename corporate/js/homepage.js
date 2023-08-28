// Get all the buttons and contents
const buttons = document.querySelectorAll('.btn-custom');
const contents = document.querySelectorAll('.content');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and contents
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Get the target content ID from the button's data-target attribute
    const targetContentId = button.getAttribute('data-target');

    // Find the corresponding content and add 'active' class
    const targetContent = document.getElementById(targetContentId);
    targetContent.classList.add('active');
  });
});



