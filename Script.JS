function navigateTo(section) {
  const content = document.getElementById('content');
  if (section === 'home') {
    content.innerHTML = '<h2>Welcome to EthioPulse</h2><p>Latest News</p>';
  } else if (section === 'trending') {
    content.innerHTML = '<h2>Trending Topics</h2><p>Discover the latest trends in Ethiopian news.</p>';
  } else if (section === 'submit') {
    content.innerHTML = `
      <h2>Submit Your News</h2>
      <form onsubmit="submitNews(event)">
        <label for="title">Title:</label>
        <input type="text" id="title" required>
        <label for="content">Content:</label>
        <textarea id="content" required></textarea>
        <button type="submit">Submit</button>
      </form>
    `;
  } else if (section === 'profile') {
    content.innerHTML = '<h2>Your Profile</h2><p>Manage your account and submissions.</p>';
  }
}

function submitNews(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  alert(`News Submitted: ${title}`);
}
