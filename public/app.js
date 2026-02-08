const ICONS = {
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  presentation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-3.3-6.7-1.4 1.4M6.7 17.3l-1.4 1.4m0-14.1 1.4 1.4m10.6 10.6 1.4 1.4"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
};

const App = {
  user: null,
  subscription: null,
  plans: [],
  currentPage: 'geo-audit',
  openMenus: { seo: true, social: true },
  schedaTab: 'dettagli',

  validPages: ['scheda-cliente','client-presentation','geo-audit','aeo-audit','ai-prompt-tracker','ai-overview','vector-check','visual-studio','wizard-post','linkedin','facebook','instagram','impostazioni'],

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('geoaudit_data');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.clientData) Object.assign(this.clientData, data.clientData);
        if (data.presentationState) Object.assign(this.presentationState, data.presentationState);
        if (data.settingsState) Object.assign(this.settingsState, data.settingsState);
      }
    } catch (e) { console.error('Error loading from storage:', e); }
  },

  saveToStorage() {
    try {
      localStorage.setItem('geoaudit_data', JSON.stringify({
        clientData: this.clientData,
        presentationState: this.presentationState,
        settingsState: this.settingsState,
      }));
    } catch (e) { console.error('Error saving to storage:', e); }
  },

  async init() {
    const hash = window.location.hash.replace('#','');
    if (this.validPages.includes(hash)) this.currentPage = hash;

    this.loadFromStorage();

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#','');
      if (this.validPages.includes(h) && this.user) {
        this.currentPage = h;
        this.renderApp();
      }
    });

    try {
      const res = await fetch("/api/auth/user", { credentials: "include" });
      if (res.ok) {
        this.user = await res.json();
        await this.loadSubscription();
        await this.loadPlans();
        this.renderApp();
      } else {
        await this.loadPlans();
        this.renderLanding();
      }
    } catch (e) {
      await this.loadPlans();
      this.renderLanding();
    }
  },

  async loadSubscription() {
    try {
      const res = await fetch("/api/subscription", { credentials: "include" });
      if (res.ok) this.subscription = await res.json();
    } catch (e) { console.error(e); }
  },

  async loadPlans() {
    try {
      const res = await fetch("/api/plans");
      if (res.ok) this.plans = await res.json();
    } catch (e) { console.error(e); }
  },

  async selectPlan(planId) {
    if (!this.user) { window.location.href = "/api/login"; return; }
    try {
      const res = await fetch("/api/subscription/create", {
        method: "POST", headers: { "Content-Type": "application/json" },
        credentials: "include", body: JSON.stringify({ plan: planId }),
      });
      if (res.ok) { this.subscription = await res.json(); this.navigate('scheda-cliente'); }
      else if (res.status === 401) window.location.href = "/api/login";
    } catch (e) { console.error(e); }
  },

  navigate(page) {
    this.currentPage = page;
    window.location.hash = page;
    this.renderApp();
  },

  toggleMenu(menu) {
    this.openMenus[menu] = !this.openMenus[menu];
    this.renderApp();
  },

  renderLanding() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <nav class="navbar-landing">
        <a href="/" class="navbar-brand">
          <div class="logo-icon">${ICONS.globe}</div>
          <div>
            <div class="logo-text"><span>GEO</span>Audit</div>
            <div class="logo-sub">AI Intelligence</div>
          </div>
        </a>
        <ul class="navbar-links">
          <li><a href="#features">Funzionalit&agrave;</a></li>
          <li><a href="#pricing">Piani</a></li>
        </ul>
        <div><a href="/api/login" class="btn btn-primary btn-sm">Accedi</a></div>
      </nav>
      <div class="landing">
        <section class="hero">
          <div class="hero-content fade-in">
            <h1>AI Intelligence per la <span>Visibilit&agrave; del Tuo Brand</span></h1>
            <p>GEOAudit analizza come i motori AI percepiscono il tuo brand. Strumenti SEO, analisi AEO, prompt tracking e generazione contenuti social in un'unica piattaforma.</p>
            <div class="hero-cta">
              <a href="/api/login" class="btn btn-dark btn-lg">Inizia Ora</a>
              <a href="#features" class="btn btn-outline btn-lg">Scopri di pi&ugrave;</a>
            </div>
            <div class="trust-badges fade-in fade-in-delay-2">
              <span>Piano gratuito disponibile</span>
              <span>Nessuna carta richiesta</span>
            </div>
          </div>
          <div class="hero-visual fade-in fade-in-delay-1">
            <div class="hero-image-container">
              ${ICONS.globe.replace('width="18"','width="180"').replace('height="18"','height="180"')}
            </div>
          </div>
        </section>
        <section class="features" id="features">
          <h2 class="fade-in">Perch&eacute; GEOAudit?</h2>
          <p class="fade-in fade-in-delay-1">Strumenti AI per dominare la percezione del tuo brand</p>
          <div class="features-grid">
            <div class="feature-card fade-in fade-in-delay-1">
              <div class="feature-icon">${ICONS.globe}</div>
              <h3>GEO &amp; AEO Audit</h3>
              <p>Analisi profonda di come i motori AI e di ricerca percepiscono il tuo brand e i tuoi contenuti.</p>
            </div>
            <div class="feature-card fade-in fade-in-delay-2">
              <div class="feature-icon">${ICONS.search}</div>
              <h3>AI Prompt Tracker</h3>
              <p>Monitora e analizza i prompt AI per capire come il tuo brand viene citato nelle risposte.</p>
            </div>
            <div class="feature-card fade-in fade-in-delay-3">
              <div class="feature-icon">${ICONS.share}</div>
              <h3>Social Media AI</h3>
              <p>Genera contenuti ottimizzati per LinkedIn, Facebook e Instagram con intelligenza artificiale.</p>
            </div>
          </div>
        </section>
        <section class="pricing" id="pricing">
          <h2 class="fade-in">Scegli il Piano Giusto</h2>
          <p class="fade-in fade-in-delay-1">Inizia gratuitamente, aggiorna quando vuoi</p>
          <div class="pricing-grid">
            ${this.plans.map((plan, i) => `
              <div class="pricing-card ${plan.id === 'pro' ? 'popular' : ''} fade-in fade-in-delay-${i+1}">
                ${plan.id === 'pro' ? '<div class="pricing-badge">Pi&ugrave; Popolare</div>' : ''}
                <h3>${plan.name}</h3>
                <div class="pricing-price">&euro;${plan.price}<span>/mese</span></div>
                <ul class="pricing-features">${plan.features.map(f => `<li>${f}</li>`).join('')}</ul>
                <button class="btn ${plan.id === 'pro' ? 'btn-primary' : 'btn-outline'}" onclick="App.selectPlan('${plan.id}')">
                  ${plan.price === 0 ? 'Inizia Gratis' : 'Scegli Piano'}
                </button>
              </div>
            `).join('')}
          </div>
        </section>
        <footer class="footer"><p>&copy; ${new Date().getFullYear()} GEOAudit AI Intelligence. Tutti i diritti riservati.</p></footer>
      </div>
    `;
  },

  renderApp() {
    this.saveToStorage();
    const app = document.getElementById("app");
    const name = this.user.firstName || this.user.email || "Utente";
    const plan = this.subscription?.plan || "free";

    app.innerHTML = `
      <div class="app-layout">
        ${this.renderSidebar()}
        <div class="main-content">
          <div class="topbar"></div>
          <div class="main-inner">
            ${this.renderPage()}
          </div>
        </div>
      </div>
    `;
  },

  renderSidebar() {
    const p = this.currentPage;
    return `
      <aside class="sidebar">
        <div class="sidebar-logo">
          <div class="logo-circle">${ICONS.globe}</div>
          <div class="sidebar-logo-text">
            <div class="name"><span>GEO</span>Audit</div>
            <div class="sub">AI Intelligence</div>
          </div>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-label">Dashboard</div>
          <ul class="sidebar-nav">
            <li><a class="sidebar-item ${p==='scheda-cliente'?'active':''}" onclick="App.navigate('scheda-cliente')">
              ${ICONS.user}<span>Scheda Cliente</span>
            </a></li>
            <li><a class="sidebar-item ${p==='client-presentation'?'active':''}" onclick="App.navigate('client-presentation')">
              ${ICONS.presentation}<span>Client Presentation</span>
              <span class="badge hot">HOT</span>
            </a></li>
          </ul>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-label">SEO for AI</div>
          <ul class="sidebar-nav">
            <li>
              <a class="sidebar-item ${['geo-audit','aeo-audit','ai-prompt-tracker','ai-overview','vector-check'].includes(p)?'':''}">
                <span onclick="App.toggleMenu('seo')" style="display:flex;align-items:center;gap:0.6rem;flex:1">
                  ${ICONS.search}<span>SEO for AI</span>
                </span>
                <span class="chevron ${this.openMenus.seo?'open':''}" onclick="App.toggleMenu('seo')">${ICONS.chevronDown}</span>
              </a>
            </li>
          </ul>
          ${this.openMenus.seo ? `
          <ul class="sidebar-nav sidebar-sub">
            <li><a class="sidebar-item ${p==='geo-audit'?'active':''}" onclick="App.navigate('geo-audit')">
              ${ICONS.globe}<span>GEO Audit</span>
            </a></li>
            <li><a class="sidebar-item ${p==='aeo-audit'?'active':''}" onclick="App.navigate('aeo-audit')">
              ${ICONS.target}<span>AEO Audit</span>
              <span class="badge pro">PRO</span>
            </a></li>
            <li><a class="sidebar-item ${p==='ai-prompt-tracker'?'active':''}" onclick="App.navigate('ai-prompt-tracker')">
              ${ICONS.zap}<span>AI Prompt Tracker</span>
            </a></li>
            <li><a class="sidebar-item ${p==='ai-overview'?'active':''}" onclick="App.navigate('ai-overview')">
              ${ICONS.eye}<span>AI Overview</span>
            </a></li>
            <li><a class="sidebar-item ${p==='vector-check'?'active':''}" onclick="App.navigate('vector-check')">
              ${ICONS.checkCircle}<span>Vector Check</span>
            </a></li>
          </ul>` : ''}
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-label">Content Tools</div>
          <ul class="sidebar-nav">
            <li><a class="sidebar-item ${p==='visual-studio'?'active':''}" onclick="App.navigate('visual-studio')">
              ${ICONS.palette}<span>Visual Studio</span>
            </a></li>
            <li>
              <a class="sidebar-item">
                <span onclick="App.toggleMenu('social')" style="display:flex;align-items:center;gap:0.6rem;flex:1">
                  ${ICONS.share}<span>Social Media AI</span>
                </span>
                <span class="chevron ${this.openMenus.social?'open':''}" onclick="App.toggleMenu('social')">${ICONS.chevronDown}</span>
              </a>
            </li>
          </ul>
          ${this.openMenus.social ? `
          <ul class="sidebar-nav sidebar-sub">
            <li><a class="sidebar-item ${p==='wizard-post'?'active':''}" onclick="App.navigate('wizard-post')">
              ${ICONS.edit}<span>Wizard Post</span>
            </a></li>
            <li><a class="sidebar-item ${p==='linkedin'?'active':''}" onclick="App.navigate('linkedin')">
              ${ICONS.linkedin}<span>LinkedIn</span>
            </a></li>
            <li><a class="sidebar-item ${p==='facebook'?'active':''}" onclick="App.navigate('facebook')">
              ${ICONS.facebook}<span>Facebook</span>
            </a></li>
            <li><a class="sidebar-item ${p==='instagram'?'active':''}" onclick="App.navigate('instagram')">
              ${ICONS.instagram}<span>Instagram</span>
            </a></li>
          </ul>` : ''}
        </div>

        <div class="sidebar-bottom">
          <ul class="sidebar-nav">
            <li><a class="sidebar-item ${p==='impostazioni'?'active':''}" onclick="App.navigate('impostazioni')">
              ${ICONS.settings}<span>Impostazioni</span>
            </a></li>
            <li><a class="sidebar-item" href="/api/logout">
              ${ICONS.logout}<span>Esci</span>
            </a></li>
          </ul>
        </div>
      </aside>
    `;
  },

  renderPage() {
    const pages = {
      'scheda-cliente': this.pageSchedaCliente,
      'client-presentation': this.pageClientPresentation,
      'geo-audit': this.pageGeoAudit,
      'aeo-audit': this.pageAeoAudit,
      'ai-prompt-tracker': this.pageAiPromptTracker,
      'ai-overview': this.pageAiOverview,
      'vector-check': this.pageVectorCheck,
      'visual-studio': this.pageVisualStudio,
      'wizard-post': this.pageWizardPost,
      'linkedin': this.pageLinkedin,
      'facebook': this.pageFacebook,
      'instagram': this.pageInstagram,
      'impostazioni': this.pageImpostazioni,
    };
    return (pages[this.currentPage] || this.pageGeoAudit).call(this);
  },

  clientData: {
    nome: '', descrizione: '', target: '', toneOfVoice: '', sito: '', socialLinks: '',
    knowledgeBase: '',
    brandVoice: { formale: 50, amichevole: 50, umoristico: 50, tecnico: 50 },
    preferredWords: '', forbiddenWords: '',
    competitors: [],
    storicoAnalisi: []
  },

  presentationState: {
    clientName: '', mission: '', notes: '', fullscreen: false,
    selectedReports: { geo: true, aeo: true, promptTracker: true, aiOverview: true, vectorCheck: true }
  },

  wizardState: { step: 1, platform: 'linkedin', objective: 'awareness', persona: '', topic: '', context: '', framework: 'hero', generatedText: '' },

  settingsState: {
    geminiKey: '', openaiKey: '', perplexityKey: '',
    costInput: '0.15', costOutput: '0.60', costSearch: '5.00', totalSpent: 0
  },

  addCompetitor() {
    const n = document.getElementById('comp-name');
    const u = document.getElementById('comp-url');
    if (n && n.value.trim()) {
      this.clientData.competitors.push({ nome: n.value.trim(), url: (u && u.value.trim()) || '' });
      this.renderApp();
    }
  },

  removeCompetitor(i) {
    this.clientData.competitors.splice(i, 1);
    this.renderApp();
  },

  toggleStoricoPresentation(i) {
    if (this.clientData.storicoAnalisi[i]) {
      this.clientData.storicoAnalisi[i].includedInPresentation = !this.clientData.storicoAnalisi[i].includedInPresentation;
      this.renderApp();
    }
  },

  wizardNext() { if (this.wizardState.step < 4) { this.wizardState.step++; this.renderApp(); } },
  wizardPrev() { if (this.wizardState.step > 1) { this.wizardState.step--; this.renderApp(); } },

  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => alert('Copiato negli appunti!')).catch(() => alert('Errore nella copia'));
  },

  togglePresentationFullscreen() {
    this.presentationState.fullscreen = !this.presentationState.fullscreen;
    this.renderApp();
  },

  toggleReportSelection(key) {
    this.presentationState.selectedReports[key] = !this.presentationState.selectedReports[key];
    this.renderApp();
  },

  resetSpending() {
    this.settingsState.totalSpent = 0;
    this.renderApp();
  },

  exportProject() {
    const data = { clientData: this.clientData, storicoAnalisi: this.clientData.storicoAnalisi, presentationState: this.presentationState, settingsState: { ...this.settingsState, geminiKey: '', openaiKey: '', perplexityKey: '' } };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'geoaudit-project.json'; a.click();
  },

  importProject() {
    const input = document.createElement('input'); input.type = 'file'; input.accept = '.json,.geoaudit';
    input.onchange = (e) => {
      const file = e.target.files[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.clientData) Object.assign(this.clientData, data.clientData);
          if (data.presentationState) Object.assign(this.presentationState, data.presentationState);
          if (data.settingsState) { const { geminiKey, openaiKey, perplexityKey, ...rest } = data.settingsState; Object.assign(this.settingsState, rest); }
          this.renderApp();
          alert('Progetto importato con successo!');
        } catch (err) { alert('Errore nel file di importazione'); }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  handleKBDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    for (const file of files) {
      if (/\.(txt|md|csv|json)$/i.test(file.name)) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          this.clientData.knowledgeBase += (this.clientData.knowledgeBase ? '\n\n' : '') + '--- ' + file.name + ' ---\n' + ev.target.result;
          const el = document.getElementById('kb-textarea');
          if (el) el.value = this.clientData.knowledgeBase;
        };
        reader.readAsText(file);
      }
    }
  },

  setSchedaTab(tab) { this.schedaTab = tab; this.renderApp(); },

  pageSchedaCliente() {
    const cd = this.clientData;
    const tab = this.schedaTab || 'dettagli';

    const comps = cd.competitors.map((c, i) => `
      <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0;border-bottom:1px solid var(--border)">
        <span style="flex:1;font-weight:600">${c.nome}</span>
        <span style="flex:1;color:var(--text-light);font-size:0.85rem">${c.url}</span>
        <button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="App.removeCompetitor(${i})">Rimuovi</button>
      </div>
    `).join('');

    const storico = cd.storicoAnalisi.length ? cd.storicoAnalisi.map((a, i) => `
      <div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem 0;border-bottom:1px solid var(--border)">
        <span style="font-size:0.8rem;color:var(--text-light)">${a.date || ''}</span>
        <span style="flex:1;font-weight:500">${a.type || ''} - ${a.label || ''}</span>
        <span style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:4px;background:${a.status === 'OK' ? 'var(--success)' : a.status === 'WARNING' ? 'var(--warning)' : 'var(--danger)'};color:white">${a.status || 'N/A'}</span>
        <label style="display:flex;align-items:center;gap:0.3rem;font-size:0.8rem;cursor:pointer">
          <input type="checkbox" ${a.includedInPresentation ? 'checked' : ''} onchange="App.toggleStoricoPresentation(${i})" /> Presentazione
        </label>
      </div>
    `).join('') : '<div class="empty-state">Nessuna analisi effettuata. Lancia il tuo primo audit!</div>';

    let tabContent = '';
    if (tab === 'dettagli') {
      tabContent = `
        <div class="card fade-in">
          <h3>Dati Generali</h3>
          <div class="form-group">
            <label>Nome Cliente / Brand</label>
            <input type="text" class="tool-input" value="${cd.nome}" oninput="App.clientData.nome=this.value" placeholder="Es. EcoSolutions Srl" />
          </div>
          <div class="form-group">
            <label>Descrizione Attivit&agrave;</label>
            <textarea class="tool-textarea" oninput="App.clientData.descrizione=this.value" placeholder="Di cosa si occupa l'azienda? Qual &egrave; la USP?">${cd.descrizione}</textarea>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
            <div class="form-group">
              <label>Target Audience</label>
              <input type="text" class="tool-input" value="${cd.target}" oninput="App.clientData.target=this.value" placeholder="Es. PMI, Famiglie, Giovani 18-25..." />
            </div>
            <div class="form-group">
              <label>Tono di Voce (ToV)</label>
              <input type="text" class="tool-input" value="${cd.toneOfVoice || ''}" oninput="App.clientData.toneOfVoice=this.value" placeholder="Es. Professionale, Amichevole, Istituzionale..." />
            </div>
          </div>
          <div class="form-group">
            <label>Sito Web Principale</label>
            <input type="text" class="tool-input" value="${cd.sito}" oninput="App.clientData.sito=this.value" placeholder="https://..." />
          </div>
          <div class="form-group">
            <label>Social Links</label>
            <input type="text" class="tool-input" value="${cd.socialLinks}" oninput="App.clientData.socialLinks=this.value" placeholder="LinkedIn, Facebook, Instagram URLs (separati da virgola)" />
          </div>
        </div>

        <div class="card fade-in">
          <h3>Knowledge Base (RAG Lite)</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:0.75rem">Inserisci informazioni specifiche non pubbliche. Questo contenuto verr&agrave; iniettato in tutti i prompt AI.</p>
          <div style="border:2px dashed var(--border);border-radius:8px;padding:1rem;margin-bottom:0.5rem;text-align:center;color:var(--text-light);font-size:0.85rem" ondragover="event.preventDefault();this.style.borderColor='var(--primary)'" ondragleave="this.style.borderColor='var(--border)'" ondrop="App.handleKBDrop(event);this.style.borderColor='var(--border)'">
            Trascina qui i file .txt, .md, .csv, .json per importarli
          </div>
          <textarea id="kb-textarea" class="tool-textarea" style="min-height:200px" oninput="App.clientData.knowledgeBase=this.value" placeholder="Incolla qui policy interne, storia del fondatore, FAQ, interviste...">${cd.knowledgeBase}</textarea>
        </div>

        <div class="card fade-in">
          <h3>Competitors</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Aggiungi i competitor per analisi comparative nel GEO Audit.</p>
          <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
            <input type="text" id="comp-name" class="tool-input" style="margin-bottom:0;flex:1" placeholder="Nome competitor" />
            <input type="text" id="comp-url" class="tool-input" style="margin-bottom:0;flex:1" placeholder="URL competitor" />
            <button class="btn btn-primary btn-sm" onclick="App.addCompetitor()">Aggiungi</button>
          </div>
          ${comps || '<div class="empty-state">Nessun competitor aggiunto.</div>'}
        </div>
      `;
    } else if (tab === 'brandvoice') {
      tabContent = `
        <div class="card fade-in">
          <h3>Brand Voice Engine</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Configura lo stile di comunicazione del brand con i cursori.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
            <div class="form-group">
              <label>Informale &harr; Formale: <strong>${cd.brandVoice.formale}%</strong></label>
              <input type="range" min="0" max="100" value="${cd.brandVoice.formale}" oninput="App.clientData.brandVoice.formale=parseInt(this.value);this.previousElementSibling.querySelector('strong').textContent=this.value+'%'" style="width:100%" />
            </div>
            <div class="form-group">
              <label>Distaccato &harr; Amichevole: <strong>${cd.brandVoice.amichevole}%</strong></label>
              <input type="range" min="0" max="100" value="${cd.brandVoice.amichevole}" oninput="App.clientData.brandVoice.amichevole=parseInt(this.value);this.previousElementSibling.querySelector('strong').textContent=this.value+'%'" style="width:100%" />
            </div>
            <div class="form-group">
              <label>Serio &harr; Umoristico: <strong>${cd.brandVoice.umoristico}%</strong></label>
              <input type="range" min="0" max="100" value="${cd.brandVoice.umoristico}" oninput="App.clientData.brandVoice.umoristico=parseInt(this.value);this.previousElementSibling.querySelector('strong').textContent=this.value+'%'" style="width:100%" />
            </div>
            <div class="form-group">
              <label>Semplice &harr; Tecnico: <strong>${cd.brandVoice.tecnico}%</strong></label>
              <input type="range" min="0" max="100" value="${cd.brandVoice.tecnico}" oninput="App.clientData.brandVoice.tecnico=parseInt(this.value);this.previousElementSibling.querySelector('strong').textContent=this.value+'%'" style="width:100%" />
            </div>
          </div>
          <div class="form-group" style="margin-top:1rem">
            <label>Parole Preferite (Preferred Words)</label>
            <textarea class="tool-textarea" style="min-height:80px" oninput="App.clientData.preferredWords=this.value" placeholder="Parole che l'AI deve privilegiare (una per riga o separate da virgola)">${cd.preferredWords}</textarea>
          </div>
          <div class="form-group">
            <label>Parole Vietate (Anti-AI / Forbidden Words)</label>
            <textarea class="tool-textarea" style="min-height:80px" oninput="App.clientData.forbiddenWords=this.value" placeholder="Parole vietate nei testi generati, es: delve, landscape, unlock...">${cd.forbiddenWords}</textarea>
          </div>
        </div>
      `;
    } else {
      tabContent = `
        <div class="card fade-in">
          <h3>Storico Analisi</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Log cronologico delle analisi effettuate. Attiva il toggle per includerle nella Client Presentation.</p>
          ${storico}
        </div>
      `;
    }

    const storicoCount = cd.storicoAnalisi.length;

    return `
      <div class="fade-in">
        <div class="page-header">
          <div class="page-header-icon">${ICONS.user}</div>
          <div class="page-header-text">
            <h1>Scheda Cliente: ${cd.nome || 'Nuovo Progetto'}</h1>
            <p>Gestisci identit&agrave;, brand voice e storico analisi.</p>
          </div>
        </div>

        <div class="tab-bar">
          <button class="tab-btn ${tab === 'dettagli' ? 'active' : ''}" onclick="App.setSchedaTab('dettagli')">Dettagli &amp; Contenuti</button>
          <button class="tab-btn ${tab === 'brandvoice' ? 'active' : ''}" onclick="App.setSchedaTab('brandvoice')">Brand Voice Engine</button>
          <button class="tab-btn ${tab === 'storico' ? 'active' : ''}" onclick="App.setSchedaTab('storico')">Storico Analisi (${storicoCount})</button>
        </div>

        ${tabContent}
      </div>
    `;
  },

  pageClientPresentation() {
    const ps = this.presentationState;
    const reports = [
      { key: 'geo', label: 'GEO Audit' },
      { key: 'aeo', label: 'AEO Audit' },
      { key: 'promptTracker', label: 'AI Prompt Tracker' },
      { key: 'aiOverview', label: 'AI Overview' },
      { key: 'vectorCheck', label: 'Vector Check' }
    ];
    const reportToggles = reports.map(r => `
      <label style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0;border-bottom:1px solid var(--border);cursor:pointer">
        <input type="checkbox" ${ps.selectedReports[r.key] ? 'checked' : ''} onchange="App.toggleReportSelection('${r.key}')" />
        <span style="flex:1">${r.label}</span>
        <span style="font-size:0.75rem;padding:0.15rem 0.5rem;border-radius:4px;background:${ps.selectedReports[r.key] ? 'var(--success)' : 'var(--border)'};color:${ps.selectedReports[r.key] ? 'white' : 'var(--text-light)'}">${ps.selectedReports[r.key] ? 'INCLUSO' : 'ESCLUSO'}</span>
      </label>
    `).join('');

    const selectedList = reports.filter(r => ps.selectedReports[r.key]).map(r => `
      <div style="padding:1.5rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);margin-bottom:1rem">
        <h4 style="margin-bottom:0.5rem">${r.label}</h4>
        <p style="color:var(--text-light);font-size:0.85rem">I dati del report ${r.label} verranno visualizzati qui.</p>
      </div>
    `).join('');

    return `
      <div class="fade-in" ${ps.fullscreen ? 'style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:var(--bg);overflow-y:auto;padding:2rem"' : ''}>
        <div class="dash-header" style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <h1>${ICONS.presentation} Client Presentation</h1>
            <p>Presenta i risultati al cliente in modo professionale e interattivo.</p>
          </div>
          <div style="display:flex;gap:0.5rem">
            <button class="btn ${ps.fullscreen ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="App.togglePresentationFullscreen()">
              ${ps.fullscreen ? 'Esci Fullscreen' : 'Fullscreen'}
            </button>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1.5rem">
          <div>
            <div class="card">
              <h3>Modalit&agrave; Web - Configurazione</h3>
              <div class="form-group">
                <label>Nome Cliente</label>
                <input type="text" class="tool-input" value="${ps.clientName}" oninput="App.presentationState.clientName=this.value" placeholder="Nome del cliente" />
              </div>
              <div class="form-group">
                <label>Mission / Tagline</label>
                <input type="text" class="tool-input" value="${ps.mission}" oninput="App.presentationState.mission=this.value" placeholder="La mission del brand..." />
              </div>
            </div>

            <div class="card">
              <h3>Selezione Report</h3>
              <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:0.75rem">Scegli quali analisi includere nella presentazione.</p>
              ${reportToggles}
            </div>

            <div class="card">
              <h3>Modalit&agrave; Stampa (PDF)</h3>
              <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:0.75rem">Esporta la presentazione in formato A4 con copertina personalizzata.</p>
              <div class="form-group">
                <label>Nome Brand (Copertina)</label>
                <input type="text" class="tool-input" value="${ps.clientName}" placeholder="Nome per la copertina del PDF" />
              </div>
              <div class="form-group">
                <label>Data Report</label>
                <input type="date" class="tool-input" value="${new Date().toISOString().split('T')[0]}" />
              </div>
              <button class="btn btn-dark btn-block" onclick="alert('Esportazione PDF in arrivo! Formato A4 Portrait.')">
                Esporta PDF (A4)
              </button>
            </div>
          </div>

          <div>
            <div class="card" style="min-height:300px">
              <h3>Anteprima Presentazione</h3>
              <div style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:12px;padding:2.5rem;text-align:center;color:white;margin-bottom:1.5rem">
                <h2 style="font-size:1.8rem;margin-bottom:0.5rem;color:var(--primary)">${ps.clientName || 'Nome Cliente'}</h2>
                <p style="opacity:0.8;font-size:1rem">${ps.mission || 'La tua mission qui...'}</p>
                <div style="margin-top:1rem;display:flex;justify-content:center;gap:1rem;font-size:0.8rem;opacity:0.6">
                  ${reports.filter(r => ps.selectedReports[r.key]).map(r => `<span>${r.label}</span>`).join('')}
                </div>
              </div>
              ${selectedList || '<div class="empty-state">Seleziona almeno un report da includere.</div>'}
            </div>
          </div>
        </div>

        <div style="position:fixed;bottom:1.5rem;right:1.5rem;width:320px;z-index:100">
          <div class="card" style="box-shadow:var(--shadow-lg);border:1px solid var(--primary)">
            <h4 style="margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem">${ICONS.edit} Note Rapide</h4>
            <textarea class="tool-textarea" style="min-height:100px;font-size:0.85rem" oninput="App.presentationState.notes=this.value" placeholder="Appunti durante la presentazione...">${ps.notes}</textarea>
          </div>
        </div>
      </div>
    `;
  },

  pageGeoAudit() {
    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.globe} GEO Audit</h1>
          <p>Analisi profonda dell'identit&agrave; del brand percepita dai motori AI (Generative Engine Optimization).</p>
        </div>

        <div class="card fade-in fade-in-delay-1">
          <h3>Dominio Web</h3>
          <div style="display:flex;gap:0.5rem">
            <input type="text" class="tool-input" id="geo-domain" style="margin-bottom:0;flex:1" placeholder="Es. iltuosito.it" />
            <button class="btn btn-dark" onclick="alert('Analisi GEO in elaborazione...')">Lancia Audit</button>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-2">
          <h3>Identit&agrave; del Brand</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Mission, Vision e Valori percepiti dai motori AI.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border)">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-light);margin-bottom:0.5rem">Mission</div>
              <div class="empty-state" style="font-size:0.85rem">In attesa di analisi...</div>
            </div>
            <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border)">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-light);margin-bottom:0.5rem">Vision</div>
              <div class="empty-state" style="font-size:0.85rem">In attesa di analisi...</div>
            </div>
            <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border)">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-light);margin-bottom:0.5rem">Valori</div>
              <div class="empty-state" style="font-size:0.85rem">In attesa di analisi...</div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div class="card fade-in fade-in-delay-3">
            <h3>Sentiment Analysis</h3>
            <div style="text-align:center;padding:1.5rem">
              <div style="font-size:3rem;font-weight:700;color:var(--primary)">--</div>
              <div style="font-size:0.85rem;color:var(--text-light)">Punteggio 0-100</div>
              <div style="margin-top:1rem;height:8px;background:var(--border);border-radius:4px;overflow:hidden">
                <div style="height:100%;width:0%;background:var(--gradient-bar);border-radius:4px;transition:width 0.5s"></div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:0.5rem">
              <div>
                <div style="font-size:0.75rem;color:var(--success)">Keyword Positive</div>
                <div class="empty-state" style="font-size:0.8rem">--</div>
              </div>
              <div>
                <div style="font-size:0.75rem;color:var(--danger)">Keyword Negative</div>
                <div class="empty-state" style="font-size:0.8rem">--</div>
              </div>
            </div>
          </div>

          <div class="card fade-in fade-in-delay-3">
            <h3>Rilevanza Locale / Internazionale</h3>
            <div style="padding:1rem">
              <div style="display:flex;justify-content:space-between;padding:0.6rem 0;border-bottom:1px solid var(--border)">
                <span>Copertura Locale</span>
                <span style="font-size:0.8rem;padding:0.2rem 0.6rem;border-radius:4px;background:var(--border);color:var(--text-light)">IN ATTESA</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:0.6rem 0;border-bottom:1px solid var(--border)">
                <span>Presenza Internazionale</span>
                <span style="font-size:0.8rem;padding:0.2rem 0.6rem;border-radius:4px;background:var(--border);color:var(--text-light)">IN ATTESA</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card fade-in">
          <h3>Competitor Identificati</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Rivali diretti identificati dall'AI in base all'analisi del dominio.</p>
          <div class="empty-state">Lancia l'audit per identificare i competitor.</div>
        </div>

        <div class="card fade-in">
          <h3>Buyer Personas</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">3 profili target generati automaticamente dall'analisi del sito.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            ${[1,2,3].map(i => `
              <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);text-align:center">
                <div style="width:48px;height:48px;background:var(--primary-light);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem">${ICONS.user}</div>
                <div style="font-weight:600;margin-bottom:0.25rem">Persona ${i}</div>
                <div style="font-size:0.85rem;color:var(--text-light)">In attesa di analisi...</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card fade-in">
          <h3>Output &amp; Status</h3>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
            ${['Identit&agrave;', 'Sentiment', 'Rilevanza', 'Competitor', 'Personas'].map(s => `
              <span style="font-size:0.8rem;padding:0.3rem 0.8rem;border-radius:6px;background:var(--border);color:var(--text-light)">
                ${s}: IN ATTESA
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  pageAeoAudit() {
    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.target} AEO Audit <span class="badge pro" style="font-size:0.7rem;vertical-align:middle">PRO</span></h1>
          <p>Answer Engine Optimization: simulazione multi-motore per analizzare la percezione del brand.</p>
        </div>

        <div class="card fade-in fade-in-delay-1">
          <h3>Dominio Web</h3>
          <div style="display:flex;gap:0.5rem">
            <input type="text" class="tool-input" id="aeo-domain" style="margin-bottom:0;flex:1" placeholder="Es. iltuosito.it" />
            <button class="btn btn-dark" onclick="alert('Analisi AEO in elaborazione...')">Lancia AEO Audit</button>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-2">
          <h3>Simulazione Multi-Engine</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Confronto delle risposte tra ChatGPT, Perplexity e Gemini sulla reputazione del brand.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            ${['ChatGPT', 'Perplexity', 'Gemini'].map(engine => `
              <div style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
                <div style="background:var(--sidebar-bg);color:white;padding:0.75rem 1rem;font-weight:600;font-size:0.9rem;text-align:center">${engine}</div>
                <div style="padding:1rem">
                  <div class="empty-state" style="font-size:0.85rem;min-height:100px">In attesa di analisi...</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card fade-in fade-in-delay-3">
          <h3>Confronto Metriche</h3>
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
            <thead>
              <tr style="border-bottom:2px solid var(--border)">
                <th style="text-align:left;padding:0.75rem">Metrica</th>
                <th style="text-align:center;padding:0.75rem">ChatGPT</th>
                <th style="text-align:center;padding:0.75rem">Perplexity</th>
                <th style="text-align:center;padding:0.75rem">Gemini</th>
              </tr>
            </thead>
            <tbody>
              ${['Visibilit&agrave;', 'Accuratezza', 'Coerenza'].map(m => `
                <tr style="border-bottom:1px solid var(--border)">
                  <td style="padding:0.75rem;font-weight:500">${m}</td>
                  <td style="text-align:center;padding:0.75rem;color:var(--text-light)">--</td>
                  <td style="text-align:center;padding:0.75rem;color:var(--text-light)">--</td>
                  <td style="text-align:center;padding:0.75rem;color:var(--text-light)">--</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="card fade-in">
          <h3>Piano Strategico</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
            <div>
              <h4 style="margin-bottom:0.75rem">Roadmap Trimestrale</h4>
              ${['Q1 - Fondamenta', 'Q2 - Crescita', 'Q3 - Ottimizzazione', 'Q4 - Consolidamento'].map(q => `
                <div style="padding:0.75rem;background:var(--bg);border-radius:6px;border:1px solid var(--border);margin-bottom:0.5rem">
                  <div style="font-weight:600;font-size:0.85rem">${q}</div>
                  <div style="font-size:0.8rem;color:var(--text-light)">In attesa di analisi...</div>
                </div>
              `).join('')}
            </div>
            <div>
              <h4 style="margin-bottom:0.75rem">Suggerimenti Schema.org</h4>
              <div style="padding:1rem;background:var(--bg);border-radius:8px;border:1px solid var(--border)">
                <div class="empty-state" style="font-size:0.85rem">Lancia l'audit per ricevere suggerimenti tecnici Schema.org.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  pageAiPromptTracker() {
    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.zap} AI Prompt Tracker</h1>
          <p>Verifica se il brand &egrave; considerato una fonte autorevole nelle risposte AI.</p>
        </div>

        <div class="card fade-in fade-in-delay-1">
          <h3>Dominio Web</h3>
          <div style="display:flex;gap:0.5rem">
            <input type="text" class="tool-input" id="prompt-tracker-domain" style="margin-bottom:0;flex:1" placeholder="Es. iltuosito.it" />
            <button class="btn btn-dark" onclick="alert('Tracking in elaborazione...')">Avvia Tracking</button>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div class="card fade-in fade-in-delay-2">
            <h3>Citation Score</h3>
            <div style="text-align:center;padding:2rem">
              <div style="font-size:3.5rem;font-weight:700;color:var(--primary)">--</div>
              <div style="font-size:0.9rem;color:var(--text-light)">Punteggio basato su frequenza e qualit&agrave; delle citazioni</div>
              <div style="margin-top:1rem;height:8px;background:var(--border);border-radius:4px;overflow:hidden">
                <div style="height:100%;width:0%;background:var(--gradient-bar);border-radius:4px"></div>
              </div>
            </div>
          </div>

          <div class="card fade-in fade-in-delay-2">
            <h3>Sentiment Citazione</h3>
            <div style="text-align:center;padding:2rem">
              <div style="font-size:1.5rem;font-weight:600;color:var(--text-light)">--</div>
              <div style="font-size:0.85rem;color:var(--text-light);margin-top:0.5rem">Analisi del tono delle menzioni (positivo / neutro / negativo)</div>
            </div>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-3">
          <h3>Query Generate &amp; Citazioni</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Reverse engineering: query settoriali testate per verificare la citazione del brand.</p>
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
            <thead>
              <tr style="border-bottom:2px solid var(--border)">
                <th style="text-align:left;padding:0.75rem">#</th>
                <th style="text-align:left;padding:0.75rem">Query Generata</th>
                <th style="text-align:center;padding:0.75rem">Stato</th>
                <th style="text-align:center;padding:0.75rem">Sentiment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="4" style="padding:2rem;text-align:center;color:var(--text-light)">Lancia il tracking per visualizzare i risultati.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  pageAiOverview() {
    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.eye} AI Overview Tracker (SGE)</h1>
          <p>Ottimizzazione per gli snapshot AI di Google (Search Generative Experience).</p>
        </div>

        <div class="card fade-in fade-in-delay-1">
          <h3>Dominio Web</h3>
          <div style="display:flex;gap:0.5rem">
            <input type="text" class="tool-input" id="aio-domain" style="margin-bottom:0;flex:1" placeholder="Es. iltuosito.it" />
            <button class="btn btn-dark" onclick="alert('Analisi AI Overview in elaborazione...')">Analizza AI Overview</button>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-2">
          <h3>Analisi Keyword &amp; Win Probability</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Keyword ad alto volume che attivano risposte AI con probabilit&agrave; di apparire nello snapshot.</p>
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
            <thead>
              <tr style="border-bottom:2px solid var(--border)">
                <th style="text-align:left;padding:0.75rem">Keyword</th>
                <th style="text-align:center;padding:0.75rem">Volume</th>
                <th style="text-align:center;padding:0.75rem">Win Probability</th>
                <th style="text-align:center;padding:0.75rem">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="4" style="padding:2rem;text-align:center;color:var(--text-light)">Lancia l'analisi per visualizzare le keyword.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div class="card fade-in fade-in-delay-3">
            <h3>Content Gap</h3>
            <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Elementi mancanti nella pagina per migliorare la visibilit&agrave; AI.</p>
            <div class="empty-state">Lancia l'analisi per identificare i content gap (es. Tabelle prezzi, Liste puntate, FAQ).</div>
          </div>

          <div class="card fade-in fade-in-delay-3">
            <h3>Actionable Fixes</h3>
            <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Suggerimenti pratici di modifica content per migliorare il posizionamento.</p>
            <div class="empty-state">Lancia l'analisi per ricevere suggerimenti correttivi.</div>
          </div>
        </div>
      </div>
    `;
  },

  pageVectorCheck() {
    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.checkCircle} Vector Check (Analisi Semantica)</h1>
          <p>Analisi tecnica degli embeddings e della rilevanza vettoriale del contenuto.</p>
        </div>

        <div class="card fade-in fade-in-delay-1">
          <h3>Input Analisi</h3>
          <div class="form-group">
            <label>URL Specifica</label>
            <input type="text" class="tool-input" id="vc-url" placeholder="https://www.esempio.it/pagina-da-analizzare" />
          </div>
          <div class="form-group">
            <label>Keyword Target</label>
            <input type="text" class="tool-input" id="vc-keyword" placeholder="Es. consulenza digitale per PMI" />
          </div>
          <button class="btn btn-dark btn-block" onclick="alert('Analisi vettoriale in elaborazione...')">Avvia Vector Check</button>
        </div>

        <div class="card fade-in fade-in-delay-2">
          <h3>Semantic Relevance Score</h3>
          <div style="text-align:center;padding:2rem">
            <div style="font-size:4rem;font-weight:700;color:var(--primary)">--</div>
            <div style="font-size:0.9rem;color:var(--text-light)">Punteggio di vicinanza semantica tra contenuto e query</div>
            <div style="margin-top:1.5rem;height:12px;background:var(--border);border-radius:6px;overflow:hidden;max-width:400px;margin-left:auto;margin-right:auto">
              <div style="height:100%;width:0%;background:var(--gradient-bar);border-radius:6px;transition:width 0.5s"></div>
            </div>
            <div style="display:flex;justify-content:space-between;max-width:400px;margin:0.5rem auto 0;font-size:0.75rem;color:var(--text-light)">
              <span>Bassa rilevanza</span>
              <span>Alta rilevanza</span>
            </div>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-3">
          <h3>Analisi Vettoriale</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Simulazione di come un database vettoriale indicizzerebbe il contenuto della pagina.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);text-align:center">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-light);margin-bottom:0.5rem">Densit&agrave; Semantica</div>
              <div style="font-size:1.5rem;font-weight:700;color:var(--text)">--</div>
            </div>
            <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);text-align:center">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-light);margin-bottom:0.5rem">Embedding Distance</div>
              <div style="font-size:1.5rem;font-weight:700;color:var(--text)">--</div>
            </div>
            <div style="padding:1.25rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);text-align:center">
              <div style="font-size:0.75rem;text-transform:uppercase;color:var(--text-light);margin-bottom:0.5rem">Cluster Match</div>
              <div style="font-size:1.5rem;font-weight:700;color:var(--text)">--</div>
            </div>
          </div>
        </div>

        <div class="card fade-in">
          <h3>Consigli di Ottimizzazione</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Suggerimenti per migliorare la densit&agrave; semantica senza keyword stuffing.</p>
          <div class="empty-state">Avvia il Vector Check per ricevere consigli personalizzati.</div>
        </div>
      </div>
    `;
  },

  vsState: {
    lens: '55mm',
    settore: 'auto',
    stile: 'human-oriented-realism',
    formato: '1:1',
    ora: 'mattina',
    mode: 'dopo',
    prompt: '',
  },

  vsLenses: [
    { id: '23mm', name: '23mm \u2013 The Immersive Wide', desc: 'Visione dinamica, espande lo spazio. Esaspera la distanza primo...' },
    { id: '33mm', name: '33mm \u2013 The Narrative Eye', desc: 'Simile visione umana. Street photography, fotogiornalismo.' },
    { id: '55mm', name: '55mm \u2013 Micro-Contrast Standard', desc: "Chirurgico, separazione piani netta, Bokeh 'Swirly' o circolare." },
    { id: '70mm', name: '70mm \u2013 Portrait Sweet Spot', desc: 'Compressione lusinghiera, riduce prominenza naso. Isolamento.' },
    { id: '90mm', name: '90mm \u2013 Compression Master', desc: 'Isolamento estremo. Sfondo pittorico, DoF ridottissima.' },
  ],

  vsFormats: ['1:1', '16:9', '9:16', '4:3', '3:4'],
  vsOre: [
    { id: 'alba', label: 'Alba', icon: '' },
    { id: 'mattina', label: 'Mattina', icon: '' },
    { id: 'mezzogiorno', label: 'Mezzogiorno', icon: '' },
    { id: 'pomeriggio', label: 'Pomeriggio', icon: '' },
    { id: 'golden', label: 'Golden', icon: '' },
    { id: 'blue', label: 'Blue', icon: '' },
    { id: 'notte', label: 'Notte', icon: '\u263D' },
    { id: 'nuvoloso', label: 'Nuvoloso', icon: '' },
  ],

  vsSetLens(id) { this.vsState.lens = id; this.renderApp(); },
  vsSetSettore(s) { this.vsState.settore = s; this.renderApp(); },
  vsSetFormato(f) { this.vsState.formato = f; this.renderApp(); },
  vsSetOra(o) { this.vsState.ora = o; this.renderApp(); },
  vsToggleMode() { this.vsState.mode = this.vsState.mode === 'dopo' ? 'prima' : 'dopo'; this.renderApp(); },

  pageVisualStudio() {
    const s = this.vsState;
    const oraLabel = this.vsOre.find(o => o.id === s.ora)?.label || 'Mattina';
    return `
      <div class="vs-page fade-in">
        <div class="vs-header">
          <div class="vs-header-icon">${ICONS.palette}</div>
          <div>
            <h1>Visual Studio</h1>
            <p>Motore di rendering fotorealistico con Virtual Lens Emulator.</p>
          </div>
        </div>

        <div class="vs-layout">
          <div class="vs-controls">
            <div class="vs-card">
              <div class="vs-card-top">
                <h3>Prompt Visivo</h3>
                <div class="vs-mode-toggle">
                  <span class="vs-mode-label">MODE: PRIMA/DOPO</span>
                  <button class="vs-toggle ${s.mode === 'dopo' ? 'active' : ''}" onclick="App.vsToggleMode()">
                    <span class="vs-toggle-knob"></span>
                  </button>
                </div>
              </div>
              <textarea class="vs-textarea" id="vs-prompt" placeholder="Descrivi la scena..." oninput="App.vsState.prompt=this.value">${s.prompt}</textarea>
            </div>

            <div class="vs-card">
              <div class="vs-card-label">\u2728 SCENARIO REFERENCE (OPZIONALE)</div>
              <div class="vs-upload-area">
                <div class="vs-upload-icon">\u2601</div>
              </div>
            </div>

            <div class="vs-card">
              <div class="vs-card-label">\u2699 VIRTUAL LENS EMULATOR</div>
              <div class="vs-lens-list">
                ${this.vsLenses.map(l => `
                  <div class="vs-lens-item ${s.lens === l.id ? 'active' : ''}" onclick="App.vsSetLens('${l.id}')">
                    <div>
                      <div class="vs-lens-name">${l.name}</div>
                      <div class="vs-lens-desc">${l.desc}</div>
                    </div>
                    ${s.lens === l.id ? '<div class="vs-lens-dot"></div>' : ''}
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="vs-card">
              <div class="vs-card-label">\u2699 SCENE SETUP</div>

              <div class="vs-setup-row">
                <div class="vs-setup-col">
                  <div class="vs-setup-label">SETTORE</div>
                  <div class="vs-btn-group">
                    <button class="vs-icon-btn ${s.settore === 'auto' ? 'active' : ''}" onclick="App.vsSetSettore('auto')" title="Automotive">\uD83D\uDE97</button>
                    <button class="vs-icon-btn ${s.settore === 'casa' ? 'active' : ''}" onclick="App.vsSetSettore('casa')" title="Casa">\uD83C\uDFE0</button>
                  </div>
                </div>
                <div class="vs-setup-col">
                  <div class="vs-setup-label">STILE</div>
                  <select class="vs-select" onchange="App.vsState.stile=this.value">
                    <option value="human-oriented-realism" ${s.stile==='human-oriented-realism'?'selected':''}>Human-Oriented Realism</option>
                    <option value="cinematic" ${s.stile==='cinematic'?'selected':''}>Cinematic</option>
                    <option value="editorial" ${s.stile==='editorial'?'selected':''}>Editorial</option>
                    <option value="minimal" ${s.stile==='minimal'?'selected':''}>Minimal</option>
                    <option value="dramatic" ${s.stile==='dramatic'?'selected':''}>Dramatic</option>
                  </select>
                </div>
              </div>

              <div class="vs-setup-label">FORMATO IMMAGINE</div>
              <div class="vs-format-group">
                ${this.vsFormats.map(f => `
                  <button class="vs-format-btn ${s.formato === f ? 'active' : ''}" onclick="App.vsSetFormato('${f}')">
                    <div class="vs-format-icon vs-format-${f.replace(':','-')}"></div>
                    <span>${f}</span>
                  </button>
                `).join('')}
              </div>

              <div class="vs-setup-label">\u2600 ORA DEL GIORNO</div>
              <div class="vs-ora-group">
                ${this.vsOre.map(o => `
                  <button class="vs-ora-btn ${s.ora === o.id ? 'active' : ''}" onclick="App.vsSetOra('${o.id}')">
                    ${o.icon ? `<span class="vs-ora-icon">${o.icon}</span>` : ''}${o.label}
                  </button>
                `).join('')}
              </div>
            </div>

            <button class="btn btn-primary btn-block vs-render-btn" onclick="alert('Renderizzazione in arrivo!')">
              \u2728 Renderizza Asset
            </button>
          </div>

          <div class="vs-preview">
            <div class="vs-preview-bar">
              <span>${s.lens.toUpperCase()}</span>
              <span>${s.formato}</span>
              <span>${oraLabel} (Neutral)</span>
            </div>
            <div class="vs-preview-area">
              <div class="vs-preview-icon">
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="40" cy="40" r="35"/>
                  <circle cx="40" cy="40" r="25"/>
                  <circle cx="40" cy="40" r="15"/>
                  <line x1="40" y1="5" x2="40" y2="15"/>
                  <line x1="40" y1="65" x2="40" y2="75"/>
                  <line x1="5" y1="40" x2="15" y2="40"/>
                  <line x1="65" y1="40" x2="75" y2="40"/>
                </svg>
              </div>
              <div class="vs-preview-text">Visual Studio Ready</div>
              <div class="vs-preview-sub">Carica reference o imposta i parametri per iniziare.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  pageWizardPost() {
    const ws = this.wizardState;
    const platforms = [
      { id: 'linkedin', label: 'LinkedIn', desc: 'B2B & Leadership.', color: '#0077B5' },
      { id: 'facebook', label: 'Facebook', desc: 'Community & Ads.', color: '#1877F2' },
      { id: 'instagram', label: 'Instagram', desc: 'Visual & Reels.', color: '#E4405F' },
      { id: 'youtube', label: 'YouTube', desc: 'Video & Shorts.', color: '#FF0000' },
      { id: 'pinterest', label: 'Pinterest', desc: 'Inspiration & Traffic.', color: '#E60023' },
      { id: 'gmb', label: 'Google My Business', desc: 'Local SEO.', color: '#4285F4' }
    ];
    const platformIcons = {
      linkedin: ICONS.linkedin, facebook: ICONS.facebook, instagram: ICONS.instagram,
      youtube: ICONS.eye, pinterest: ICONS.palette, gmb: ICONS.compass
    };
    const objectives = [
      { id: 'awareness', label: 'Awareness', desc: 'Massimizza la visibilit&agrave; del brand.' },
      { id: 'engagement', label: 'Engagement', desc: 'Stimola commenti e interazioni.' },
      { id: 'conversion', label: 'Conversion', desc: "Guida l'utente all'acquisto o lead." },
      { id: 'educational', label: 'Educational', desc: 'Informa e crea autorit&agrave;.' }
    ];
    const frameworks = [
      { id: 'hero', label: "Viaggio dell'Eroe" },
      { id: 'pas', label: 'PAS (Problem-Agitation-Solution)' },
      { id: 'bab', label: 'Before-After-Bridge' },
      { id: 'cliff', label: 'Cliffhanger' }
    ];

    const stepLabels = ['OBIETTIVO', 'TARGET', 'CONTENUTO', 'RISULTATO'];
    const stepIndicator = `
      <div class="wiz-steps">
        ${[1,2,3,4].map(s => `
          <div style="display:flex;flex-direction:column;align-items:center">
            <div class="wiz-step-circle ${ws.step === s ? 'active' : ws.step > s ? 'done' : ''}">${s}</div>
            <div class="wiz-step-label ${ws.step === s ? 'active' : ''}">${stepLabels[s-1]}</div>
          </div>
          ${s < 4 ? `<div class="wiz-step-line ${ws.step > s ? 'done' : ''}"></div>` : ''}
        `).join('')}
      </div>
    `;

    let stepContent = '';
    if (ws.step === 1) {
      stepContent = `
        <div class="wiz-section-title">Definisci l'Obiettivo</div>
        <div class="wiz-section-sub">Scegli la piattaforma per iniziare.</div>
        <div class="wiz-platform-grid">
          ${platforms.map(p => `
            <div class="wiz-platform-card ${ws.platform === p.id ? 'active' : ''}" onclick="App.wizardState.platform='${p.id}';App.renderApp()">
              <div class="wiz-p-icon" style="color:${p.color}">${platformIcons[p.id]}</div>
              <div class="wiz-p-name">${p.label}</div>
              <div class="wiz-p-desc">${p.desc}</div>
            </div>
          `).join('')}
        </div>
        <div class="wiz-objective-grid">
          ${objectives.map(o => `
            <div class="wiz-objective-card ${ws.objective === o.id ? 'active' : ''}" onclick="App.wizardState.objective='${o.id}';App.renderApp()">
              <div>
                <div class="wiz-o-name">${o.label}</div>
                <div class="wiz-o-desc">${o.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (ws.step === 2) {
      stepContent = `
        <div class="wiz-section-title">Definisci il Target</div>
        <div class="wiz-section-sub">Seleziona la persona target. L'AI adatter&agrave; tono e linguaggio.</div>
        <div class="card" style="text-align:left">
          <div class="form-group">
            <label>Buyer Persona</label>
            <select class="tool-input" onchange="App.wizardState.persona=this.value">
              <option value="" ${!ws.persona ? 'selected' : ''}>-- Seleziona Persona --</option>
              <option value="manager" ${ws.persona === 'manager' ? 'selected' : ''}>Manager / Decision Maker</option>
              <option value="tecnico" ${ws.persona === 'tecnico' ? 'selected' : ''}>Tecnico / Sviluppatore</option>
              <option value="imprenditore" ${ws.persona === 'imprenditore' ? 'selected' : ''}>Imprenditore / Startup</option>
              <option value="studente" ${ws.persona === 'studente' ? 'selected' : ''}>Studente / Junior</option>
              <option value="custom" ${ws.persona === 'custom' ? 'selected' : ''}>Personalizzata</option>
            </select>
          </div>
          <p style="font-size:0.85rem;color:var(--text-light)">Il tono verr&agrave; adattato in base alla persona selezionata e alle impostazioni del Brand Voice Engine.</p>
        </div>
      `;
    } else if (ws.step === 3) {
      stepContent = `
        <div class="wiz-section-title">Input Creativo</div>
        <div class="wiz-section-sub">Inserisci argomento, contesto e framework narrativo.</div>
        <div class="card" style="text-align:left">
          <div class="form-group">
            <label>Topic / Argomento</label>
            <input type="text" class="tool-input" value="${ws.topic}" oninput="App.wizardState.topic=this.value" placeholder="Es. Come aumentare le vendite online" />
          </div>
          <div class="form-group">
            <label>Contesto (link, note)</label>
            <textarea class="tool-textarea" oninput="App.wizardState.context=this.value" placeholder="Aggiungi link, note o contesto aggiuntivo...">${ws.context}</textarea>
          </div>
          <div class="form-group">
            <label>Storytelling Framework</label>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
              ${frameworks.map(f => `
                <button class="btn ${ws.framework === f.id ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="App.wizardState.framework='${f.id}';App.renderApp()">
                  ${f.label}
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      stepContent = `
        <div class="wiz-section-title">Risultato &amp; Azioni</div>
        <div class="wiz-section-sub">Genera, modifica e copia il contenuto finale.</div>
        <div class="card" style="text-align:left">
          <div class="form-group">
            <label>Testo Generato</label>
            <textarea class="tool-textarea" style="min-height:200px" oninput="App.wizardState.generatedText=this.value" placeholder="Il testo generato apparir&agrave; qui dopo la generazione...">${ws.generatedText}</textarea>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="alert('Generazione testo con Anti-AI Layer in corso...')">Genera Testo</button>
            <button class="btn btn-outline" onclick="alert('Generazione variante in corso...')">Genera Variante</button>
            <button class="btn btn-outline" onclick="App.copyToClipboard(App.wizardState.generatedText)">Copia</button>
            <button class="btn btn-outline" onclick="alert('Generazione prompt immagine in corso...')">Genera Immagine</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="fade-in">
        <div class="wiz-container">
          <div class="wiz-title">Social Content <span>Wizard</span></div>
          <div class="wiz-subtitle">Crea contenuti human-oriented in 4 step.</div>

          ${stepIndicator}
          ${stepContent}

          <div class="wiz-nav">
            ${ws.step > 1 ? `<button class="wiz-back-btn" onclick="App.wizardPrev()">&larr; Indietro</button>` : ''}
            ${ws.step < 4 ? `<button class="wiz-next-btn" onclick="App.wizardNext()">Prosegui &rarr;</button>` : ''}
          </div>
        </div>
      </div>
    `;
  },

  renderSocialPage(platform, platformLabel, platformIcon) {
    const tones = ['Professionale', 'Informale', 'Motivazionale', 'Educativo', 'Umoristico'];
    const frameworks = [
      { id: 'hero', label: "Viaggio dell'Eroe" },
      { id: 'pas', label: 'PAS' },
      { id: 'bab', label: 'Before-After-Bridge' },
      { id: 'cliff', label: 'Cliffhanger' }
    ];

    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${platformIcon} ${platformLabel}</h1>
          <p>Genera contenuti ottimizzati per ${platformLabel} con intelligenza artificiale.</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div>
            <div class="card">
              <h3>Configurazione Post</h3>
              <div class="form-group">
                <label>Argomento / Topic</label>
                <input type="text" class="tool-input" placeholder="Es. Come aumentare l'engagement" />
              </div>
              <div class="form-group">
                <label>Contenuto / Contesto</label>
                <textarea class="tool-textarea" placeholder="Descrivi il contenuto che vuoi comunicare, aggiungi link o note..."></textarea>
              </div>
              <div class="form-group">
                <label>Tono</label>
                <select class="tool-input">
                  ${tones.map(t => `<option>${t}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Storytelling Framework</label>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                  ${frameworks.map(f => `
                    <button class="btn btn-outline btn-sm">${f.label}</button>
                  `).join('')}
                </div>
              </div>
              <button class="btn btn-dark btn-block" onclick="alert('Generazione post ${platformLabel} in corso...')">Genera Post ${platformLabel}</button>
            </div>
          </div>

          <div>
            <div class="card" style="min-height:400px">
              <h3>Output Generato</h3>
              <textarea class="tool-textarea" style="min-height:250px" placeholder="Il post generato apparir&agrave; qui..."></textarea>
              <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
                <button class="btn btn-outline btn-sm" onclick="alert('Generazione variante...')">Genera Variante</button>
                <button class="btn btn-outline btn-sm" onclick="alert('Copiato!')">Copia</button>
                <button class="btn btn-outline btn-sm" onclick="alert('Generazione immagine...')">Genera Immagine</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  pageLinkedin() {
    return this.renderSocialPage('linkedin', 'LinkedIn', ICONS.linkedin);
  },

  pageFacebook() {
    return this.renderSocialPage('facebook', 'Facebook', ICONS.facebook);
  },

  pageInstagram() {
    return this.renderSocialPage('instagram', 'Instagram', ICONS.instagram);
  },

  pageImpostazioni() {
    const ss = this.settingsState;

    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.settings} Impostazioni &amp; Configurazione</h1>
          <p>Hub centrale per la gestione tecnica, economica e dei dati dell'applicazione.</p>
        </div>

        <div class="card fade-in fade-in-delay-1">
          <h3>Gestione API Key (Multi-Provider)</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Le chiavi sono salvate solo nel localStorage del browser. Non vengono mai inviate a server terzi.</p>

          <div class="form-group">
            <label>Google Gemini <span style="color:var(--danger);font-size:0.8rem">(Obbligatorio)</span></label>
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:0.5rem">Motore principale per tutte le analisi e generazioni.</p>
            <div style="display:flex;gap:0.5rem">
              <input type="password" class="tool-input" style="margin-bottom:0;flex:1" value="${ss.geminiKey}" oninput="App.settingsState.geminiKey=this.value" placeholder="Inserisci API Key Google Gemini" />
              <button class="btn btn-outline btn-sm" onclick="alert(App.settingsState.geminiKey ? 'Verifica chiave Gemini in corso...' : 'Inserisci prima la chiave API')">Verifica</button>
            </div>
          </div>

          <div class="form-group">
            <label>OpenAI <span style="color:var(--text-light);font-size:0.8rem">(Opzionale)</span></label>
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:0.5rem">Usato nel modulo AEO per simulare risposte ChatGPT reali.</p>
            <div style="display:flex;gap:0.5rem">
              <input type="password" class="tool-input" style="margin-bottom:0;flex:1" value="${ss.openaiKey}" oninput="App.settingsState.openaiKey=this.value" placeholder="Inserisci API Key OpenAI (opzionale)" />
              <button class="btn btn-outline btn-sm" onclick="alert(App.settingsState.openaiKey ? 'Verifica chiave OpenAI in corso...' : 'Inserisci prima la chiave API')">Verifica</button>
            </div>
          </div>

          <div class="form-group">
            <label>Perplexity <span style="color:var(--text-light);font-size:0.8rem">(Opzionale)</span></label>
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:0.5rem">Usato nel modulo AEO e GEO per recuperare dati live dal web e fonti internazionali.</p>
            <div style="display:flex;gap:0.5rem">
              <input type="password" class="tool-input" style="margin-bottom:0;flex:1" value="${ss.perplexityKey}" oninput="App.settingsState.perplexityKey=this.value" placeholder="Inserisci API Key Perplexity (opzionale)" />
              <button class="btn btn-outline btn-sm" onclick="alert(App.settingsState.perplexityKey ? 'Verifica chiave Perplexity in corso...' : 'Inserisci prima la chiave API')">Verifica</button>
            </div>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-2">
          <h3>Configurazione Costi (FinOps)</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Sistema per stimare i costi di utilizzo delle API in tempo reale.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div class="form-group">
              <label>Costo per 1M Token Input (&euro;)</label>
              <input type="number" class="tool-input" value="${ss.costInput}" oninput="App.settingsState.costInput=this.value" step="0.01" min="0" />
            </div>
            <div class="form-group">
              <label>Costo per 1M Token Output (&euro;)</label>
              <input type="number" class="tool-input" value="${ss.costOutput}" oninput="App.settingsState.costOutput=this.value" step="0.01" min="0" />
            </div>
            <div class="form-group">
              <label>Costo per Ricerca (&euro;)</label>
              <input type="number" class="tool-input" value="${ss.costSearch}" oninput="App.settingsState.costSearch=this.value" step="0.01" min="0" />
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);margin-top:0.5rem">
            <div>
              <div style="font-size:0.8rem;color:var(--text-light);text-transform:uppercase">Spesa Totale Sessione</div>
              <div style="font-size:2rem;font-weight:700;color:var(--primary)">&euro;${ss.totalSpent.toFixed(4)}</div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="App.resetSpending()">Reset Contatore</button>
          </div>
        </div>

        <div class="card fade-in fade-in-delay-3">
          <h3>Knowledge Base &amp; Data Management</h3>
          <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1rem">Gestisci la portabilit&agrave; dei dati del progetto.</p>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
            <div style="padding:1.5rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);text-align:center">
              <h4 style="margin-bottom:0.5rem">Esporta Progetto</h4>
              <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:1rem">Scarica un file .json con profilo cliente, storico analisi e impostazioni (chiavi API escluse).</p>
              <button class="btn btn-primary btn-sm" onclick="App.exportProject()">Esporta .JSON</button>
            </div>
            <div style="padding:1.5rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);text-align:center">
              <h4 style="margin-bottom:0.5rem">Importa Progetto</h4>
              <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:1rem">Carica un file di backup per ripristinare lo stato su un altro dispositivo.</p>
              <button class="btn btn-outline btn-sm" onclick="App.importProject()">Importa File</button>
            </div>
          </div>

          <div class="form-group">
            <label>Knowledge Base Editor</label>
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:0.5rem">Inserisci informazioni non strutturate (note, interviste, testi) che verranno iniettate come contesto in ogni prompt AI.</p>
            <textarea class="tool-textarea" style="min-height:200px" oninput="App.clientData.knowledgeBase=this.value" placeholder="Incolla qui note, interviste, PDF convertiti in testo...">${this.clientData.knowledgeBase}</textarea>
          </div>
        </div>
      </div>
    `;
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
