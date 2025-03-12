// Description: Options page for the extension

const separatorOptionsForm = document.getElementById('separatorOptions');

// Load saved settings
chrome.storage.sync.get('separatorStyle', (data) => {
  document.getElementById(data.separatorStyle || 'option1').checked = true;
});

// Save settings
separatorOptionsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedOption = document.querySelector('input[name="separatorStyle"]:checked').value;
  chrome.storage.sync.set({ separatorStyle: selectedOption }, () => {
    alert('Settings saved.');
  });
});
