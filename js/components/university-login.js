/**
 * University Login Component
 * 
 * Login screen for credential issuers.
 */
window.universityLoginComponent = {
    render() {
        return `
            <div class="max-w-md mx-auto fade-in-up">
                <div class="mb-6">
                    <button onclick="navigateTo('role-select')" class="btn-back">
                        ← Back to Roles
                    </button>
                </div>

                <div class="card">
                    <div class="text-center mb-8">
                        <div class="role-icon mb-4">🎓</div>
                        <h2>University Login</h2>
                        <p>Access the credential issuance portal</p>
                    </div>

                    <form id="uni-login-form" class="form-vertical" onsubmit="window.universityLoginComponent.handleLogin(event)">
                        <div class="form-group">
                            <label for="email">University Email</label>
                            <input type="email" id="email" placeholder="admin@university.edu" required>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" required>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block mt-4">
                            Login into Portal
                        </button>
                    </form>
                    
                    <div class="mt-4 text-center">
                        <small>Use <code>admin@university.edu</code> / <code>password</code> for demo</small>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        console.log('University login initialized');
    },

    handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mock backend validation
        if (email === 'admin@university.edu' && password === 'password') {
            window.app.showToast('Login successful', 'success');
            // Navigate to Issuer Dashboard
            navigateTo('issuer');
        } else {
            window.app.showToast('Invalid credentials. Try admin@university.edu / password', 'error');
        }
    }
};
