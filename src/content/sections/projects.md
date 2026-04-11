---
title: Projects
order: 5
icon: 'rocket'
description: Shipped systems and capstone work
---

Selected work presented in a **Problem → Solution → Impact** format. Earlier capstone projects from my university years appear at the bottom for context on foundational experience.

---

## Web-Based E-Invoicing Platform
`2018` · Yifei Information Systems
**Stack**: `C# MVC` `WebAPI` `IIS` `DDNS` `MS SQL`

**Problem** — The company's e-invoicing module was stuck on-premise. Field sales staff couldn't issue invoices without physically returning to the office, creating day-long delays and lost revenue on urgent deals.

**Solution** — Designed and built a web layer on top of the existing ERP database using C# MVC and WebAPI, with DDNS to expose the service over the internet while keeping the SQL backend on-prem.

**Impact** — Sales teams could now issue invoices from any mobile browser at the customer site. Adopted across the client base as a standard offering.

---

## Internal Task Scheduling System
`2019 – 2020` · Sunfar Computer
**Stack**: `C#` `Windows Forms` `MS SQL`

**Problem** — Regional managers spent hours every morning manually compiling the previous day's sales data from multiple sources into Excel.

**Solution** — Built an internal scheduling service that ran report generation nightly and delivered consolidated daily-ops reports to managers before business hours.

**Impact** — Recovered ~1 hour/day per regional manager. Eliminated transcription errors from manual compilation.

---

## Payment API Integration — LinePay & E.SUN Pay
`2019 – 2020` · Sunfar Computer
**Stack**: `C#` `WebAPI` `LinePay API` `E.SUN Pay API`

**Problem** — The e-commerce checkout needed to support **LinePay** and **E.SUN Pay**, two of Taiwan's most widely used mobile payment platforms, to reduce cart abandonment for customers who preferred these rails.

**Solution** — Implemented the full integration lifecycle with both providers — sandbox testing, production handshake, error handling, and reconciliation — coordinating directly with the bank technical teams.

**Impact** — Delivered on schedule without production incidents. The storefront gained two native payment options that matched mainstream consumer expectations in Taiwan.

---

## iBeacon Indoor Localization × Mixed Reality
`2016` · Capstone — National Kaohsiung Normal University
**Stack**: `iBeacon (BLE)` `Unity` `MR`

Cross-school capstone combining BLE iBeacon positioning with Unity-based mixed-reality interaction. Explored how indoor positioning could trigger spatial MR experiences in museum and retail contexts. My contribution: BLE signal processing, coordinate mapping, and Unity integration.

---

## "Trace of Dragon" (龍之痕) — Unity 2D Action Platformer
`2015` · Capstone — National Kaohsiung Normal University
**Stack**: `Unity 2D` `C#`

Side-scrolling action game built end-to-end by a small student team. Led the character controller, level logic, and game state machine development, and collaborated with the art team on animation hooks and combat feedback.
