<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your portfolio site (`vhcsilva.github.io`). PostHog is initialized in `src/main.tsx` before the React app mounts, using environment variables stored in `.env`. Six custom events are now captured across three components, covering the full visitor journey from landing to contacting you.

| Event | Description | File |
|---|---|---|
| `contact_section_viewed` | Fires once when the contact section enters the viewport (≥30% visible) — top of the contact funnel | `src/components/ContactSection.tsx` |
| `contact_link_clicked` | Fires when a visitor clicks a social/contact channel link (GitHub, LinkedIn, email). Includes `channel` property | `src/components/ContactSection.tsx` |
| `cv_downloaded` | Fires when a visitor clicks the CV download link. Includes `locale` property | `src/components/ContactSection.tsx` |
| `project_link_clicked` | Fires when a visitor clicks a project external link. Includes `project` (name) and `link_type` (site/repo/figma) properties | `src/components/WorkSection.tsx` |
| `language_switched` | Fires when a visitor switches the site language. Includes `locale` (en/pt) property | `src/components/TopBar.tsx` |
| `nav_link_clicked` | Fires when a visitor clicks a navigation link. Includes `section` property | `src/components/TopBar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/395999/dashboard/1507218
- **Contact funnel: Viewed → Clicked**: https://us.posthog.com/project/395999/insights/QEODI7oX
- **CV downloads over time**: https://us.posthog.com/project/395999/insights/TjeXrtcN
- **Project link clicks by project**: https://us.posthog.com/project/395999/insights/TeehNPev
- **Language preference breakdown**: https://us.posthog.com/project/395999/insights/dh8lwvuL
- **Most visited sections via nav**: https://us.posthog.com/project/395999/insights/2PD7AJqL

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
