import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, ArrowRight, ShieldCheck, Building2, Route, FileCheck2, Trees } from 'lucide-react';

const enquiry = (m='Assalam o Alaikum, please share current DHA Phase 9 Prism Lahore property details.') => 'https://wa.me/923224751952?text='+encodeURIComponent(m);
const sectors = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R'];
const sizes = [
 ['5 Marla','Residential'],
 ['10 Marla','Residential'],
 ['1 Kanal','Residential'],
 ['2 Kanal','Residential'],
 ['4 Marla','Commercial'],
 ['8 Marla','Commercial']
];
export default function PhaseNineGuide(){
 return <main className="phase7-page phase9-prism-page">
  <section className="phase7-hero"><div className="phase7-hero-content">
   <p className="phase9-kicker">ZAIGHAM PROPERTIES · DHA LAHORE</p>
   <h1>DHA Phase 9 Prism <em>Lahore</em></h1>
   <p>A practical guide to Phase 9 Prism’s sectors, residential and commercial plot categories, location connections and essential checks before buying or investing.</p>
   <div className="phase9-actions"><a className="phase9-btn phase9-btn-gold" href={enquiry('Please share available DHA Phase 9 Prism plots, current asking prices and sector details.')}><MessageCircle size={18}/> Ask for Current Rates</a><a className="phase9-btn phase9-btn-outline" href="#prism-sectors">Explore Sectors <ArrowRight size={18}/></a></div>
   <div className="phase9-hero-meta"><span><MapPin size={16}/> Lahore, Pakistan</span><span><ShieldCheck size={16}/> Verify plot records</span></div>
  </div></section>
  <section className="phase7-section"><p className="phase9-kicker">PROJECT OVERVIEW</p><h2>About DHA Phase 9 Prism</h2>
   <p>DHA Phase 9 Prism is a large DHA Lahore development with multiple residential sectors and designated commercial areas. The supplied competitor material describes a broad range of plot categories, including 5 and 10 Marla, 1 Kanal and 2 Kanal residential plots, alongside commercial options and the Oval Commercial Complex. Plot availability, development and possession can differ by sector and individual plot.</p>
   <div className="phase9-feature-grid">
    <article><Building2/><h3>Residential Options</h3><p>Compare plot size, sector, street location, possession and development status before shortlisting.</p></article>
    <article><Trees/><h3>Commercial Areas</h3><p>Commercial zones and the Oval Complex should be assessed by exact location, frontage and permitted use.</p></article>
    <article><Route/><h3>Location Links</h3><p>Review access towards Lahore Ring Road and connecting routes, then confirm the route to the exact plot.</p></article>
   </div>
  </section>
  <section id="prism-sectors" className="phase7-section phase7-alt"><p className="phase9-kicker">SECTOR DIRECTORY</p><h2>Phase 9 Prism Sectors</h2><p>The source material lists the following sector labels. Always match the sector and plot number against an authentic, current DHA map before a transaction.</p>
   <div className="phase9-sector-grid">{sectors.map((s,i)=><motion.div key={s} className="phase9-sector-card" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.025}}><span>SECTOR</span><strong>{s}</strong><Link to={'/dha-lahore/phase-9/sector/'+s.toLowerCase()+'/'}>View sector guide <ArrowRight size={14}/></Link></motion.div>)}</div>
  </section>
  <section className="phase7-section"><p className="phase9-kicker">PLOT CATEGORIES</p><h2>Residential & Commercial Plot Sizes</h2>
   <div className="phase7-table-wrap"><table className="phase7-table"><thead><tr><th>Plot size</th><th>Category</th><th>What to verify</th></tr></thead><tbody>{sizes.map(([size,type])=><tr key={size+type}><td>{size}</td><td>{type}</td><td>Sector availability, plot status, location and applicable dues</td></tr>)}</tbody></table></div>
   <p className="phase9-note">These are plot categories referenced in the supplied source, not a confirmation that every size is currently available in every sector.</p>
  </section>
  <section className="phase7-section phase7-alt"><p className="phase9-kicker">LOCATION & ACCESS</p><h2>Phase 9 Prism Location</h2><p>Phase 9 Prism is part of DHA Lahore’s wider western expansion. The competitor material highlights connections around Lahore Ring Road and nearby DHA areas. Use live navigation and verify the specific sector entrance, access conditions and travel route before visiting.</p>
   <div className="phase9-location-card"><div><MapPin size={25}/><h3>DHA Phase 9 Prism · Lahore</h3><p>Open a map search and confirm the correct sector or plot location with the seller before setting out.</p><a href="https://www.google.com/maps/search/?api=1&query=DHA+Phase+9+Prism+Lahore" target="_blank" rel="noreferrer">Open Google Maps <ArrowRight size={16}/></a></div><div className="phase9-map-placeholder"><MapPin size={38}/><span>Phase 9 Prism</span><small>DHA Lahore, Pakistan</small></div></div>
  </section>
  <section className="phase7-section"><p className="phase9-kicker">SMART PROPERTY PURCHASE</p><h2>What to Check Before Buying</h2><div className="phase9-checklist">{[
   'Confirm the correct project: Phase 9 Prism is not the same as Phase 9 Town.',
   'Verify sector, plot number, size and category against current DHA records.',
   'Check ownership, allotment or transfer documentation through DHA.',
   'Confirm possession status, development charges, outstanding dues and taxes.',
   'Inspect the plot physically and assess access, surroundings and utility status.',
   'Get the complete payment and transfer-cost breakdown in writing.'
  ].map(x=><div key={x}><FileCheck2 size={19}/><span>{x}</span></div>)}</div>
   <div className="phase9-warning"><ShieldCheck size={22}/><p><strong>Price note:</strong> The supplied source contains broad and inconsistent historical price references. This page does not present those figures as current market rates. Request a dated, plot-specific quotation and verify it independently before making a decision.</p></div>
  </section>
  <section className="phase7-section phase7-alt"><p className="phase9-kicker">FREQUENTLY ASKED QUESTIONS</p><h2>DHA Phase 9 Prism FAQs</h2><div className="phase9-faq">
   <details><summary>How many sectors are listed in the supplied Phase 9 Prism guide?</summary><p>The source lists sectors A to H and J to N, plus P, Q and R. Confirm the current official map for the authoritative layout.</p></details>
   <details><summary>Which residential plot sizes are mentioned?</summary><p>5 Marla, 10 Marla, 1 Kanal and 2 Kanal residential categories are mentioned in the supplied material.</p></details>
   <details><summary>Are commercial plots available?</summary><p>The source mentions 4 Marla and 8 Marla commercial categories, commercial zones and the Oval Complex. Confirm current inventory and permitted use.</p></details>
   <details><summary>Is Phase 9 Prism the same as Phase 9 Town?</summary><p>No. They are separate DHA Lahore projects. Check the exact project name on maps, allotment records and property advertisements.</p></details>
   <details><summary>Where can I get today's plot rates?</summary><p>Contact us for a dated, plot-specific market enquiry. Verify the quotation, ownership, dues and possession directly before purchase.</p></details>
  </div></section>
  <section className="phase9-final-cta"><p className="phase9-kicker">ZAIGHAM PROPERTIES</p><h2>Find the Right Plot in Phase 9 Prism</h2><p>Share your preferred sector, plot size and budget to discuss current options and arrange a visit.</p><div className="phase9-actions"><a className="phase9-btn phase9-btn-gold" href={enquiry('Assalam o Alaikum, I am looking for a plot in DHA Phase 9 Prism Lahore. Please guide me with current options.')}><MessageCircle size={18}/> WhatsApp Enquiry</a><a className="phase9-btn phase9-btn-outline" href="tel:+923224751952">Call Zaigham Properties</a></div></section>
  <p className="phase7-disclaimer">This guide is for general property information only, not legal or investment advice. Verify all project, plot, price, possession, tax and transfer details with the relevant DHA office and qualified professionals.</p>
  <style>{`
   .phase9-sector-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px;margin-top:25px}.phase9-sector-card{border:1px solid rgba(180,150,100,.35);padding:17px;border-radius:5px;display:flex;flex-direction:column;gap:8px}.phase9-sector-card span{font-size:.68rem;letter-spacing:.14em;opacity:.7}.phase9-sector-card strong{font-size:2rem;color:#b08b4d}.phase9-sector-card a{display:inline-flex;align-items:center;gap:5px;color:#b08b4d;text-decoration:none;font-weight:700;font-size:.85rem}.phase9-actions{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}.phase9-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 19px;border-radius:4px;text-decoration:none;font-weight:700}.phase9-btn-gold{background:#c7a76c;color:#101a2b}.phase9-btn-outline{border:1px solid currentColor;color:inherit}.phase9-hero-meta{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;font-size:.92rem}.phase9-hero-meta span{display:inline-flex;align-items:center;gap:8px}.phase9-kicker{letter-spacing:.16em;text-transform:uppercase;font-size:.76rem;font-weight:800;color:#b08b4d}.phase9-feature-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:28px}.phase9-feature-grid article,.phase9-location-card,.phase9-warning{border:1px solid rgba(180,150,100,.35);padding:22px;border-radius:6px}.phase9-feature-grid svg,.phase9-checklist svg{color:#b08b4d}.phase9-location-card{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch}.phase9-location-card a{display:inline-flex;align-items:center;gap:7px;color:#b08b4d;font-weight:700;text-decoration:none}.phase9-map-placeholder{min-height:220px;background:linear-gradient(135deg,#17263c,#263c50);color:#e9d5a7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border-radius:4px}.phase9-map-placeholder small{opacity:.8}.phase9-checklist{display:grid;grid-template-columns:1fr 1fr;gap:14px}.phase9-checklist>div{display:flex;gap:12px;align-items:flex-start;padding:14px;border-bottom:1px solid rgba(180,150,100,.3)}.phase9-checklist svg{flex-shrink:0}.phase9-warning{display:flex;gap:14px;margin-top:22px;background:rgba(199,167,108,.08)}.phase9-warning svg{flex-shrink:0;color:#b08b4d}.phase9-warning p{margin:0}.phase9-note{font-size:.9rem;opacity:.82;margin:18px 0}.phase9-faq details{border-bottom:1px solid rgba(180,150,100,.3);padding:18px 0}.phase9-faq summary{font-weight:700;cursor:pointer}.phase9-final-cta{text-align:center;padding:64px 24px;background:#111e31;color:#f8f5ee}.phase9-final-cta>p:not(.phase9-kicker){max-width:680px;margin:0 auto}.phase9-final-cta .phase9-actions{justify-content:center}.phase9-final-cta .phase9-btn-outline{color:#f8f5ee}@media(max-width:720px){.phase9-sector-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.phase9-feature-grid,.phase9-location-card,.phase9-checklist{grid-template-columns:1fr}.phase9-actions{flex-direction:column;align-items:stretch}.phase9-btn{width:100%;box-sizing:border-box}}
  `}</style>
 </main>;
}
