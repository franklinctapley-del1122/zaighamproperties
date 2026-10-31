import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck, Building2, Trees, Route, FileCheck2 } from 'lucide-react';

const wa = (message = 'Assalam o Alaikum, I want latest DHA Phase 9 Town Lahore property rates.') =>
  'https://wa.me/923224751952?text=' + encodeURIComponent(message);

const blocks = [
  { name: 'Block A', plots: '5, 8 & 10 Marla', note: 'Residential plots and commercial options; verify street and possession.' },
  { name: 'Block B', plots: 'Primarily 5 Marla', note: 'Compare possession and non-possession listings carefully.' },
  { name: 'Block C', plots: '5 & 8 Marla', note: 'Check plot location, access roads and nearby amenities.' },
  { name: 'Block D', plots: '5, 8 & 10 Marla', note: 'Compare exact location and current development status.' },
  { name: 'Block E', plots: 'Primarily 5 Marla', note: 'Confirm possession, dues and construction eligibility before buying.' }
];

const rates = [
  ['5 Marla residential plot', 'PKR 49 lakh – 1.40 crore'],
  ['8 Marla residential plot', 'PKR 1.40 – 2.10 crore'],
  ['10 Marla residential plot', 'PKR 1.85 – 2.50 crore'],
  ['4 Marla commercial plot', 'PKR 3.00 – 5.50 crore*'],
  ['5 Marla house', 'PKR 2.25 – 3.50 crore'],
  ['8 Marla house', 'PKR 2.80 – 4.95 crore']
];

