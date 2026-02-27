# Expedition Page – Content Flow & Sequence

**Page:** `expedition.html`  
**Purpose:** Ladakh Bike Expedition 2026 – detail + related packages.

---

## 1. Header (global)
- Logo → Home, About Us, **Expedition** (active), Pricing & Dates, Policies, Things to Carry, Contact
- Mobile: hamburger menu

---

## 2. Hero
- **Background:** Expedition hero image (Ladakh / mountain road)
- **Title:** Ladakh Bike Expedition 2026
- **Subtitle:** Manali to Srinagar – 11 days across the world's highest motorable roads
- **Animation:** AOS fade-up on title, then subtitle

---

## 3. Our Tour Packages
- **Tag:** Discover Ladakh  
- **Title:** Our Tour Packages  
- **Desc:** Handcrafted itineraries for every kind of traveller — from serene lakes to high-altitude bike expeditions.  
- **Cards (4):**
  1. **Leh 3N/4D** – Popular | 4 Days, From ₹12,999 | Enquire Now  
  2. **Nubra Valley Tour** – 2–3 Days, From ₹9,499 | Enquire Now  
  3. **Pangong Lake Tour** – 2 Days, From ₹7,999 | Enquire Now  
  4. **Khardung La Bike Adventure** – Adventure | Multi-day, Custom quote | Enquire Now  
- **Layout:** Grid, stagger AOS delay (0, 80, 160, 240 ms)

---

## 4. The Expedition (intro)
- **Tag:** The Expedition  
- **Title:** High-Altitude Motorcycle Adventure  
- **Body:** One para – thrill seekers, highest motorable roads, Himalayan culture and landscapes.  
- **Image:** EXPEDITION INTRO IMAGE (Bikes focus) – full width, rounded, shadow  
- **Animation:** Header → paragraph → image (stagger)

---

## 5. Destinations Covered
- **Tag:** Route Highlights  
- **Title:** Destinations Covered  
- **Cards (7):** Leh | Khardung La | Nubra Valley | Pangong Lake | Hanle | Tso Moriri | Umling La  
- **Per card:** Image + name + short line (e.g. “5,359 m pass”, “Sand dunes & camels”)  
- **Layout:** Grid, stagger AOS (0–360 ms)

---

## 6. Route Plan (11-Day Journey)
- **Tag:** Route Plan  
- **Title:** 11-Day Journey  
- **Route line:** Manali → Sarchu → Leh → Nubra → Pangong → Hanle → Tso Moriri → Leh → Kargil → Srinagar  
- **Dates line:** Multiple departure dates (May – September 2026)  
- **Style:** Single bar, centered text

---

## 7. Day by Day (itinerary)
- **Tag:** Day by Day  
- **Title:** 11 Day Ride Across Himalayas  
- **Hint:** Click any day — the bike moves and that day's details appear below.  
- **Road timeline:** Horizontal line + bike icon + 11 day buttons (Day 1 … Day 11)  
- **Day content (dynamic):** Image + title + description + “Overnight: …”  
- **CTAs:** Pricing & Dates | Book Now  
- **Behaviour:** JS updates content + image on day button click; bike position moves with day.

---

## 8. Inclusions & Exclusions
- **Tag:** What's Included  
- **Title:** Inclusions & Exclusions  
- **Two columns:**
  - **Included:** Bike, fuel, backup vehicle, luggage vehicle, accommodation, breakfast & dinner, oxygen & first aid, permits, jackets & helmets, Volvo (Manali–Delhi)  
  - **Excluded:** Adventure activities, personal expenses, entry tickets, travel insurance, bike security deposit, 5% GST  
- **CTA:** Full Policies (→ policies.html)

---

## 9. Footer (global)
- Brand name, location (New Delhi & Leh), quote  
- Quick Links | Info | Contact  
- Social: Instagram, Facebook, YouTube  
- Copyright

---

## 10. WhatsApp float
- Fixed bottom-right: “Chat on WhatsApp” – pre-filled text for Ladakh Expedition 2026

---

## Flow summary (top to bottom)

| # | Section              | Content focus                          |
|---|----------------------|----------------------------------------|
| 1 | Hero                 | Expedition title + route one-liner     |
| 2 | Tour Packages        | 4 Ladakh packages (Leh, Nubra, Pangong, Khardung La) |
| 3 | Expedition intro     | What the trip is + hero image          |
| 4 | Destinations         | 7 route highlights (Leh → Umling La)   |
| 5 | Route Plan           | 11-day route + dates                   |
| 6 | Day by Day           | Interactive timeline + day detail      |
| 7 | Inclusions/Exclusions| What’s in + out + Policies link        |
| 8 | Footer + WhatsApp    | Links, contact, chat                   |

---

## Animation (AOS)
- Sections: `data-aos="fade-up"`  
- Duration: 600 ms (hero 700 ms)  
- Stagger: 0–360 ms on cards/lists  
- `once: true` – animate once on scroll into view

---

## Dependencies
- **CSS:** `styles.css`, `assets/styles.css`, AOS CSS  
- **JS:** AOS init, `assets/script.js`, inline day-data + journey (day click + bike position)
