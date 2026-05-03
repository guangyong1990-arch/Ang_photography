// List all possible group IDs
const groups = [
  "transport-group",
  "Street-group",
  "Building-group" // Add any new groups here
];

function showGroup(activeGroupId, event) {
  // Remove 'active' class from all groups
  groups.forEach(groupId => {
    document.getElementById(groupId)?.classList.remove("active");
  });
  
  // Add 'active' class to the selected group
  document.getElementById(activeGroupId)?.classList.add("active");
  
  // Update button state
  if (event && event.target) {
    updateButtonState(event.target);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const activeButton = document.querySelector(".filter-group .btn.active");
  if (activeButton) {
    activeButton.setAttribute("aria-pressed", "true");
  }
});

function updateButtonState(clickedButton) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
  });
  clickedButton.classList.add("active");
  clickedButton.setAttribute("aria-pressed", "true");
}

// Specific functions can now be simplified
function showTransport(event) {
  showGroup("transport-group", event);
}

function showStreet(event) {
  showGroup("Street-group", event);
}

function showBuilding(event) {
  showGroup("Building-group", event);
}