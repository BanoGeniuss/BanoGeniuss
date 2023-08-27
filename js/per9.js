$(document).ready(function() {
  var topics = document.querySelectorAll('.topica');
  var topicImage = document.getElementById('topic-imagea');
  var topicTextElement = document.getElementById('topic-texta');
  var previousBtn = document.getElementById('previous-btna');
  var nextBtn = document.getElementById('next-btna');
  var currentIndex = 0;

  // Array of image paths
  var imagePaths = [
    'images/top9_1.webp',
    'images/top9_2.webp',
    'images/top9_3.webp',
    'images/top9_4.webp',
  ];

  // Array of topic texts
  var topicTexts = [
    "Create a holistic feedback development plan for your employees. Solicit real-time feedback for and from anyone in the organisation.",
    "Anchor and contextualise every feedback to a project, skillset or behaviour thus enhancing its impact.",
    "Choose to make the respondents’ response anonymous or not, thereby increasing the chances for more candid feedback.",
    "Select from an admin defined feedback template or create one unique to your team and organisation’s principles.",
  ];

  // Set the initial image, text, and active topic
  topicImage.src = imagePaths[currentIndex];
  topicTextElement.textContent = topicTexts[currentIndex];
  topics[currentIndex].classList.add('active');

  // Add event listeners to topics
  topics.forEach(function(topic, index) {
    topic.addEventListener('click', function() {
      currentIndex = index;
      topicImage.src = imagePaths[currentIndex];
      topicTextElement.textContent = topicTexts[currentIndex];
      updateActiveTopic();
    });
  });

  // Previous button click event
  previousBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + topics.length) % topics.length;
    topicImage.src = imagePaths[currentIndex];
    topicTextElement.textContent = topicTexts[currentIndex];
    updateActiveTopic();
  });

  // Next button click event
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % topics.length;
    topicImage.src = imagePaths[currentIndex];
    topicTextElement.textContent = topicTexts[currentIndex];
    updateActiveTopic();
  });

  // Function to update active topic
  function updateActiveTopic() {
    topics.forEach(function(topic, index) {
      topic.classList.toggle('active', index === currentIndex);
    });
  }
});
