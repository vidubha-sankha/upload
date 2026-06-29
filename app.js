document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // Navigation & Scroll Effects
    // ==========================================
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Sticky Header and Active link tracking on scroll
    window.addEventListener('scroll', () => {
        // Sticky header background
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link tracking (Scrollspy)
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });


    // ==========================================
    // Interactive SQL/Python Terminal Simulation
    // ==========================================
    const terminalBody = document.getElementById('terminal-body');
    const typedCodeSpan = document.getElementById('typed-code');
    
    // Command and script code blocks to type out
    const terminalScript = [
        { type: 'comment', text: '# Import analytics library' },
        { type: 'code', text: 'import pandas as pd' },
        { type: 'comment', text: '# Fetch churn data via database connection' },
        { type: 'code', text: 'df = pd.read_sql("SELECT clv, churn FROM customer_metrics", db)' },
        { type: 'comment', text: '# Calculate segment average CLV' },
        { type: 'code', text: 'print(df.groupby("churn")["clv"].mean().round(2))' }
    ];

    const executionOutputText = `
Out[1]:
churn     clv_mean
0         $3,420.50 (Active)
1         $1,180.25 (Churned)
    `;

    let scriptIndex = 0;
    let charIndex = 0;
    let currentLineEl = null;
    let promptEl = null;

    function startTerminalTyping() {
        if (scriptIndex < terminalScript.length) {
            const currentItem = terminalScript[scriptIndex];
            
            // Create a new line element if we just started this step
            if (charIndex === 0) {
                const lineWrapper = document.createElement('div');
                lineWrapper.className = 'terminal-line';
                
                promptEl = document.createElement('span');
                promptEl.className = 'terminal-prompt';
                promptEl.textContent = '>>> ';
                lineWrapper.appendChild(promptEl);

                currentLineEl = document.createElement('span');
                currentLineEl.className = currentItem.type === 'comment' ? 'terminal-comment' : 'terminal-code';
                lineWrapper.appendChild(currentLineEl);

                // Insert before the typing cursor prompt line
                const cursorPromptLine = typedCodeSpan.closest('.terminal-line');
                terminalBody.insertBefore(lineWrapper, cursorPromptLine);
            }

            // Type the next character
            if (charIndex < currentItem.text.length) {
                currentLineEl.textContent += currentItem.text.charAt(charIndex);
                charIndex++;
                setTimeout(startTerminalTyping, currentItem.type === 'comment' ? 30 : 60);
            } else {
                // Finished typing this line. Reset for next
                scriptIndex++;
                charIndex = 0;
                setTimeout(startTerminalTyping, 600); // short delay between commands
            }
        } else {
            // All script lines typed. Trigger mock execution output
            setTimeout(simulateExecution, 500);
        }
    }

    function simulateExecution() {
        // Output textual results
        const outputWrapper = document.createElement('div');
        outputWrapper.className = 'terminal-line terminal-output';
        outputWrapper.style.whiteSpace = 'pre';
        outputWrapper.textContent = executionOutputText;
        
        const cursorPromptLine = typedCodeSpan.closest('.terminal-line');
        terminalBody.insertBefore(outputWrapper, cursorPromptLine);

        // Render graphical SVG output directly in the terminal
        setTimeout(renderTerminalVisualization, 800);
    }

    function renderTerminalVisualization() {
        const visualizationWrapper = document.createElement('div');
        visualizationWrapper.className = 'terminal-visualization';
        
        const title = document.createElement('div');
        title.className = 'visualization-title';
        title.textContent = 'Visualization Output: Average CLV Comparison';
        visualizationWrapper.appendChild(title);

        const svgCode = `
            <svg width="100%" height="100px" viewBox="0 0 350 100" class="terminal-chart" xmlns="http://www.w3.org/2000/svg">
                <!-- Grid lines -->
                <line x1="80" y1="15" x2="80" y2="85" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                <line x1="80" y1="85" x2="330" y2="85" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                
                <!-- Bar 1 (Active) -->
                <rect x="80" y="25" width="0" height="20" rx="3" fill="#00f2fe" class="animated-bar-1">
                    <animate attributeName="width" from="0" to="210" dur="1.2s" fill="freeze" calcMode="spline" keySplines="0.1 0.8 0.2 1" keyTimes="0 1" />
                </rect>
                <text x="70" y="38" fill="#94a3b8" font-family="monospace" font-size="8" text-anchor="end">Active</text>
                <text x="295" y="38" fill="#f8fafc" font-family="monospace" font-size="8" font-weight="bold">$3,420</text>
                
                <!-- Bar 2 (Churned) -->
                <rect x="80" y="55" width="0" height="20" rx="3" fill="#8a2be2" class="animated-bar-2">
                    <animate attributeName="width" from="0" to="72" dur="1.2s" fill="freeze" calcMode="spline" keySplines="0.1 0.8 0.2 1" keyTimes="0 1" />
                </rect>
                <text x="70" y="68" fill="#94a3b8" font-family="monospace" font-size="8" text-anchor="end">Churned</text>
                <text x="160" y="68" fill="#94a3b8" font-family="monospace" font-size="8">$1,180</text>
            </svg>
        `;
        
        visualizationWrapper.innerHTML += svgCode;
        
        const cursorPromptLine = typedCodeSpan.closest('.terminal-line');
        terminalBody.insertBefore(visualizationWrapper, cursorPromptLine);
        
        // Trigger opacity transition
        setTimeout(() => {
            visualizationWrapper.classList.add('active');
        }, 100);
    }

    // Start terminal typing simulation with a slight initial delay
    setTimeout(startTerminalTyping, 1000);


    // ==========================================
    // Project Card Tabs System
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.project-card');
            const tabId = button.getAttribute('data-tab');
            
            // Deactivate all tab buttons in this project card
            card.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Deactivate all tab panes in this project card
            card.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Activate current button and pane
            button.classList.add('active');
            const targetPane = card.querySelector(`#${tabId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });


    // ==========================================
    // Project Filtering & Skill Cross-Highlight
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const interactiveSkills = document.querySelectorAll('.skill-name');

    function filterProjects(filterValue) {
        // Update active classes on filter buttons
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filterValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Toggle card highlighting
        projectCards.forEach(card => {
            const cardSkills = card.getAttribute('data-skills').split(',');
            
            if (filterValue === 'all') {
                card.classList.remove('highlighted', 'dimmed');
            } else if (cardSkills.includes(filterValue)) {
                card.classList.add('highlighted');
                card.classList.remove('dimmed');
            } else {
                card.classList.add('dimmed');
                card.classList.remove('highlighted');
            }
        });
    }

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Cross-filtering: Click on a skill inside the list to filter projects using it!
    interactiveSkills.forEach(skillEl => {
        skillEl.addEventListener('click', () => {
            const skillTag = skillEl.getAttribute('data-skill');
            if (skillTag) {
                filterProjects(skillTag);
                // Smooth scroll down to projects section
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });


    // ==========================================
    // Skills Progress Bar Animations (Intersection Observer)
    // ==========================================
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate bars to their widths
                skillBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    bar.style.width = level;
                });
                // Unobserve since animation runs once
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // trigger when 15% visible
    });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }


    // ==========================================
    // Contact Form Validations & Simulation
    // ==========================================
    const contactForm = document.getElementById('portfolio-contact-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');
    const successMessage = document.getElementById('form-success-message');

    // Validation helper
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    function checkField(inputEl) {
        let isValid = true;
        const value = inputEl.value.trim();
        
        if (inputEl.required && value === '') {
            isValid = false;
        } else if (inputEl.type === 'email' && value !== '' && !validateEmail(value)) {
            isValid = false;
        }

        if (isValid) {
            inputEl.classList.remove('invalid');
        } else {
            inputEl.classList.add('invalid');
        }
        
        return isValid;
    }

    // Input listeners for real-time validation feedback
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => checkField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    checkField(input);
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let formIsValid = true;
            
            // Double check all fields
            inputs.forEach(input => {
                if (!checkField(input)) {
                    formIsValid = false;
                }
            });

            if (formIsValid) {
                // Start submit action simulation
                const originalBtnText = formSubmitBtn.innerHTML;
                formSubmitBtn.disabled = true;
                formSubmitBtn.style.opacity = '0.7';
                formSubmitBtn.innerHTML = `
                    Sending...
                    <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                        <path d="M4 12a8 8 0 0 1 8-8"></path>
                    </svg>
                `;

                // Add spinner animation style dynamically if it doesn't exist
                if (!document.getElementById('spinner-styles')) {
                    const style = document.createElement('style');
                    style.id = 'spinner-styles';
                    style.textContent = `
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `;
                    document.head.appendChild(style);
                }

                // Simulate network request (1.5 seconds)
                setTimeout(() => {
                    // Hide form container smoothly
                    contactForm.style.transition = 'opacity 0.4s ease';
                    contactForm.style.opacity = '0';
                    
                    setTimeout(() => {
                        contactForm.style.display = 'none';
                        successMessage.style.display = 'block';
                    }, 400);

                }, 1500);
            } else {
                // Focus on the first invalid field
                const firstInvalid = contactForm.querySelector('.form-input.invalid');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
    }
});
