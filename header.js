document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links .btn-signin-nav').forEach((link) => {
        if (link.parentElement.tagName === 'LI') {
            link.parentElement.remove();
        } else {
            link.remove();
        }
    });

    const portalLink = document.querySelector('.portal-notice a[href="https://apscchs.org/app"], .portal-button[href="https://apscchs.org/app"]');

    if (portalLink) {
        portalLink.className = 'portal-float-button';
        portalLink.setAttribute('aria-label', 'Open My APSC Portal');
        portalLink.setAttribute('title', 'My APSC Portal');
        portalLink.setAttribute('target', '_blank');
        portalLink.setAttribute('rel', 'noopener');
        portalLink.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 5h6v14h-6"/><path d="M11 12h8"/><path d="m15 8 4 4-4 4"/><path d="M5 5h4v14H5z"/></svg>';
        document.body.append(portalLink);
    }

    document.querySelectorAll('.portal-notice').forEach((notice) => notice.remove());
});
