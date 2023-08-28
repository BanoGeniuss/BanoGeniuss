$(document).ready(function() {
  var topics = document.querySelectorAll('.topic');
  var topicImage = document.getElementById('topic-image');
  var topicTextElement = document.getElementById('topic-text');
  var previousBtn = document.getElementById('previous-btn');
  var nextBtn = document.getElementById('next-btn');
  var currentIndex = 0;

  // Array of image paths
  var imagePaths = [
    'images/topic9_1.webp',
    'images/topic9_2.webp',
    'images/topic9_3.webp',
    'images/topic9_4.webp',
    'images/topic9_5.webp',
    'images/topic9_6.webp',
    'images/topic9_7.webp',
    'images/topic9_8.webp',
    'images/topic9_9.webp',
    'images/topic9_10.webp'
  ];

  // Array of topic texts
  var topicTexts = [
    "Facilitate top-down strategy and bottom-up execution effectively. Set company objectives and align them with teams and individuals",
    "Jot all your meeting notes and pin action items in Activity Log, right next to your team’s OKR. Get the entire history of an OKR’s progress and  reduce time spent in meetings by almost 60%. Save one hour every day.",
    "Upload multiple organisation OKRs with a single click through the bulk-upload feature",
    "Collaborate cross-functionally and call out individuals on items that need their attention. Rally the org towards targets effectively.",
    "Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress.",
    "Get a space for all your team goals in one single place using Teams Dashboard. Review OKRs by status, progress or even customised project tags.",
    "Be where the work happens and integrate with apps such as Slack, Jira, MS Teams, and Google sheets. Receive reminders or check-in directly from apps which you currently use in your organization.",
    "Ensure transparency and rigour with detailed success metrics for OKRs.",
    "Prioritise & plan capacity by accepting or rejecting OKRs. Ensure transparency and accountability between teams and individuals.",
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
