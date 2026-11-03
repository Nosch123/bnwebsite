/**
 * Brand New World (BNW) - Main Application Logic
 * Clean, read-only presentation website with verified Discord invite.
 */

// Permanent Discord Link
const DISCORD_INVITE_URL = "https://discord.gg/xnJqUjF77C";

// Application State
const AppState = {
  seasons: [],
  currentSeasonId: "season-4", // Season 4 (Live) by default
  currentCategory: "majorWars", // "majorWars" | "majorEvents"
  searchQuery: "",
  soundEnabled: true
};

// Web Audio API Synthesizer
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },
  play(type = 'click') {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'tab') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'war') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.12);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'notify') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.setValueAtTime(900, now + 0.07);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (e) {
      // Audio might be prevented before user interaction
    }
  }
};

// Canvas Tactical Radar Background
function initTacticalRadarCanvas() {
  const canvas = document.getElementById('radar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const nodes = [];
  const nodeCount = Math.min(30, Math.floor(width / 50));

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.6 + 0.8,
      pulse: Math.random() * Math.PI,
      isHotspot: Math.random() < 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 90;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 * (1 - dist / 130)})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      node.pulse += 0.03;

      if (node.x < 0) node.x = width;
      if (node.x > width) node.x = 0;
      if (node.y < 0) node.y = height;
      if (node.y > height) node.y = 0;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.isHotspot ? '#ef4444' : '#38bdf8';
      ctx.fill();

      if (node.isHotspot) {
        ctx.beginPath();
        const ringRad = node.radius + Math.sin(node.pulse) * 3 + 3;
        ctx.arc(node.x, node.y, Math.max(1, ringRad), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.25)';
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' 
    ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200' 
    : type === 'warning'
    ? 'bg-amber-950/90 border-amber-500 text-amber-200'
    : 'bg-slate-900/90 border-sky-500 text-sky-200';

  toast.className = `toast tactical-glass border px-4 py-3 rounded-lg shadow-xl flex items-center space-x-3 text-xs font-mono-tech ${bgClass}`;
  toast.innerHTML = `
    <span class="inline-block w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400' : 'bg-sky-400'}"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  SoundFX.play('notify');

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Main Render
function renderApp() {
  renderSeasonTabs();
  renderSeasonDetails();
}

// Render the 4 Season Tabs
function renderSeasonTabs() {
  const container = document.getElementById('season-tabs-container');
  if (!container) return;

  container.innerHTML = AppState.seasons.map(s => {
    const isActive = s.id === AppState.currentSeasonId;
    return `
      <button 
        onclick="switchSeason('${s.id}')"
        class="season-tab-btn relative px-4 py-3 rounded-xl border transition-all text-left group ${
          isActive 
            ? 'active' 
            : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
        }"
      >
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Season ${s.number}
          </span>
          ${s.isLive ? `
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 live-indicator"></span>
              LIVE
            </span>
          ` : `
            <span class="px-2 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700/50">
              ${s.year}
            </span>
          `}
        </div>
        <div class="flex items-baseline gap-2">
          <span class="font-heading font-bold text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors">
            ${s.year}
          </span>
          <span class="text-xs text-sky-400/90 font-mono">
            (${s.type})
          </span>
        </div>
      </button>
    `;
  }).join('');
}

// Render Selected Season Header Details
function renderSeasonDetails() {
  const season = AppState.seasons.find(s => s.id === AppState.currentSeasonId);
  if (!season) return;

  const headerContainer = document.getElementById('season-header-content');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              SEASON ${season.number}
            </span>
            <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
              Setting: ${season.year} (${season.type})
            </span>
            ${season.isLive ? `
              <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 live-indicator"></span>
                ACTIVE (LIVE ROLEPLAY)
              </span>
            ` : ''}
          </div>
          <h2 class="text-xl sm:text-2xl font-heading font-black text-white tracking-wide">
            Season ${season.number}: ${season.year} <span class="text-sky-400 font-normal">(${season.type})</span>
          </h2>
        </div>

        <div class="text-xs font-mono text-slate-400 italic">
          "${season.tagline}"
        </div>
      </div>

      <div class="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
        ${season.description}
      </div>
    `;
  }

  renderCategoryButtons(season);
  renderCategoryContent(season);
}

