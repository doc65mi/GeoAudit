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
        if (data.aiResults) this.aiResults = data.aiResults;
      }
    } catch (e) { console.error('Error loading from storage:', e); }
  },

  saveToStorage() {
    try {
      localStorage.setItem('geoaudit_data', JSON.stringify({
        clientData: this.clientData,
        presentationState: this.presentationState,
        settingsState: this.settingsState,
        aiResults: this.aiResults,
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

  addToPresentation(type) {
    const keyMap = { 'geo-audit': 'geo', 'aeo-audit': 'aeo', 'prompt-tracker': 'promptTracker', 'ai-overview': 'aiOverview', 'vector-check': 'vectorCheck' };
    const k = keyMap[type];
    if (k) {
      this.presentationState.selectedReports[k] = true;
      this.saveToStorage();
      this.showToast('Report aggiunto alla presentazione!', 'success');
      this.renderApp();
    }
  },

  showToast(msg, type = 'success') {
    let t = document.getElementById('toast-global');
    if (!t) { t = document.createElement('div'); t.id = 'toast-global'; t.className = 'toast-notification'; document.body.appendChild(t); }
    t.textContent = msg;
    t.className = 'toast-notification toast-' + type + ' show';
    setTimeout(() => { t.classList.remove('show'); }, 3000);
  },

  presentationMode: 'config',

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

  aiResults: {},
  aiLoading: {},
  aiError: {},

  async callAI(endpoint, body) {
    const ss = this.settingsState;
    this.aiLoading[endpoint] = true;
    this.aiError[endpoint] = null;
    this.renderApp();
    try {
      const res = await fetch('/api/ai/' + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ...body, geminiKey: ss.geminiKey, openaiKey: ss.openaiKey, perplexityKey: ss.perplexityKey, clientContext: this.clientData.knowledgeBase })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Errore sconosciuto');
      this.aiResults[endpoint] = data;
      this.aiLoading[endpoint] = false;
      this.saveToStorage();
      this.renderApp();
      return data;
    } catch (e) {
      this.aiLoading[endpoint] = false;
      this.aiError[endpoint] = e.message;
      this.renderApp();
      throw e;
    }
  },

  async verifyApiKey(provider) {
    const ss = this.settingsState;
    const keyMap = { gemini: ss.geminiKey, openai: ss.openaiKey, perplexity: ss.perplexityKey };
    const key = keyMap[provider];
    if (!key) { this.showToast('Inserisci prima la chiave API', 'warning'); return; }
    this.aiLoading['verify-' + provider] = true;
    this.renderApp();
    try {
      const res = await fetch('/api/ai/verify-key', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include', body: JSON.stringify({ provider, apiKey: key })
      });
      const data = await res.json();
      this.aiLoading['verify-' + provider] = false;
      if (data.valid) {
        this.aiResults['verify-' + provider] = true;
        this.showToast('Chiave ' + provider.charAt(0).toUpperCase() + provider.slice(1) + ' verificata!', 'success');
      } else {
        this.aiResults['verify-' + provider] = false;
        this.showToast('Chiave non valida: ' + (data.error || 'errore'), 'error');
      }
      this.renderApp();
    } catch (e) {
      this.aiLoading['verify-' + provider] = false;
      this.showToast('Errore: ' + e.message, 'error');
      this.renderApp();
    }
  },

  showToast(message, type) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification toast-' + type;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 4000);
  },

  async runGeoAudit() {
    const domain = document.getElementById('geo-domain')?.value;
    if (!domain) { this.showToast('Inserisci un dominio web', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      const data = await this.callAI('geo-audit', { domain });
      this.clientData.storicoAnalisi.unshift({ date: new Date().toLocaleDateString('it-IT'), type: 'GEO', label: domain, status: data.sentimentScore > 60 ? 'OK' : data.sentimentScore > 30 ? 'WARNING' : 'CRITICAL', includedInPresentation: false });
      this.saveToStorage();
    } catch(e) {}
  },

  async runAeoAudit() {
    const domain = document.getElementById('aeo-domain')?.value;
    if (!domain) { this.showToast('Inserisci un dominio web', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      await this.callAI('aeo-audit', { domain });
      this.clientData.storicoAnalisi.unshift({ date: new Date().toLocaleDateString('it-IT'), type: 'AEO', label: domain, status: 'OK', includedInPresentation: false });
      this.saveToStorage();
    } catch(e) {}
  },

  async runPromptTracker() {
    const domain = document.getElementById('prompt-tracker-domain')?.value;
    if (!domain) { this.showToast('Inserisci un dominio web', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      const data = await this.callAI('prompt-tracker', { domain });
      this.clientData.storicoAnalisi.unshift({ date: new Date().toLocaleDateString('it-IT'), type: 'Prompt', label: domain, status: data.citationScore > 50 ? 'OK' : 'WARNING', includedInPresentation: false });
      this.saveToStorage();
    } catch(e) {}
  },

  async runAiOverview() {
    const domain = document.getElementById('aio-domain')?.value;
    if (!domain) { this.showToast('Inserisci un dominio web', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      await this.callAI('ai-overview', { domain });
      this.clientData.storicoAnalisi.unshift({ date: new Date().toLocaleDateString('it-IT'), type: 'AI Overview', label: domain, status: 'OK', includedInPresentation: false });
      this.saveToStorage();
    } catch(e) {}
  },

  async runVectorCheck() {
    const url = document.getElementById('vc-url')?.value;
    const keyword = document.getElementById('vc-keyword')?.value;
    if (!url || !keyword) { this.showToast('Inserisci URL e keyword target', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      const data = await this.callAI('vector-check', { url, keyword });
      this.clientData.storicoAnalisi.unshift({ date: new Date().toLocaleDateString('it-IT'), type: 'Vector', label: keyword, status: data.relevanceScore > 60 ? 'OK' : 'WARNING', includedInPresentation: false });
      this.saveToStorage();
    } catch(e) {}
  },

  async generateSocialPost(platform, platformLabel) {
    const topic = document.getElementById('social-topic-' + platform)?.value;
    const context = document.getElementById('social-context-' + platform)?.value;
    const tone = document.getElementById('social-tone-' + platform)?.value;
    const framework = (this['_social_' + platform] || {}).framework || 'hero';
    if (!topic) { this.showToast('Inserisci un argomento', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      const data = await this.callAI('generate-content', { platform: platformLabel, topic, context, tone, framework, brandVoice: this.clientData.brandVoice });
      if (data?.text) {
        this.aiResults['social-' + platform] = data.text;
        const el = document.getElementById('social-output-' + platform);
        if (el) el.value = data.text;
      }
    } catch(e) {}
  },

  async generateWizardContent() {
    const ws = this.wizardState;
    if (!ws.topic) { this.showToast('Inserisci un argomento nello step 3', 'warning'); return; }
    if (!this.settingsState.geminiKey) { this.showToast('Configura la chiave API Gemini in Impostazioni', 'warning'); return; }
    try {
      const data = await this.callAI('generate-content', { platform: ws.platform, topic: ws.topic, context: ws.context, framework: ws.framework, objective: ws.objective, persona: ws.persona, brandVoice: this.clientData.brandVoice });
      if (data?.text) { this.wizardState.generatedText = data.text; this.renderApp(); }
    } catch(e) {}
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

  renderReportSection(type, label, icon, data) {
    if (!data) return `<div class="pres-section"><h3 class="pres-section-title">${icon} ${label}</h3><div class="empty-state">Nessun dato disponibile. Esegui l'analisi prima.</div></div>`;
    let html = '';
    if (type === 'geo') {
      html = `
        <div class="pres-metrics-row">
          <div class="pres-metric"><div class="pres-metric-label">Mission</div><div class="pres-metric-val">${data.mission||'N/D'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Vision</div><div class="pres-metric-val">${data.vision||'N/D'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Valori</div><div class="pres-metric-val">${data.valori||'N/D'}</div></div>
        </div>
        <div class="pres-metrics-row">
          <div class="pres-metric pres-metric-score"><div class="pres-metric-label">Sentiment Score</div><div class="pres-big-score ${data.sentimentScore>60?'score-good':data.sentimentScore>30?'score-warn':'score-bad'}">${data.sentimentScore||'--'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Copertura Locale</div><div class="pres-metric-val">${data.coperturaLocale||'N/D'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Presenza Internazionale</div><div class="pres-metric-val">${data.presenzaInternazionale||'N/D'}</div></div>
        </div>
        ${data.competitors?`<div class="pres-sub"><strong>Competitor:</strong> ${data.competitors.map(c=>c.nome).join(', ')}</div>`:''}
        ${data.personas?`<div class="pres-sub"><strong>Buyer Personas:</strong> ${data.personas.map(p=>p.nome+(p.ruolo?' ('+p.ruolo+')':'')).join(', ')}</div>`:''}
        ${data.keywordPositive?`<div class="pres-tags"><span class="pres-tag-pos">${data.keywordPositive.join('</span><span class="pres-tag-pos">')}</span></div>`:''}
      `;
    } else if (type === 'aeo') {
      html = `
        <div class="pres-engines">${[{name:'ChatGPT',key:'chatgpt',c:'#10a37f'},{name:'Perplexity',key:'perplexity',c:'#20808D'},{name:'Gemini',key:'gemini',c:'#4285F4'}].map(e=>`<div class="pres-engine"><div class="pres-engine-head" style="background:${e.c}">${e.name}</div><div class="pres-engine-body">${data.engines?.[e.key]||'N/D'}</div></div>`).join('')}</div>
        ${data.metriche?`<table class="pres-table"><thead><tr><th>Metrica</th><th>ChatGPT</th><th>Perplexity</th><th>Gemini</th></tr></thead><tbody>${['visibilita','accuratezza','coerenza'].map(m=>`<tr><td>${{visibilita:'Visibilit\u00e0',accuratezza:'Accuratezza',coerenza:'Coerenza'}[m]}</td><td>${data.metriche[m]?.chatgpt??'--'}</td><td>${data.metriche[m]?.perplexity??'--'}</td><td>${data.metriche[m]?.gemini??'--'}</td></tr>`).join('')}</tbody></table>`:''}
        ${data.schemaOrg?`<div class="pres-sub"><strong>Schema.org:</strong> ${data.schemaOrg}</div>`:''}
      `;
    } else if (type === 'promptTracker') {
      html = `
        <div class="pres-metrics-row">
          <div class="pres-metric pres-metric-score"><div class="pres-metric-label">Citation Score</div><div class="pres-big-score ${data.citationScore>60?'score-good':data.citationScore>30?'score-warn':'score-bad'}">${data.citationScore||'--'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Sentiment</div><div class="pres-metric-val">${data.sentiment||'N/D'}</div><div style="font-size:0.8rem;color:var(--text-light)">${data.sentimentDetail||''}</div></div>
        </div>
        ${data.queries?`<table class="pres-table"><thead><tr><th>#</th><th>Query</th><th>Citato</th><th>Sentiment</th></tr></thead><tbody>${data.queries.map((q,i)=>`<tr><td>${i+1}</td><td>${q.query}</td><td>${q.citato?'S\u00ec':'No'}</td><td>${q.sentiment}</td></tr>`).join('')}</tbody></table>`:''}
      `;
    } else if (type === 'aiOverview') {
      html = `
        ${data.keywords?`<table class="pres-table"><thead><tr><th>Keyword Strategica</th><th>Ranking</th><th>Win Prob.</th><th>Volume</th></tr></thead><tbody>${data.keywords.map(k=>`<tr><td>${k.keyword}</td><td style="text-align:center">${k.ranking||'-'}</td><td style="text-align:center">${k.winProbability}%</td><td style="text-align:center">${k.volume}</td></tr>`).join('')}</tbody></table>`:''}
        ${data.contentGaps?`<div class="pres-sub"><strong>Content Gap:</strong><ul>${data.contentGaps.map(g=>`<li>${g}</li>`).join('')}</ul></div>`:''}
        ${data.fixes?`<div class="pres-sub"><strong>Actionable Fixes:</strong><ol>${data.fixes.map(f=>`<li>${f}</li>`).join('')}</ol></div>`:''}
      `;
    } else if (type === 'vectorCheck') {
      html = `
        <div class="pres-metrics-row">
          <div class="pres-metric pres-metric-score"><div class="pres-metric-label">Relevance Score</div><div class="pres-big-score ${data.relevanceScore>60?'score-good':data.relevanceScore>30?'score-warn':'score-bad'}">${data.relevanceScore||'--'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Densit\u00e0 Semantica</div><div class="pres-metric-val">${data.semanticDensity||'--'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Embedding Distance</div><div class="pres-metric-val">${data.embeddingDistance??'--'}</div></div>
          <div class="pres-metric"><div class="pres-metric-label">Cluster Match</div><div class="pres-metric-val">${data.clusterMatch||'--'}</div></div>
        </div>
        ${data.topTerms?`<div class="pres-sub"><strong>Top Terms:</strong> ${data.topTerms.join(', ')}</div>`:''}
        ${data.consigli?`<div class="pres-sub"><strong>Consigli:</strong><ol>${data.consigli.map(c=>`<li>${c}</li>`).join('')}</ol></div>`:''}
      `;
    }
    return `<div class="pres-section"><h3 class="pres-section-title">${icon} ${label}</h3>${html}</div>`;
  },

  generatePresentationHTML() {
    const ps = this.presentationState;
    const cd = this.clientData;
    const reports = [
      { key: 'geo', type: 'geo', aiKey: 'geo-audit', label: 'GEO Audit', icon: ICONS.globe },
      { key: 'aeo', type: 'aeo', aiKey: 'aeo-audit', label: 'AEO Audit', icon: ICONS.target },
      { key: 'promptTracker', type: 'promptTracker', aiKey: 'prompt-tracker', label: 'AI Prompt Tracker', icon: ICONS.zap },
      { key: 'aiOverview', type: 'aiOverview', aiKey: 'ai-overview', label: 'AI Overview', icon: ICONS.eye },
      { key: 'vectorCheck', type: 'vectorCheck', aiKey: 'vector-check', label: 'Vector Check', icon: ICONS.checkCircle }
    ];
    const selectedReports = reports.filter(r => ps.selectedReports[r.key]);
    const clientName = ps.clientName || cd.nome || 'Cliente';
    const mission = ps.mission || cd.descrizione || '';
    const date = new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' });

    const cover = `
      <div class="pres-cover">
        <div class="pres-cover-logo">${ICONS.globe}</div>
        <h1 class="pres-cover-title">${clientName}</h1>
        <p class="pres-cover-subtitle">${mission}</p>
        <div class="pres-cover-meta">
          <span>GEOAudit AI Intelligence</span>
          <span>${date}</span>
        </div>
        <div class="pres-cover-reports">${selectedReports.map(r=>`<span class="pres-cover-tag">${r.label}</span>`).join('')}</div>
      </div>
    `;
    const sections = selectedReports.map(r => this.renderReportSection(r.type, r.label, r.icon, this.aiResults[r.aiKey])).join('');
    return { cover, sections, clientName, date, selectedReports };
  },

  exportPDF() {
    const { cover, sections, clientName } = this.generatePresentationHTML();
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Report ${clientName}</title>
    <style>
      @page { size: A4; margin: 20mm; }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1e293b; font-size: 11pt; line-height: 1.6; }
      .pres-cover { page-break-after: always; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center; background: linear-gradient(135deg, #f8fafc, #e2e8f0); padding: 3rem; }
      .pres-cover-logo svg { width: 64px; height: 64px; color: #3b82f6; }
      .pres-cover-title { font-size: 2.5rem; font-weight: 800; margin: 1rem 0 0.5rem; color: #0f172a; }
      .pres-cover-subtitle { font-size: 1.1rem; color: #64748b; max-width: 400px; }
      .pres-cover-meta { margin-top: 2rem; font-size: 0.85rem; color: #94a3b8; display: flex; gap: 2rem; }
      .pres-cover-reports { margin-top: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }
      .pres-cover-tag { font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 4px; background: rgba(59,130,246,0.1); color: #3b82f6; }
      .pres-section { page-break-inside: avoid; margin-bottom: 2rem; padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 8px; background: white; }
      .pres-section-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.75rem; }
      .pres-section-title svg { width: 20px; height: 20px; }
      .pres-metrics-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
      .pres-metric { padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
      .pres-metric-label { font-size: 0.7rem; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.5px; margin-bottom: 0.3rem; }
      .pres-metric-val { font-size: 0.85rem; color: #1e293b; line-height: 1.4; }
      .pres-big-score { font-size: 2rem; font-weight: 700; }
      .pres-big-score.score-good { color: #059669; }
      .pres-big-score.score-warn { color: #d97706; }
      .pres-big-score.score-bad { color: #dc2626; }
      .pres-sub { font-size: 0.85rem; margin: 0.75rem 0; line-height: 1.6; }
      .pres-sub ul, .pres-sub ol { padding-left: 1.5rem; margin-top: 0.25rem; }
      .pres-sub li { margin-bottom: 0.2rem; }
      .pres-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; margin: 0.75rem 0; }
      .pres-table th, .pres-table td { padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; text-align: left; }
      .pres-table th { background: #f1f5f9; font-weight: 600; }
      .pres-tags { display: flex; gap: 0.3rem; flex-wrap: wrap; margin-top: 0.5rem; }
      .pres-tag-pos { font-size: 0.75rem; padding: 0.15rem 0.5rem; border-radius: 3px; background: rgba(16,185,129,0.1); color: #059669; }
      .pres-engines { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
      .pres-engine { border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; }
      .pres-engine-head { color: white; padding: 0.4rem 0.75rem; font-weight: 600; font-size: 0.8rem; text-align: center; }
      .pres-engine-body { padding: 0.75rem; font-size: 0.8rem; line-height: 1.5; }
    </style></head><body>${cover}${sections}</body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
    setTimeout(() => { w.print(); }, 500);
  },

  openMiniSite() {
    const { cover, sections, clientName, selectedReports } = this.generatePresentationHTML();
    const ps = this.presentationState;
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Report - ${clientName}</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; }
      .mini-nav { position: sticky; top: 0; background: white; border-bottom: 1px solid #e2e8f0; padding: 0.75rem 2rem; display: flex; align-items: center; justify-content: space-between; z-index: 100; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .mini-nav-brand { font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; }
      .mini-nav-brand svg { width: 20px; height: 20px; color: #3b82f6; }
      .mini-nav-links { display: flex; gap: 1.5rem; font-size: 0.85rem; }
      .mini-nav-links a { color: #64748b; text-decoration: none; } .mini-nav-links a:hover { color: #3b82f6; }
      .mini-hero { background: linear-gradient(135deg, #0f172a, #1e293b); color: white; text-align: center; padding: 4rem 2rem; }
      .mini-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; }
      .mini-hero p { font-size: 1.1rem; opacity: 0.7; max-width: 500px; margin: 0 auto; }
      .mini-hero-tags { margin-top: 1.5rem; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      .mini-hero-tag { font-size: 0.8rem; padding: 0.3rem 0.8rem; border-radius: 6px; background: rgba(59,130,246,0.2); color: #93c5fd; }
      .mini-content { max-width: 900px; margin: 2rem auto; padding: 0 1.5rem; }
      .pres-section { margin-bottom: 2rem; padding: 2rem; border: 1px solid #e2e8f0; border-radius: 12px; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
      .pres-section-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.75rem; }
      .pres-section-title svg { width: 20px; height: 20px; color: #3b82f6; }
      .pres-metrics-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
      .pres-metric { padding: 1.25rem; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; }
      .pres-metric-label { font-size: 0.7rem; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.5px; margin-bottom: 0.3rem; }
      .pres-metric-val { font-size: 0.9rem; color: #1e293b; line-height: 1.5; }
      .pres-big-score { font-size: 2.5rem; font-weight: 700; }
      .pres-big-score.score-good { color: #059669; } .pres-big-score.score-warn { color: #d97706; } .pres-big-score.score-bad { color: #dc2626; }
      .pres-sub { font-size: 0.9rem; margin: 0.75rem 0; line-height: 1.6; }
      .pres-sub ul, .pres-sub ol { padding-left: 1.5rem; margin-top: 0.25rem; } .pres-sub li { margin-bottom: 0.3rem; }
      .pres-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; margin: 0.75rem 0; }
      .pres-table th, .pres-table td { padding: 0.6rem 0.75rem; border: 1px solid #e2e8f0; text-align: left; }
      .pres-table th { background: #f1f5f9; font-weight: 600; }
      .pres-tags { display: flex; gap: 0.3rem; flex-wrap: wrap; margin-top: 0.5rem; }
      .pres-tag-pos { font-size: 0.8rem; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(16,185,129,0.1); color: #059669; }
      .pres-engines { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
      .pres-engine { border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
      .pres-engine-head { color: white; padding: 0.5rem 0.75rem; font-weight: 600; font-size: 0.85rem; text-align: center; }
      .pres-engine-body { padding: 1rem; font-size: 0.85rem; line-height: 1.5; }
      .mini-footer { text-align: center; padding: 2rem; font-size: 0.8rem; color: #94a3b8; border-top: 1px solid #e2e8f0; margin-top: 2rem; }
    </style></head><body>
    <nav class="mini-nav"><div class="mini-nav-brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>${clientName}</div></nav>
    <div class="mini-hero"><h1>${clientName}</h1><p>${ps.mission||''}</p><div class="mini-hero-tags">${selectedReports.map(r=>`<span class="mini-hero-tag">${r.label}</span>`).join('')}</div></div>
    <div class="mini-content">${sections}</div>
    <div class="mini-footer">Report generato da GEOAudit AI Intelligence &bull; ${new Date().toLocaleDateString('it-IT')}</div>
    </body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
  },

  pageClientPresentation() {
    const ps = this.presentationState;
    const cd = this.clientData;
    const mode = this.presentationMode;
    const reports = [
      { key: 'geo', aiKey: 'geo-audit', label: 'GEO Audit', icon: ICONS.globe },
      { key: 'aeo', aiKey: 'aeo-audit', label: 'AEO Audit', icon: ICONS.target },
      { key: 'promptTracker', aiKey: 'prompt-tracker', label: 'AI Prompt Tracker', icon: ICONS.zap },
      { key: 'aiOverview', aiKey: 'ai-overview', label: 'AI Overview', icon: ICONS.eye },
      { key: 'vectorCheck', aiKey: 'vector-check', label: 'Vector Check', icon: ICONS.checkCircle }
    ];
    const hasData = reports.some(r => ps.selectedReports[r.key] && this.aiResults[r.aiKey]);

    const reportToggles = reports.map(r => {
      const data = this.aiResults[r.aiKey];
      return `<label class="pres-toggle-row">
        <input type="checkbox" ${ps.selectedReports[r.key] ? 'checked' : ''} onchange="App.toggleReportSelection('${r.key}')" />
        <span class="pres-toggle-label">${r.icon} ${r.label}</span>
        <span class="pres-toggle-status ${data?'pres-has-data':''}">${data?(ps.selectedReports[r.key]?'INCLUSO':'ESCLUSO'):'NO DATI'}</span>
      </label>`;
    }).join('');

    if (mode === 'preview') {
      const { cover, sections } = this.generatePresentationHTML();
      return `
        <div class="fade-in pres-preview-wrap">
          <div class="pres-preview-toolbar">
            <button class="btn btn-outline btn-sm" onclick="App.presentationMode='config';App.renderApp()">Torna alla Configurazione</button>
            <div style="display:flex;gap:0.5rem">
              <button class="btn btn-primary btn-sm" onclick="App.exportPDF()">Esporta PDF (A4)</button>
              <button class="btn btn-dark btn-sm" onclick="App.openMiniSite()">Apri Mini Sito</button>
            </div>
          </div>
          <div class="pres-preview-container">${cover}${sections}</div>
        </div>`;
    }

    return `
      <div class="fade-in">
        <div class="dash-header" style="display:flex;align-items:center;justify-content:space-between">
          <div><h1>${ICONS.presentation} Client Presentation</h1><p>Presenta i risultati in modo professionale: anteprima, mini sito e PDF A4.</p></div>
          <div style="display:flex;gap:0.5rem">
            ${hasData?`<button class="btn btn-primary btn-sm" onclick="App.presentationMode='preview';App.renderApp()">Anteprima</button>
            <button class="btn btn-dark btn-sm" onclick="App.openMiniSite()">Mini Sito</button>
            <button class="btn btn-outline btn-sm" onclick="App.exportPDF()">PDF A4</button>`:''}
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem">
          <div>
            <div class="card">
              <div class="card-header-row"><div class="card-icon bg-blue">${ICONS.edit}</div><div><h3>Configurazione</h3></div></div>
              <div class="form-group"><label>Nome Cliente / Brand</label><input type="text" class="tool-input" value="${ps.clientName}" oninput="App.presentationState.clientName=this.value" placeholder="Nome del cliente" /></div>
              <div class="form-group"><label>Mission / Tagline</label><input type="text" class="tool-input" value="${ps.mission}" oninput="App.presentationState.mission=this.value" placeholder="La mission del brand..." /></div>
            </div>
            <div class="card">
              <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.checkCircle}</div><div><h3>Selezione Report</h3><p class="card-desc">Scegli quali analisi includere</p></div></div>
              ${reportToggles}
            </div>
            <div class="card">
              <div class="card-header-row"><div class="card-icon bg-green">${ICONS.presentation}</div><div><h3>Esporta</h3></div></div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
                <div class="export-card"><h4>PDF (A4)</h4><p>Report impaginato per stampa professionale.</p><button class="btn btn-primary btn-sm btn-block" onclick="App.exportPDF()" ${!hasData?'disabled':''}>Esporta PDF</button></div>
                <div class="export-card"><h4>Mini Sito</h4><p>Versione web interattiva del report.</p><button class="btn btn-dark btn-sm btn-block" onclick="App.openMiniSite()" ${!hasData?'disabled':''}>Apri Mini Sito</button></div>
              </div>
            </div>
          </div>
          <div>
            <div class="card" style="min-height:300px">
              <div class="card-header-row"><div class="card-icon bg-orange">${ICONS.eye}</div><div><h3>Anteprima Rapida</h3></div></div>
              <div class="pres-preview-mini">
                <div class="pres-cover-mini">
                  <div class="pres-cover-mini-logo">${ICONS.globe}</div>
                  <h2>${ps.clientName || cd.nome || 'Nome Cliente'}</h2>
                  <p>${ps.mission || 'La tua mission...'}</p>
                  <div class="pres-cover-mini-tags">${reports.filter(r=>ps.selectedReports[r.key]).map(r=>`<span>${r.label}</span>`).join('')}</div>
                </div>
                ${reports.filter(r=>ps.selectedReports[r.key]).map(r=>{
                  const data = this.aiResults[r.aiKey];
                  return `<div class="pres-mini-section"><div class="pres-mini-section-title">${r.icon} ${r.label}</div><div class="pres-mini-section-status">${data?'Dati disponibili':'Nessun dato'}</div></div>`;
                }).join('')}
                ${!reports.some(r=>ps.selectedReports[r.key])?'<div class="empty-state" style="margin-top:1rem">Seleziona almeno un report.</div>':''}
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },

  pageGeoAudit() {
    const r = this.aiResults['geo-audit'];
    const loading = this.aiLoading['geo-audit'];
    const err = this.aiError['geo-audit'];
    const LS = `<div class="loading-spinner"><div class="spinner"></div><span>Analisi in corso...</span></div>`;
    return `
      <div class="fade-in">
        <div class="report-hero-card fade-in fade-in-delay-1">
          <div class="report-hero-gradient gradient-blue-purple"></div>
          <div class="report-hero-icon">${ICONS.globe}</div>
          <h2 class="report-hero-title">GEO Audit</h2>
          <p class="report-hero-desc">Analisi profonda della percezione del brand da parte dei motori AI.</p>
          <div class="report-hero-input">
            <input type="text" class="tool-input report-input" id="geo-domain" placeholder="https://iltuosito.it/" />
            <button class="btn btn-dark btn-block report-btn" onclick="App.runGeoAudit()" ${loading?'disabled':''}>${loading?`<span class="btn-spinner"></span>`:'Lancia Audit'}</button>
          </div>
          ${err?`<div class="error-banner">${err}</div>`:''}
          ${loading?`<div class="report-loading-bar"><div class="report-loading-progress"></div></div>`:''}
        </div>
        <div class="card fade-in fade-in-delay-2">
          <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.target}</div><div><h3>Identit&agrave; del Brand</h3><p class="card-desc">Mission, Vision e Valori percepiti dai motori AI</p></div></div>
          ${loading?LS:`<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div class="metric-card"><div class="metric-label">Mission</div><div class="metric-value-sm">${r?.mission||'<span class="empty-state">In attesa...</span>'}</div></div>
            <div class="metric-card"><div class="metric-label">Vision</div><div class="metric-value-sm">${r?.vision||'<span class="empty-state">In attesa...</span>'}</div></div>
            <div class="metric-card"><div class="metric-label">Valori</div><div class="metric-value-sm">${r?.valori||'<span class="empty-state">In attesa...</span>'}</div></div>
          </div>`}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div class="card fade-in fade-in-delay-3">
            <div class="card-header-row"><div class="card-icon bg-green">${ICONS.checkCircle}</div><div><h3>Sentiment Analysis</h3></div></div>
            ${loading?LS:`<div style="text-align:center;padding:1rem">
              <div class="score-circle ${r?(r.sentimentScore>60?'score-good':r.sentimentScore>30?'score-warn':'score-bad'):''}">${r?.sentimentScore??'--'}</div>
              <div style="font-size:0.85rem;color:var(--text-light);margin-top:0.5rem">Punteggio 0-100</div>
              <div style="margin-top:1rem;height:8px;background:var(--border);border-radius:4px;overflow:hidden"><div style="height:100%;width:${r?.sentimentScore||0}%;background:var(--gradient-bar);border-radius:4px;transition:width 0.5s"></div></div>
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:0.5rem">
              <div><div style="font-size:0.75rem;color:var(--success)">Keyword Positive</div><div style="font-size:0.8rem">${r?.keywordPositive?.join(', ')||'--'}</div></div>
              <div style="text-align:right"><div style="font-size:0.75rem;color:var(--danger)">Keyword Negative</div><div style="font-size:0.8rem">${r?.keywordNegative?.join(', ')||'--'}</div></div>
            </div>`}
          </div>
          <div class="card fade-in fade-in-delay-3">
            <div class="card-header-row"><div class="card-icon bg-orange">${ICONS.compass}</div><div><h3>Rilevanza Locale / Internazionale</h3></div></div>
            ${loading?LS:`<div style="padding:0.5rem">
              <div class="relevance-row"><span>Copertura Locale</span><span class="status-badge ${r?'status-active':''}">${r?.coperturaLocale||'IN ATTESA'}</span></div>
              <div class="relevance-row"><span>Presenza Internazionale</span><span class="status-badge ${r?'status-active':''}">${r?.presenzaInternazionale||'IN ATTESA'}</span></div>
            </div>`}
          </div>
        </div>
        <div class="card fade-in">
          <div class="card-header-row"><div class="card-icon bg-red">${ICONS.eye}</div><div><h3>Competitor Identificati</h3><p class="card-desc">Rivali diretti identificati dall'AI</p></div></div>
          ${loading?LS:(r?.competitors?`<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">${r.competitors.map(c=>`<div class="metric-card" style="text-align:center"><div style="font-weight:600">${c.nome}</div><div style="font-size:0.8rem;color:var(--text-light)">${c.settore}</div></div>`).join('')}</div>`:'<div class="empty-state">Lancia l\'audit per identificare i competitor.</div>')}
        </div>
        <div class="card fade-in">
          <div class="card-header-row"><div class="card-icon bg-teal">${ICONS.user}</div><div><h3>Buyer Personas</h3><p class="card-desc">3 profili target generati dall'analisi</p></div></div>
          ${loading?LS:`<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            ${(r?.personas||[{nome:'Persona 1'},{nome:'Persona 2'},{nome:'Persona 3'}]).map(p=>`
              <div class="metric-card" style="text-align:center">
                <div class="persona-avatar">${ICONS.user}</div>
                <div style="font-weight:600;margin-bottom:0.25rem">${p.nome}</div>
                ${p.eta?`<div style="font-size:0.8rem;color:var(--text-light)">${p.eta} &bull; ${p.ruolo||''}</div>`:''}
                <div style="font-size:0.85rem;color:var(--text-light);margin-top:0.25rem">${p.descrizione||'In attesa...'}</div>
              </div>`).join('')}
          </div>`}
        </div>
        <div class="card fade-in">
          <div class="card-header-row"><div class="card-icon bg-gray">${ICONS.checkCircle}</div><div><h3>Output &amp; Status</h3></div></div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
            ${['Identit\u00e0','Sentiment','Rilevanza','Competitor','Personas'].map(s=>`<span class="status-pill ${r?'status-pill-done':''}">${s}: ${r?'COMPLETATO':'IN ATTESA'}</span>`).join('')}
          </div>
          ${r?`<div style="margin-top:1rem;text-align:right"><button class="btn btn-primary btn-sm" onclick="App.addToPresentation('geo-audit')">${ICONS.presentation} Aggiungi alla Presentazione</button></div>`:''}
        </div>
      </div>`;
  },

  pageAeoAudit() {
    const r = this.aiResults['aeo-audit'];
    const loading = this.aiLoading['aeo-audit'];
    const err = this.aiError['aeo-audit'];
    const LS = `<div class="loading-spinner"><div class="spinner"></div><span>Analisi multi-engine...</span></div>`;
    return `
      <div class="fade-in">
        <div class="report-hero-card fade-in fade-in-delay-1">
          <div class="report-hero-gradient gradient-green-teal"></div>
          <div class="report-hero-icon">${ICONS.target}</div>
          <h2 class="report-hero-title">AEO Audit <span class="badge pro" style="font-size:0.6rem;vertical-align:middle">PRO</span></h2>
          <p class="report-hero-desc">Simulazione multi-motore per analizzare la percezione del brand.</p>
          <div class="report-hero-input">
            <input type="text" class="tool-input report-input" id="aeo-domain" placeholder="https://iltuosito.it/" />
            <button class="btn btn-dark btn-block report-btn" onclick="App.runAeoAudit()" ${loading?'disabled':''}>${loading?`<span class="btn-spinner"></span>`:'Lancia AEO Audit'}</button>
          </div>
          ${err?`<div class="error-banner">${err}</div>`:''}
          ${loading?`<div class="report-loading-bar"><div class="report-loading-progress"></div></div>`:''}
        </div>
        <div class="card fade-in fade-in-delay-2">
          <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.eye}</div><div><h3>Simulazione Multi-Engine</h3><p class="card-desc">Confronto risposte ChatGPT, Perplexity e Gemini</p></div></div>
          ${loading?LS:`<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            ${[{name:'ChatGPT',key:'chatgpt',color:'#10a37f'},{name:'Perplexity',key:'perplexity',color:'#20808D'},{name:'Gemini',key:'gemini',color:'#4285F4'}].map(e=>`
              <div class="engine-card"><div class="engine-header" style="background:${e.color}">${e.name}</div>
              <div class="engine-body">${r?.engines?.[e.key]||'<span class="empty-state">In attesa...</span>'}</div></div>`).join('')}
          </div>`}
        </div>
        <div class="card fade-in fade-in-delay-3">
          <div class="card-header-row"><div class="card-icon bg-green">${ICONS.checkCircle}</div><div><h3>Confronto Metriche</h3></div></div>
          <table class="data-table"><thead><tr><th style="text-align:left">Metrica</th><th style="text-align:center">ChatGPT</th><th style="text-align:center">Perplexity</th><th style="text-align:center">Gemini</th></tr></thead>
          <tbody>${['visibilita','accuratezza','coerenza'].map(m=>{const l={visibilita:'Visibilit\u00e0',accuratezza:'Accuratezza',coerenza:'Coerenza'};return`<tr><td style="font-weight:500">${l[m]}</td><td style="text-align:center">${r?.metriche?.[m]?.chatgpt!==undefined?`<span class="score-inline">${r.metriche[m].chatgpt}</span>`:'--'}</td><td style="text-align:center">${r?.metriche?.[m]?.perplexity!==undefined?`<span class="score-inline">${r.metriche[m].perplexity}</span>`:'--'}</td><td style="text-align:center">${r?.metriche?.[m]?.gemini!==undefined?`<span class="score-inline">${r.metriche[m].gemini}</span>`:'--'}</td></tr>`;}).join('')}</tbody></table>
        </div>
        <div class="card fade-in">
          <div class="card-header-row"><div class="card-icon bg-orange">${ICONS.compass}</div><div><h3>Piano Strategico</h3></div></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
            <div><h4 style="margin-bottom:0.75rem">Roadmap Trimestrale</h4>
              ${(r?.roadmap||[{quarter:'Q1',titolo:'Fondamenta',azioni:''},{quarter:'Q2',titolo:'Crescita',azioni:''},{quarter:'Q3',titolo:'Ottimizzazione',azioni:''},{quarter:'Q4',titolo:'Consolidamento',azioni:''}]).map(q=>`<div class="roadmap-item"><div class="roadmap-quarter">${q.quarter}</div><div><div style="font-weight:600;font-size:0.85rem">${q.titolo}</div><div style="font-size:0.8rem;color:var(--text-light)">${q.azioni||'In attesa...'}</div></div></div>`).join('')}
            </div>
            <div><h4 style="margin-bottom:0.75rem">Suggerimenti Schema.org</h4>
              <div class="metric-card"><div style="font-size:0.85rem">${r?.schemaOrg||'<span class="empty-state">Lancia l\'audit per suggerimenti Schema.org.</span>'}</div></div>
            </div>
          </div>
          ${r?`<div style="margin-top:1.5rem;text-align:right"><button class="btn btn-primary btn-sm" onclick="App.addToPresentation('aeo-audit')">${ICONS.presentation} Aggiungi alla Presentazione</button></div>`:''}
        </div>
      </div>`;
  },

  pageAiPromptTracker() {
    const r = this.aiResults['prompt-tracker'];
    const loading = this.aiLoading['prompt-tracker'];
    const err = this.aiError['prompt-tracker'];
    const LS = `<div class="loading-spinner"><div class="spinner"></div><span>Tracking in corso...</span></div>`;
    return `
      <div class="fade-in">
        <div class="report-hero-card fade-in fade-in-delay-1">
          <div class="report-hero-gradient gradient-yellow-orange"></div>
          <div class="report-hero-icon">${ICONS.zap}</div>
          <h2 class="report-hero-title">AI Prompt Tracker</h2>
          <p class="report-hero-desc">Verifica se il brand &egrave; citato come fonte autorevole nelle risposte AI.</p>
          <div class="report-hero-input">
            <input type="text" class="tool-input report-input" id="prompt-tracker-domain" placeholder="https://iltuosito.it/" />
            <button class="btn btn-dark btn-block report-btn" onclick="App.runPromptTracker()" ${loading?'disabled':''}>${loading?`<span class="btn-spinner"></span>`:'Avvia Tracking'}</button>
          </div>
          ${err?`<div class="error-banner">${err}</div>`:''}
          ${loading?`<div class="report-loading-bar"><div class="report-loading-progress"></div></div>`:''}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div class="card fade-in fade-in-delay-2">
            <div class="card-header-row"><div class="card-icon bg-blue">${ICONS.checkCircle}</div><div><h3>Citation Score</h3></div></div>
            ${loading?LS:`<div style="text-align:center;padding:1.5rem">
              <div class="score-circle ${r?(r.citationScore>60?'score-good':r.citationScore>30?'score-warn':'score-bad'):''}">${r?.citationScore??'--'}</div>
              <div style="font-size:0.9rem;color:var(--text-light);margin-top:0.5rem">Frequenza e qualit&agrave; citazioni</div>
              <div style="margin-top:1rem;height:8px;background:var(--border);border-radius:4px;overflow:hidden"><div style="height:100%;width:${r?.citationScore||0}%;background:var(--gradient-bar);border-radius:4px"></div></div>
            </div>`}
          </div>
          <div class="card fade-in fade-in-delay-2">
            <div class="card-header-row"><div class="card-icon bg-green">${ICONS.eye}</div><div><h3>Sentiment Citazione</h3></div></div>
            ${loading?LS:`<div style="text-align:center;padding:1.5rem">
              <div style="font-size:1.5rem;font-weight:600;color:${r?.sentiment==='Positivo'?'var(--success)':r?.sentiment==='Negativo'?'var(--danger)':'var(--text-light)'}">${r?.sentiment||'--'}</div>
              <div style="font-size:0.85rem;color:var(--text-light);margin-top:0.5rem">${r?.sentimentDetail||'Analisi del tono delle menzioni'}</div>
            </div>`}
          </div>
        </div>
        <div class="card fade-in fade-in-delay-3">
          <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.search}</div><div><h3>Query Generate &amp; Citazioni</h3><p class="card-desc">Query settoriali testate per la citazione del brand</p></div></div>
          ${loading?LS:`<table class="data-table"><thead><tr><th style="text-align:left">#</th><th style="text-align:left">Query Generata</th><th style="text-align:center">Stato</th><th style="text-align:center">Sentiment</th></tr></thead>
          <tbody>${r?.queries?.length?r.queries.map((q,i)=>`<tr><td>${i+1}</td><td>${q.query}</td><td style="text-align:center"><span class="status-dot ${q.citato?'dot-green':'dot-red'}"></span>${q.citato?'Citato':'Non citato'}</td><td style="text-align:center"><span class="sentiment-tag sentiment-${q.sentiment}">${q.sentiment}</span></td></tr>`).join(''):'<tr><td colspan="4" style="padding:2rem;text-align:center;color:var(--text-light)">Lancia il tracking per visualizzare i risultati.</td></tr>'}</tbody></table>`}
          ${r?`<div style="margin-top:1rem;text-align:right"><button class="btn btn-primary btn-sm" onclick="App.addToPresentation('prompt-tracker')">${ICONS.presentation} Aggiungi alla Presentazione</button></div>`:''}
        </div>
      </div>`;
  },

  pageAiOverview() {
    const r = this.aiResults['ai-overview'];
    const loading = this.aiLoading['ai-overview'];
    const err = this.aiError['ai-overview'];
    const LS = `<div class="loading-spinner"><div class="spinner"></div><span>Analisi in corso...</span></div>`;
    return `
      <div class="fade-in">
        <div class="report-hero-card fade-in fade-in-delay-1">
          <div class="report-hero-gradient gradient-purple-pink"></div>
          <div class="report-hero-icon">${ICONS.eye}</div>
          <h2 class="report-hero-title">AI Overview Tracker (SGE)</h2>
          <p class="report-hero-desc">Ottimizzazione per gli snapshot AI di Google.</p>
          <div class="report-hero-input">
            <input type="text" class="tool-input report-input" id="aio-domain" placeholder="https://iltuosito.it/" />
            <button class="btn btn-dark btn-block report-btn" onclick="App.runAiOverview()" ${loading?'disabled':''}>${loading?`<span class="btn-spinner"></span>`:'Analizza AI Overview'}</button>
          </div>
          ${err?`<div class="error-banner">${err}</div>`:''}
          ${loading?`<div class="report-loading-bar"><div class="report-loading-progress"></div></div>`:''}
        </div>
        <div class="card fade-in fade-in-delay-2">
          <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.search}</div><div><h3>Analisi Keyword &amp; Win Probability</h3><p class="card-desc">Keyword che attivano risposte AI</p></div></div>
          ${loading?LS:`<table class="data-table"><thead><tr><th style="text-align:left">Keyword Strategica</th><th style="text-align:center">Ranking</th><th style="text-align:center">Win Prob.</th><th style="text-align:center">Volume</th></tr></thead>
          <tbody>${r?.keywords?.length?r.keywords.map(k=>`<tr><td style="font-weight:500">${k.keyword}</td><td style="text-align:center"><strong>${k.ranking||'-'}</strong></td><td style="text-align:center"><div style="display:flex;align-items:center;justify-content:center;gap:0.5rem"><div style="width:60px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden"><div style="width:${k.winProbability}%;height:100%;background:${k.winProbability>70?'#059669':k.winProbability>40?'#d97706':'#dc2626'};border-radius:3px"></div></div><span style="font-size:0.8rem">${k.winProbability}%</span></div></td><td style="text-align:center"><span class="volume-badge volume-${(k.volume||'').toLowerCase()}">${k.volume}</span></td></tr>`).join(''):'<tr><td colspan="4" style="padding:2rem;text-align:center;color:var(--text-light)">Lancia l\'analisi per le keyword.</td></tr>'}</tbody></table>`}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div class="card fade-in fade-in-delay-3">
            <div class="card-header-row"><div class="card-icon bg-orange">${ICONS.zap}</div><div><h3>Content Gap</h3><p class="card-desc">Elementi mancanti per la visibilit&agrave; AI</p></div></div>
            ${loading?LS:(r?.contentGaps?.length?`<ul class="gap-list">${r.contentGaps.map(g=>`<li><span class="gap-dot"></span>${g}</li>`).join('')}</ul>`:'<div class="empty-state">Lancia l\'analisi per i content gap.</div>')}
          </div>
          <div class="card fade-in fade-in-delay-3">
            <div class="card-header-row"><div class="card-icon bg-green">${ICONS.checkCircle}</div><div><h3>Actionable Fixes</h3><p class="card-desc">Suggerimenti pratici di ottimizzazione</p></div></div>
            ${loading?LS:(r?.fixes?.length?`<ul class="fix-list">${r.fixes.map((f,i)=>`<li><span class="fix-number">${i+1}</span>${f}</li>`).join('')}</ul>`:'<div class="empty-state">Lancia l\'analisi per suggerimenti.</div>')}
          </div>
        </div>
        ${r?`<div style="text-align:right;margin-top:0.5rem"><button class="btn btn-primary btn-sm" onclick="App.addToPresentation('ai-overview')">${ICONS.presentation} Aggiungi alla Presentazione</button></div>`:''}
      </div>`;
  },

  pageVectorCheck() {
    const r = this.aiResults['vector-check'];
    const loading = this.aiLoading['vector-check'];
    const err = this.aiError['vector-check'];
    const LS = `<div class="loading-spinner"><div class="spinner"></div><span>Analisi vettoriale...</span></div>`;
    return `
      <div class="fade-in">
        <div class="report-hero-card fade-in fade-in-delay-1">
          <div class="report-hero-gradient gradient-teal-blue"></div>
          <div class="report-hero-icon">${ICONS.checkCircle}</div>
          <h2 class="report-hero-title">Vector Check</h2>
          <p class="report-hero-desc">Analisi tecnica degli embeddings e della rilevanza vettoriale.</p>
          <div class="report-hero-input">
            <input type="text" class="tool-input report-input" id="vc-url" placeholder="https://www.esempio.it/pagina" />
            <input type="text" class="tool-input report-input" id="vc-keyword" style="margin-top:0.5rem" placeholder="Keyword target: es. consulenza digitale" />
            <button class="btn btn-dark btn-block report-btn" onclick="App.runVectorCheck()" ${loading?'disabled':''}>${loading?`<span class="btn-spinner"></span>`:'Avvia Vector Check'}</button>
          </div>
          ${err?`<div class="error-banner">${err}</div>`:''}
          ${loading?`<div class="report-loading-bar"><div class="report-loading-progress"></div></div>`:''}
        </div>
        <div class="card fade-in fade-in-delay-2">
          <div class="card-header-row"><div class="card-icon bg-blue">${ICONS.target}</div><div><h3>Semantic Relevance Score</h3></div></div>
          ${loading?LS:`<div style="text-align:center;padding:1.5rem">
            <div class="score-circle ${r?(r.relevanceScore>60?'score-good':r.relevanceScore>30?'score-warn':'score-bad'):''}">${r?.relevanceScore??'--'}</div>
            <div style="font-size:0.9rem;color:var(--text-light);margin-top:0.5rem">Vicinanza semantica contenuto-query</div>
            <div style="margin-top:1.5rem;height:12px;background:var(--border);border-radius:6px;overflow:hidden;max-width:400px;margin:1rem auto 0">
              <div style="height:100%;width:${r?.relevanceScore||0}%;background:var(--gradient-bar);border-radius:6px;transition:width 0.5s"></div>
            </div>
          </div>`}
        </div>
        <div class="card fade-in fade-in-delay-3">
          <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.globe}</div><div><h3>Analisi Vettoriale</h3><p class="card-desc">Simulazione indicizzazione vettoriale</p></div></div>
          ${loading?LS:`<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div class="metric-card" style="text-align:center"><div class="metric-label">Densit&agrave; Semantica</div><div class="metric-value">${r?.semanticDensity||'--'}</div></div>
            <div class="metric-card" style="text-align:center"><div class="metric-label">Embedding Distance</div><div class="metric-value">${r?.embeddingDistance??'--'}</div></div>
            <div class="metric-card" style="text-align:center"><div class="metric-label">Cluster Match</div><div class="metric-value">${r?.clusterMatch||'--'}</div></div>
          </div>
          ${r?.topTerms?`<div style="margin-top:1rem"><div class="metric-label" style="margin-bottom:0.5rem">Top Terms</div><div style="display:flex;flex-wrap:wrap;gap:0.5rem">${r.topTerms.map(t=>`<span class="term-tag">${t}</span>`).join('')}</div></div>`:''}
          ${r?.missingTerms?`<div style="margin-top:1rem"><div class="metric-label" style="margin-bottom:0.5rem">Termini Mancanti</div><div style="display:flex;flex-wrap:wrap;gap:0.5rem">${r.missingTerms.map(t=>`<span class="term-tag term-missing">${t}</span>`).join('')}</div></div>`:''}`}
        </div>
        <div class="card fade-in">
          <div class="card-header-row"><div class="card-icon bg-green">${ICONS.checkCircle}</div><div><h3>Consigli di Ottimizzazione</h3><p class="card-desc">Migliorare la densit&agrave; semantica</p></div></div>
          ${loading?LS:(r?.consigli?.length?`<ul class="fix-list">${r.consigli.map((c,i)=>`<li><span class="fix-number">${i+1}</span>${c}</li>`).join('')}</ul>`:'<div class="empty-state">Avvia il Vector Check per consigli.</div>')}
        </div>
        ${r?`<div style="text-align:right;margin-top:0.5rem"><button class="btn btn-primary btn-sm" onclick="App.addToPresentation('vector-check')">${ICONS.presentation} Aggiungi alla Presentazione</button></div>`:''}
      </div>`;
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
            <button class="btn btn-primary" onclick="App.generateWizardContent()">Genera Testo</button>
            <button class="btn btn-outline" onclick="App.generateWizardContent()">Genera Variante</button>
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
    const loading = this.aiLoading['generate-content'];
    const socialState = this['_social_' + platform] || {};

    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${platformIcon} ${platformLabel}</h1>
          <p>Genera contenuti ottimizzati per ${platformLabel} con intelligenza artificiale.</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div>
            <div class="card">
              <div class="card-header-row"><div class="card-icon bg-blue">${ICONS.edit}</div><div><h3>Configurazione Post</h3></div></div>
              <div class="form-group"><label>Argomento / Topic</label><input type="text" class="tool-input" id="social-topic-${platform}" placeholder="Es. Come aumentare l'engagement" /></div>
              <div class="form-group"><label>Contenuto / Contesto</label><textarea class="tool-textarea" id="social-context-${platform}" placeholder="Descrivi il contenuto..."></textarea></div>
              <div class="form-group"><label>Tono</label><select class="tool-input" id="social-tone-${platform}">${tones.map(t=>`<option>${t}</option>`).join('')}</select></div>
              <div class="form-group"><label>Storytelling Framework</label>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                  ${frameworks.map(f=>`<button class="btn ${socialState.framework===f.id?'btn-primary':'btn-outline'} btn-sm" onclick="App['_social_${platform}']={...(App['_social_${platform}']||{}),framework:'${f.id}'};App.renderApp()">${f.label}</button>`).join('')}
                </div>
              </div>
              <button class="btn btn-primary btn-block" onclick="App.generateSocialPost('${platform}','${platformLabel}')" ${loading?'disabled':''}>${loading?'<span class="btn-spinner"></span> Generazione...':'Genera Post '+platformLabel}</button>
            </div>
          </div>
          <div>
            <div class="card" style="min-height:400px">
              <div class="card-header-row"><div class="card-icon bg-green">${ICONS.checkCircle}</div><div><h3>Output Generato</h3></div></div>
              <textarea class="tool-textarea" style="min-height:250px" id="social-output-${platform}" placeholder="Il post generato apparir\u00e0 qui...">${this.aiResults['social-'+platform]||''}</textarea>
              <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
                <button class="btn btn-outline btn-sm" onclick="App.generateSocialPost('${platform}','${platformLabel}')">Genera Variante</button>
                <button class="btn btn-outline btn-sm" onclick="App.copyToClipboard(document.getElementById('social-output-${platform}').value)">Copia</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
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
    const keyStatus = (provider) => {
      const v = this.aiResults['verify-' + provider];
      const l = this.aiLoading['verify-' + provider];
      if (l) return '<span class="key-status key-loading"><span class="btn-spinner"></span></span>';
      if (v === true) return '<span class="key-status key-valid">Verificata</span>';
      if (v === false) return '<span class="key-status key-invalid">Non valida</span>';
      return '';
    };
    return `
      <div class="fade-in">
        <div class="dash-header">
          <h1>${ICONS.settings} Impostazioni &amp; Configurazione</h1>
          <p>Hub centrale per la gestione tecnica, economica e dei dati dell'applicazione.</p>
        </div>
        <div class="card fade-in fade-in-delay-1">
          <div class="card-header-row"><div class="card-icon bg-blue">${ICONS.settings}</div><div><h3>Gestione API Key (Multi-Provider)</h3><p class="card-desc">Le chiavi sono salvate nel localStorage del browser</p></div></div>
          <div class="api-key-group">
            <div class="api-key-header"><label>Google Gemini <span style="color:var(--danger);font-size:0.8rem">(Obbligatorio)</span></label>${keyStatus('gemini')}</div>
            <p class="api-key-desc">Motore principale per tutte le analisi e generazioni.</p>
            <div style="display:flex;gap:0.5rem">
              <input type="password" class="tool-input" style="margin-bottom:0;flex:1" value="${ss.geminiKey}" oninput="App.settingsState.geminiKey=this.value;App.saveToStorage()" placeholder="Inserisci API Key Google Gemini" />
              <button class="btn btn-outline btn-sm" onclick="App.verifyApiKey('gemini')" ${this.aiLoading['verify-gemini']?'disabled':''}>Verifica</button>
            </div>
          </div>
          <div class="api-key-group">
            <div class="api-key-header"><label>OpenAI <span style="color:var(--text-light);font-size:0.8rem">(Opzionale)</span></label>${keyStatus('openai')}</div>
            <p class="api-key-desc">Usato nel modulo AEO per simulare risposte ChatGPT reali.</p>
            <div style="display:flex;gap:0.5rem">
              <input type="password" class="tool-input" style="margin-bottom:0;flex:1" value="${ss.openaiKey}" oninput="App.settingsState.openaiKey=this.value;App.saveToStorage()" placeholder="Inserisci API Key OpenAI" />
              <button class="btn btn-outline btn-sm" onclick="App.verifyApiKey('openai')" ${this.aiLoading['verify-openai']?'disabled':''}>Verifica</button>
            </div>
          </div>
          <div class="api-key-group">
            <div class="api-key-header"><label>Perplexity <span style="color:var(--text-light);font-size:0.8rem">(Opzionale)</span></label>${keyStatus('perplexity')}</div>
            <p class="api-key-desc">Usato nel modulo AEO e GEO per dati live dal web.</p>
            <div style="display:flex;gap:0.5rem">
              <input type="password" class="tool-input" style="margin-bottom:0;flex:1" value="${ss.perplexityKey}" oninput="App.settingsState.perplexityKey=this.value;App.saveToStorage()" placeholder="Inserisci API Key Perplexity" />
              <button class="btn btn-outline btn-sm" onclick="App.verifyApiKey('perplexity')" ${this.aiLoading['verify-perplexity']?'disabled':''}>Verifica</button>
            </div>
          </div>
        </div>
        <div class="card fade-in fade-in-delay-2">
          <div class="card-header-row"><div class="card-icon bg-green">${ICONS.compass}</div><div><h3>Configurazione Costi (FinOps)</h3><p class="card-desc">Stima costi utilizzo API in tempo reale</p></div></div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div class="form-group"><label>Costo per 1M Token Input (&euro;)</label><input type="number" class="tool-input" value="${ss.costInput}" oninput="App.settingsState.costInput=this.value" step="0.01" min="0" /></div>
            <div class="form-group"><label>Costo per 1M Token Output (&euro;)</label><input type="number" class="tool-input" value="${ss.costOutput}" oninput="App.settingsState.costOutput=this.value" step="0.01" min="0" /></div>
            <div class="form-group"><label>Costo per Ricerca (&euro;)</label><input type="number" class="tool-input" value="${ss.costSearch}" oninput="App.settingsState.costSearch=this.value" step="0.01" min="0" /></div>
          </div>
          <div class="finops-total">
            <div><div class="finops-label">Spesa Totale Sessione</div><div class="finops-value">&euro;${ss.totalSpent.toFixed(4)}</div></div>
            <button class="btn btn-outline btn-sm" onclick="App.resetSpending()">Reset Contatore</button>
          </div>
        </div>
        <div class="card fade-in fade-in-delay-3">
          <div class="card-header-row"><div class="card-icon bg-purple">${ICONS.edit}</div><div><h3>Knowledge Base &amp; Data Management</h3><p class="card-desc">Gestisci la portabilit&agrave; dei dati</p></div></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
            <div class="export-card"><h4>Esporta Progetto</h4><p>Scarica .json con profilo, storico e impostazioni (chiavi escluse).</p><button class="btn btn-primary btn-sm" onclick="App.exportProject()">Esporta .JSON</button></div>
            <div class="export-card"><h4>Importa Progetto</h4><p>Carica un backup per ripristinare lo stato.</p><button class="btn btn-outline btn-sm" onclick="App.importProject()">Importa File</button></div>
          </div>
          <div class="form-group"><label>Knowledge Base Editor</label>
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:0.5rem">Informazioni iniettate come contesto in ogni prompt AI.</p>
            <textarea class="tool-textarea" style="min-height:200px" oninput="App.clientData.knowledgeBase=this.value" placeholder="Incolla qui note, interviste, testi...">${this.clientData.knowledgeBase}</textarea>
          </div>
        </div>
      </div>`;
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
