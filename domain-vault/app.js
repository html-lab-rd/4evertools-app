    // Firebase Configuration (You'll replace these with your actual config)
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    // Enable offline persistence for better UX
    db.enablePersistence()
        .catch((err) => {
            if (err.code === 'failed-precondition') {
                console.log('Multiple tabs open, persistence enabled in one tab only');
            } else if (err.code === 'unimplemented') {
                console.log('Browser doesn\'t support persistence');
            }
        });

    // Configure Chart.js for Light Mode defaults
    Chart.defaults.color = '#6C757D';
    Chart.defaults.borderColor = '#eee';
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    document.addEventListener('DOMContentLoaded', function() {
        // --- TRANSLATION DATA (unchanged) ---
        const translations = {
            en: {
                domainManager: "Domain Vault", 
                brandName: "Domain Vault",
                brandSlogan: "Secure Domain Portfolio Manager",
                dashboard: "Dashboard",
                allDomains: "All Domains",
                domainProviders: "Domain Providers",
                toolsResources: "Tools & Resources",
                calendar: "Calendar",
                notifications: "Notifications",
                settings: "Settings",
                searchPlaceholder: "Search domains...",
                dashboardOverview: "Dashboard Overview",
                addNewDomain: "Add New Domain",
                totalDomains: "Total Domains",
                annualCost: "Annual Cost",
                expiringSoon: "Expiring Soon",
                renewalCostsByMonth: "Renewal Costs by Month",
                providersDistribution: "Providers Distribution",
                domainName: "Domain Name",
                provider: "Provider",
                renewalDate: "Renewal Date",
                price: "Price",
                status: "Status",
                actions: "Actions",
                addNewProvider: "Add New Provider",
                userProfile: "User Profile",
                profilePicture: "Profile Picture",
                changePicture: "Change Picture",
                remove: "Remove",
                username: "Username",
                enterYourName: "Enter your name",
                saveProfile: "Save Profile",
                appearance: "Appearance",
                themeColor: "Theme Accent Color",
                customColor: "Custom Accent Color",
                footer: "Powered with 💖 by 4EverTools",
                addDomain: "Add Domain",
                editDomain: "Edit Domain",
                otherProviderName: "Other Provider Name",
                specifyProvider: "Specify provider",
                purchaseDate: "Purchase Date",
                purchasePrice: "Purchase Price",
                annualRenewalPrice: "Renewal Price",
                providerName: "Provider Name",
                homepageUrl: "Provider Homepage URL",
                emailUsername: "Email / Username",
                password: "Password",
                userIdOptional: "User ID (optional)",
                autoRenewalOn: "Automatic Renewal is On",
                addProvider: "Add Provider",
                editProvider: "Edit Provider",
                providerCredentials: "Provider Credentials",
                userId: "User ID",
                domainsRegistered: "Domains Registered",
                autoRenewal: "Auto Renewal",
                on: "On",
                off: "Off",
                openPage: "Website",
                viewCredentials: "Credentials",
                statusActive: "Active",
                statusExpiringIn: "Expiring in {days}d",
                statusExpired: "Expired",
                noDomainsFound: "No domains found.",
                noNotifications: "No notifications right now.",
                totalInvestment: "Total Investment",
                syncAllGCal: "Sync to Google",
                downloadAllIcs: "Download (.ics)",
                dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                urgentRenewals: "Top 5 Urgent Renewals",
                daysLeft: "Days Left",
                dnsRecords: "DNS Records",
                recordType: "Type",
                recordValue: "Value",
                autoFillWhois: "Auto-fill using WHOIS",
                fetching: "Fetching live records...",
                noDnsFound: "No DNS records found.",
                whoisSuccess: "Data loaded from WHOIS!",
                whoisError: "Could not fetch WHOIS data.",
                toolsDesc: "Explore our curated list of tools to help you manage your domains, check DNS records, and improve your online infrastructure.",
                recommendedProviders: "Recommended Providers",
                getDeal: "Get Deal",
                visitTool: "Visit Tool",
                recommendations: "Recommendations",
                searchRecommendations: "Search hosting, email...",
                quickDnsCheck: "Quick DNS Check",
                enterDomainName: "Enter domain name...",
                checkDns: "Check DNS",
                others: "Others",
                other: "Other",
                login: "Login",
                signup: "Sign Up",
                email: "Email",
                password: "Password",
                confirmPassword: "Confirm Password",
                loginTitle: "Login to Domain Vault",
                signupTitle: "Create Account",
                logout: "Logout",
                loginError: "Invalid email or password",
                signupError: "Error creating account",
                passwordMismatch: "Passwords don't match",
                welcomeBack: "Welcome back!",
                accountCreated: "Account created successfully!"
            },
            es: {
                domainManager: "Domain Vault", 
                brandName: "Domain Vault",
                brandSlogan: "Gestor Seguro de Dominios",
                dashboard: "Tablero",
                allDomains: "Todos los Dominios",
                domainProviders: "Proveedores",
                toolsResources: "Herramientas",
                calendar: "Calendario",
                notifications: "Notificaciones",
                settings: "Configuración",
                searchPlaceholder: "Buscar dominios...",
                dashboardOverview: "Resumen del Tablero",
                addNewDomain: "Añadir Dominio",
                totalDomains: "Dominios Totales",
                annualCost: "Costo Anual",
                expiringSoon: "Próximos a Vencer",
                renewalCostsByMonth: "Costos de Renovación por Mes",
                providersDistribution: "Distribución de Proveedores",
                domainName: "Nombre de Dominio",
                provider: "Proveedor",
                renewalDate: "Fecha de Renovación",
                price: "Precio",
                status: "Estado",
                actions: "Acciones",
                addNewProvider: "Añadir Proveedor",
                userProfile: "Perfil de Usuario",
                profilePicture: "Foto de Perfil",
                changePicture: "Cambiar Foto",
                remove: "Eliminar",
                username: "Nombre de usuario",
                enterYourName: "Introduce tu nombre",
                saveProfile: "Guardar Perfil",
                appearance: "Apariencia",
                themeColor: "Color de Acento",
                customColor: "Color Personalizado",
                footer: "Desarrollado con 💖 por 4EverTools",
                addDomain: "Guardar Dominio",
                editDomain: "Editar Dominio",
                otherProviderName: "Nombre de Otro Proveedor",
                specifyProvider: "Especificar proveedor",
                purchaseDate: "Fecha de Compra",
                purchasePrice: "Precio de Compra",
                annualRenewalPrice: "Precio de Renovación",
                providerName: "Nombre del Proveedor",
                homepageUrl: "URL de la Página",
                emailUsername: "Correo / Usuario",
                password: "Contraseña",
                userIdOptional: "ID de Usuario (opcional)",
                autoRenewalOn: "Renovación Automática Activada",
                addProvider: "Guardar Proveedor",
                editProvider: "Editar Proveedor",
                providerCredentials: "Credenciales",
                userId: "ID de Usuario",
                domainsRegistered: "Dominios Registrados",
                autoRenewal: "Renovación Automática",
                on: "Activado",
                off: "Desactivado",
                openPage: "Sitio Web",
                viewCredentials: "Credenciales",
                statusActive: "Activo",
                statusExpiringIn: "Vence en {days}d",
                statusExpired: "Vencido",
                noDomainsFound: "No se encontraron dominios.",
                noNotifications: "No hay notificaciones en este momento.",
                totalInvestment: "Inversión Total",
                syncAllGCal: "Sincronizar a Google",
                downloadAllIcs: "Descargar (.ics)",
                dayNames: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                urgentRenewals: "Top 5 Próximas Renovaciones",
                daysLeft: "Días Restantes",
                dnsRecords: "Registros DNS",
                recordType: "Tipo",
                recordValue: "Valor",
                autoFillWhois: "Autocompletar usando WHOIS",
                fetching: "Obteniendo registros...",
                noDnsFound: "No se encontraron registros DNS.",
                whoisSuccess: "¡Datos cargados vía WHOIS!",
                whoisError: "No se pudo obtener datos WHOIS.",
                toolsDesc: "Explora nuestra lista seleccionada de herramientas para ayudarte a gestionar tus dominios y verificar registros DNS.",
                recommendedProviders: "Proveedores Recomendados",
                getDeal: "Obtener Oferta",
                visitTool: "Visitar Herramienta",
                recommendations: "Recomendaciones",
                searchRecommendations: "Buscar hosting, correo...",
                quickDnsCheck: "Comprobación Rápida DNS",
                enterDomainName: "Ingrese nombre de dominio...",
                checkDns: "Comprobar DNS",
                others: "Otros",
                other: "Otro",
                login: "Iniciar Sesión",
                signup: "Registrarse",
                email: "Correo",
                password: "Contraseña",
                confirmPassword: "Confirmar Contraseña",
                loginTitle: "Iniciar Sesión en Domain Vault",
                signupTitle: "Crear Cuenta",
                logout: "Cerrar Sesión",
                loginError: "Correo o contraseña inválidos",
                signupError: "Error al crear la cuenta",
                passwordMismatch: "Las contraseñas no coinciden",
                welcomeBack: "¡Bienvenido de nuevo!",
                accountCreated: "¡Cuenta creada exitosamente!"
            }
        };
        
        // --- DATA ARRAYS (unchanged) ---
        const recommendedProvidersData = [
            { name: "Namecheap", desc: "Best for budget domains", rating: 5, url: "https://namecheap.com/", icon: "tag", tags: ["domains"] },
            { name: "Porkbun", desc: "Great UI & pricing", rating: 5, url: "https://porkbun.com/", icon: "piggy-bank", tags: ["domains"] },
            { name: "Hostinger", desc: "Domain + Hosting bundles", rating: 4.5, url: "https://hostinger.com/", icon: "server", tags: ["domains", "hosting"] }
        ];

        const expandedRecommendationsData = [
            ...recommendedProvidersData,
            { name: "Google Workspace", desc: "Professional email & collaboration.", rating: 5, url: "https://workspace.google.com/", icon: "mail", tags: ["email"] },
            { name: "ProtonMail", desc: "Privacy-focused secure email.", rating: 4.5, url: "https://proton.me/mail", icon: "shield", tags: ["email"] },
            { name: "DigitalOcean", desc: "Developer-friendly cloud hosting.", rating: 4.5, url: "https://digitalocean.com/", icon: "cloud", tags: ["hosting"] },
            { name: "Vercel", desc: "Simple scalable deployment for frontend apps.", rating: 5, url: "https://vercel.com/", icon: "triangle", tags: ["hosting"] }
        ];

        const toolsData = [
            { name: "MXToolbox", desc: "Comprehensive DNS & Email diagnostics", rating: 5, url: "https://mxtoolbox.com", icon: "mail-search", tags: ["dns", "email"] },
            { name: "DNSChecker", desc: "Global DNS propagation check", rating: 5, url: "https://dnschecker.org", icon: "globe-2", tags: ["dns"] },
            { name: "Whois.com", desc: "Domain lookup & registration info", rating: 4, url: "https://whois.com", icon: "search", tags: ["domains"] },
            { name: "Cloudflare", desc: "Free DNS management & fast CDN", rating: 5, url: "https://cloudflare.com", icon: "cloud-lightning", tags: ["dns", "hosting"] },
            { name: "ICANN Lookup", desc: "Official domain registration data", rating: 4.5, url: "https://lookup.icann.org/", icon: "building-2", tags: ["domains"] },
            { name: "SSL Checker", desc: "Verify SSL certificate installation", rating: 4.5, url: "https://www.sslshopper.com/ssl-checker.html", icon: "shield-check", tags: ["ssl"] }
        ];

        // --- DOM ELEMENTS ---
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavClose = document.querySelector('.mobile-nav-close');
        const navOverlay = document.getElementById('navOverlay');
        const searchInput = document.getElementById('searchInput');
        const sidebarMenu = document.querySelector('.sidebar-menu');
        const sidebarFooter = document.querySelector('.sidebar-footer');
        
        mobileNav.appendChild(sidebarMenu.cloneNode(true));
        if (sidebarFooter) mobileNav.appendChild(sidebarFooter.cloneNode(true));
        
        const addDomainBtn = document.getElementById('addDomainBtn');
        const addDomainBtnSecondary = document.getElementById('addDomainBtnSecondary');
        const domainModal = document.getElementById('domainModal');
        const domainForm = document.getElementById('domainForm');
        const domainsTableBody = document.getElementById('domainsTableBody');

        const addProviderBtn = document.getElementById('addProviderBtn');
        const providerModal = document.getElementById('providerModal');
        const providerForm = document.getElementById('providerForm');
        const providersGrid = document.getElementById('providersGrid');
        const credentialsModal = document.getElementById('credentialsModal');
        const togglePassword = document.getElementById('togglePassword');
        
        const notificationsContainer = document.getElementById('persistent-notifications-container');
        const notificationsList = document.getElementById('notificationsList');
        const headerNotificationIcon = document.getElementById('headerNotificationIcon');
        const translateBtn = document.getElementById('translateBtn');

        const settingsProfileForm = document.getElementById('settingsProfileForm');
        const colorPalette = document.getElementById('colorPalette');
        const customColorPicker = document.getElementById('customColorPicker');
        const userNameEl = document.getElementById('userName');
        const userAvatarEl = document.getElementById('userAvatar');
        const settingsAvatarPreview = document.getElementById('settingsAvatarPreview');
        const profilePicUpload = document.getElementById('profilePicUpload');
        const uploadPicBtn = document.getElementById('uploadPicBtn');
        const removePicBtn = document.getElementById('removePicBtn');
        const costCard = document.getElementById('cost-card');

        // Calendar Elements
        const calendarGrid = document.getElementById('calendarGrid');
        const currentMonthYearEl = document.getElementById('currentMonthYear');
        const prevMonthBtn = document.getElementById('prevMonthBtn');
        const nextMonthBtn = document.getElementById('nextMonthBtn');
        const syncGCalBtn = document.getElementById('syncGCalBtn');
        const downloadIcsBtn = document.getElementById('downloadIcsBtn');
        const calendarDayNamesEl = document.getElementById('calendarDayNames');

        // DNS & WHOIS Elements
        const dnsModal = document.getElementById('dnsModal');
        const dnsDomainLabel = document.getElementById('dnsDomainLabel');
        const dnsLoading = document.getElementById('dnsLoading');
        const dnsTableWrapper = document.getElementById('dnsTableWrapper');
        const dnsTableBody = document.getElementById('dnsTableBody');
        const dnsError = document.getElementById('dnsError');
        const fetchWhoisBtn = document.getElementById('fetchWhoisBtn');
        const whoisStatus = document.getElementById('whoisStatus');
        const urgentRenewalsBody = document.getElementById('urgentRenewalsBody');
        
        // New Tools & Rec Elements
        const quickDnsInput = document.getElementById('quickDnsInput');
        const quickDnsBtn = document.getElementById('quickDnsBtn');

        // Auth Modal Elements
        const authModal = document.getElementById('authModal');
        const loginTab = document.getElementById('loginTab');
        const signupTab = document.getElementById('signupTab');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const logoutBtn = document.getElementById('logoutBtn');
        const userEmailDisplay = document.getElementById('userEmailDisplay');

        // --- STATE MANAGEMENT (Firestore) ---
        let domains = [];
        let providers = [];
        let notifications = [];
        let settings = {};
        let currentCalendarDate = new Date();
        let currentToolFilter = 'all';
        let currentUser = null;
        let unsubscribeDomains = null;
        let unsubscribeProviders = null;
        let unsubscribeNotifications = null;
        let unsubscribeSettings = null;

        const colorThemes = {
            pink: { primary: '#DF1783', secondary: '#4A3FC9' },
            cyan: { primary: '#17A2B8', secondary: '#007BFF' },
            green: { primary: '#28A745', secondary: '#20C997' },
            purple: { primary: '#6610F2', secondary: '#9370DB' },
            orange: { primary: '#ff5011', secondary: '#FF8C00' }
        };

        // --- AUTHENTICATION FUNCTIONS ---
        const showAuthModal = () => {
            authModal.style.display = 'flex';
            loginTab.click(); // Default to login tab
        };

        const hideAuthModal = () => {
            authModal.style.display = 'none';
        };

        const handleAuthStateChange = (user) => {
            currentUser = user;
            
            if (user) {
                // User is signed in
                hideAuthModal();
                document.body.classList.remove('auth-required');
                userEmailDisplay.textContent = user.email;
                
                // Load user data from Firestore
                initializeFirestoreListeners(user.uid);
                
                // Apply any cached settings or use defaults
                if (Object.keys(settings).length === 0) {
                    settings = {
                        username: user.email.split('@')[0],
                        theme: 'pink',
                        customColor: null,
                        profilePicture: null,
                        language: 'en'
                    };
                }
                
                applySettings();
                setLanguage(settings.language);
                showToast(translations[settings.language].welcomeBack);
            } else {
                // User is signed out
                document.body.classList.add('auth-required');
                showAuthModal();
                
                // Clean up Firestore listeners
                if (unsubscribeDomains) unsubscribeDomains();
                if (unsubscribeProviders) unsubscribeProviders();
                if (unsubscribeNotifications) unsubscribeNotifications();
                if (unsubscribeSettings) unsubscribeSettings();
                
                // Clear local data
                domains = [];
                providers = [];
                notifications = [];
                settings = {};
            }
        };

        // --- FIRESTORE FUNCTIONS ---
        const initializeFirestoreListeners = (userId) => {
            const userRef = db.collection('users').doc(userId);

            // Listen for domains changes
            unsubscribeDomains = userRef.collection('domains').onSnapshot((snapshot) => {
                domains = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                renderAll();
                updateNotifications();
            }, (error) => {
                console.error("Domains listener error:", error);
                showToast("Error syncing domains", "danger");
            });

            // Listen for providers changes
            unsubscribeProviders = userRef.collection('providers').onSnapshot((snapshot) => {
                providers = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                renderProviders();
            }, (error) => {
                console.error("Providers listener error:", error);
            });

            // Listen for notifications changes
            unsubscribeNotifications = userRef.collection('notifications').onSnapshot((snapshot) => {
                notifications = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                renderNotificationsPage();
                updateNotificationBadge();
            }, (error) => {
                console.error("Notifications listener error:", error);
            });

            // Listen for settings changes
            unsubscribeSettings = userRef.collection('settings').doc('userSettings').onSnapshot((doc) => {
                if (doc.exists) {
                    settings = doc.data();
                } else {
                    // Create default settings if none exist
                    settings = {
                        username: currentUser.email.split('@')[0],
                        theme: 'pink',
                        customColor: null,
                        profilePicture: null,
                        language: 'en'
                    };
                    saveSettingsToFirestore();
                }
                applySettings();
                setLanguage(settings.language);
            }, (error) => {
                console.error("Settings listener error:", error);
            });
        };

        const saveSettingsToFirestore = async () => {
            if (!currentUser) return;
            
            try {
                await db.collection('users')
                    .doc(currentUser.uid)
                    .collection('settings')
                    .doc('userSettings')
                    .set(settings);
            } catch (error) {
                console.error("Error saving settings:", error);
                showToast("Error saving settings", "danger");
            }
        };

        const saveDomainToFirestore = async (domain) => {
            if (!currentUser) return;
            
            try {
                const domainsRef = db.collection('users')
                    .doc(currentUser.uid)
                    .collection('domains');
                
                if (domain.id && domain.id.toString().length > 20) { // Firestore ID format check
                    await domainsRef.doc(domain.id).set(domain);
                } else {
                    // New domain
                    const newId = domain.id || Date.now().toString();
                    await domainsRef.doc(newId.toString()).set({
                        ...domain,
                        id: newId.toString()
                    });
                }
            } catch (error) {
                console.error("Error saving domain:", error);
                showToast("Error saving domain", "danger");
            }
        };

        const saveProviderToFirestore = async (provider) => {
            if (!currentUser) return;
            
            try {
                const providersRef = db.collection('users')
                    .doc(currentUser.uid)
                    .collection('providers');
                
                if (provider.id && provider.id.toString().length > 20) {
                    await providersRef.doc(provider.id).set(provider);
                } else {
                    const newId = provider.id || Date.now().toString();
                    await providersRef.doc(newId.toString()).set({
                        ...provider,
                        id: newId.toString()
                    });
                }
            } catch (error) {
                console.error("Error saving provider:", error);
                showToast("Error saving provider", "danger");
            }
        };

        const deleteDomainFromFirestore = async (domainId) => {
            if (!currentUser) return;
            
            try {
                await db.collection('users')
                    .doc(currentUser.uid)
                    .collection('domains')
                    .doc(domainId.toString())
                    .delete();
                showToast('Domain deleted successfully');
            } catch (error) {
                console.error("Error deleting domain:", error);
                showToast("Error deleting domain", "danger");
            }
        };

        const deleteProviderFromFirestore = async (providerId) => {
            if (!currentUser) return;
            
            try {
                await db.collection('users')
                    .doc(currentUser.uid)
                    .collection('providers')
                    .doc(providerId.toString())
                    .delete();
                showToast('Provider deleted successfully');
            } catch (error) {
                console.error("Error deleting provider:", error);
                showToast("Error deleting provider", "danger");
            }
        };

        const saveNotificationToFirestore = async (notification) => {
            if (!currentUser) return;
            
            try {
                await db.collection('users')
                    .doc(currentUser.uid)
                    .collection('notifications')
                    .doc(notification.id.toString())
                    .set(notification);
            } catch (error) {
                console.error("Error saving notification:", error);
            }
        };

        const deleteNotificationFromFirestore = async (notificationId) => {
            if (!currentUser) return;
            
            try {
                await db.collection('users')
                    .doc(currentUser.uid)
                    .collection('notifications')
                    .doc(notificationId.toString())
                    .delete();
            } catch (error) {
                console.error("Error deleting notification:", error);
            }
        };

        // --- REUSABLE GALLERY RENDERER (unchanged) ---
        const renderGallery = (containerId, data, btnTranslateKey) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            const lang = settings.language;
            
            data.forEach(item => {
                let starsHtml = '';
                for(let i=0; i<Math.floor(item.rating); i++) starsHtml += '<i data-lucide="star" style="fill: var(--warning); color: var(--warning);"></i>';
                if(item.rating % 1 !== 0) starsHtml += '<i data-lucide="star-half" style="fill: var(--warning); color: var(--warning);"></i>';

                container.innerHTML += `
                    <div class="recommendation-card">
                        <i data-lucide="${item.icon}" class="card-icon"></i>
                        <div class="gallery-info" style="flex-grow:1;">
                            <div class="gallery-title">${item.name}</div>
                            <div class="gallery-subtitle">${item.desc}</div>
                        </div>
                        <div class="gallery-rating">${starsHtml}</div>
                        <div class="gallery-action">
                            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width:100%; font-size: 0.9em; white-space:nowrap;">
                                ${translations[lang][btnTranslateKey] || 'Visit'} <i data-lucide="external-link" style="width: 14px; margin-left: 4px;"></i>
                            </a>
                        </div>
                    </div>
                `;
            });
        };
        
        const renderToolsPage = () => {
            const combinedResources = [...expandedRecommendationsData, ...toolsData];
            const filtered = currentToolFilter === 'all' 
                ? combinedResources 
                : combinedResources.filter(item => item.tags && item.tags.includes(currentToolFilter));
            
            renderGallery('toolsGridContainer', filtered, 'visitTool');
        };

        // --- RENDERING & UI UPDATES ---
        const renderDomains = (filteredDomains = domains) => {
            const lang = settings.language;
            domainsTableBody.innerHTML = '';
            if (filteredDomains.length === 0) {
                domainsTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px;">${translations[lang].noDomainsFound}</td></tr>`;
                return;
            }
            filteredDomains.forEach(domain => {
                const renewal = new Date(domain.renewalDate);
                const now = new Date();
                const diffTime = renewal - now;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                let statusClass, statusText;
                if (diffDays <= 0) {
                    statusClass = 'status-expired';
                    statusText = translations[lang].statusExpired;
                } else if (diffDays <= 30) {
                    statusClass = 'status-warning';
                    statusText = translations[lang].statusExpiringIn.replace('{days}', diffDays);
                } else {
                    statusClass = 'status-active';
                    statusText = translations[lang].statusActive;
                }
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong style="color:var(--dark);">${domain.name}</strong></td>
                    <td>${domain.provider}</td>
                    <td>${domain.renewalDate}</td>
                    <td>$${domain.renewalPrice.toFixed(2)}</td>
                    <td><span class="status ${statusClass}">${statusText}</span></td>
                    <td>
                        <span class="action-btn dns-btn" data-id="${domain.id}" title="Check DNS"><i data-lucide="network"></i></span>
                        <span class="action-btn gcal-btn" data-id="${domain.id}" title="Add to Google Calendar"><i data-lucide="calendar-plus"></i></span>
                        <span class="action-btn ical-btn" data-id="${domain.id}" title="Download iCal Event"><i data-lucide="download"></i></span>
                        <span class="action-btn" data-id="${domain.id}" title="Edit"><i data-lucide="pencil"></i></span>
                        <span class="action-btn" data-id="${domain.id}" title="Delete"><i data-lucide="trash-2"></i></span>
                    </td>`;
                domainsTableBody.appendChild(tr);
            });
        };

        const renderTopRenewals = () => {
            const lang = settings.language;
            urgentRenewalsBody.innerHTML = '';
            const sortedDomains = [...domains].sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate));
            const top5 = sortedDomains.slice(0, 5);
            
            if (top5.length === 0) {
                urgentRenewalsBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px;">${translations[lang].noDomainsFound}</td></tr>`;
                return;
            }

            top5.forEach(domain => {
                const diffDays = Math.ceil((new Date(domain.renewalDate) - new Date()) / (1000 * 60 * 60 * 24));
                const daysText = diffDays < 0 ? 'Expired' : `${diffDays} days`;
                const daysClass = diffDays < 0 ? 'color: var(--danger); font-weight: bold;' : (diffDays <= 30 ? 'color: var(--warning); font-weight: bold;' : 'color: var(--dark);');
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong style="color:var(--dark);">${domain.name}</strong></td>
                    <td>${domain.renewalDate}</td>
                    <td style="${daysClass}">${daysText}</td>
                    <td>$${domain.renewalPrice.toFixed(2)}</td>
                `;
                urgentRenewalsBody.appendChild(tr);
            });
        };

        const renderProviders = () => {
            const lang = settings.language;
            providersGrid.innerHTML = '';
            providers.forEach(p => {
                const domainCount = domains.filter(d => d.provider === p.name).length;
                const autoRenewCount = domains.filter(d => d.provider === p.name && d.autoRenew).length;
                const card = document.createElement('div');
                card.className = 'provider-card';
                card.innerHTML = `
                    <div class="provider-header">
                        <div class="provider-info">
                            <img 
                                src="https://www.google.com/s2/favicons?sz=64&domain_url=${p.url}" 
                                alt="${p.name}" 
                                class="provider-logo"
                                onerror="this.onerror=null;this.src='https://placehold.co/64x64/eee/6C757D?text=${p.name.substring(0,2)}';"
                            >
                            <h3 class="provider-name">${p.name}</h3>
                        </div>
                        <div class="actions">
                            <span class="action-btn" data-id="${p.id}" title="Edit Provider"><i data-lucide="pencil"></i></span>
                            <span class="action-btn" data-id="${p.id}" title="Delete Provider"><i data-lucide="trash-2"></i></span>
                        </div>
                    </div>
                    <div class="provider-stats">
                        <p>${translations[lang].domainsRegistered}: <span>${domainCount}</span></p>
                        <p>${translations[lang].autoRenewal}: <span>${autoRenewCount}/${domainCount}</span></p>
                    </div>
                    <div class="provider-actions">
                         <a href="${p.url}" target="_blank" class="btn btn-open-page"><i data-lucide="external-link"></i> ${translations[lang].openPage}</a>
                         <button class="btn btn-credentials credentials-btn" data-id="${p.id}"><i data-lucide="key-round"></i> ${translations[lang].viewCredentials}</button>
                    </div>
                `;
                providersGrid.appendChild(card);
            });
        };

        const applySettings = () => {
            if (!settings || Object.keys(settings).length === 0) return;
            
            if (settings.theme === 'custom' && settings.customColor) {
                document.documentElement.style.setProperty('--primary', settings.customColor);
                document.documentElement.style.setProperty('--secondary', settings.customColor);
            } else {
                const theme = colorThemes[settings.theme] || colorThemes.pink;
                document.documentElement.style.setProperty('--primary', theme.primary);
                document.documentElement.style.setProperty('--secondary', theme.secondary);
            }

            // Toggle Logo
            const defaultLogo = document.getElementById('defaultBrandLogo');
            const themeLogoWrapper = document.getElementById('themeBrandLogoWrapper');
            
            if (settings.theme === 'pink') {
                defaultLogo.style.display = 'block';
                themeLogoWrapper.style.display = 'none';
            } else {
                defaultLogo.style.display = 'none';
                themeLogoWrapper.style.display = 'flex';
            }

            userNameEl.textContent = settings.username || 'User';
            const initials = settings.username ? settings.username.split(' ').map(n => n[0]).join('').substring(0,2) : 'U';
            
            [userAvatarEl, settingsAvatarPreview].forEach(avatar => {
                if (settings.profilePicture) {
                    avatar.style.backgroundImage = `url(${settings.profilePicture})`;
                    avatar.textContent = '';
                } else {
                    avatar.style.backgroundImage = '';
                    avatar.textContent = initials;
                }
            });

            document.getElementById('settingUsername').value = settings.username || '';
            
            colorPalette.innerHTML = '';
            Object.keys(colorThemes).forEach(key => {
                const swatch = document.createElement('div');
                swatch.className = 'color-swatch';
                swatch.style.background = `linear-gradient(135deg, ${colorThemes[key].primary}, ${colorThemes[key].secondary})`;
                swatch.dataset.theme = key;
                if (key === settings.theme && settings.theme !== 'custom') {
                    swatch.classList.add('active');
                }
                swatch.addEventListener('click', () => {
                    settings.theme = key;
                    settings.customColor = null; 
                    saveSettingsToFirestore();
                    applySettings();
                    updateDashboard();
                });
                colorPalette.appendChild(swatch);
            });
            
            if (settings.customColor) {
                customColorPicker.value = settings.customColor;
            }
        };

        const openModal = (modal, titleKey, btnTextKey, data = {}) => {
            if (!currentUser) {
                showAuthModal();
                return;
            }
            
            const lang = settings.language;
            if (modal === domainModal) {
                modal.querySelector('#modalTitle').textContent = translations[lang][titleKey];
                modal.querySelector('#formSubmitBtn').textContent = translations[lang][btnTextKey];
                document.getElementById('domainId').value = data.id || '';
                document.getElementById('domainName').value = data.name || '';
                document.getElementById('purchaseDate').value = data.purchaseDate || '';
                document.getElementById('renewalDate').value = data.renewalDate || '';
                document.getElementById('purchasePrice').value = data.purchasePrice || '';
                document.getElementById('renewalPrice').value = data.renewalPrice || '';
                document.getElementById('domainAutoRenew').checked = data.autoRenew || false;
                whoisStatus.style.display = 'none';
                
                const providerSelect = document.getElementById('domainProvider');
                providerSelect.innerHTML = `<option value="">${translations[lang].selectProvider || 'Select Provider'}</option>`;
                providers.forEach(p => {
                    const option = document.createElement('option');
                    option.value = p.name;
                    option.textContent = p.name;
                    providerSelect.appendChild(option);
                });
                providerSelect.appendChild(new Option(`${translations[lang].other || 'Other'}...`, 'other'));
                providerSelect.value = data.provider || '';
            } else if (modal === providerModal) {
                modal.querySelector('#providerModalTitle').textContent = translations[lang][titleKey];
                modal.querySelector('#providerFormSubmitBtn').textContent = translations[lang][btnTextKey];
                document.getElementById('providerId').value = data.id || '';
                document.getElementById('providerName').value = data.name || '';
                document.getElementById('providerUrl').value = data.url || '';
                document.getElementById('providerUser').value = data.user || '';
                document.getElementById('providerPass').value = data.pass || '';
                document.getElementById('providerUid').value = data.uid || '';
            } else if (modal === credentialsModal) {
                modal.querySelector('#credentialsModalTitle').textContent = `${data.name} ${translations[lang].providerCredentials}`;
                document.getElementById('credUser').textContent = data.user || 'Not set';
                document.getElementById('credPass').textContent = data.pass ? '••••••••' : 'Not set';
                document.getElementById('credUid').textContent = data.uid || 'Not set';
            }
            modal.style.display = 'flex';
            lucide.createIcons();
        };

        const closeModal = (modal) => {
            modal.style.display = 'none';
            if (modal.querySelector('form')) {
                modal.querySelector('form').reset();
            }
        };

        // --- NOTIFICATIONS ---
        const renderNotificationsPage = () => {
            const lang = settings.language;
            notificationsList.innerHTML = '';
            if(notifications.length === 0) {
                notificationsList.innerHTML = `<p class="placeholder">${translations[lang].noNotifications}</p>`;
                return;
            }
            notifications.forEach(n => {
                const item = document.createElement('div');
                item.className = `notification-item ${n.type}`;
                item.innerHTML = `
                    <p>${n.message}</p>
                    <span class="action-btn" data-id="${n.id}" title="Delete Notification"><i data-lucide="trash-2"></i></span>
                `;
                notificationsList.appendChild(item);
            });
        }
        
        const renderPopUpNotifications = (notificationsToPop) => {
            notificationsContainer.innerHTML = ''; 
            notificationsToPop.forEach(n => {
                 const notification = document.createElement('div');
                notification.className = `persistent-notification ${n.type}`;
                notification.innerHTML = `<p>${n.message}</p><button class="notification-dismiss-btn">&times;</button>`;
                notification.querySelector('.notification-dismiss-btn').addEventListener('click', () => {
                    notification.remove();
                });
                notificationsContainer.appendChild(notification);
            });
        }

        const updateNotificationBadge = () => {
            const count = notifications.length;
            const countText = count > 0 ? count : '';
            document.querySelectorAll('.notification-badge').forEach(badge => {
                badge.textContent = countText;
            });
        }
        
        const updateNotifications = async () => {
            if (!currentUser) return;
            
            const now = new Date();
            const lang = settings.language;
            const expiringDomains = domains.filter(d => {
                const diffDays = Math.ceil((new Date(d.renewalDate) - now) / (1000 * 60 * 60 * 24));
                return diffDays <= 30;
            });
            const expiringDomainIds = expiringDomains.map(d => d.id);
            
            // Delete old notifications that are no longer expiring
            const notificationsToDelete = notifications.filter(n => !expiringDomainIds.includes(n.domainId));
            notificationsToDelete.forEach(n => deleteNotificationFromFirestore(n.id));
            
            const notifiedDomainIds = notifications.map(n => n.domainId);
            const newNotificationsToCreate = [];

            expiringDomains.forEach(domain => {
                if (!notifiedDomainIds.includes(domain.id)) {
                    const renewal = new Date(domain.renewalDate);
                    const diffDays = Math.ceil((renewal - now) / (1000 * 60 * 60 * 24));
                    let message, type;
                    if (diffDays <= 0) {
                        message = `<strong>${domain.name}</strong> ${translations[lang].statusExpired}!`;
                        type = 'expired';
                    } else {
                        message = `<strong>${domain.name}</strong> ${translations[lang].statusExpiringIn.replace('{days}', diffDays)}`;
                        type = 'expiring';
                    }
                    const newNotification = {
                        id: Date.now() + domain.id,
                        domainId: domain.id,
                        message: message,
                        type: type
                    };
                    saveNotificationToFirestore(newNotification);
                    newNotificationsToCreate.push(newNotification);
                }
            });
        };

        // --- CALENDAR LOGIC (unchanged) ---
        const renderCalendar = () => {
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            const lang = settings.language;

            currentMonthYearEl.textContent = new Date(year, month).toLocaleDateString(lang, { month: 'long', year: 'numeric' });
            calendarGrid.innerHTML = '';
            calendarDayNamesEl.innerHTML = '';

            translations[lang].dayNames.forEach(day => {
                calendarDayNamesEl.innerHTML += `<div class="calendar-day-name">${day}</div>`;
            });

            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for(let i = 0; i < firstDayOfMonth; i++) {
                calendarGrid.innerHTML += `<div class="calendar-day other-month"></div>`;
            }

            for(let day = 1; day <= daysInMonth; day++) {
                const dayEl = document.createElement('div');
                dayEl.className = 'calendar-day';
                dayEl.innerHTML = `<div class="day-number">${day}</div>`;
                
                const renewals = domains.filter(d => {
                    const renewalDate = new Date(d.renewalDate);
                    return renewalDate.getFullYear() === year && renewalDate.getMonth() === month && renewalDate.getDate() === day;
                });

                renewals.forEach(domain => {
                    dayEl.innerHTML += `<div class="calendar-event"><i data-lucide="globe" style="width: 12px; height: 12px;"></i>${domain.name}</div>`;
                });

                calendarGrid.appendChild(dayEl);
            }
            lucide.createIcons();
        };
        
        // --- API INTEGRATIONS (unchanged) ---
        fetchWhoisBtn.addEventListener('click', async () => {
            const domain = document.getElementById('domainName').value.trim();
            const lang = settings.language;
            if (!domain) {
                showToast('Please enter a domain name first.', 'warning');
                return;
            }
            
            whoisStatus.style.display = 'block';
            whoisStatus.style.color = 'var(--gray)';
            whoisStatus.textContent = translations[lang].fetching;
            
            try {
                const response = await fetch(`https://networkcalc.com/api/dns/whois/${domain}`);
                const data = await response.json();
                
                if (data.status === 'OK' && Object.keys(data.whois).length > 0) {
                    const whois = data.whois;
                    
                    if (whois.creation_date) {
                        document.getElementById('purchaseDate').value = new Date(whois.creation_date).toISOString().substring(0, 10);
                    }
                    
                    if (whois.expiry_date) {
                        document.getElementById('renewalDate').value = new Date(whois.expiry_date).toISOString().substring(0, 10);
                    }
                    
                    if (whois.registrar) {
                        const registrarName = whois.registrar.toLowerCase();
                        const providerSelect = document.getElementById('domainProvider');
                        
                        let matchFound = false;
                        for (let i = 0; i < providerSelect.options.length; i++) {
                            if (providerSelect.options[i].value && registrarName.includes(providerSelect.options[i].value.toLowerCase())) {
                                providerSelect.value = providerSelect.options[i].value;
                                matchFound = true;
                                break;
                            }
                        }
                        
                        if (!matchFound) {
                            providerSelect.value = 'other';
                            document.getElementById('otherProviderGroup').style.display = 'block';
                            document.getElementById('otherProvider').value = whois.registrar;
                        } else {
                            document.getElementById('otherProviderGroup').style.display = 'none';
                        }
                    }
                    
                    whoisStatus.style.color = 'var(--success)';
                    whoisStatus.textContent = translations[lang].whoisSuccess;
                } else {
                    whoisStatus.style.color = 'var(--danger)';
                    whoisStatus.textContent = translations[lang].whoisError;
                }
            } catch (err) {
                whoisStatus.style.color = 'var(--danger)';
                whoisStatus.textContent = translations[lang].whoisError;
            }
        });

        const fetchDnsRecords = async (domainName) => {
            dnsDomainLabel.textContent = domainName;
            dnsDomainLabel.style.color = "var(--primary)";
            dnsModal.style.display = 'flex';
            dnsTableWrapper.style.display = 'none';
            dnsError.style.display = 'none';
            dnsLoading.style.display = 'block';
            
            try {
                const types = ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS'];
                const fetchPromises = types.map(type => 
                    fetch(`https://dns.google/resolve?name=${domainName}&type=${type}`)
                        .then(response => response.json())
                );
                
                const results = await Promise.all(fetchPromises);
                dnsLoading.style.display = 'none';
                
                let allAnswers = [];
                results.forEach(data => {
                    if (data.Answer && data.Answer.length > 0) {
                        allAnswers = allAnswers.concat(data.Answer);
                    }
                });
                
                if (allAnswers.length > 0) {
                    dnsTableBody.innerHTML = '';
                    const typeMap = { 1: 'A', 2: 'NS', 5: 'CNAME', 15: 'MX', 16: 'TXT', 28: 'AAAA' };
                    
                    allAnswers.sort((a, b) => a.type - b.type);

                    allAnswers.forEach(record => {
                        const typeStr = typeMap[record.type] || `Type ${record.type}`;
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td><span class="dns-badge">${typeStr}</span></td>
                            <td style="word-break: break-all;">${record.data}</td>
                        `;
                        dnsTableBody.appendChild(tr);
                    });
                    
                    dnsTableWrapper.style.display = 'block';
                } else {
                    dnsError.style.display = 'block';
                    dnsError.textContent = translations[settings.language].noDnsFound;
                }
            } catch (err) {
                dnsLoading.style.display = 'none';
                dnsError.style.display = 'block';
                dnsError.textContent = "Error connecting to DNS API.";
            }
        };

        // --- NAVIGATION ---
        const setActivePage = (pageId) => {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(`page-${pageId}`).classList.add('active');
            document.querySelectorAll('.menu-item').forEach(m => {
                m.classList.toggle('active', m.dataset.page === pageId);
            });
            if(pageId === 'calendar') renderCalendar();
            lucide.createIcons();
        };

        // --- CHARTS & STATS ---
        let expensesChart, providersChart;
        const updateDashboard = () => {
            const totalDomains = domains.length;
            const uniqueProviders = [...new Set(domains.map(d => d.provider))].length;
            const yearlyExpenses = domains.reduce((sum, d) => sum + d.renewalPrice, 0);
            const totalInvestment = domains.reduce((sum, d) => sum + (d.purchasePrice || 0), 0);
            const expiringSoon = domains.filter(d => {
                const diffDays = Math.ceil((new Date(d.renewalDate) - new Date()) / (1000 * 60 * 60 * 24));
                return diffDays > 0 && diffDays <= 30;
            }).length;

            document.getElementById('stat-total-domains').textContent = totalDomains;
            document.getElementById('stat-domain-providers').textContent = uniqueProviders;
            document.getElementById('stat-yearly-expenses').textContent = `$${yearlyExpenses.toFixed(2)}`;
            document.getElementById('stat-total-investment').textContent = `$${totalInvestment.toFixed(2)}`;
            document.getElementById('stat-expiring-soon').textContent = expiringSoon;

            const monthlyExpenses = Array(12).fill(0);
            domains.forEach(d => {
                const month = new Date(d.renewalDate).getMonth();
                monthlyExpenses[month] += d.renewalPrice;
            });

            const providerCounts = domains.reduce((acc, d) => { acc[d.provider] = (acc[d.provider] || 0) + 1; return acc; }, {});
            const sortedProviders = Object.entries(providerCounts).sort(([,a],[,b]) => b-a);
            let providerLabels = [], providerData = [];
            const othersLabel = translations[settings.language]?.others || 'Others';

            // Show top 3 providers, group the rest into "Others"
            if (sortedProviders.length > 3) {
                const topProviders = sortedProviders.slice(0, 3);
                topProviders.forEach(([name, count]) => { providerLabels.push(name); providerData.push(count); });
                const othersCount = sortedProviders.slice(3).reduce((sum, [, count]) => sum + count, 0);
                if(othersCount > 0) {
                    providerLabels.push(othersLabel); 
                    providerData.push(othersCount);
                }
            } else {
                sortedProviders.forEach(([name, count]) => { providerLabels.push(name); providerData.push(count); });
            }
            const baseProviderColors = Object.values(colorThemes).map(t => t.primary).concat(['#FFC107', '#28A745', '#17A2B8', '#6C757D']);
            
            let primaryColor = document.documentElement.style.getPropertyValue('--primary').trim() || '#DF1783';
            if (expensesChart) expensesChart.destroy();
            expensesChart = new Chart(document.getElementById('expensesChart').getContext('2d'), { 
                type: 'line', 
                data: { 
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
                    datasets: [{ 
                        label: 'Monthly Renewal Costs', 
                        data: monthlyExpenses, 
                        backgroundColor: 'rgba(223, 23, 131, 0.1)', 
                        borderColor: primaryColor, 
                        borderWidth: 2, 
                        tension: 0.3, 
                        fill: true 
                    }] 
                }, 
                options: { 
                    responsive: true, 
                    plugins: { legend: { display: false } }, 
                    scales: { 
                        y: { beginAtZero: false, grid: { color: '#eee' } },
                        x: { grid: { color: '#eee' } }
                    } 
                } 
            });
            
            if (providersChart) providersChart.destroy();
            providersChart = new Chart(document.getElementById('providersChart').getContext('2d'), { 
                type: 'doughnut', 
                data: { 
                    labels: providerLabels, 
                    datasets: [{ 
                        data: providerData, 
                        backgroundColor: baseProviderColors, 
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }] 
                }, 
                options: { 
                    responsive: true, 
                    plugins: { legend: { position: 'bottom', labels: { color: '#333' } } } 
                } 
            });
            
            renderTopRenewals();
        };
        
        const generateGoogleCalendarLink = (domain) => {
            const text = encodeURIComponent(`Renew domain: ${domain.name}`);
            const date = new Date(domain.renewalDate).toISOString().slice(0, 10).replace(/-/g, '');
            const details = encodeURIComponent(`Reminder to renew ${domain.name} with ${domain.provider}. Annual cost: $${domain.renewalPrice}.`);
            return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${date}/${date}&details=${details}`;
        };
        
        const generateICal = (domainsToExport, singleFile = false) => {
            let icalContent = `BEGIN:VCALENDAR\nVERSION:2.0\n`;
            domainsToExport.forEach(domain => {
                const date = new Date(domain.renewalDate).toISOString().slice(0, 10).replace(/-/g, '');
                icalContent += `BEGIN:VEVENT\nDTSTART;VALUE=DATE:${date}\nDTEND;VALUE=DATE:${date}\nSUMMARY:Renew domain: ${domain.name}\nDESCRIPTION:Reminder to renew ${domain.name} with ${domain.provider}. Annual cost: $${domain.renewalPrice}.\nEND:VEVENT\n`;
            });
            icalContent += `END:VCALENDAR`;
            
            const blob = new Blob([icalContent], { type: 'text/calendar' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = singleFile ? 'all_renewals.ics' : `renew_${domainsToExport[0].name}.ics`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        const renderAll = () => {
            renderDomains();
            renderProviders();
            renderCalendar();
            updateDashboard();
            
            // Re-render Galleries with translations
            renderToolsPage();
            renderGallery('modalDomainRecsGrid', recommendedProvidersData, 'getDeal');
            renderGallery('modalProviderRecsGrid', recommendedProvidersData, 'getDeal');
            lucide.createIcons();
        };

        // --- AUTH EVENT HANDLERS ---
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });

        signupTab.addEventListener('click', () => {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        });

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const lang = settings.language || 'en';

            try {
                await auth.signInWithEmailAndPassword(email, password);
                loginForm.reset();
            } catch (error) {
                console.error("Login error:", error);
                showToast(translations[lang].loginError, 'danger');
            }
        });

        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const lang = settings.language || 'en';

            if (password !== confirmPassword) {
                showToast(translations[lang].passwordMismatch, 'danger');
                return;
            }

            try {
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;
                
                // Create initial settings for new user
                const defaultSettings = {
                    username: email.split('@')[0],
                    theme: 'pink',
                    customColor: null,
                    profilePicture: null,
                    language: 'en'
                };
                
                await db.collection('users')
                    .doc(user.uid)
                    .collection('settings')
                    .doc('userSettings')
                    .set(defaultSettings);
                
                signupForm.reset();
                showToast(translations[lang].accountCreated, 'success');
            } catch (error) {
                console.error("Signup error:", error);
                showToast(translations[lang].signupError, 'danger');
            }
        });

        logoutBtn.addEventListener('click', async () => {
            try {
                await auth.signOut();
                setActivePage('dashboard');
            } catch (error) {
                console.error("Logout error:", error);
            }
        });

        // Listen for auth state changes
        auth.onAuthStateChanged(handleAuthStateChange);

        // --- EVENT LISTENERS (modified for Firestore) ---
        document.body.addEventListener('click', (e) => { 
            const menuItem = e.target.closest('.menu-item');
            if (menuItem) { 
                setActivePage(menuItem.dataset.page); 
                mobileNav.classList.remove('open'); 
                navOverlay.classList.remove('open'); 
            } 
            
            const actionBtn = e.target.closest('.action-btn');
            if (actionBtn) {
                const domainId = actionBtn.dataset.id;
                if (!domainId) return;
                
                if (actionBtn.title === 'Edit') { 
                    const domain = domains.find(d => d.id == domainId);
                    openModal(domainModal, 'editDomain', 'saveProfile', domain); 
                } else if (actionBtn.title === 'Delete') { 
                    if (confirm('Are you sure?')) { 
                        deleteDomainFromFirestore(domainId);
                    } 
                } else if (actionBtn.title === 'Add to Google Calendar') {
                    const domain = domains.find(d => d.id == domainId);
                    window.open(generateGoogleCalendarLink(domain), '_blank');
                } else if (actionBtn.title === 'Download iCal Event') {
                    const domain = domains.find(d => d.id == domainId);
                    generateICal([domain]);
                } else if (actionBtn.title === 'Check DNS' || actionBtn.classList.contains('dns-btn')) {
                    const domain = domains.find(d => d.id == domainId);
                    if (domain) fetchDnsRecords(domain.name);
                } else if (actionBtn.title === 'Edit Provider') {
                     const provider = providers.find(p => p.id == domainId);
                     openModal(providerModal, 'editProvider', 'saveProfile', provider);
                } else if (actionBtn.title === 'Delete Provider') {
                    const provider = providers.find(p => p.id == domainId);
                    const isProviderInUse = domains.some(d => d.provider === provider.name);
                    if (isProviderInUse) {
                        showToast('Cannot delete a provider that has domains assigned to it.', 'danger');
                        return;
                    }
                    if (confirm(`Are you sure you want to delete ${provider.name}?`)) {
                        deleteProviderFromFirestore(domainId);
                    }
                } else if (actionBtn.title === 'Delete Notification') {
                    deleteNotificationFromFirestore(domainId);
                }
            }
        });

        menuToggle.addEventListener('click', () => { mobileNav.classList.add('open'); navOverlay.classList.add('open'); lucide.createIcons(); });
        mobileNavClose.addEventListener('click', () => { mobileNav.classList.remove('open'); navOverlay.classList.remove('open'); });
        navOverlay.addEventListener('click', () => { mobileNav.classList.remove('open'); navOverlay.classList.remove('open'); });
        
        // New event listeners for Recommendations tags & Quick DNS
        const toolFilterBtns = document.querySelectorAll('#toolsFilterTags .filter-tag');
        toolFilterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                toolFilterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentToolFilter = e.target.dataset.tag;
                renderToolsPage();
                lucide.createIcons();
            });
        });

        if(quickDnsBtn && quickDnsInput) {
            quickDnsBtn.addEventListener('click', () => {
                const domain = quickDnsInput.value.trim();
                if(domain) {
                    fetchDnsRecords(domain);
                } else {
                    showToast('Please enter a domain.', 'warning');
                }
            });
            quickDnsInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') quickDnsBtn.click();
            });
        }
        
        addDomainBtn.addEventListener('click', () => openModal(domainModal, 'addNewDomain', 'addDomain'));
        if (addDomainBtnSecondary) {
            addDomainBtnSecondary.addEventListener('click', () => openModal(domainModal, 'addNewDomain', 'addDomain'));
        }
        addProviderBtn.addEventListener('click', () => openModal(providerModal, 'addNewProvider', 'addProvider'));
        
        [domainModal, providerModal, credentialsModal, dnsModal, authModal].forEach(m => {
            if(m) {
                const closeBtn = m.querySelector('.modal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => closeModal(m));
                }
                window.addEventListener('click', (e) => { if (e.target === m) closeModal(m); });
            }
        });

        document.getElementById('domainProvider').addEventListener('change', function() {
            document.getElementById('otherProviderGroup').style.display = this.value === 'other' ? 'block' : 'none';
        });

        domainForm.addEventListener('submit', async function(e) { 
            e.preventDefault(); 
            let providerName = document.getElementById('domainProvider').value;
            
            // If "Other" is selected, handle new provider
            if (providerName === 'other') {
                const otherProviderName = document.getElementById('otherProvider').value.trim();
                if (otherProviderName) {
                    // Check if provider exists in the current user's providers
                    const existingProvider = providers.find(p => p.name.toLowerCase() === otherProviderName.toLowerCase());
                    
                    if (!existingProvider) {
                        // Create new provider
                        const newProvider = { 
                            id: Date.now().toString(), 
                            name: otherProviderName, 
                            url: '#', 
                            user: '', 
                            pass: '', 
                            uid: '' 
                        };
                        await saveProviderToFirestore(newProvider);
                    }
                    providerName = otherProviderName;
                }
            }

            const domainData = {
                id: document.getElementById('domainId').value || Date.now().toString(),
                name: document.getElementById('domainName').value,
                provider: providerName,
                purchaseDate: document.getElementById('purchaseDate').value,
                renewalDate: document.getElementById('renewalDate').value,
                purchasePrice: parseFloat(document.getElementById('purchasePrice').value),
                renewalPrice: parseFloat(document.getElementById('renewalPrice').value),
                autoRenew: document.getElementById('domainAutoRenew').checked
            };

            await saveDomainToFirestore(domainData);
            closeModal(domainModal);
            showToast('Domain saved successfully!');
        });

        providerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const providerId = document.getElementById('providerId').value;
            const newName = document.getElementById('providerName').value;

            const providerData = {
                id: providerId || Date.now().toString(),
                name: newName,
                url: document.getElementById('providerUrl').value,
                user: document.getElementById('providerUser').value,
                pass: document.getElementById('providerPass').value,
                uid: document.getElementById('providerUid').value
            };
            
            // If provider name changed, update all associated domains
            if (providerId) {
                const existingProvider = providers.find(p => p.id == providerId);
                if (existingProvider && existingProvider.name !== newName) {
                    // Update domain provider names
                    domains.forEach(domain => {
                        if (domain.provider === existingProvider.name) {
                            domain.provider = newName;
                            saveDomainToFirestore(domain);
                        }
                    });
                }
            }

            await saveProviderToFirestore(providerData);
            closeModal(providerModal);
            showToast('Provider saved successfully!');
        });
        
        settingsProfileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            settings.username = document.getElementById('settingUsername').value;
            saveSettingsToFirestore();
            applySettings();
            showToast('Profile updated!');
        });
        
        uploadPicBtn.addEventListener('click', () => profilePicUpload.click());

        removePicBtn.addEventListener('click', () => {
            settings.profilePicture = null;
            saveSettingsToFirestore();
            applySettings();
            showToast('Profile picture removed.');
        });

        profilePicUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    settings.profilePicture = event.target.result;
                    saveSettingsToFirestore();
                    applySettings();
                    showToast('Profile picture updated!');
                }
                reader.readAsDataURL(file);
            }
        });

        customColorPicker.addEventListener('input', (e) => {
            settings.theme = 'custom';
            settings.customColor = e.target.value;
            applySettings();
        });

        customColorPicker.addEventListener('change', (e) => {
            saveSettingsToFirestore(); 
            updateDashboard();
            showToast('Custom color applied!');
        });

        providersGrid.addEventListener('click', (e) => {
            const target = e.target.closest('.credentials-btn');
            if (target) {
                const providerId = target.dataset.id;
                const provider = providers.find(p => p.id == providerId);
                openModal(credentialsModal, '', '', provider);
            }
        });
        
        headerNotificationIcon.addEventListener('click', () => {
            if (!currentUser) {
                showAuthModal();
                return;
            }
            setActivePage('notifications');
        });
        
        translateBtn.addEventListener('click', () => {
            settings.language = settings.language === 'en' ? 'es' : 'en';
            saveSettingsToFirestore();
            setLanguage(settings.language);
        });
        
        if (costCard) {
            costCard.addEventListener('click', () => {
                costCard.classList.toggle('is-flipped');
            });
        }
        
        // Calendar navigation
        prevMonthBtn.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderCalendar();
        });
         nextMonthBtn.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderCalendar();
        });
        
        downloadIcsBtn.addEventListener('click', () => {
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            const renewalsInMonth = domains.filter(d => {
                const renewalDate = new Date(d.renewalDate);
                return renewalDate.getFullYear() === year && renewalDate.getMonth() === month;
            });
            if (renewalsInMonth.length > 0) {
                generateICal(renewalsInMonth, true);
            } else {
                showToast('No renewals this month to export.', 'danger');
            }
        });
         syncGCalBtn.addEventListener('click', () => {
            showToast('Google Calendar bulk sync is a premium feature not yet implemented.', 'warning');
        });

        if (togglePassword) {
            togglePassword.addEventListener('click', function() {
                const passwordInput = document.getElementById('providerPass');
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
                lucide.createIcons();
            });
        }

        // Make search auto-switch to the domains tab to show results
        searchInput.addEventListener('input', (e) => { 
            const term = e.target.value.toLowerCase(); 
            
            if (term.trim() !== '' && !document.getElementById('page-domains').classList.contains('active')) {
                setActivePage('domains');
            }
            
            renderDomains(domains.filter(d => 
                d.name.toLowerCase().includes(term) || 
                d.provider.toLowerCase().includes(term)
            )); 
        });

        // Handle the "Enter" key for better UX
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!document.getElementById('page-domains').classList.contains('active')) {
                    setActivePage('domains');
                }
            }
        });

        const setLanguage = (lang) => {
            document.querySelectorAll('[data-translate-key]').forEach(el => {
                const key = el.dataset.translateKey;
                const translation = translations[lang][key];
                if (translation) {
                    if (el.placeholder !== undefined) {
                        el.placeholder = translation;
                    } else {
                        const icon = el.querySelector('i');
                        if (icon && (el.classList.contains('btn') || el.parentElement.classList.contains('btn'))) {
                            const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                            if (textNode) textNode.textContent = ` ${translation}`;
                        } else {
                            el.textContent = translation;
                        }
                    }
                }
            });
            renderAll();
            lucide.createIcons();
        };

        const showToast = (message, type = 'success') => { 
            const t = document.getElementById('toast'); 
            t.textContent = message; 
            t.style.backgroundColor = type === 'danger' ? 'var(--danger)' : (type === 'warning' ? 'var(--warning)' : 'var(--dark)');
            t.style.borderLeftColor = type === 'danger' ? 'var(--danger)' : (type === 'warning' ? 'var(--warning)' : 'var(--primary)');
            t.classList.add('show'); 
            setTimeout(() => t.classList.remove('show'), 3000); 
        };
    });
