import { useEffect, useState, type ReactNode } from "react";
import type { PageData } from "../model";
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(
    () => setDark(document.documentElement.dataset.theme === "dark"),
    [],
  );
  function toggle() {
    const next = document.documentElement.dataset.theme !== "dark";
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("mastery-theme", next ? "dark" : "light");
    } catch {}
    const url = new URL(location.href);
    url.searchParams.set("theme", next ? "dark" : "light");
    try {
      history.replaceState(null, "", url);
    } catch {}
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      aria-pressed={dark}
    >
      <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
export function Shell({
  page,
  children,
}: {
  page: PageData;
  children: ReactNode;
}) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <aside className={`sidebar ${menu ? "sidebar-open" : ""}`}>
        <a className="wordmark" href="index.html">
          <span className="brand-symbol" aria-hidden="true">
            m<span>·</span>
          </span>
          <span>
            Mastery<span className="wordmark-sub">FRAMEWORK</span>
          </span>
        </a>
        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-controls="course-navigation"
        >
          {menu ? "Close contents ×" : "Course contents ☰"}
        </button>
        <div className="sidebar-content" id="course-navigation">
          <a
            href="index.html"
            className="overview-link"
            aria-current={page.id === "index" ? "page" : undefined}
          >
            Overview <span aria-hidden="true">↗</span>
          </a>
          {page.courses.map((course) => (
            <div className="course-nav" key={course.id}>
              <h2>{course.title}</h2>
              {course.groups.map((group) => (
                <div className="nav-group" key={group.title}>
                  <p>{group.title}</p>
                  <nav aria-label={group.title}>
                    {group.lessons.map((id) => {
                      const l = page.navigation.find((l) => l.id === id);
                      return l ? (
                        <a
                          href={`${id}.html`}
                          key={id}
                          aria-current={page.id === id ? "page" : undefined}
                          onClick={() => setMenu(false)}
                        >
                          {l.navTitle}
                        </a>
                      ) : null;
                    })}
                  </nav>
                </div>
              ))}
            </div>
          ))}
          <div className="sidebar-resources">
            <a
              href="revision.html"
              aria-current={page.id === "revision" ? "page" : undefined}
            >
              Revision sheet ↗
            </a>
            <a
              href="library.html"
              aria-current={page.id === "library" ? "page" : undefined}
            >
              Source library ↗
            </a>
            <a
              href="design-system.html"
              aria-current={page.id === "design-system" ? "page" : undefined}
            >
              Design system ↗
            </a>
          </div>
        </div>
        <p className="sidebar-foot">
          Understand it.
          <br />
          Use it. Return to it.
        </p>
      </aside>
      <div className="site-content">
        <header className="topbar">
          <span>
            {page.kind === "lesson" &&
            page.lesson.courseId === "subject-examples"
              ? "THE METHOD IN A SUBJECT"
              : "A FIELD GUIDE TO LEARNING"}
          </span>
          <ThemeToggle />
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer>
          <span>Mastery Framework · Learn through practice</span>
          <div>
            <a href="origins.html">Origins & evidence</a>
            <a href="design-system.html">Design system</a>
          </div>
        </footer>
      </div>
    </>
  );
}
