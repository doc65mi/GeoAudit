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

  validPages: ['scheda-cliente','client-presentation','geo-audit','aeo-audit','ai-prompt-tracker','ai-overview','vector-check','visual-studio','wizard-post','linkedin','facebook','instagram','impostazioni'],

  async init() {
    const hash = window.location.hash.replace('#','');
    if (this.validPages.includes(hash)) this.currentPage = hash;

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

  pageSchedaCliente() {
    const name = this.user.firstName || this.user.email || "Utente";
    const plan = this.subscription?.plan || "free";
    const planLabel = plan === "free" ? "Free" : plan === "pro" ? "Professional" : "Enterprise";
    return `
      <div class="dash-header fade-in">
        <h1>Benvenuto, ${name}!</h1>
        <p>Ecco il riepilogo della tua attivit&agrave; su GEOAudit</p>
      </div>
      <div class="stats-grid fade-in fade-in-delay-1">
        <div class="stat-card"><div class="stat-label">Audit Completati</div><div class="stat-value blue">0</div></div>
        <div class="stat-card"><div class="stat-label">Report Generati</div><div class="stat-value green">0</div></div>
        <div class="stat-card"><div class="stat-label">Contenuti Creati</div><div class="stat-value orange">0</div></div>
      </div>
      <div class="card fade-in fade-in-delay-2">
        <h3>Il Tuo Abbonamento</h3>
        <div class="plan-banner">
          <div><div class="plan-name">Piano ${planLabel}</div></div>
          <div class="plan-badge">&bull; Attivo</div>
        </div>
        ${plan === 'free' ? `<div style="margin-top:1rem"><button class="btn btn-primary btn-sm" onclick="App.navigate('impostazioni')">Aggiorna Piano</button></div>` : ''}
      </div>
      <div class="card fade-in fade-in-delay-3">
        <h3>Attivit&agrave; Recente</h3>
        <div class="empty-state">Nessuna attivit&agrave; recente. Inizia lanciando il tuo primo audit!</div>
      </div>
    `;
  },

  pageClientPresentation() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.presentation}</div>
          <h2>Client Presentation</h2>
          <p class="tool-desc">Genera presentazioni professionali per i tuoi clienti basate sui dati di audit e analisi AI.</p>
          <input type="text" class="tool-input" placeholder="Nome del cliente" />
          <input type="text" class="tool-input" placeholder="URL del sito web" />
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Genera Presentazione</button>
        </div>
      </div>
    `;
  },

  pageGeoAudit() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.globe}</div>
          <h2>GEO Audit</h2>
          <p class="tool-desc">Analisi profonda della percezione del brand da parte dei motori AI.</p>
          <input type="text" class="tool-input" id="geo-url" placeholder="iltuosito.it" />
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Lancia Audit</button>
        </div>
      </div>
    `;
  },

  pageAeoAudit() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.target}</div>
          <h2>AEO Audit <span class="badge pro" style="font-size:0.7rem;vertical-align:middle">PRO</span></h2>
          <p class="tool-desc">Answer Engine Optimization: analizza come il tuo contenuto viene utilizzato nelle risposte AI.</p>
          <input type="text" class="tool-input" placeholder="iltuosito.it" />
          <input type="text" class="tool-input" placeholder="Keyword principale" />
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Lancia AEO Audit</button>
        </div>
      </div>
    `;
  },

  pageAiPromptTracker() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.zap}</div>
          <h2>AI Prompt Tracker</h2>
          <p class="tool-desc">Monitora come il tuo brand viene menzionato nelle risposte dei motori AI.</p>
          <input type="text" class="tool-input" placeholder="Nome brand o dominio" />
          <input type="text" class="tool-input" placeholder="Keywords da monitorare (separate da virgola)" />
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Avvia Monitoraggio</button>
        </div>
      </div>
    `;
  },

  pageAiOverview() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.eye}</div>
          <h2>AI Overview</h2>
          <p class="tool-desc">Panoramica completa della presenza del tuo brand negli AI Overview di Google.</p>
          <input type="text" class="tool-input" placeholder="iltuosito.it" />
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Analizza AI Overview</button>
        </div>
      </div>
    `;
  },

  pageVectorCheck() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.checkCircle}</div>
          <h2>Vector Check</h2>
          <p class="tool-desc">Verifica la rappresentazione vettoriale del tuo brand nei database AI.</p>
          <input type="text" class="tool-input" placeholder="iltuosito.it o nome brand" />
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Verifica Vettori</button>
        </div>
      </div>
    `;
  },

  pageVisualStudio() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.palette}</div>
          <h2>Visual Studio</h2>
          <p class="tool-desc">Crea contenuti visivi professionali per il tuo brand con l'aiuto dell'intelligenza artificiale.</p>
          <textarea class="tool-textarea" placeholder="Descrivi l'immagine che vuoi creare..."></textarea>
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Genera Immagine</button>
        </div>
      </div>
    `;
  },

  pageWizardPost() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.edit}</div>
          <h2>Wizard Post</h2>
          <p class="tool-desc">Genera post ottimizzati per tutti i social media con un solo click.</p>
          <input type="text" class="tool-input" placeholder="Argomento del post" />
          <textarea class="tool-textarea" placeholder="Descrivi il contenuto che vuoi comunicare..."></textarea>
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Genera Post</button>
        </div>
      </div>
    `;
  },

  pageLinkedin() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.linkedin}</div>
          <h2>LinkedIn</h2>
          <p class="tool-desc">Crea post professionali ottimizzati per LinkedIn con AI.</p>
          <input type="text" class="tool-input" placeholder="Argomento" />
          <textarea class="tool-textarea" placeholder="Di cosa vuoi parlare nel tuo post LinkedIn?"></textarea>
          <select class="tool-input" style="margin-bottom:1rem"><option>Tono Professionale</option><option>Tono Informale</option><option>Tono Motivazionale</option></select>
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Genera Post LinkedIn</button>
        </div>
      </div>
    `;
  },

  pageFacebook() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.facebook}</div>
          <h2>Facebook</h2>
          <p class="tool-desc">Genera contenuti coinvolgenti per Facebook con intelligenza artificiale.</p>
          <input type="text" class="tool-input" placeholder="Argomento del post" />
          <textarea class="tool-textarea" placeholder="Descrivi il contenuto che vuoi pubblicare..."></textarea>
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Genera Post Facebook</button>
        </div>
      </div>
    `;
  },

  pageInstagram() {
    return `
      <div class="tool-page fade-in">
        <div class="tool-card">
          <div class="tool-icon">${ICONS.instagram}</div>
          <h2>Instagram</h2>
          <p class="tool-desc">Crea caption e hashtag ottimizzati per Instagram con AI.</p>
          <input type="text" class="tool-input" placeholder="Argomento" />
          <textarea class="tool-textarea" placeholder="Descrivi la tua immagine o il contenuto..."></textarea>
          <button class="btn btn-dark btn-block" onclick="alert('Funzionalit&agrave; in arrivo!')">Genera Caption Instagram</button>
        </div>
      </div>
    `;
  },

  pageImpostazioni() {
    const plan = this.subscription?.plan || "free";
    const planLabel = plan === "free" ? "Free" : plan === "pro" ? "Professional" : "Enterprise";
    const name = this.user.firstName || this.user.email || "Utente";

    return `
      <div class="fade-in">
        <div class="dash-header"><h1>Impostazioni</h1><p>Gestisci il tuo account e le preferenze</p></div>
        <div class="card">
          <h3>Profilo</h3>
          <div class="form-group">
            <label>Nome</label>
            <input type="text" value="${name}" disabled />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" value="${this.user.email || ''}" disabled />
          </div>
        </div>
        <div class="card">
          <h3>Abbonamento</h3>
          <div class="plan-banner" style="margin-bottom:1.5rem">
            <div><div class="plan-name">Piano ${planLabel}</div></div>
            <div class="plan-badge">&bull; Attivo</div>
          </div>
          <div class="pricing-grid" style="margin-top:1rem">
            ${this.plans.map(p => `
              <div class="pricing-card ${p.id === 'pro' ? 'popular' : ''} ${p.id === plan ? '' : ''}">
                ${p.id === 'pro' ? '<div class="pricing-badge">Pi&ugrave; Popolare</div>' : ''}
                ${p.id === plan ? '<div class="pricing-badge" style="background:var(--success)">Attuale</div>' : ''}
                <h3>${p.name}</h3>
                <div class="pricing-price">&euro;${p.price}<span>/mese</span></div>
                <ul class="pricing-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
                <button class="btn ${p.id === plan ? 'btn-ghost' : p.id === 'pro' ? 'btn-primary' : 'btn-outline'}"
                  ${p.id === plan ? 'disabled' : ''}
                  onclick="App.selectPlan('${p.id}')">
                  ${p.id === plan ? 'Piano Attuale' : p.price === 0 ? 'Downgrade' : 'Scegli Piano'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
