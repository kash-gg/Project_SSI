/**
 * Verifier Login Component
 * 
 * Login screen for credential verifiers.
 */
window.verifierLoginComponent = {
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
                        <div class="role-icon mb-4">✔️</div>
                        <h2>Verifier Access</h2>
                        <p>Login to verify academic credentials</p>
                    </div>

                    <form id="verifier-login-form" class="form-vertical" onsubmit="window.verifierLoginComponent.handleLogin(event)">
                        <div class="form-group">
                            <label for="org-id">Organization ID</label>
                            <input type="text" id="org-id" placeholder="org_12345" required>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="••••••••" required>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block mt-4">
                            Access Verification Portal
                        </button>
                    </form>

                    <div class="mt-4 text-center">
                        <small>Use <code>org_demo</code> / <code>demo_key</code> for demo</small>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        console.log('Verifier login initialized');
    },

    handleLogin(event) {
        event.preventDefault();
        const orgId = document.getElementById('org-id').value;
        const password = document.getElementById('password').value;

        // Mock backend validation
        if (orgId === 'org_demo' && password === 'demo_key') {
            window.app.showToast('Access granted', 'success');
            // Navigate to Verifier Dashboard
            navigateTo('verifier');
        } else {
            window.app.showToast('Invalid credentials. Try org_demo / demo_key', 'error');
        }
    }
};