export default function PhaseNineTownGuide() {
  return <main className="phase7-page">
    <section className="phase7-hero">
      <div className="phase7-hero-content">
        <p className="phase7-eyebrow">ZAIGHAM PROPERTIES · DHA LAHORE</p>
        <h1>DHA Phase 9 Town <em>Lahore</em></h1>
        <p>Explore Blocks A to E, residential and commercial plot options, location guidance and indicative market prices — with practical checks for buyers and investors.</p>
        <div className="phase9-actions">
          <a className="phase9-btn phase9-btn-gold" href={wa('Assalam o Alaikum, please share latest DHA Phase 9 Town Lahore plot rates and available listings.')}><MessageCircle size={18}/> Get Latest Rates</a>
          <a className="phase9-btn phase9-btn-outline" href="#phase9-blocks">Explore Blocks <ArrowRight size={18}/></a>
        </div>
        <div className="phase9-hero-meta"><span><MapPin size={16}/> Bedian Road, Lahore</span><span><ShieldCheck size={16}/> Verify before purchase</span></div>
      </div>
    </section>

    <section className="phase7-section">
      <p className="phase9-kicker">AREA OVERVIEW</p>
      <h2>About DHA Phase 9 Town</h2>
      <p>DHA Phase 9 Town, also referred to in property marketing as Shuhada Town, is a DHA Lahore neighbourhood commonly described through five blocks: A, B, C, D and E. The supplied market reference describes a mix of residential plots, selected commercial cuttings and access towards Bedian Road, DHA Phase 6, Askari 11 and Phase 9 Prism.</p>
      <div className="phase9-feature-grid">
        <article><MapPin/><h3>Connected Location</h3><p>Use a current navigation map to confirm the exact block entrance and route before travelling.</p></article>
        <article><Building2/><h3>Plot Choices</h3><p>Commonly referenced sizes include 5 Marla, with limited 8 and 10 Marla residential options and commercial plots.</p></article>
        <article><Trees/><h3>Neighbourhood Facilities</h3><p>Parks, mosques, roads and other facilities should be checked in person for the specific street and block.</p></article>
      </div>
    </section>

    <section id="phase9-blocks" className="phase7-section phase7-alt">
      <p className="phase9-kicker">BLOCK-BY-BLOCK GUIDE</p><h2>Explore Blocks A–E</h2>
      <p>Availability varies by block and individual plot. Treat the sizes below as a guide from the supplied source, not a live inventory.</p>
      <div className="phase7-card-grid">{blocks.map((b,i)=><motion.article key={b.name} className="phase7-info-card" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><span className="phase9-block-no">0{i+1}</span><h3>{b.name}</h3><strong>{b.plots}</strong><p>{b.note}</p><Link to={'/dha-lahore/phase-9-town/block/'+b.name.toLowerCase().replace('block ','')+'/'}>View block guide <ArrowRight size={15}/></Link></motion.article>)}</div>
    </section>

    <section className="phase7-section">
      <p className="phase9-kicker">INDICATIVE MARKET REFERENCES</p><h2>DHA 9 Town Plot & Property Prices</h2>
      <p>The competitor material provided contains conflicting price ranges and mixed update dates. The figures below are indicative references transcribed from that material, not verified live quotations or guaranteed sale prices.</p>
      <div className="phase7-table-wrap"><table className="phase7-table"><thead><tr><th>Property type</th><th>Source-reported range</th></tr></thead><tbody>{rates.map(([type,price])=><tr key={type}><td>{type}</td><td>{price}</td></tr>)}</tbody></table></div>
      <p className="phase9-note">*Commercial rates differ significantly by commercial area, location, road frontage and plot status. The source gives different ranges for E Block and CCA commercial plots. Confirm the exact category and latest market rate before making an offer.</p>
      <a className="phase9-btn phase9-btn-gold" href={wa('Please confirm today’s block-wise DHA Phase 9 Town Lahore rates, possession status and available listings.')}><MessageCircle size={18}/> Confirm Today’s Prices</a>
    </section>

    <section className="phase7-section phase7-alt">
      <p className="phase9-kicker">LOCATION & ACCESS</p><h2>Where Is DHA Phase 9 Town Lahore?</h2>
      <p>The supplied guide places Phase 9 Town near Askari 11 and Bedian Road, with connections towards DHA Phase 6 and the neighbouring Phase 9 Prism area. Routes and entrances may vary by destination, so check live directions for the exact plot or block.</p>
      <div className="phase9-location-card"><div><MapPin size={25}/><h3>Bedian Road · DHA Lahore</h3><p>Open the map to check the route and nearby landmarks. Verify the entrance and street location with the property representative.</p><a href="https://www.google.com/maps/search/?api=1&query=DHA+Phase+9+Town+Lahore" target="_blank" rel="noreferrer">Open Google Maps <ArrowRight size={16}/></a></div><div className="phase9-map-placeholder"><MapPin size={38}/><span>DHA Phase 9 Town</span><small>Lahore, Pakistan</small></div></div>
    </section>

    <section className="phase7-section">
      <p className="phase9-kicker">BEFORE YOU BUY</p><h2>Buyer’s Verification Checklist</h2>
      <div className="phase9-checklist">
        {[
          'Confirm the exact block, plot number, size and location from original records.',
          'Verify ownership, allotment or transfer documents through the relevant DHA office.',
          'Check possession status, outstanding dues, development charges and transfer costs.',
          'Confirm whether the plot is residential or commercial and review applicable restrictions.',
          'Visit the plot and independently assess road access, utilities and nearby facilities.',
          'Get a written breakdown of price, taxes, fees and agent commission before paying.'
        ].map(item=><div key={item}><FileCheck2 size={19}/><span>{item}</span></div>)}
      </div>
      <div className="phase9-warning"><ShieldCheck size={22}/><p><strong>Important:</strong> Prices, possession and development status can change. Do not rely solely on an online article or verbal promise. Verify records and current charges with the relevant DHA office and a qualified property professional.</p></div>
    </section>

    <section className="phase7-section phase7-alt">
      <p className="phase9-kicker">COMMON QUESTIONS</p><h2>DHA Phase 9 Town FAQs</h2>
      <div className="phase9-faq">
        <details><summary>Which blocks are in DHA Phase 9 Town?</summary><p>The supplied guide identifies Blocks A, B, C, D and E.</p></details>
        <details><summary>What plot sizes are commonly mentioned?</summary><p>5 Marla plots are commonly referenced. 8 and 10 Marla residential plots and 4 or 8 Marla commercial options are also mentioned, but availability depends on the block and current inventory.</p></details>
        <details><summary>Is DHA Phase 9 Town the same as DHA Phase 9 Prism?</summary><p>No. They are separate DHA Lahore developments. Check the project name carefully when reviewing a listing, map or price quotation.</p></details>
        <details><summary>Are the prices on this page live market rates?</summary><p>No. They are indicative ranges drawn from the supplied competitor material, which contains conflicting figures and dates. Contact us for a current quote and independently verify before purchase.</p></details>
        <details><summary>How can I confirm possession and transfer charges?</summary><p>Ask for the exact plot details and verify possession, outstanding dues, transfer fees and applicable taxes with the relevant DHA office before committing.</p></details>
      </div>
    </section>

    <section className="phase9-final-cta"><p className="phase9-kicker">ZAIGHAM PROPERTIES</p><h2>Looking for a Plot in DHA 9 Town?</h2><p>Tell us your preferred block, plot size and budget. Request current availability and arrange a site visit.</p><div className="phase9-actions"><a className="phase9-btn phase9-btn-gold" href={wa('Assalam o Alaikum, I am interested in DHA Phase 9 Town Lahore. Please share current verified options.')}><MessageCircle size={18}/> WhatsApp Enquiry</a><a className="phase9-btn phase9-btn-outline" href="tel:+923224751952"><Phone size={18}/> Call Zaigham Properties</a></div></section>
    <p className="phase7-disclaimer">Information is for general property research only and is not financial or legal advice. Confirm all prices, ownership records, taxes, possession and transfer requirements independently.</p>
    <style>{`
      .phase9-actions{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}.phase9-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 19px;border-radius:4px;text-decoration:none;font-weight:700}.phase9-btn-gold{background:#c7a76c;color:#101a2b}.phase9-btn-outline{border:1px solid currentColor;color:inherit}.phase9-hero-meta{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;font-size:.92rem}.phase9-hero-meta span{display:inline-flex;align-items:center;gap:8px}.phase9-kicker{letter-spacing:.16em;text-transform:uppercase;font-size:.76rem;font-weight:800;color:#b08b4d}.phase9-feature-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:28px}.phase9-feature-grid article,.phase9-location-card,.phase9-warning{border:1px solid rgba(180,150,100,.35);padding:22px;border-radius:6px}.phase9-feature-grid svg{color:#b08b4d}.phase9-block-no{color:#b08b4d;font-size:.8rem;letter-spacing:.1em}.phase7-info-card a,.phase9-location-card a{display:inline-flex;align-items:center;gap:7px;color:#b08b4d;font-weight:700;text-decoration:none}.phase9-note{font-size:.9rem;opacity:.82;margin:18px 0 24px}.phase9-location-card{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch}.phase9-map-placeholder{min-height:220px;background:linear-gradient(135deg,#17263c,#263c50);color:#e9d5a7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border-radius:4px}.phase9-map-placeholder small{opacity:.8}.phase9-checklist{display:grid;grid-template-columns:1fr 1fr;gap:14px}.phase9-checklist>div{display:flex;gap:12px;align-items:flex-start;padding:14px;border-bottom:1px solid rgba(180,150,100,.3)}.phase9-checklist svg{flex-shrink:0;color:#b08b4d}.phase9-warning{display:flex;gap:14px;margin-top:22px;background:rgba(199,167,108,.08)}.phase9-warning svg{flex-shrink:0;color:#b08b4d}.phase9-warning p{margin:0}.phase9-faq details{border-bottom:1px solid rgba(180,150,100,.3);padding:18px 0}.phase9-faq summary{font-weight:700;cursor:pointer}.phase9-final-cta{text-align:center;padding:64px 24px;background:#111e31;color:#f8f5ee}.phase9-final-cta>p:not(.phase9-kicker){max-width:680px;margin:0 auto}.phase9-final-cta .phase9-actions{justify-content:center}.phase9-final-cta .phase9-btn-outline{color:#f8f5ee}@media(max-width:720px){.phase9-feature-grid,.phase9-location-card,.phase9-checklist{grid-template-columns:1fr}.phase9-actions{flex-direction:column;align-items:stretch}.phase9-btn{width:100%;box-sizing:border-box}.phase9-hero-meta{gap:12px}}`}</style>
  </main>;
}
