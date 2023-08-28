$(document).ready(function() {
  var topics = document.querySelectorAll('.topic');
  var topicImage = document.getElementById('topic-image');
  var topicTextElement = document.getElementById('topic-text');
  var previousBtn = document.getElementById('previous-btn');
  var nextBtn = document.getElementById('next-btn');
  var currentIndex = 0;

  // Array of image paths
  var imagePaths = [
    'images/topic_1.webp',
    'images/topic_2.webp',
    'images/topic_3.webp',
    'images/topic_4.webp',
    'images/topic_5.webp',
    'images/topic_6.webp',
    'images/topic_7.webp',
    'images/topic_8.webp',
    'images/topic_9.webp',
    'images/topic_10.webp'
  ];

  // Array of topic texts
  var topicTexts = [
    "Focus on the right feedback, not all feedback. Identify the top 4-5 themes that really drive your eNPS, and prioritise your resources to solve those .",
    "Assess eNPS (employee Net Promoter Score) at company, team, and manager level to identify which pockets need support",
    "Run continuous surveys from employee onboarding at regular intervals (30, 60, 90 days) for effective organisation assimilation of new joiners",
    "Deep dive at a manager level via detailed manager barometers and create customised development plans",
    "Identify segments of employees & themes that need attention. Understand feedback from different demographic segments & take action.",
    "Conduct frequent assessments and generate your eNPS score regularly, just like you track progress on business metrics.",
    "Create follow-up surveys for specific teams on specific themes frequently.",
    "Empower managers to collect structured anonymous feedback from direct reports and identify blind spots.",
    "Create your own surveys based on your needs or choose from existing templates such as work from home during Covid-19, manager effectiveness, organisational changes, and team effectiveness",
    "Always be on top of employee pulse through AMAs. Allow employees to ask questions to the leadership team (even anonymously), which can be answered during town-halls."
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
