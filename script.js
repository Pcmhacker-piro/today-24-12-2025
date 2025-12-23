function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

const profiles = [
  {
    name: "Codeforces",
    rating: "Active Competitive Programmer",
    link: null,
    logo: "image/codeforces.png"
  },
  {
    name: "LeetCode",
    rating: "DSA Practice",
    link: null,
    logo: "image/leetcode.png"
  },
  {
    name: "CodeChef",
    rating: "Regular Contests",
    link: null,
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='
  }
];

const container = document.getElementById("profilesContainer");

profiles.forEach(p => {
  const card = document.createElement('div');
  card.className = 'profile-card';
  const profileLinkText = p.link ? 'View Profile →' : 'Profile (local view)';
  card.innerHTML = `
    <img src="${p.logo}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.rating}</p>
    <p class="profile-link-text">${profileLinkText}</p>
  `;
  container.appendChild(card);
});