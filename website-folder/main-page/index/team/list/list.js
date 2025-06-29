// Demo data for players (replace with your real data as needed)
const playerData = [
  {
    username: "Purxy_",
    rank: "Founder",
    pp: 405,
    date: "2023-10-01",
    status: "Online",
    skin: "/pictures/skin_placeholder.png",
    skills: [
      { name: "Influence", icon: "/pictures/skill1.png", stars: 5 },
      { name: "PvP Skill", icon: "/pictures/skill2.png", stars: 5 },
      { name: "Warlord", icon: "/pictures/skill3.png", stars: 5 },
      { name: "Grinding", icon: "/pictures/skill4.png", stars: 3 }
    ],
    contributions: [
      {
        title: "Base Builder",
        desc: "Built the main clan base.",
        items: [
          { icon: "/pictures/diamond_pickaxe.png", name: "Diamond Pickaxe", amount: 2 },
          { icon: "/pictures/stone.png", name: "Stone", amount: 128 },
          { icon: "/pictures/torch.png", name: "Torch", amount: 64 },
          { icon: "/pictures/chest.png", name: "Chest", amount: 4 },
          { icon: "/pictures/bed.png", name: "Bed", amount: 1 }
        ]
      },
      {
        title: "Redstone Engineer",
        desc: "Created auto-farms.",
        items: [
          { icon: "/pictures/redstone.png", name: "Redstone", amount: 50 },
          { icon: "/pictures/piston.png", name: "Piston", amount: 10 },
          { icon: "/pictures/observer.png", name: "Observer", amount: 5 },
          { icon: "/pictures/water_bucket.png", name: "Water", amount: 2 },
          { icon: "/pictures/lever.png", name: "Lever", amount: 8 }
        ]
      }
    ]
  },
  {
    username: "MegaMind0007",
    rank: "Leader",
    pp: 330,
    date: "2023-10-01",
    status: "Offline",
    skin: "/pictures/skin_placeholder.png",
    skills: [
      { name: "Influence", icon: "/pictures/skill1.png", stars: 4 },
      { name: "PvP Skill", icon: "/pictures/skill2.png", stars: 5 },
      { name: "Warlord", icon: "/pictures/skill3.png", stars: 4 },
      { name: "Grinding", icon: "/pictures/skill4.png", stars: 2 }
    ],
    contributions: [
      {
        title: "PvP Champion",
        desc: "Won the clan tournament.",
        items: [
          { icon: "/pictures/diamond_sword.png", name: "Diamond Sword", amount: 1 },
          { icon: "/pictures/golden_apple.png", name: "Golden Apple", amount: 5 },
          { icon: "/pictures/shield.png", name: "Shield", amount: 1 },
          { icon: "/pictures/arrow.png", name: "Arrow", amount: 64 },
          { icon: "/pictures/bow.png", name: "Bow", amount: 1 }
        ]
      },
       {
        title: "PvP Champion",
        desc: "Won the clan tournament.",
        items: [
          { icon: "/pictures/diamond_sword.png", name: "Diamond Sword", amount: 1 },
          { icon: "/pictures/golden_apple.png", name: "Golden Apple", amount: 5 },
          { icon: "/pictures/shield.png", name: "Shield", amount: 1 },
          { icon: "/pictures/arrow.png", name: "Arrow", amount: 64 },
          { icon: "/pictures/bow.png", name: "Bow", amount: 1 }
        ]
      },
       {
        title: "PvP Champion",
        desc: "Won the clan tournament.",
        items: [
          { icon: "/pictures/diamond_sword.png", name: "Diamond Sword", amount: 1 },
          { icon: "/pictures/golden_apple.png", name: "Golden Apple", amount: 5 },
          { icon: "/pictures/shield.png", name: "Shield", amount: 1 },
          { icon: "/pictures/arrow.png", name: "Arrow", amount: 64 },
          { icon: "/pictures/bow.png", name: "Bow", amount: 1 }
        ]
      },
       {
        title: "PvP Champion",
        desc: "Won the clan tournament.",
        items: [
          { icon: "/pictures/diamond_sword.png", name: "Diamond Sword", amount: 1 },
          { icon: "/pictures/golden_apple.png", name: "Golden Apple", amount: 5 },
          { icon: "/pictures/shield.png", name: "Shield", amount: 1 },
          { icon: "/pictures/arrow.png", name: "Arrow", amount: 64 },
          { icon: "/pictures/bow.png", name: "Bow", amount: 1 }
        ]
      },
       {
        title: "PvP Champion",
        desc: "Won the clan tournament.",
        items: [
          { icon: "/pictures/diamond_sword.png", name: "Diamond Sword", amount: 1 },
          { icon: "/pictures/golden_apple.png", name: "Golden Apple", amount: 5 },
          { icon: "/pictures/shield.png", name: "Shield", amount: 1 },
          { icon: "/pictures/arrow.png", name: "Arrow", amount: 64 },
          { icon: "/pictures/bow.png", name: "Bow", amount: 1 }
        ]
      },
       {
        title: "PvP Champion",
        desc: "Won the clan tournament.",
        items: [
          { icon: "/pictures/diamond_sword.png", name: "Diamond Sword", amount: 1 },
          { icon: "/pictures/golden_apple.png", name: "Golden Apple", amount: 5 },
          { icon: "/pictures/shield.png", name: "Shield", amount: 1 },
          { icon: "/pictures/arrow.png", name: "Arrow", amount: 64 },
          { icon: "/pictures/bow.png", name: "Bow", amount: 1 }
        ]
      }
    ]
  },
  {
    username: "_FLAHMER",
    rank: "Co-Leader",
    pp: 260,
    date: "2023-10-01",
    status: "Online",
    skin: "/pictures/skin_placeholder.png",
    skills: [
      { name: "Influence", icon: "/pictures/skill1.png", stars: 3 },
      { name: "PvP Skill", icon: "/pictures/skill2.png", stars: 3 },
      { name: "Warlord", icon: "/pictures/skill3.png", stars: 4 },
      { name: "Grinding", icon: "/pictures/skill4.png", stars: 5 }
    ],
    contributions: [
      {
        title: "Resource Gatherer",
        desc: "Supplied rare materials.",
        items: [
          { icon: "/pictures/diamond.png", name: "Diamond", amount: 12 },
          { icon: "/pictures/emerald.png", name: "Emerald", amount: 7 },
          { icon: "/pictures/iron_ingot.png", name: "Iron Ingot", amount: 64 },
          { icon: "/pictures/gold_ingot.png", name: "Gold Ingot", amount: 32 },
          { icon: "/pictures/lapis.png", name: "Lapis Lazuli", amount: 20 }
        ]
      }
    ]
  }
  
];