// Render the 2 Category Buttons: Major Wars & Major Events
function renderCategoryButtons(season) {
  const container = document.getElementById('category-buttons');
  if (!container) return;

  const warsCount = season.majorWars?.length || 0;
  const majorCount = season.majorEvents?.length || 0;
  const current = AppState.currentCategory;

  container.innerHTML = `
    <!-- Button 1: Major Wars -->
    <button 
      onclick="switchCategory('majorWars')"
      class="category-btn flex-1 min-w-[180px] flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
        current === 'majorWars' 
          ? 'active-wars active text-white' 
          : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-red-900/60 hover:bg-slate-800/60'
      }"
    >
      <div class="flex items-center gap-3.5">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center ${current === 'majorWars' ? 'bg-red-500/30 text-white' : 'bg-red-500/10 text-red-400'} border border-red-500/30">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div class="font-heading font-bold text-base">Major Wars</div>
          <div class="text-[11px] text-slate-400 font-mono">Military conflicts</div>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded text-xs font-mono font-bold ${current === 'majorWars' ? 'bg-black/40 text-red-200' : 'bg-red-500/15 text-red-400'}">
        ${warsCount}
      </span>
    </button>

    <!-- Button 2: Major Events -->
    <button 
      onclick="switchCategory('majorEvents')"
      class="category-btn flex-1 min-w-[180px] flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
        current === 'majorEvents' 
          ? 'active-major active text-white' 
          : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-amber-900/60 hover:bg-slate-800/60'
      }"
    >
      <div class="flex items-center gap-3.5">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center ${current === 'majorEvents' ? 'bg-amber-500/30 text-white' : 'bg-amber-500/10 text-amber-400'} border border-amber-500/30">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div class="font-heading font-bold text-base">Major Events</div>
          <div class="text-[11px] text-slate-400 font-mono">Historical dispatches</div>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded text-xs font-mono font-bold ${current === 'majorEvents' ? 'bg-black/40 text-amber-200' : 'bg-amber-500/15 text-amber-400'}">
        ${majorCount}
      </span>
    </button>
  `;
}

