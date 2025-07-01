// Simple script to get GitHub repository ID
// Usage: node get-repo-id.js username/repository-name

const repo = process.argv[2];

if (!repo) {
  console.log('Usage: node get-repo-id.js username/repository-name');
  process.exit(1);
}

fetch(`https://api.github.com/repos/${repo}`)
  .then(response => response.json())
  .then(data => {
    if (data.id) {
      console.log(`Repository ID: ${data.id}`);
      console.log(`Repository Name: ${data.full_name}`);
      console.log(`Description: ${data.description || 'No description'}`);
    } else {
      console.log('Repository not found or access denied');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  }); 