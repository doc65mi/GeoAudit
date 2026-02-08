const App = {
  user: null,
  subscription: null,
  plans: [],

  async init() {
    try {
      const res = await fetch("/api/auth/user", { credentials: "include" });
      if (res.ok) {
        this.user = await res.json();
        await this.loadSubscription();
        await this.loadPlans();
        this.renderDashboard();
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
    } catch (e) {
      console.error("Failed to load subscription:", e);
    }
  },

  async loadPlans() {
    try {
      const res = await fetch("/api/plans");
      if (res.ok) this.plans = await res.json();
    } catch (e) {
      console.error("Failed to load plans:", e);
    }
  },

  async selectPlan(planId) {
    if (!this.user) {
      window.location.href = "/api/login";
      return;
    }

    try {
      const res = await fetch("/api/subscription/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ plan: planId }),
      });

      if (res.ok) {
        this.subscription = await res.json();
        this.renderDashboard();
      } else if (res.status === 401) {
        window.location.href = "/api/login";
      }
    } catch (e) {
      console.error("Failed to select plan:", e);
    }
  },

  renderLanding() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <nav class="navbar">
        <a href="/" class="navbar-brand">GeoAudit</a>
        <ul class="navbar-links">
          <li><a href="#features">Funzionalità</a></li>
          <li><a href="#pricing">Piani</a></li>
        </ul>
        <div>
          <a href="/api/login" class="btn btn-primary btn-sm">Accedi</a>
        </div>
      </nav>

      <div class="landing">
        <section class="hero">
          <div class="hero-content fade-in">
            <h1>Audit Geografici <span>Intelligenti</span> per il Tuo Business</h1>
            <p>GeoAudit ti permette di analizzare, monitorare e ottimizzare le tue operazioni geografiche con strumenti professionali e report dettagliati.</p>
            <div class="hero-cta">
              <a href="/api/login" class="btn btn-primary btn-lg">Inizia Ora</a>
              <a href="#features" class="btn btn-outline btn-lg">Scopri di più</a>
            </div>
            <div class="trust-badges fade-in fade-in-delay-2">
              <span>Piano gratuito disponibile</span>
              <span>Nessuna carta richiesta</span>
            </div>
          </div>
          <div class="hero-visual fade-in fade-in-delay-1">
            <div class="hero-image-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
                <path d="M3 20h18" stroke-dasharray="2 2"/>
              </svg>
            </div>
          </div>
        </section>

        <section class="features" id="features">
          <h2 class="fade-in">Perché GeoAudit?</h2>
          <p class="fade-in fade-in-delay-1">Strumenti potenti per analisi geografiche professionali</p>
          <div class="features-grid">
            <div class="feature-card fade-in fade-in-delay-1">
              <div class="feature-icon">📍</div>
              <h3>Analisi Territoriale</h3>
              <p>Mappa e analizza le aree di interesse con strumenti di geolocalizzazione avanzati e dati aggiornati in tempo reale.</p>
            </div>
            <div class="feature-card fade-in fade-in-delay-2">
              <div class="feature-icon">📊</div>
              <h3>Report Dettagliati</h3>
              <p>Genera report completi con grafici, mappe interattive e dati statistici per prendere decisioni informate.</p>
            </div>
            <div class="feature-card fade-in fade-in-delay-3">
              <div class="feature-icon">🔒</div>
              <h3>Dati Sicuri</h3>
              <p>I tuoi dati sono protetti con crittografia avanzata e backup automatici. Privacy e sicurezza garantite.</p>
            </div>
          </div>
        </section>

        <section class="pricing" id="pricing">
          <h2 class="fade-in">Scegli il Piano Giusto</h2>
          <p class="fade-in fade-in-delay-1">Inizia gratuitamente, aggiorna quando vuoi</p>
          <div class="pricing-grid">
            ${this.plans.map((plan, i) => `
              <div class="pricing-card ${plan.id === 'pro' ? 'popular' : ''} fade-in fade-in-delay-${i+1}">
                ${plan.id === 'pro' ? '<div class="pricing-badge">Più Popolare</div>' : ''}
                <h3>${plan.name}</h3>
                <div class="pricing-price">€${plan.price}<span>/mese</span></div>
                <ul class="pricing-features">
                  ${plan.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <button class="btn ${plan.id === 'pro' ? 'btn-primary' : 'btn-outline'}" onclick="App.selectPlan('${plan.id}')">
                  ${plan.price === 0 ? 'Inizia Gratis' : 'Scegli Piano'}
                </button>
              </div>
            `).join('')}
          </div>
        </section>

        <footer class="footer">
          <p>&copy; ${new Date().getFullYear()} GeoAudit. Tutti i diritti riservati.</p>
        </footer>
      </div>
    `;
  },

  renderDashboard() {
    const app = document.getElementById("app");
    const name = this.user.firstName || this.user.email || "Utente";
    const plan = this.subscription?.plan || "free";
    const planLabel = plan === "free" ? "Free" : plan === "pro" ? "Professional" : "Enterprise";

    app.innerHTML = `
      <nav class="navbar">
        <a href="/" class="navbar-brand">GeoAudit</a>
        <ul class="navbar-links">
          <li><a href="#" onclick="App.showSection('dashboard')">Dashboard</a></li>
          <li><a href="#" onclick="App.showSection('plans')">Piani</a></li>
        </ul>
        <div class="navbar-user">
          ${this.user.profileImageUrl ? `<img src="${this.user.profileImageUrl}" alt="Avatar">` : ''}
          <span>${name}</span>
          <a href="/api/logout" class="btn btn-ghost btn-sm">Esci</a>
        </div>
      </nav>

      <div class="dashboard" id="dashboard-section">
        <div class="dashboard-header fade-in">
          <h1>Benvenuto, ${name}!</h1>
          <p>Ecco il riepilogo della tua attività su GeoAudit</p>
        </div>

        <div class="dashboard-grid fade-in fade-in-delay-1">
          <div class="stat-card">
            <div class="label">Audit Completati</div>
            <div class="value primary">0</div>
          </div>
          <div class="stat-card">
            <div class="label">Report Generati</div>
            <div class="value success">0</div>
          </div>
          <div class="stat-card">
            <div class="label">Aree Monitorate</div>
            <div class="value warning">0</div>
          </div>
        </div>

        <div class="content-section fade-in fade-in-delay-2">
          <h2>Il Tuo Abbonamento</h2>
          <div class="plan-info">
            <div>
              <div class="plan-name">Piano ${planLabel}</div>
              <div style="font-size: 0.85rem; color: var(--text-light); margin-top: 0.25rem;">
                ${plan === 'free' ? 'Aggiorna per funzionalità avanzate' : 'Abbonamento attivo'}
              </div>
            </div>
            <div class="plan-status">● Attivo</div>
          </div>
          ${plan === 'free' ? `
            <div style="margin-top: 1rem;">
              <button class="btn btn-primary btn-sm" onclick="App.showSection('plans')">Aggiorna Piano</button>
            </div>
          ` : ''}
        </div>

        <div class="content-section fade-in fade-in-delay-3">
          <h2>Attività Recente</h2>
          <p style="color: var(--text-light); padding: 2rem 0; text-align: center;">
            Nessuna attività recente. Inizia creando il tuo primo audit!
          </p>
        </div>
      </div>

      <div class="dashboard" id="plans-section" style="display: none;">
        <div class="dashboard-header fade-in">
          <h1>Gestisci Abbonamento</h1>
          <p>Scegli il piano più adatto alle tue esigenze</p>
        </div>
        <div class="pricing-grid fade-in fade-in-delay-1">
          ${this.plans.map((p, i) => `
            <div class="pricing-card ${p.id === 'pro' ? 'popular' : ''} ${p.id === plan ? 'current' : ''}">
              ${p.id === 'pro' ? '<div class="pricing-badge">Più Popolare</div>' : ''}
              ${p.id === plan ? '<div class="pricing-badge" style="background: var(--success);">Piano Attuale</div>' : ''}
              <h3>${p.name}</h3>
              <div class="pricing-price">€${p.price}<span>/mese</span></div>
              <ul class="pricing-features">
                ${p.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
              <button class="btn ${p.id === plan ? 'btn-ghost' : p.id === 'pro' ? 'btn-primary' : 'btn-outline'}"
                ${p.id === plan ? 'disabled' : ''}
                onclick="App.selectPlan('${p.id}')">
                ${p.id === plan ? 'Piano Attuale' : p.price === 0 ? 'Downgrade' : 'Scegli Piano'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  showSection(section) {
    document.getElementById("dashboard-section").style.display = section === "dashboard" ? "block" : "none";
    document.getElementById("plans-section").style.display = section === "plans" ? "block" : "none";
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