// Render Content
function renderCategoryContent(season) {
  const container = document.getElementById('category-content-display');
  if (!container) return;

  const category = AppState.currentCategory;
  const query = AppState.searchQuery.toLowerCase().trim();

  let items = category === 'majorWars' ? (season.majorWars || []) : (season.majorEvents || []);

  // Filter based on search query
  if (query) {
    items = items.filter(item => {
      const titleMatch = item.title?.toLowerCase().includes(query);
      const summaryMatch = item.summary?.toLowerCase().includes(query);
      const attackerMatch = item.attacker?.some(a => a.toLowerCase().includes(query));
      const defenderMatch = item.defender?.some(d => d.toLowerCase().includes(query));
      const winnerMatch = item.winner?.toLowerCase().includes(query);
      return titleMatch || summaryMatch || attackerMatch || defenderMatch || winnerMatch;
    });
  }

  // Season 4 Major Wars empty state
  if (category === 'majorWars' && season.id === 'season-4' && items.length === 0 && !query) {
    container.innerHTML = `
      <div class="p-10 text-center tactical-glass rounded-2xl border border-slate-800">
        <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400">
          <svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 class="text-lg font-heading font-bold text-white mb-1">No Major Wars Recorded Yet</h4>
        <p class="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Season 4 (1992) is currently live. No major wars have broken out or been officially recorded yet.
        </p>
      </div>
    `;
    return;
  }

  // General empty state
  if (items.length === 0) {
    container.innerHTML = `
      <div class="p-10 text-center tactical-glass rounded-2xl border border-slate-800">
        <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h4 class="text-base font-heading font-bold text-white mb-1">
          No records found
        </h4>
        <p class="text-xs text-slate-400 max-w-md mx-auto">
          ${query ? `No matching results for "${query}".` : 'No entries available under this category.'}
        </p>
      </div>
    `;
    return;
  }

  // Major Wars view (NO descriptions, Attacker / Defender / Winner or "No record")
  if (category === 'majorWars') {
    container.innerHTML = `
      <div class="grid grid-cols-1 gap-3.5">
        ${items.map(war => `
          <div class="tactical-glass rounded-xl p-4 sm:p-5 border border-red-500/20 hover:border-red-500/40 transition-all">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-mono font-bold">
                  MAJOR WAR
                </span>
                <h3 class="text-base sm:text-lg font-heading font-bold text-white">
                  ${war.title}
                </h3>
              </div>

              ${war.winner ? `
                <div class="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm">
                  <span>🏆 Winner:</span>
                  <span class="text-white">${war.winner}</span>
                </div>
              ` : ''}
            </div>

            <!-- Attacker & Defender Format -->
            ${war.attacker && war.defender ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs font-mono">
                <div>
                  <span class="text-[10px] uppercase text-red-400 font-bold block mb-1">
                    Attacker:
                  </span>
                  <div class="flex flex-wrap gap-1">
                    ${war.attacker.map(n => `<span class="px-2 py-0.5 rounded bg-red-950/40 border border-red-900/60 text-red-200 font-medium">${n}</span>`).join('')}
                  </div>
                </div>
                <div>
                  <span class="text-[10px] uppercase text-sky-400 font-bold block mb-1">
                    Defender:
                  </span>
                  <div class="flex flex-wrap gap-1">
                    ${war.defender.map(n => `<span class="px-2 py-0.5 rounded bg-sky-950/40 border border-sky-900/60 text-sky-200 font-medium">${n}</span>`).join('')}
                  </div>
                </div>
              </div>
            ` : `
              <!-- Before Season 3 / No record -->
              <div class="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/60 text-xs font-mono text-slate-400">
                Belligerents: <span class="italic text-slate-400">${war.belligerentsText || 'No record'}</span>
              </div>
            `}
          </div>
        `).join('')}
      </div>
    `;
  } else {
    // Major Events view (NO dates and NO locations on event cards)
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${items.map(evt => {
          const previewText = evt.summary
            ? (evt.summary.length > 210 ? evt.summary.substring(0, 210) + '...' : evt.summary)
            : 'No description available.';
          return `
            <div class="tactical-glass rounded-xl p-5 border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    MAJOR EVENT
                  </span>
                </div>

                <h3 class="text-base font-heading font-bold text-white mb-2 leading-snug">
                  ${evt.title}
                </h3>

                <p class="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-4">
                  ${previewText}
                </p>
              </div>

              <button onclick="viewDossier('${evt.id}', 'event')" class="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-sky-300 hover:text-white border border-slate-800 hover:border-slate-700 text-center transition-all flex items-center justify-center gap-1.5">
                <span>Read Full Dispatch</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

// User Actions
function switchSeason(seasonId) {
  if (AppState.currentSeasonId === seasonId) return;
  AppState.currentSeasonId = seasonId;
  SoundFX.play('tab');
  renderSeasonTabs();
  renderSeasonDetails();
}

function switchCategory(category) {
  if (AppState.currentCategory === category) return;
  AppState.currentCategory = category;
  SoundFX.play(category === 'majorWars' ? 'war' : 'click');
  renderSeasonDetails();
}

function handleSearchInput(e) {
  AppState.searchQuery = e.target.value;
  const season = AppState.seasons.find(s => s.id === AppState.currentSeasonId);
  if (season) {
    renderCategoryContent(season);
  }
}

// Event Viewer Modal (Clean Dispatch Reader without date/location headers)
function viewDossier(itemId, type) {
  SoundFX.play('click');
  const season = AppState.seasons.find(s => s.id === AppState.currentSeasonId);
  if (!season) return;

  const item = season.majorEvents?.find(e => e.id === itemId);
  if (!item) return;

  const modalBackdrop = document.getElementById('dossier-modal');
  const modalContent = document.getElementById('dossier-modal-body');
  if (!modalBackdrop || !modalContent) return;

  const paragraphs = item.summary
    ? item.summary.split('\n\n').map(p => {
        const cleanP = p.trim();
        if (!cleanP) return '';
        return `<p class="mb-4 leading-relaxed text-slate-200 text-xs sm:text-sm whitespace-pre-line">${cleanP}</p>`;
      }).join('')
    : '<p class="text-slate-400">No content available.</p>';

  modalContent.innerHTML = `
    <div class="p-6 sm:p-8">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-5">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            OFFICIAL DISPATCH
          </span>
          <span class="text-xs font-mono text-slate-400">Season ${season.number} (${season.year})</span>
        </div>
        <button onclick="closeDossierModal()" class="text-slate-400 hover:text-white p-1 rounded-lg">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div class="mb-5">
        <h2 class="text-xl sm:text-2xl font-heading font-black text-white leading-snug">${item.title}</h2>
      </div>

      <div class="bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800/80 mb-6 max-h-[60vh] overflow-y-auto">
        ${paragraphs}
      </div>

      <div class="flex justify-end">
        <button onclick="closeDossierModal()" class="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors">
          Close Dispatch
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
}

function closeDossierModal() {
  const modalBackdrop = document.getElementById('dossier-modal');
  if (modalBackdrop) modalBackdrop.classList.remove('open');
}

function copyDiscordInvite() {
  navigator.clipboard.writeText(DISCORD_INVITE_URL).then(() => {
    showToast("Discord invite link copied to clipboard!", "success");
  }).catch(() => {
    showToast("Could not copy link: " + DISCORD_INVITE_URL, "warning");
  });
}

// Sound toggle
function toggleSound() {
  AppState.soundEnabled = !AppState.soundEnabled;
  const btn = document.getElementById('sound-toggle-btn');
  if (btn) {
    btn.innerHTML = AppState.soundEnabled 
      ? `<svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg><span class="hidden sm:inline text-xs font-mono">SOUND: ON</span>`
      : `<svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg><span class="hidden sm:inline text-xs font-mono">SOUND: OFF</span>`;
  }
  if (AppState.soundEnabled) SoundFX.play('click');
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  AppState.seasons = INITIAL_SEASONS_DATA;

  initTacticalRadarCanvas();
  renderApp();

  const searchInput = document.getElementById('wiki-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  // Close modal on Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDossierModal();
    }
  });

  // Close modal on backdrop click
  const modal = document.getElementById('dossier-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
});
