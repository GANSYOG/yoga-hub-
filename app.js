// Yoga Hub Application JavaScript

// Mock Data
const mockData = {
  users: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "student",
      email: "sarah@example.com",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616c64a6877?w=150",
      practiceStats: {
        totalMinutes: 1250,
        currentStreak: 7,
        longestStreak: 21,
        classesCompleted: 45,
        level: "Intermediate"
      },
      preferences: {
        disciplines: ["yoga", "meditation"],
        difficulty: "intermediate",
        duration: "30-60 minutes"
      }
    },
    {
      id: "2",
      name: "Priya Sharma",
      role: "instructor",
      email: "priya@example.com",
      profileImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150",
      specialties: ["Hatha Yoga", "Meditation", "Pranayama"],
      rating: 4.9,
      totalStudents: 1200,
      yearsExperience: 8,
      languages: ["English", "Hindi", "Sanskrit"],
      hourlyRate: 75,
      bio: "Certified yoga instructor with 8 years of experience in traditional Hatha yoga and meditation practices.",
      certifications: ["RYT-500", "Meditation Teacher Training"]
    },
    {
      id: "3",
      name: "Alex Chen",
      role: "seller",
      email: "alex@example.com",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      businessName: "Zen Wellness Products",
      totalProducts: 25,
      totalSales: 15600,
      rating: 4.7
    }
  ],
  instructors: [
    {
      id: "2",
      name: "Priya Sharma",
      specialty: "Hatha Yoga",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
      rating: 4.9,
      studentsCount: 1200,
      pricePerHour: 75,
      languages: ["English", "Hindi"],
      experience: "8 years",
      isSponsored: false,
      discipline: "yoga"
    },
    {
      id: "4",
      name: "Marcus Rodriguez",
      specialty: "Zumba Fitness",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51cd?w=300",
      rating: 4.8,
      studentsCount: 850,
      pricePerHour: 60,
      languages: ["English", "Spanish"],
      experience: "5 years",
      isSponsored: true,
      discipline: "zumba"
    },
    {
      id: "5",
      name: "Kenji Tanaka",
      specialty: "Karate",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300",
      rating: 4.9,
      studentsCount: 600,
      pricePerHour: 80,
      languages: ["English", "Japanese"],
      experience: "12 years",
      isSponsored: false,
      discipline: "karate"
    },
    {
      id: "6",
      name: "Lisa Park",
      specialty: "Vinyasa Yoga",
      image: "https://images.unsplash.com/photo-1506629905607-5f42b88b7e5f?w=300",
      rating: 4.8,
      studentsCount: 920,
      pricePerHour: 70,
      languages: ["English", "Korean"],
      experience: "6 years",
      isSponsored: false,
      discipline: "yoga"
    },
    {
      id: "7",
      name: "Carlos Martinez",
      specialty: "Latin Dance Fitness",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300",
      rating: 4.7,
      studentsCount: 650,
      pricePerHour: 55,
      languages: ["English", "Spanish"],
      experience: "4 years",
      isSponsored: false,
      discipline: "zumba"
    },
    {
      id: "8",
      name: "Yuki Sato",
      specialty: "Traditional Karate",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300",
      rating: 4.9,
      studentsCount: 480,
      pricePerHour: 85,
      languages: ["English", "Japanese"],
      experience: "15 years",
      isSponsored: false,
      discipline: "karate"
    }
  ],
  products: [
    {
      id: "1",
      name: "Premium Yoga Mat",
      category: "Equipment",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
      rating: 4.8,
      reviewCount: 324,
      description: "Non-slip premium yoga mat with alignment guides",
      inStock: true,
      sellerId: "3"
    },
    {
      id: "2",
      name: "Meditation Cushion Set",
      category: "Accessories",
      price: 65,
      originalPrice: 85,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      rating: 4.7,
      reviewCount: 189,
      description: "Comfortable meditation cushion with support pillow",
      inStock: true,
      sellerId: "3"
    },
    {
      id: "3",
      name: "Yoga Block Set",
      category: "Equipment",
      price: 35,
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
      rating: 4.6,
      reviewCount: 156,
      description: "High-density foam blocks for support and alignment",
      inStock: true,
      sellerId: "3"
    },
    {
      id: "4",
      name: "Resistance Band Set",
      category: "Equipment",
      price: 25,
      originalPrice: 35,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
      rating: 4.5,
      reviewCount: 98,
      description: "Complete set of resistance bands for strength training",
      inStock: true,
      sellerId: "3"
    }
  ],
  courses: [
    {
      id: "1",
      title: "Beginner's Guide to Hatha Yoga",
      instructor: "Priya Sharma",
      duration: "4 weeks",
      lessons: 12,
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
      price: 49,
      rating: 4.9,
      enrolledStudents: 856
    },
    {
      id: "2",
      title: "Advanced Vinyasa Flow",
      instructor: "Lisa Park",
      duration: "6 weeks",
      lessons: 18,
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
      price: 79,
      rating: 4.8,
      enrolledStudents: 432
    }
  ],
  poses: [
    {
      id: "1",
      name: "Downward Facing Dog",
      sanskritName: "Adho Mukha Svanasana",
      difficulty: "Beginner",
      benefits: ["Strengthens arms and shoulders", "Stretches hamstrings", "Improves circulation"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
      instructions: "Start on hands and knees, tuck toes under, lift hips up and back...",
      duration: "5-10 breaths"
    },
    {
      id: "2",
      name: "Warrior I",
      sanskritName: "Virabhadrasana I",
      difficulty: "Beginner",
      benefits: ["Strengthens legs", "Opens hips", "Improves balance"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
      instructions: "Step back with left foot, bend right knee, arms overhead...",
      duration: "5-8 breaths each side"
    }
  ],
  challenges: [
    {
      id: "1",
      title: "30-Day Yoga Challenge",
      description: "Transform your practice with daily yoga sessions",
      duration: "30 days",
      participants: 2847,
      difficulty: "All Levels",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
      startDate: "2025-10-01",
      prize: "Certificate + Yoga Mat"
    },
    {
      id: "2",
      title: "Mindfulness Meditation Week",
      description: "7 days of guided meditation practice",
      duration: "7 days",
      participants: 1523,
      difficulty: "All Levels",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      startDate: "2025-10-15",
      prize: "Meditation Cushion"
    }
  ]
};

// Application State
class AppState {
  constructor() {
    this.currentUser = null;
    this.cartItems = [];
    this.currentPage = 'home';
    this.isAuthenticated = false;
    this.init();
  }

  init() {
    // Check for existing session (simulated)
    const savedUser = localStorage.getItem('yogaHubUser');
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
        this.isAuthenticated = true;
      } catch (e) {
        localStorage.removeItem('yogaHubUser');
      }
    }
    
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem('yogaHubCart');
    if (savedCart) {
      try {
        this.cartItems = JSON.parse(savedCart);
      } catch (e) {
        localStorage.removeItem('yogaHubCart');
      }
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeApp();
      });
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    this.updateAuthUI();
    this.updateCartUI();
    this.initializeRouting();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Navigation links - updated to handle both href and onclick
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#/')) {
          const page = href.slice(2);
          this.navigateTo(page);
        }
      });
    });

    // Logo click
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateTo('home');
      });
    }

    // Cart button - Fixed to use the correct selector and event
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleCart();
      });
    }

    // User menu buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('button[onclick="showLoginModal()"]')) {
        e.preventDefault();
        this.showLoginModal();
      }
      if (e.target.closest('button[onclick="showRegisterModal()"]')) {
        e.preventDefault();
        this.showRegisterModal();
      }
    });

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (this.login(email, password)) {
          this.hideLoginModal();
          this.showNotification('Welcome back!', 'success');
        } else {
          this.showNotification('Invalid credentials. Try sarah@example.com', 'error');
        }
      });
    }

    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
          name: document.getElementById('registerName').value,
          email: document.getElementById('registerEmail').value,
          role: document.getElementById('registerUserType').value
        };
        
        if (this.register(userData)) {
          this.hideRegisterModal();
          this.showNotification('Account created successfully!', 'success');
        }
      });
    }

    // Profile dropdown
    const profileDropdown = document.querySelector('.profile-dropdown');
    if (profileDropdown) {
      profileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('profileDropdown');
        if (dropdown) {
          dropdown.classList.toggle('hidden');
        }
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      const dropdown = document.getElementById('profileDropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    });

    // Modal overlay clicks
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        if (e.target.closest('#loginModal')) {
          this.hideLoginModal();
        }
        if (e.target.closest('#registerModal')) {
          this.hideRegisterModal();
        }
      }
    });

    // Store tab switching
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  }

  login(email, password) {
    // Simulate login - accept any email/password for demo
    const user = mockData.users.find(u => u.email === email) || mockData.users[0];
    this.currentUser = user;
    this.isAuthenticated = true;
    localStorage.setItem('yogaHubUser', JSON.stringify(user));
    this.updateAuthUI();
    return true;
  }

  register(userData) {
    // Simulate registration
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      practiceStats: {
        totalMinutes: 0,
        currentStreak: 0,
        longestStreak: 0,
        classesCompleted: 0,
        level: "Beginner"
      }
    };
    mockData.users.push(newUser);
    this.currentUser = newUser;
    this.isAuthenticated = true;
    localStorage.setItem('yogaHubUser', JSON.stringify(newUser));
    this.updateAuthUI();
    return true;
  }

  logout() {
    this.currentUser = null;
    this.isAuthenticated = false;
    localStorage.removeItem('yogaHubUser');
    this.updateAuthUI();
    this.navigateTo('home');
  }

  addToCart(productId, quantity = 1) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cartItems.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        product,
        quantity,
        price: product.price
      });
    }
    
    this.saveCart();
    this.updateCartUI();
    this.showNotification('Product added to cart!', 'success');
  }

  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  updateCartQuantity(productId, quantity) {
    const item = this.cartItems.find(item => item.productId === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartUI();
      }
    }
  }

  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  saveCart() {
    localStorage.setItem('yogaHubCart', JSON.stringify(this.cartItems));
  }

  updateAuthUI() {
    const userMenu = document.getElementById('userMenu');
    const userProfile = document.getElementById('userProfile');
    const profileName = document.getElementById('profileName');
    const dashboardUserName = document.getElementById('dashboardUserName');

    if (this.isAuthenticated && this.currentUser) {
      if (userMenu) userMenu.classList.add('hidden');
      if (userProfile) userProfile.classList.remove('hidden');
      if (profileName) profileName.textContent = this.currentUser.name.split(' ')[0];
      if (dashboardUserName) dashboardUserName.textContent = this.currentUser.name.split(' ')[0];
    } else {
      if (userMenu) userMenu.classList.remove('hidden');
      if (userProfile) userProfile.classList.add('hidden');
    }
  }

  updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartContent = document.getElementById('cartContent');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    if (!cartContent) return;

    if (this.cartItems.length === 0) {
      cartContent.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-cart"></i>
          <p>Your cart is empty</p>
          <button class="btn btn--primary" onclick="appState.navigateTo('store')">Browse Products</button>
        </div>
      `;
      if (cartFooter) cartFooter.classList.add('hidden');
    } else {
      cartContent.innerHTML = this.cartItems.map(item => `
        <div class="cart-item" style="display: flex; gap: 12px; padding: 16px 0; border-bottom: 1px solid var(--color-border);">
          <img src="${item.product.image}" alt="${item.product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 4px 0; font-size: 14px;">${item.product.name}</h4>
            <p style="margin: 0; color: var(--color-text-secondary); font-size: 12px;">$${item.price} × ${item.quantity}</p>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button onclick="appState.updateCartQuantity('${item.productId}', ${item.quantity - 1})" style="background: var(--color-secondary); border: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">-</button>
              <span style="min-width: 20px; text-align: center; font-size: 12px;">${item.quantity}</span>
              <button onclick="appState.updateCartQuantity('${item.productId}', ${item.quantity + 1})" style="background: var(--color-secondary); border: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">+</button>
              <button onclick="appState.removeFromCart('${item.productId}')" style="background: var(--color-error); color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 12px; margin-left: auto;">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
      
      if (cartFooter) cartFooter.classList.remove('hidden');
      if (cartTotal) cartTotal.textContent = this.getCartTotal().toFixed(2);
    }
  }

  initializeRouting() {
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1) || '';
      const page = hash.startsWith('/') ? hash.slice(1) : hash || 'home';
      this.navigateTo(page, false);
    });

    // Initial route
    const hash = window.location.hash.slice(1) || '';
    const page = hash.startsWith('/') ? hash.slice(1) : hash || 'home';
    this.navigateTo(page, false);
  }

  navigateTo(page, updateHash = true) {
    if (updateHash) {
      window.location.hash = '#/' + page;
      return; // Let hashchange handler take over
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));

    // Handle different page types
    let targetPageId = page;
    
    if (page.includes('/')) {
      targetPageId = page.replace(/\//g, '-');
    }

    // Show target page or create it
    let pageElement = document.getElementById(targetPageId);
    if (pageElement) {
      pageElement.classList.remove('hidden');
      this.currentPage = page;
      this.loadPageContent(page);
    } else {
      // Create missing pages or handle special cases
      this.createOrHandlePage(page);
    }

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#/${page}` || (page === 'home' && href === '#/')) {
        link.classList.add('active');
      }
    });
  }

  createOrHandlePage(page) {
    // Handle special pages that need to be created
    if (page.startsWith('instructor/')) {
      this.createInstructorDetailPage(page.split('/')[1]);
    } else if (page.startsWith('product/')) {
      this.createProductDetailPage(page.split('/')[1]);
    } else if (page === 'learn') {
      this.createLearnPage();
    } else if (page === 'community') {
      this.createCommunityPage();
    } else if (page.startsWith('ai-tools/')) {
      this.createAIToolPage(page);
    } else {
      // Default to home if page doesn't exist
      this.navigateTo('home');
    }
  }

  createLearnPage() {
    const mainContent = document.getElementById('mainContent');
    const pageId = 'learn';
    
    let existingPage = document.getElementById(pageId);
    if (existingPage) {
      existingPage.classList.remove('hidden');
      this.currentPage = 'learn';
      return;
    }

    const pageHTML = `
      <div class="page" id="${pageId}">
        <section class="page-header">
          <div class="container">
            <h1>Learning Hub</h1>
            <p>Expand your knowledge with courses and pose library</p>
          </div>
        </section>
        
        <section class="learn-content">
          <div class="container">
            <div class="learn-tabs">
              <button class="tab-btn active" data-tab="courses">Courses</button>
              <button class="tab-btn" data-tab="poses">Pose Library</button>
            </div>
            
            <div class="tab-content" id="courses">
              <div class="courses-grid">
                ${mockData.courses.map(course => `
                  <div class="course-card">
                    <img src="${course.image}" alt="${course.title}" class="course-image">
                    <div class="course-info">
                      <h3 class="course-title">${course.title}</h3>
                      <p class="course-instructor">by ${course.instructor}</p>
                      <div class="course-meta">
                        <span class="course-duration">${course.duration}</span>
                        <span class="course-lessons">${course.lessons} lessons</span>
                        <span class="course-difficulty">${course.difficulty}</span>
                      </div>
                      <div class="course-rating">
                        <div class="stars">${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5 - Math.floor(course.rating))}</div>
                        <span>${course.rating} (${course.enrolledStudents} students)</span>
                      </div>
                      <div class="course-price">$${course.price}</div>
                      <button class="btn btn--primary btn--full-width">Enroll Now</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="tab-content hidden" id="poses">
              <div class="poses-grid">
                ${mockData.poses.map(pose => `
                  <div class="pose-card">
                    <img src="${pose.image}" alt="${pose.name}" class="pose-image">
                    <div class="pose-info">
                      <h3 class="pose-name">${pose.name}</h3>
                      <p class="pose-sanskrit">${pose.sanskritName}</p>
                      <div class="pose-difficulty">${pose.difficulty}</div>
                      <div class="pose-benefits">
                        <strong>Benefits:</strong>
                        <ul>
                          ${pose.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                      </div>
                      <button class="btn btn--outline btn--sm">Learn More</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    mainContent.insertAdjacentHTML('beforeend', pageHTML);
    document.getElementById(pageId).classList.remove('hidden');
    this.currentPage = 'learn';
  }

  createCommunityPage() {
    const mainContent = document.getElementById('mainContent');
    const pageId = 'community';
    
    let existingPage = document.getElementById(pageId);
    if (existingPage) {
      existingPage.classList.remove('hidden');
      this.currentPage = 'community';
      return;
    }

    const pageHTML = `
      <div class="page" id="${pageId}">
        <section class="page-header">
          <div class="container">
            <h1>Community Hub</h1>
            <p>Connect, challenge yourself, and grow together</p>
          </div>
        </section>
        
        <section class="community-content">
          <div class="container">
            <div class="community-tabs">
              <button class="tab-btn active" data-tab="challenges">Challenges</button>
              <button class="tab-btn" data-tab="forums">Forums</button>
              <button class="tab-btn" data-tab="dojos">Dojos & Crews</button>
            </div>
            
            <div class="tab-content" id="challenges">
              <div class="challenges-grid">
                ${mockData.challenges.map(challenge => `
                  <div class="challenge-card">
                    <img src="${challenge.image}" alt="${challenge.title}" class="challenge-image">
                    <div class="challenge-info">
                      <h3 class="challenge-title">${challenge.title}</h3>
                      <p class="challenge-description">${challenge.description}</p>
                      <div class="challenge-meta">
                        <span class="challenge-duration">${challenge.duration}</span>
                        <span class="challenge-participants">${challenge.participants} participants</span>
                        <span class="challenge-difficulty">${challenge.difficulty}</span>
                      </div>
                      <div class="challenge-prize">
                        <strong>Prize:</strong> ${challenge.prize}
                      </div>
                      <button class="btn btn--primary btn--full-width">Join Challenge</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="tab-content hidden" id="forums">
              <div class="forums-section">
                <div class="forum-category">
                  <h3>General Discussion</h3>
                  <p>Share your yoga journey and connect with fellow practitioners</p>
                  <div class="forum-stats">324 topics • 1,847 posts</div>
                </div>
                <div class="forum-category">
                  <h3>Pose Help & Tips</h3>
                  <p>Get help with challenging poses and share your techniques</p>
                  <div class="forum-stats">156 topics • 892 posts</div>
                </div>
                <div class="forum-category">
                  <h3>Nutrition & Wellness</h3>
                  <p>Discuss healthy eating and lifestyle choices</p>
                  <div class="forum-stats">89 topics • 456 posts</div>
                </div>
              </div>
            </div>
            
            <div class="tab-content hidden" id="dojos">
              <div class="dojos-section">
                <div class="dojo-card">
                  <h3>Morning Warriors</h3>
                  <p>Early morning practice group</p>
                  <div class="dojo-members">247 members</div>
                  <button class="btn btn--outline">Join Dojo</button>
                </div>
                <div class="dojo-card">
                  <h3>Flexibility Focus</h3>
                  <p>Dedicated to improving flexibility</p>
                  <div class="dojo-members">189 members</div>
                  <button class="btn btn--outline">Join Dojo</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    mainContent.insertAdjacentHTML('beforeend', pageHTML);
    document.getElementById(pageId).classList.remove('hidden');
    this.currentPage = 'community';
  }

  loadPageContent(page) {
    switch (page) {
      case 'home':
        this.loadHomePage();
        break;
      case 'store':
        this.loadStorePage();
        break;
      case 'ai-tools':
        this.loadAIToolsPage();
        break;
      case 'ai-tools/pose-trainer':
        this.loadPoseTrainerPage();
        break;
      case 'journey':
        this.loadDashboardPage();
        break;
      default:
        break;
    }
  }

  loadHomePage() {
    // Load featured instructors by discipline
    this.loadFeaturedInstructors('yoga', 'featuredYogaInstructors');
    this.loadFeaturedInstructors('zumba', 'featuredZumbaInstructors');
    this.loadFeaturedInstructors('karate', 'featuredKarateInstructors');
  }

  loadFeaturedInstructors(discipline, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const instructors = mockData.instructors
      .filter(instructor => instructor.discipline === discipline)
      .slice(0, 3);

    container.innerHTML = instructors.map(instructor => `
      <div class="instructor-card" onclick="appState.navigateTo('instructor/${instructor.id}')">
        <img src="${instructor.image}" alt="${instructor.name}" class="instructor-image">
        <div class="instructor-info">
          <h4 class="instructor-name">${instructor.name}</h4>
          <p class="instructor-specialty">${instructor.specialty}</p>
          <div class="instructor-meta">
            <div class="instructor-rating">
              <div class="stars">${'★'.repeat(Math.floor(instructor.rating))}${'☆'.repeat(5 - Math.floor(instructor.rating))}</div>
              <span>${instructor.rating}</span>
            </div>
            <div class="instructor-price">$${instructor.pricePerHour}/hr</div>
          </div>
          <div class="instructor-students">${instructor.studentsCount} students</div>
        </div>
        ${instructor.isSponsored ? '<div class="sponsored-badge">Sponsored</div>' : ''}
      </div>
    `).join('');
  }

  loadStorePage() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = mockData.products.map(product => `
      <div class="product-card" onclick="appState.navigateTo('product/${product.id}')">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h4 class="product-name">${product.name}</h4>
          <div class="product-price">
            <span class="product-price-current">$${product.price}</span>
            ${product.originalPrice ? `<span class="product-price-original">$${product.originalPrice}</span>` : ''}
          </div>
          <div class="product-rating">
            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
            <span>${product.rating}</span>
            <span class="product-reviews">(${product.reviewCount})</span>
          </div>
          <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); appState.addToCart('${product.id}')" style="margin-top: 12px; width: 100%;">Add to Cart</button>
        </div>
      </div>
    `).join('');
  }

  loadPoseTrainerPage() {
    this.initializePoseTrainer();
  }

  createInstructorDetailPage(instructorId) {
    const instructor = mockData.instructors.find(i => i.id === instructorId);
    if (!instructor) {
      this.navigateTo('home');
      return;
    }

    const mainContent = document.getElementById('mainContent');
    const pageId = `instructor-${instructorId}`;
    
    let existingPage = document.getElementById(pageId);
    if (existingPage) {
      existingPage.classList.remove('hidden');
      this.currentPage = `instructor/${instructorId}`;
      return;
    }

    const pageHTML = `
      <div class="page" id="${pageId}">
        <section class="instructor-detail-header" style="padding: 32px 0; background: var(--color-bg-1);">
          <div class="container">
            <div class="instructor-detail-content">
              <div class="instructor-detail-image">
                <img src="${instructor.image}" alt="${instructor.name}">
              </div>
              <div class="instructor-detail-info">
                <h1>${instructor.name}</h1>
                <p class="instructor-detail-specialty">${instructor.specialty}</p>
                <div class="instructor-detail-meta">
                  <div class="instructor-rating">
                    <div class="stars">${'★'.repeat(Math.floor(instructor.rating))}${'☆'.repeat(5 - Math.floor(instructor.rating))}</div>
                    <span>${instructor.rating} (${instructor.studentsCount} students)</span>
                  </div>
                  <div class="instructor-price">$${instructor.pricePerHour}/hour</div>
                  <div class="instructor-experience">${instructor.experience} experience</div>
                </div>
                <div class="instructor-languages">
                  <strong>Languages:</strong> ${instructor.languages.join(', ')}
                </div>
                <div class="instructor-actions">
                  <button class="btn btn--primary">Book Session</button>
                  <button class="btn btn--outline">Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    mainContent.insertAdjacentHTML('beforeend', pageHTML);
    document.getElementById(pageId).classList.remove('hidden');
    this.currentPage = `instructor/${instructorId}`;
  }

  createProductDetailPage(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) {
      this.navigateTo('store');
      return;
    }

    const mainContent = document.getElementById('mainContent');
    const pageId = `product-${productId}`;
    
    let existingPage = document.getElementById(pageId);
    if (existingPage) {
      existingPage.classList.remove('hidden');
      this.currentPage = `product/${productId}`;
      return;
    }

    const pageHTML = `
      <div class="page" id="${pageId}">
        <section class="product-detail" style="padding: 32px 0;">
          <div class="container">
            <div class="product-detail-content">
              <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="product-detail-info">
                <h1>${product.name}</h1>
                <div class="product-rating" style="margin-bottom: 16px;">
                  <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                  <span>${product.rating} (${product.reviewCount} reviews)</span>
                </div>
                <div class="product-price" style="margin-bottom: 16px;">
                  <span class="product-price-current">$${product.price}</span>
                  ${product.originalPrice ? `<span class="product-price-original">$${product.originalPrice}</span>` : ''}
                </div>
                <p class="product-description" style="margin-bottom: 24px;">${product.description}</p>
                <div class="product-actions">
                  <div class="quantity-selector" style="margin-bottom: 16px;">
                    <label>Quantity:</label>
                    <select id="productQuantity" style="margin-left: 8px;">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <button class="btn btn--primary" onclick="appState.addToCart('${product.id}', parseInt(document.getElementById('productQuantity').value))" style="margin-right: 12px;">Add to Cart</button>
                  <button class="btn btn--outline">Buy Now</button>
                </div>
                <div class="ai-bargain-section" style="margin-top: 24px; padding: 16px; background: var(--color-bg-1); border-radius: 12px;">
                  <h4>🤖 AI Bargain Assistant</h4>
                  <p>Let our AI help you negotiate the best price!</p>
                  <button class="btn btn--outline btn--sm" onclick="appState.startAIBargaining('${product.id}')">Start Negotiation</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    mainContent.insertAdjacentHTML('beforeend', pageHTML);
    document.getElementById(pageId).classList.remove('hidden');
    this.currentPage = `product/${productId}`;
  }

  initializePoseTrainer() {
    const startButton = document.getElementById('startCamera');
    const stopButton = document.getElementById('stopCamera');
    const video = document.getElementById('userVideo');
    const feedbackDiv = document.getElementById('poseFeedback');

    if (!startButton || !video || !feedbackDiv) return;

    let stream = null;

    const startHandler = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 640, height: 480 } 
        });
        video.srcObject = stream;
        
        feedbackDiv.innerHTML = '<p>Camera started! Stand in front of the camera and try the downward facing dog pose.</p>';
        
        setTimeout(() => {
          feedbackDiv.innerHTML = '<p>✅ Good alignment detected! Keep your hands shoulder-width apart.</p>';
        }, 3000);
        
        setTimeout(() => {
          feedbackDiv.innerHTML = '<p>💡 Tip: Try to straighten your legs more and push your hips up and back.</p>';
        }, 8000);
        
      } catch (error) {
        feedbackDiv.innerHTML = '<p>❌ Camera access denied. Please allow camera permissions to use the pose trainer.</p>';
      }
    };

    const stopHandler = () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        feedbackDiv.innerHTML = '<p>Camera stopped. Click "Start Camera" to begin pose analysis.</p>';
      }
    };

    startButton.removeEventListener('click', startHandler);
    stopButton.removeEventListener('click', stopHandler);
    startButton.addEventListener('click', startHandler);
    stopButton.addEventListener('click', stopHandler);
  }

  showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('active');
    }
  }

  hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.classList.remove('active');
      modal.classList.add('hidden');
    }
  }

  showRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('active');
    }
  }

  hideRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) {
      modal.classList.remove('active');
      modal.classList.add('hidden');
    }
  }

  toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
      cartSidebar.classList.toggle('active');
    }
  }

  startAIBargaining(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;

    const originalPrice = product.price;
    const discountPercentage = Math.floor(Math.random() * 15) + 5;
    const newPrice = Math.round(originalPrice * (1 - discountPercentage / 100));

    this.showNotification(
      `🤖 AI Negotiated a ${discountPercentage}% discount! New price: $${newPrice} (was $${originalPrice})`,
      'success'
    );
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: 16px 24px;
      box-shadow: var(--shadow-lg);
      z-index: 1000;
      max-width: 400px;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-out;
    `;
    
    if (type === 'success') {
      notification.style.borderLeftColor = 'var(--color-success)';
      notification.style.borderLeftWidth = '4px';
    } else if (type === 'error') {
      notification.style.borderLeftColor = 'var(--color-error)';
      notification.style.borderLeftWidth = '4px';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }
}

// Initialize app
const appState = new AppState();

// Global functions for HTML onclick handlers
function navigateTo(page) {
  appState.navigateTo(page);
}

function showLoginModal() {
  appState.showLoginModal();
}

function hideLoginModal() {
  appState.hideLoginModal();
}

function showRegisterModal() {
  appState.showRegisterModal();
}

function hideRegisterModal() {
  appState.hideRegisterModal();
}

function logout() {
  appState.logout();
}

function toggleCart() {
  appState.toggleCart();
}