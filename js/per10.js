$(document).ready(function() {
  var topics = document.querySelectorAll('.topic');
  var topicImage = document.getElementById('topic-image');
  var topicTextElement = document.getElementById('topic-text');
  var previousBtn = document.getElementById('previous-btn');
  var nextBtn = document.getElementById('next-btn');
  var currentIndex = 0;

  // Array of image paths
  var imagePaths = [
    'images/top_1.webp',
    'images/top_2.webp',
    'images/top_3.webp',
    'images/top_4.webp',
  ];

  // Array of topic texts
  var topicTexts = [
    "Design a flexible reviews process based on your org’s policy on objectives (OKRs), competencies, or open questions with sectional weightages.",
    "Get a bird’s eye-view of all org-wide review forms. Get a detailed breakdown by status and responses for yourself, your direct reports, & colleagues.",
    "Gather a real-time view of the org’s review cycle status. Nudge your direct reports for their reviews. Admins, nudge any of the reviewers/reviewees.",
    "Access personalised talent card to track employee’s progress over the year and plan career development",
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