// Utility to get stars as string
function getStars(n) {
  return "★★★★★☆☆☆☆☆".slice(5-n, 10-n);
}

// Find all player panels and add click event
document.querySelectorAll('.player-panel').forEach((panel, idx) => {
  panel.addEventListener('click', () => showPlayerModal(idx));
});

function showPlayerModal(idx) {
  const player = playerData[idx];
  // Left modal
  document.getElementById('modal-username').textContent = player.username;
  document.getElementById('modal-rank').textContent = player.rank;
  document.getElementById('modal-pp').textContent = player.pp;
  const statusSpan = document.getElementById('modal-status');
  statusSpan.textContent = player.status;
  statusSpan.className = player.status.toLowerCase();
  document.getElementById('modal-date').textContent = player.date;

  // Middle modal
  document.getElementById('modal-skin').src = player.skin;
  const skillList = document.getElementById('modal-skill-list');
  skillList.innerHTML = '';
  player.skills.forEach(skill => {
    const row = document.createElement('div');
    row.className = 'modal-skill-row';
    row.innerHTML = `
      <img class="modal-skill-icon" src="${skill.icon}" alt="${skill.name}" />
      <span>${skill.name}</span>
      <span class="modal-skill-stars">${'★'.repeat(skill.stars)}${'☆'.repeat(5-skill.stars)}</span>
    `;
    skillList.appendChild(row);
  });

  // Right modal
  const contribDiv = document.getElementById('modal-contributions');
  contribDiv.innerHTML = '';
  player.contributions.forEach(contrib => {
    const panel = document.createElement('div');
    panel.className = 'contribution-panel';
    // Tooltip HTML as a string
    const tooltipHTML = `
      <div class="contribution-items-tooltip">
        ${contrib.items.map(item => `
          <div class="contribution-item-row">
            <span class="contribution-item-icon-wrapper">
              <img class="contribution-item-bg" src="/pictures/hotbar.png" alt="">
              <img class="contribution-item-icon" src="${item.icon}" alt="${item.name}" />
            </span>
            <span class="contribution-item-name">${item.name}</span>
            <span class="contribution-item-amount">${item.amount}x</span>
          </div>
        `).join('')}
      </div>
    `;
    panel.innerHTML = `
      <div class="contribution-title">${contrib.title}</div>
      <div class="contribution-desc">${contrib.desc}</div>
      ${tooltipHTML}
    `;

    contribDiv.appendChild(panel);
  });

  // Show modal
  document.getElementById('player-modal-overlay').style.display = 'flex';
}

// Close modal
document.getElementById('player-modal-close').onclick = function() {
  document.getElementById('player-modal-overlay').style.display = 'none';
};
// Also close on overlay click (but not if clicking inside modal)
document.getElementById('player-modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) this.style.display = 'none';
});