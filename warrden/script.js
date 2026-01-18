// Settings button navigation
document.getElementById('settings-btn').addEventListener('click', function() {
    window.location.href = 'settings.html';
});

// Back button navigation (on settings page)
if (document.getElementById('back-btn')) {
    document.getElementById('back-btn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

// Logout button functionality
if (document.getElementById('logout-btn')) {
    document.getElementById('logout-btn').addEventListener('click', function() {
        // Since there's no authentication system, redirect to index.html
        window.location.href = 'index.html';
    });
}

// Existing dashboard functionality (if any) can be added here
// For now, placeholder for floor overview, insights, etc.
