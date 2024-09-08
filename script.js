function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content > div'); // Select all sections
    sections.forEach(section => section.classList.add('hidden')); // Hide all sections
    document.getElementById(sectionId).classList.remove('hidden'); // Show selected section
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }