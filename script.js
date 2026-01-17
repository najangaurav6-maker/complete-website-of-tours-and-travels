// ====== Data: multiple packages per destination ======
const PACKAGES = [
  // Kashmir
  { id:'kashmir-classic', destination:'Kashmir', title:'Kashmir Classic', duration:'3N/4D', price:'₹18,999', image:'assets/images/kashmir.jpg',
    highlights:['Houseboat stay','Shikara ride','Gulmarg day trip'],
    itinerary:['Day 1: Srinagar houseboat & shikara','Day 2: Mughal gardens','Day 3: Gulmarg gondola','Day 4: Departure'],
    inclusions:['Stay with breakfast','Airport transfers','Local transport'],
    exclusions:['Flights','Lunch/dinner','Personal expenses'] },
  { id:'kashmir-paradise', destination:'Kashmir', title:'Kashmir Paradise Tour', duration:'7N/8D', price:'₹28,999', image:'assets/images/kashmir.jpg',
    highlights:['Srinagar','Gulmarg','Pahalgam','Sonmarg'],
    itinerary:['Day 1: Srinagar','Day 2: Gardens','Day 3: Gulmarg','Day 4: Pahalgam','Day 5: Sonmarg','Day 6: Leisure','Day 7: Markets','Day 8: Departure'],
    inclusions:['Stay with breakfast','Transfers','Guide (select days)'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'kashmir-honeymoon', destination:'Kashmir', title:'Kashmir Honeymoon Special', duration:'5N/6D', price:'₹24,999', image:'assets/images/kashmir.jpg',
    highlights:['Romantic houseboat','Mughal gardens','Sunset shikara'],
    itinerary:['Day 1: Houseboat','Day 2: Srinagar city','Day 3: Gulmarg','Day 4: Pahalgam','Day 5: Leisure','Day 6: Departure'],
    inclusions:['Stay with breakfast','Transfers','Decor on arrival'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'kashmir-sonmarg', destination:'Kashmir', title:'Sonmarg Special', duration:'4N/5D', price:'₹21,500', image:'assets/images/kashmir.jpg',
    highlights:['Thajiwas Glacier','Sind River','Meadow walks'],
    itinerary:['Day 1: Srinagar','Day 2: Sonmarg','Day 3: Glacier trek','Day 4: Leisure','Day 5: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },

  // Ladakh
  { id:'ladakh-explorer', destination:'Ladakh', title:'Ladakh Explorer', duration:'6N/7D', price:'₹39,999', image:'assets/images/ladakh.jpg',
    highlights:['Leh','Nubra Valley','Pangong Lake','Khardung La'],
    itinerary:['Day 1: Arrive Leh','Day 2: Monasteries','Day 3: Nubra via Khardung La','Day 4: Turtuk/Leisure','Day 5: Pangong','Day 6: Leh','Day 7: Departure'],
    inclusions:['Stay with breakfast','Inner line permits','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'ladakh-circuit', destination:'Ladakh', title:'Ladakh–Manali–Kashmir Circuit', duration:'10N/11D', price:'₹54,999', image:'assets/images/ladakh.jpg',
    highlights:['Srinagar','Kargil','Leh','Nubra','Pangong','Manali'],
    itinerary:['Day 1: Srinagar','Day 2: Kargil','Day 3: Leh','Day 4: Nubra','Day 5: Pangong','Day 6: Leh','Day 7: Sarchu/Jispa','Day 8: Manali','Day 9: Solang','Day 10: Leisure','Day 11: Departure'],
    inclusions:['Stay with breakfast','Transport','Permits'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'ladakh-luxury', destination:'Ladakh', title:'Luxurious Escape to Ladakh', duration:'5N/6D', price:'₹45,715', image:'assets/images/ladakh.jpg',
    highlights:['Premium stays','Leh','Pangong','Monasteries'],
    itinerary:['Day 1: Leh (5★)','Day 2: City & monasteries','Day 3: Pangong','Day 4: Leisure','Day 5: Local culture','Day 6: Departure'],
    inclusions:['Premium stay','Breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'ladakh-picturesque', destination:'Ladakh', title:'Picturesque Ladakh', duration:'6N/7D', price:'₹23,671', image:'assets/images/ladakh.jpg',
    highlights:['Homestay + camp','Leh','Nubra','Pangong'],
    itinerary:['Day 1: Leh','Day 2: Monasteries','Day 3: Nubra','Day 4: Turtuk','Day 5: Pangong','Day 6: Leh','Day 7: Departure'],
    inclusions:['Stay with breakfast','Transport','Permits'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'ladakh-exquisite', destination:'Ladakh', title:'Exquisite Ladakh Trip', duration:'4N/5D', price:'₹39,439', image:'assets/images/ladakh.jpg',
    highlights:['Magnetic Hill','Pathar Sahib','Sham Valley'],
    itinerary:['Day 1: Leh','Day 2: Sham Valley','Day 3: Culture day','Day 4: Pangong (optional)','Day 5: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },

  // Manali
  { id:'manali-adventure', destination:'Manali', title:'Manali Adventure', duration:'5N/6D', price:'₹22,499', image:'assets/images/manali.jpg',
    highlights:['Solang Valley','Rohtang Pass','Paragliding','Old Manali'],
    itinerary:['Day 1: Arrive','Day 2: Solang','Day 3: Rohtang','Day 4: Adventure day','Day 5: Markets','Day 6: Departure'],
    inclusions:['Stay with breakfast','Local transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'manali-honeymoon', destination:'Manali', title:'Manali Honeymoon', duration:'4N/5D', price:'₹19,999', image:'assets/images/manali.jpg',
    highlights:['Cozy stays','Snow activities','Cafes & markets'],
    itinerary:['Day 1: Check-in','Day 2: Solang','Day 3: Rohtang','Day 4: Leisure','Day 5: Departure'],
    inclusions:['Stay with breakfast','Decor on arrival'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'manali-relax', destination:'Manali', title:'Relaxing Manali', duration:'4N/5D', price:'₹15,001', image:'assets/images/manali.jpg',
    highlights:['Hadimba Temple','Naggar Castle','Manikaran'],
    itinerary:['Day 1: Arrive','Day 2: Local sights','Day 3: Naggar','Day 4: Manikaran','Day 5: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'himachal-retreat', destination:'Manali', title:'Himachal Retreat (Shimla + Manali)', duration:'5N/6D', price:'₹16,762', image:'assets/images/manali.jpg',
    highlights:['Shimla','Mall Road','Solang','Viceregal Lodge'],
    itinerary:['Day 1: Shimla','Day 2: Kufri','Day 3: Manali','Day 4: Solang','Day 5: Local','Day 6: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'manali-volvo', destination:'Manali', title:'Kullu Manali Volvo Tour', duration:'3N/4D', price:'₹6,999', image:'assets/images/manali.jpg',
    highlights:['Volvo travel','Kullu','Manali sightseeing'],
    itinerary:['Day 1: Volvo to Manali','Day 2: Sightseeing','Day 3: Kullu','Day 4: Return'],
    inclusions:['Volvo tickets','Stay with breakfast'],
    exclusions:['Flights','Lunch/dinner'] },

  // Himachal
  { id:'himachal-highlights', destination:'Himachal', title:'Himachal Highlights', duration:'6N/7D', price:'₹27,999', image:'assets/images/himachal.jpg',
    highlights:['Dharamshala','McLeod Ganj','Dalhousie','Khajjiar'],
    itinerary:['Day 1: Dharamshala','Day 2: McLeod','Day 3: Dalhousie','Day 4: Khajjiar','Day 5: Leisure','Day 6: Markets','Day 7: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'himachal-family', destination:'Himachal', title:'Himachal Family Tour', duration:'7N/8D', price:'₹32,999', image:'assets/images/himachal.jpg',
    highlights:['Shimla','Manali','Dharamshala','Dalhousie'],
    itinerary:['Day 1: Shimla','Day 2: Kufri','Day 3: Manali','Day 4: Solang','Day 5: Dharamshala','Day 6: McLeod','Day 7: Dalhousie','Day 8: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'shimla-best', destination:'Himachal', title:'Best of Shimla', duration:'3N/4D', price:'₹14,269', image:'assets/images/himachal.jpg',
    highlights:['Mall Road','Kufri','Viceregal Lodge'],
    itinerary:['Day 1: Shimla','Day 2: Kufri','Day 3: City sights','Day 4: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'himachal-scenic', destination:'Himachal', title:'Scenic Himachal Tour', duration:'7N/8D', price:'₹25,999', image:'assets/images/himachal.jpg',
    highlights:['Shimla','Manali','Dharamshala','Dalhousie'],
    itinerary:['Day 1: Shimla','Day 2: Kufri','Day 3: Manali','Day 4: Solang','Day 5: Dharamshala','Day 6: McLeod','Day 7: Dalhousie','Day 8: Departure'],
    inclusions:['Stay with breakfast','Transport'],
    exclusions:['Flights','Lunch/dinner'] },
  { id:'himachal-honeymoon', destination:'Himachal', title:'Himachal Honeymoon Special', duration:'5N/6D', price:'₹21,500', image:'assets/images/himachal.jpg',
    highlights:['Romantic stays','Snow activities','Cedar forests'],
    itinerary:['Day 1: Check-in','Day 2: Shimla','Day 3: Manali','Day 4: Solang','Day 5: Leisure','Day 6: Departure'],
    inclusions:['Stay with breakfast','Decor on arrival'],
    exclusions:['Flights','Lunch/dinner'] },
];

// ====== Helpers ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) hamburger.addEventListener('click', () => {
  const visible = getComputedStyle(navLinks).display !== 'none';
  navLinks.style.display = visible ? 'none' : 'flex';
});

// Card HTML
function cardHTML(pkg) {
  return `
  <article class="card">
    <div class="card-media" style="position:relative;">
      <img src="${pkg.image}" alt="${pkg.destination} ${pkg.title}">
      <span class="badge">${pkg.duration}</span>
    </div>
    <div class="card-body">
      <h3>${pkg.title}</h3>
      <p>${pkg.highlights.slice(0,3).join(', ')}...</p>
    </div>
    <div class="card-footer">
      <span class="price">${pkg.price}</span>
      <a class="book-btn" href="package.html?id=${pkg.id}">Details</a>
    </div>
  </article>`;
}

// ====== Home: featured ======
function renderFeatured() {
  const el = document.getElementById('featuredGrid');
  if (!el) return;
  const featured = [
    'kashmir-classic','ladakh-explorer','manali-adventure','himachal-highlights'
  ].map(id => PACKAGES.find(p => p.id === id));
  el.innerHTML = featured.map(cardHTML).join('');
}

// ====== Packages by destination ======
function renderPackagesByDestination() {
  const map = {
    'grid-kashmir': 'Kashmir',
    'grid-ladakh': 'Ladakh',
    'grid-manali': 'Manali',
    'grid-himachal': 'Himachal'
  };
  Object.entries(map).forEach(([gridId, dest]) => {
    const el = document.getElementById(gridId);
    if (!el) return;
    const items = PACKAGES.filter(p => p.destination === dest);
    el.innerHTML = items.map(cardHTML).join('');
  });
}

// ====== Package detail ======
function renderPackageDetail() {
  const container = document.getElementById('packageDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const pkg = PACKAGES.find(p => p.id === id) || PACKAGES[0];

  // JSON-LD Product schema
  const schemaEl = document.getElementById('productSchema');
  if (schemaEl) {
    schemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": pkg.title,
      "description": `${pkg.destination} — ${pkg.highlights.join(', ')}`,
      "brand": { "@type": "Brand", "name": "Travel Yatra" },
      "offers": {
        "@type": "Offer",
        "price": pkg.price.replace(/[^\d]/g,''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    });
  }

  container.innerHTML = `
    <div class="section-header">
      <h2>${pkg.title}</h2>
      <p class="lead">${pkg.destination} · ${pkg.duration} · ${pkg.price}</p>
    </div>
    <div class="card" style="overflow:hidden;">
      <img src="${pkg.image}" alt="${pkg.title}" style="width:100%; max-height:360px; object-fit:cover;">
      <div class="card-body">
        <h3>Highlights</h3>
        <ul>${pkg.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        <h3>Itinerary</h3>
        <ol>${pkg.itinerary.map(d => `<li>${d}</li>`).join('')}</ol>
        <div class="grid" style="grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <h3>Inclusions</h3>
            <ul>${pkg.inclusions.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>Exclusions</h3>
            <ul>${pkg.exclusions.map(e => `<li>${e}</li>`).join('')}</ul>
          </div>
        </div>
        <div style="margin-top:16px;">
          <a class="btn" href="booking.html">Book this package</a>
          <a class="btn secondary" href="packages.html">Back to packages</a>
        </div>
      </div>
    </div>`;
}

// ====== Booking ======
function populateBookingSelect() {
  const sel = document.getElementById('packageSelect');
  if (!sel) return;
  sel.innerHTML = `<option value="">Select a package</option>` +
    PACKAGES.map(p => `<option value="${p.id}">${p.title} (${p.duration})</option>`).join('');
}
function handleBookingForm() {
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('bookingStatus');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    status.textContent = 'Booking submitted. We will contact you shortly.';
    status.style.color = '#0f766e';
    form.reset();
    // Hook: send to EmailJS/Formspree/Sheets API
    console.log('Booking data:', data);
  });
}

// ====== Reviews ======
const REVIEWS = [
  { name: 'Priya S.', rating: 5, text: 'Kashmir Classic was dreamy—houseboat sunsets and Gulmarg views!', avatar: 'assets/images/avatars/user1.jpg' },
  { name: 'Arjun M.', rating: 4, text: 'Ladakh Explorer: Pangong was unreal. Good pacing and permits handled.', avatar: 'assets/images/avatars/user2.jpg' }
];
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <article class="card review-card">
      <div class="card-body" style="display:flex; gap:12px; align-items:center;">
        <img src="${r.avatar}" alt="${r.name}" class="avatar">
        <div>
          <strong>${r.name}</strong>
          <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <p class="card-text">${r.text}</p>
        </div>
      </div>
    </article>`).join('');
}
function handleReviewForm() {
  const form = document.getElementById('reviewForm');
  const status = document.getElementById('reviewStatus');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    REVIEWS.push({ name: data.name, rating: Number(data.rating), text: data.text, avatar: 'assets/images/avatars/user1.jpg' });
    renderReviews();
    status.textContent = 'Thanks! Your review has been submitted.';
    status.style.color = '#0f766e';
    form.reset();
    // Hook: send to API if needed
  });
}

// ====== Init ======
window.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderPackagesByDestination();
  renderPackageDetail();
  populateBookingSelect();
  handleBookingForm();
  renderReviews();
  handleReviewForm();
});
