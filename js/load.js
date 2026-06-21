(function () {
    const content = window.siteContent || {};

    const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    }[char]));

    const byDateDesc = (a, b) => String(b.date || b.year).localeCompare(String(a.date || a.year));
    const byYearDesc = (a, b) => Number(b.year || 0) - Number(a.year || 0);
    const validLinks = (links) => (links || []).filter((link) => link && link.url && link.url !== "#");

    function getStoredTheme() {
        try {
            return {
                savedTheme: localStorage.getItem("site-theme"),
                legacyDark: localStorage.getItem("light-mode") === "dark"
            };
        } catch (error) {
            return { savedTheme: null, legacyDark: false };
        }
    }

    function setStoredTheme(theme) {
        try {
            localStorage.setItem("site-theme", theme);
            localStorage.removeItem("light-mode");
        } catch (error) {
            return;
        }
    }

    function setActiveNavigation() {
        const page = document.body.dataset.page;
        document.querySelectorAll(".site-nav a[data-page]").forEach((link) => {
            if (link.dataset.page === page) {
                link.setAttribute("aria-current", "page");
            }
        });
    }

    function applyTheme(theme) {
        const isDark = theme === "dark";
        document.body.classList.toggle("theme-dark", isDark);
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.textContent = isDark ? "Light" : "Dark";
            button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        });
    }

    function initTheme() {
        const { savedTheme, legacyDark } = getStoredTheme();
        applyTheme(savedTheme || (legacyDark ? "dark" : "light"));

        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.addEventListener("click", () => {
                const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
                setStoredTheme(next);
                applyTheme(next);
            });
        });
    }

    function renderProfileCards() {
        const profile = content.profile;
        if (!profile) return;

        document.querySelectorAll("[data-profile-card]").forEach((target) => {
            const links = validLinks(profile.links);
            target.innerHTML = `
                <img class="profile-photo" src="${escapeHtml(profile.photo)}" alt="${escapeHtml(profile.shortName)}">
                <div>
                    <p class="profile-name">${escapeHtml(profile.shortName)}</p>
                    <p class="profile-title">${escapeHtml(profile.title)}</p>
                    <p class="profile-location">${escapeHtml(profile.location)}</p>
                    <div class="link-row">
                        ${links.map(iconLinkMarkup).join("")}
                        <a class="cv-link" href="${escapeHtml(profile.cv)}">CV</a>
                    </div>
                </div>
            `;
        });

        document.querySelectorAll("[data-profile-name]").forEach((target) => {
            target.textContent = profile.name;
        });

        document.querySelectorAll("[data-profile-title]").forEach((target) => {
            target.textContent = `${profile.title} at ${profile.affiliation}`;
        });

        document.querySelectorAll("[data-profile-bio]").forEach((target) => {
            target.innerHTML = profile.bio.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
        });

        document.querySelectorAll("[data-profile-interests]").forEach((target) => {
            target.innerHTML = profile.interests.map((interest) => `<li>${escapeHtml(interest)}</li>`).join("");
        });

        document.querySelectorAll("[data-personal-note]").forEach((target) => {
            target.textContent = profile.personalNote;
        });
    }

    function linkMarkup(link) {
        return `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`;
    }

    function iconLinkMarkup(link) {
        if (!link.icon) return linkMarkup(link);
        return `
            <a class="icon-link" href="${escapeHtml(link.url)}" aria-label="${escapeHtml(link.label)}" title="${escapeHtml(link.label)}">
                <img src="${escapeHtml(link.icon)}" alt="">
            </a>
        `;
    }

    function pillLinkMarkup(link) {
        return `<a class="pill-link" href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`;
    }

    function tagMarkup(tag) {
        return `<span class="tag">${escapeHtml(tag)}</span>`;
    }

    function publicationMarkup(pub) {
        const links = validLinks(pub.links);
        const titleUrl = links[0] ? links[0].url : "";
        const title = titleUrl
            ? `<a class="publication-title" href="${escapeHtml(titleUrl)}">${escapeHtml(pub.title)}</a>`
            : `<span class="publication-title">${escapeHtml(pub.title)}</span>`;
        return `
            <li class="publication-item">
                <div class="publication-venue">${escapeHtml(pub.year)}<br>${escapeHtml(pub.venue)}</div>
                <div>
                    ${title}
                    <p class="publication-authors">${escapeHtml(pub.authors)}</p>
                    <p class="publication-source">${escapeHtml(pub.source)}</p>
                    ${links.length ? `<div class="publication-links">${links.map(pillLinkMarkup).join("")}</div>` : ""}
                </div>
            </li>
        `;
    }

    function renderPublications() {
        const publications = [...(content.publications || [])].sort(byYearDesc);
        const highlights = publications.filter((pub) => pub.highlight);

        document.querySelectorAll("[data-highlight-publications]").forEach((target) => {
            const limit = Number(target.dataset.limit || highlights.length);
            target.innerHTML = highlights.slice(0, limit).map(publicationMarkup).join("");
        });

        document.querySelectorAll("[data-publication-years]").forEach((select) => {
            const years = [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a);
            select.innerHTML = `<option value="all">All years</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
        });

        document.querySelectorAll("[data-all-publications]").forEach((target) => {
            const select = document.querySelector("[data-publication-years]");
            const render = () => {
                const selected = select ? select.value : "all";
                const filtered = selected === "all"
                    ? publications
                    : publications.filter((pub) => String(pub.year) === selected);
                target.innerHTML = filtered.map(publicationMarkup).join("");
            };

            if (select) {
                select.addEventListener("change", render);
            }
            render();
        });
    }

    function renderUpdates() {
        const updates = [...(content.updates || [])].sort(byDateDesc);
        document.querySelectorAll("[data-updates]").forEach((target) => {
            const limit = Number(target.dataset.limit || updates.length);
            target.innerHTML = updates.slice(0, limit).map((update) => {
                const text = update.link
                    ? `<a href="${escapeHtml(update.link)}">${escapeHtml(update.text)}</a>`
                    : escapeHtml(update.text);
                return `
                    <li class="update-item">
                        <div class="date">${escapeHtml(update.date)}</div>
                        <div>${text}</div>
                    </li>
                `;
            }).join("");
        });
    }

    function renderCareer() {
        const career = content.career || [];
        document.querySelectorAll("[data-career]").forEach((target) => {
            target.innerHTML = career.map((item) => {
                const title = item.link
                    ? `<a class="career-title" href="${escapeHtml(item.link)}">${escapeHtml(item.title)}</a>`
                    : `<span class="career-title">${escapeHtml(item.title)}</span>`;
                return `
                    <li class="career-item">
                        <div class="date">${escapeHtml(item.period)}</div>
                        <div>
                            ${title}
                            <p class="career-meta">${escapeHtml(item.organization)}${item.location ? ` / ${escapeHtml(item.location)}` : ""}</p>
                            <p class="career-description">${escapeHtml(item.description)}</p>
                            ${(item.highlights || []).length ? `<ul class="career-highlights">${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul>` : ""}
                        </div>
                    </li>
                `;
            }).join("");
        });
    }

    function renderService() {
        const service = [...(content.service || [])].sort(byYearDesc);
        document.querySelectorAll("[data-service-stats]").forEach((target) => {
            target.innerHTML = (content.serviceStats || []).map((stat) => `
                <div class="stat">
                    <span class="stat-number">${escapeHtml(stat.value)}</span>
                    <span class="stat-label">${escapeHtml(stat.label)}</span>
                </div>
            `).join("");
        });

        document.querySelectorAll("[data-service]").forEach((target) => {
            target.innerHTML = service.map((item) => `
                <li class="service-item">
                    <div class="publication-venue">${escapeHtml(item.year)}<br>${escapeHtml(item.venue)}</div>
                    <div>
                        <a class="publication-title" href="${escapeHtml(item.link)}">${escapeHtml(item.role)}</a>
                        ${item.description ? `<p class="service-role">${escapeHtml(item.description)}</p>` : ""}
                    </div>
                </li>
            `).join("");
        });
    }

    function renderProjects() {
        const projects = [...(content.projects || [])].sort(byYearDesc);
        document.querySelectorAll("[data-projects]").forEach((target) => {
            target.innerHTML = projects.map((project) => `
                <li class="project-item">
                    <img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}">
                    <div>
                        <a class="project-title" href="${validLinks(project.links)[0] ? escapeHtml(validLinks(project.links)[0].url) : "#"}">${escapeHtml(project.title)}</a>
                        <p class="project-meta">${escapeHtml(project.year)}</p>
                        <p class="project-summary">${escapeHtml(project.summary)}</p>
                        <p class="project-detail">${escapeHtml(project.details)}</p>
                        <div class="tag-list">${(project.tags || []).map(tagMarkup).join("")}</div>
                        ${validLinks(project.links).length ? `<div class="project-links">${validLinks(project.links).map(pillLinkMarkup).join("")}</div>` : ""}
                    </div>
                </li>
            `).join("");
        });
    }

    function renderPosts() {
        const posts = [...(content.posts || [])].sort(byDateDesc);
        document.querySelectorAll("[data-posts]").forEach((target) => {
            if (!posts.length) {
                target.innerHTML = `
                    <div class="empty-state">
                        Blog posts will live here soon. I plan to use this space for research notes, implementation write-ups, and short reflections on work in progress.
                    </div>
                `;
                return;
            }

            target.innerHTML = `<ul class="post-list">${posts.map((post) => `
                <li class="post-item">
                    <div class="date">${escapeHtml(post.date)}</div>
                    <div>
                        <a class="post-title" href="${escapeHtml(post.path)}">${escapeHtml(post.title)}</a>
                        <p class="post-excerpt">${escapeHtml(post.excerpt || "")}</p>
                        <div class="tag-list">${(post.tags || []).map(tagMarkup).join("")}</div>
                    </div>
                </li>
            `).join("")}</ul>`;
        });
    }

    function initResearchTabs() {
        const tabs = [...document.querySelectorAll("[data-research-tab]")];
        const panels = [...document.querySelectorAll("[data-research-panel]")];
        if (!tabs.length || !panels.length) return;

        const setActiveView = (view, updateHash) => {
            const activeView = view === "service" ? "service" : "publications";

            tabs.forEach((tab) => {
                tab.setAttribute("aria-pressed", String(tab.dataset.researchTab === activeView));
            });

            panels.forEach((panel) => {
                const isHidden = panel.dataset.researchPanel !== activeView;
                panel.hidden = isHidden;
                panel.classList.toggle("is-hidden", isHidden);
            });

            if (updateHash) {
                try {
                    const baseUrl = window.location.href.split("#")[0];
                    history.replaceState(null, "", activeView === "service" ? `${baseUrl}#service` : baseUrl);
                } catch (error) {
                    return;
                }
            }
        };

        window.setResearchView = setActiveView;

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                setActiveView(tab.dataset.researchTab, true);
            });
        });

        document.addEventListener("click", (event) => {
            const tab = event.target.closest("[data-research-tab]");
            if (!tab) return;
            setActiveView(tab.dataset.researchTab, true);
        });

        window.addEventListener("hashchange", () => {
            setActiveView(window.location.hash === "#service" ? "service" : "publications", false);
        });

        setActiveView(window.location.hash === "#service" ? "service" : "publications", false);
    }

    function init() {
        setActiveNavigation();
        initTheme();
        renderProfileCards();
        renderPublications();
        renderUpdates();
        renderCareer();
        renderService();
        renderProjects();
        renderPosts();
        initResearchTabs();
        document.body.classList.remove("is-loading");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
}());
