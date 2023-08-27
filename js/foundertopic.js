$(document).ready(function() {
  var topics = document.querySelectorAll('.topic');
  var topicImage = document.getElementById('topic-image');
  var previousBtn = document.getElementById('previous-btn');
  var nextBtn = document.getElementById('next-btn');
  var currentIndex = 0;

  // Array of image paths
  var imagePaths = [
    'images/curr1.webp',
    'images/curr2.webp',
    'images/curr3.webp',
    'images/curr4.webp',
    'images/curr5.webp',
    'images/curr6.webp',
    'images/curr7.webp',
    'images/curr8.webp',
    'images/curr9.webp',
    'images/curr10.webp'
  ];

  // Set the initial image, text, and active topic
  topicImage.src = imagePaths[currentIndex];
  topics[currentIndex].classList.add('active');

  // Add event listeners to topics
  topics.forEach(function(topic, index) {
    topic.addEventListener('click', function() {
      currentIndex = index;
      topicImage.src = imagePaths[currentIndex];
      updateActiveTopic();
    });
  });

  // Previous button click event
  previousBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + topics.length) % topics.length;
    topicImage.src = imagePaths[currentIndex];
    updateActiveTopic();
  });

  // Next button click event
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % topics.length;
    topicImage.src = imagePaths[currentIndex];
    updateActiveTopic();
  });

  // Function to update active topic
  function updateActiveTopic() {
    topics.forEach(function(topic, index) {
      topic.classList.toggle('active', index === currentIndex);
    });
  }
});
