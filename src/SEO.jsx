import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const SITE='https://zaighamproperties.vercel.app';
const BRAND='Zaigham Properties';
const DEFAULT_DESC='DHA Lahore property advisory, market intelligence and property guidance. Assess files, plots, houses and commercial property with local market context and independent verification.';
const ROUTES=[
 ['/','DHA Lahore Property Advisory & Market Intelligence | Zaigham Properties','DHA Lahore property advisory with local market intelligence, file assessment, strategic plot pairing, plot tracking and buyer-specific guidance.'],
 ['/about','About Zaigham Properties | DHA Lahore Property Advisory','Learn about Zaigham Properties, its DHA Lahore focus, around 10 years of local market experience and approach to property assessment and client guidance.'],
 ['/contact','Contact Zaigham Properties | DHA Lahore Property Advisor','Contact Zaigham Properties in DHA Phase 6, Lahore for property enquiries, file assessment, valuation discussions and buyer-specific guidance.'],
 ['/advisory-services','DHA Lahore Property Advisory Services | Valuation, File Trading & Plot Pairing','Explore DHA Lahore property valuation, file trading guidance, plot pairing, plot tracking, market intelligence and portfolio advisory services.'],
 ['/dha-lahore','DHA Lahore Area & Phase Guide | Zaigham Properties','Research DHA Lahore phases, residential and commercial property contexts, file markets and the checks buyers should make before a transaction.'],
 ['/dha-file-rates-today','DHA Lahore File Rates Today | Indicative Market Rate Reference','Review dated, indicative DHA Lahore file-rate references by phase, size and category. Rates are not official DHA quotations or confirmed completed transactions.'],
 ['/property-price-guide','DHA Lahore Property Price Guide | Compare Market Signals','Learn how to compare DHA Lahore property asking prices, investor offers, end-client demand and verified completed-deal evidence.'],
 ['/affidavit-vs-allocation-files-dha-lahore','DHA Lahore Affidavit vs Allocation Files | Buyer Guide','Understand the difference between DHA Lahore affidavit and allocation file categories and the documents and status to verify.'],
 ['/transfer-procedure','DHA Lahore Property Transfer Procedure | Verification Checklist','Review the DHA Lahore property transfer sequence, ownership checks, NDC, dues, applicable charges and document verification steps.'],
 ['/transfer-expense','DHA Lahore Property Transfer Expenses | Fees & Taxes Guide','Understand the components of DHA Lahore property transfer expenses, including authority fees, applicable taxes, dues and documentation costs.'],
 ['/dha-transfer-fee','DHA Lahore Transfer Fee | What Buyers Should Verify','Understand how to confirm the applicable DHA Lahore transfer fee for a specific property and transaction.'],
 ['/dha-transfer-taxes','DHA Lahore Property Transfer Taxes | Buyer Cost Guide','Review the tax categories that may affect a DHA Lahore property transfer and confirm current rates with the relevant authorities.'],
 ['/guides','DHA Lahore Property Guides | Files, Prices & Due Diligence','Browse practical DHA Lahore property guides covering file categories, market prices, transfers, verification and informed buying decisions.'],
 ['/dha-lahore/phase-6','DHA Phase 6 Lahore Property Guide | Areas & Buyer Checks','Explore DHA Phase 6 Lahore property research, area context, block-level checks and due diligence before buying.'],
 ['/dha-lahore/phase-7','DHA Phase 7 Lahore Property Guide | Areas & Market Context','Explore DHA Phase 7 Lahore property research, area context, plot considerations and due diligence before buying.'],
 ['/dha-lahore/phase-8','DHA Phase 8 Lahore Property Guide | Blocks & Property Research','Explore DHA Phase 8 Lahore property research, block references, market context and due diligence before buying.'],
 ['/dha-lahore/phase-9','DHA Phase 9 Prism Lahore Property Guide | Buyer Research','Explore DHA Phase 9 Prism Lahore property context, area research and the checks required before a property decision.'],
 ['/dha-lahore/phase-9-town','DHA Phase 9 Town Lahore Property Guide | Buyer Research','Explore DHA Phase 9 Town Lahore property context, residential and commercial research and buyer verification steps.']
];
const NOINDEX=['/properties','/houses-for-sale','/plots-for-sale','/commercial-properties','/faqs','/maps','/calculator','/privacy','/services','/dha-transfer-cost-calculator'];
const clean=p=>p==='/'?'/':p.replace(/\/+$/,'');
function upsertMeta(selector,attrs){let el=document.head.querySelector(selector);if(!el){el=document.createElement('meta');document.head.appendChild(el)}Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));}
function upsertLink(rel,href){let el=document.head.querySelector('link[rel="'+rel+'"]');if(!el){el=document.createElement('link');el.rel=rel;document.head.appendChild(el)}el.href=href;}
export default function SEOManager(){
 const {pathname,search}=useLocation();
 useEffect(()=>{
  const path=clean(pathname);
  const match=ROUTES.find(([route])=>route===path);
  let title=match?.[1]||'DHA Lahore Property Research & Advisory | Zaigham Properties';
  let description=match?.[2]||DEFAULT_DESC;
  if(path.startsWith('/dha-lahore/')){
   const phase=path.split('/')[2]||'';
   const pretty=phase.split('-').map(x=>x==='9'?'9':x.charAt(0).toUpperCase()+x.slice(1)).join(' ');
   if(!match){title=path.includes('/block/')?'DHA Lahore Block Research | Zaigham Properties':pretty+' DHA Lahore Property Guide | Zaigham Properties';description='Research '+pretty+' in DHA Lahore. Verify the exact block, plot or file category, location, ownership, dues and transfer status before making a property decision.';}
  }
  document.title=title;
  upsertMeta('meta[name="description"]',{name:'description',content:description});
  upsertMeta('meta[name="robots"]',{name:'robots',content:(NOINDEX.includes(path)||path.includes('/block/')||search)?'noindex,follow':'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'});
  upsertMeta('meta[property="og:type"]',{'property':'og:type',content:'website'});
  upsertMeta('meta[property="og:site_name"]',{'property':'og:site_name',content:BRAND});
  upsertMeta('meta[property="og:title"]',{'property':'og:title',content:title});
  upsertMeta('meta[property="og:description"]',{'property':'og:description',content:description});
  upsertMeta('meta[property="og:url"]',{'property':'og:url',content:SITE+(path==='/'?'/':path+'/')});
  upsertMeta('meta[name="twitter:card"]',{name:'twitter:card',content:'summary_large_image'});
  upsertMeta('meta[name="twitter:title"]',{name:'twitter:title',content:title});
  upsertMeta('meta[name="twitter:description"]',{name:'twitter:description',content:description});
  const canonical=SITE+(path==='/'?'/':path+'/');
  upsertLink('canonical',canonical);
  const parts=path.split('/').filter(Boolean);
  const crumbs=[{name:'Home',url:SITE+'/'}];
  let current='';
  parts.forEach((part,i)=>{current+='/'+part;const label=part==='dha-lahore'?'DHA Lahore':part.split('-').map(x=>x==='9'?'9':x.charAt(0).toUpperCase()+x.slice(1)).join(' ');crumbs.push({name:label,url:SITE+current+'/'});});
  const graph=[
   {'@context':'https://schema.org','@type':'RealEstateAgent','@id':SITE+'/#business','name':BRAND,'url':SITE+'/','telephone':'+923224751952','description':'DHA Lahore property advisory, local market intelligence, file assessment, strategic plot pairing and buyer-specific property guidance.','address':{'@type':'PostalAddress','streetAddress':'50-A, DHA Phase 6','addressLocality':'Lahore','addressRegion':'Punjab','addressCountry':'PK'},'areaServed':{'@type':'City','name':'Lahore'},'knowsAbout':['DHA Lahore real estate','Property valuation','DHA file categories','Investor and end-client price assessment','Strategic plot pairing','Property due diligence']},
   {'@context':'https://schema.org','@type':'WebSite','@id':SITE+'/#website','url':SITE+'/','name':BRAND,'inLanguage':'en-PK','publisher':{'@id':SITE+'/#business'}},
   {'@context':'https://schema.org','@type':'WebPage','@id':canonical+'#webpage','url':canonical,'name':title,'description':description,'isPartOf':{'@id':SITE+'/#website'},'about':{'@id':SITE+'/#business'},'inLanguage':'en-PK'},
   {'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':crumbs.map((c,i)=>({'@type':'ListItem','position':i+1,'name':c.name,'item':c.url}))}
  ];
  let script=document.getElementById('sitewide-semantic-graph');if(!script){script=document.createElement('script');script.id='sitewide-semantic-graph';script.type='application/ld+json';document.head.appendChild(script)}script.textContent=JSON.stringify(graph);
 },[pathname,search]);
 return null;
}
