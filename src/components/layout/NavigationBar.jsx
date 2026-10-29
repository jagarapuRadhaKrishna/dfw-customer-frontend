'use client';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavigationBar.css';
import { megaMenuData } from './megaMenuData';

export default function NavigationBar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [megaMenuTop, setMegaMenuTop] = useState(0);
  const navRef = useRef(null);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomepage = pathname === '/';

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  }, [clearCloseTimer]);

  const open = useCallback((index) => {
    clearCloseTimer();
    if (isHomepage && navRef.current && typeof window !== 'undefined') {
      setMegaMenuTop(navRef.current.getBoundingClientRect().bottom);
    }
    setOpenIndex(index);
  }, [clearCloseTimer, isHomepage]);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open(index);
    } else if (e.key === 'Escape') {
      setOpenIndex(null);
    }
  }, [open]);

  useEffect(() => {
    const onScroll = () => setOpenIndex(null);
    
    // Close mega menu when modal opens or any time a modal is visible
    const checkAndCloseMenu = () => {
      const modals = document.querySelectorAll('.auth-prompt-backdrop');
      modals.forEach(modal => {
        const style = window.getComputedStyle(modal);
        if (style.display !== 'none' && style.opacity !== '0') {
          setOpenIndex(null);
        }
      });
    };
    
    // Listen for modal backdrop visibility
    const observer = new MutationObserver(() => {
      checkAndCloseMenu();
    });
    
    const config = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
      attributeOldValue: false,
    };
    
    observer.observe(document.body, config);
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Also check periodically in case MutationObserver misses changes
    const interval = setInterval(checkAndCloseMenu, 300);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearCloseTimer();
      observer.disconnect();
      clearInterval(interval);
    };
  }, [clearCloseTimer]);

  const active = useMemo(() =>
    openIndex !== null ? megaMenuData[openIndex] : null,
    [openIndex]
  );

  return (
    <div
      className={`qo2Gn ${isHomepage ? 'sticky-homepage' : 'non-sticky'}`}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div className="OseV0">
        <div className="Nnf8G" ref={navRef}>
          <div className="KwSZR">
            <div className="pmv2N">
              <div className="gysRT">
                {megaMenuData.map((category, index) => (
                  <div
                    key={category.title}
                    className="zOdGP"
                    onMouseEnter={() => open(index)}
                  >
                    <div
                      className={`P75B4${openIndex === index ? ' WgZOC' : ''}`}
                      role="button"
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded={openIndex === index}
                      aria-controls="mega-menu-panel"
                      data-testid={`navigation-desktop-category-${index}`}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      {category.url && category.url.startsWith('/') ? (
                        <Link href={category.url}>{category.title}</Link>
                      ) : (
                        <a
                          href={category.url || '#'}
                          onClick={(e) => {
                            if (!category.url) e.preventDefault();
                          }}
                        >
                          {category.title}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {active && (
        <div
          id="mega-menu-panel"
          className="mega-menu"
          style={isHomepage ? { top: megaMenuTop } : {}}
          data-visible="true"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpenIndex(null);
          }}
        >
          <div className="mega-menu-inner">
            <ul className="mega-columns">
              {active.sections.map((section, sIdx) => (
                <li key={sIdx} className="mega-column">
                  {section.url && section.url.startsWith('/') ? (
                    <Link className="mega-column-heading" href={section.url}>
                      {section.heading}
                    </Link>
                  ) : (
                    <a className="mega-column-heading" href={section.url || '#'} onClick={(e) => !section.url && e.preventDefault()}>
                      {section.heading}
                    </a>
                  )}
                  <ul className="mega-column-items">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        {item.url && item.url.startsWith('/') ? (
                          <Link href={item.url}>{item.label}</Link>
                        ) : (
                          <a href={item.url || '#'} onClick={(e) => !item.url && e.preventDefault()}>{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {active.promos && active.promos.length > 0 && (
              <div className="mega-promos">
                {active.promos.map((promo, pIdx) => (
                  promo.url && promo.url.startsWith('/') ? (
                    <Link key={pIdx} className="mega-promo" href={promo.url}>
                      <img src={promo.src} alt={promo.alt} loading="lazy" />
                    </Link>
                  ) : (
                    <a key={pIdx} className="mega-promo" href={promo.url || '#'} onClick={(e) => !promo.url && e.preventDefault()}>
                      <img src={promo.src} alt={promo.alt} loading="lazy" />
                    </a>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
