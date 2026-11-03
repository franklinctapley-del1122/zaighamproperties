import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MapPin, Home, Ruler, BedDouble, Bath, MessageCircle, ArrowUpRight, ShieldCheck} from 'lucide-react';

const WA = '923224751952';
const message = 'Assalam o Alaikum, I am interested in the 1 Kanal modern-design house for sale in DHA Phase 7, Y Block. Please share the demand and complete details.';
const whatsapp = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(message);
const photos = [
  {src:'/images/properties/house-for-sale-001/FB_IMG_1793647111420.jpg', alt:'Front elevation of a modern 1 Kanal house in DHA Phase 7 Y Block'}
];

export default function HouseDetail(){
  useEffect(()=>{
    document.title='1 Kanal Modern House for Sale in DHA Phase 7 Y Block Lahore | Zaigham Properties';
    let meta=document.querySelector('meta[name="description"]');
    if(!meta){meta=document.createElement('meta');meta.name='description';document.head.appendChild(meta);}
    meta.content='Explore a modern-design 1 Kanal house for sale in DHA Phase 7 Y Block, Lahore. Call Zaigham Properties for demand, photos and complete property details.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href='https://zaighamproperties.vercel.app/properties/dha-phase-7-y-block-1-kanal-house-001';
  },[]);
  return <main className="section" style={{maxWidth:1240,margin:'0 auto',paddingTop:48,paddingBottom:90}}>
    <div style={{fontSize:12,letterSpacing:2,color:'#a8844d',fontWeight:700,marginBottom:16}}>ZAIGHAM PROPERTIES · HOUSE FOR SALE</div>
    <div style={{display:'flex',justifyContent:'space-between',gap:20,alignItems:'center',flexWrap:'wrap',marginBottom:24}}>
      <div><div style={{fontSize:13,color:'#777',marginBottom:10}}><Link to="/properties">Properties</Link> / DHA Phase 7 / Y Block</div><h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(34px,5vw,58px)',lineHeight:1.08,margin:'0 0 14px',color:'#14251f'}}>Modern 1 Kanal House <i style={{color:'#a8844d'}}>for Sale.</i></h1><div style={{display:'flex',gap:8,alignItems:'center',color:'#666'}}><MapPin size={16}/> Y Block, DHA Phase 7, Lahore</div></div>
      <a href={whatsapp} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:10,background:'#173b30',color:'#fff',padding:'15px 22px',textDecoration:'none',fontWeight:700}}>Call for Demand <ArrowUpRight size={17}/></a>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.7fr) minmax(260px,1fr)',gap:18,alignItems:'stretch'}}>
      <div style={{background:'#e9e6df',minHeight:300,position:'relative',overflow:'hidden'}}>
        <img src={photos[0].src} alt={photos[0].alt} onError={e=>{e.currentTarget.style.display='none';}} style={{width:'100%',height:'100%',minHeight:300,maxHeight:600,objectFit:'cover',display:'block'}}/>
        <div style={{position:'absolute',left:16,bottom:16,background:'rgba(20,37,31,.9)',color:'#fff',padding:'9px 13px',fontSize:12,letterSpacing:1}}>FRONT ELEVATION</div>
      </div>
      <aside style={{background:'#f5f3ee',padding:'clamp(22px,4vw,38px)',display:'flex',flexDirection:'column',justifyContent:'space-between',gap:24}}>
        <div><div style={{fontSize:11,letterSpacing:2,color:'#a8844d',fontWeight:700}}>PROPERTY OVERVIEW</div><h2 style={{fontFamily:'Georgia,serif',fontSize:30,color:'#14251f',margin:'12px 0 22px'}}>A modern family residence in DHA Lahore.</h2>
          {[['Property type','Modern design house'],['Location','DHA Phase 7, Y Block'],['Plot size','1 Kanal'],['Demand','Call for price']].map(([k,v])=><div key={k} style={{display:'flex',justifyContent:'space-between',gap:12,padding:'13px 0',borderBottom:'1px solid #dedbd3',fontSize:14}}><span style={{color:'#777'}}>{k}</span><b style={{color:'#24382f',textAlign:'right'}}>{v}</b></div>)}
        </div>
        <a href={whatsapp} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,background:'#c6a36b',color:'#14251f',padding:'15px 18px',textDecoration:'none',fontWeight:800}}><MessageCircle size={18}/> Request price & details</a>
      </aside>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12,margin:'26px 0 42px'}}>
      {[[Home,'Property','House'],[Ruler,'Plot size','1 Kanal'],[MapPin,'Block','Y Block'],[ShieldCheck,'Availability','Confirm by call']].map(([Icon,label,value])=><div key={label} style={{background:'#f5f3ee',padding:18,display:'flex',gap:13,alignItems:'center'}}><Icon color="#a8844d"/><div><small style={{display:'block',color:'#777'}}>{label}</small><b style={{color:'#24382f'}}>{value}</b></div></div>)}
    </div>
    <section style={{maxWidth:850}}><div style={{fontSize:11,letterSpacing:2,color:'#a8844d',fontWeight:700}}>PROPERTY DESCRIPTION</div><h2 style={{fontFamily:'Georgia,serif',fontSize:34,color:'#14251f',margin:'12px 0'}}>Modern design. DHA Phase 7 address.</h2><p style={{fontSize:16,lineHeight:1.85,color:'#62665f'}}>A modern-design 1 Kanal house is available for sale in Y Block, DHA Phase 7, Lahore. The property is presented by Zaigham Properties. Contact the team to request the current demand, additional photographs, room specifications and a viewing appointment.</p></section>
    <section style={{marginTop:40,padding:24,border:'1px solid #e1ded6',background:'#fff'}}><h2 style={{fontFamily:'Georgia,serif',fontSize:28,color:'#14251f',marginTop:0}}>House details</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16,color:'#656860',lineHeight:1.7}}><p><b style={{color:'#24382f'}}>Bedrooms & bathrooms</b><br/>Contact for details</p><p><b style={{color:'#24382f'}}>Floors & covered area</b><br/>Contact for details</p><p><b style={{color:'#24382f'}}>Kitchen & TV lounge</b><br/>Contact for details</p><p><b style={{color:'#24382f'}}>Demand price</b><br/>Call for price</p></div></section>
    <div style={{marginTop:34,padding:24,background:'#173b30',color:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}><div><div style={{fontSize:11,letterSpacing:2,color:'#d6bd91'}}>ZAIGHAM PROPERTIES</div><h2 style={{fontFamily:'Georgia,serif',fontSize:30,margin:'8px 0'}}>Interested in this house?</h2><p style={{margin:0,color:'#e1e7e1'}}>Call for demand, complete details and a viewing.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" style={{background:'#c6a36b',color:'#14251f',padding:'14px 20px',fontWeight:800,textDecoration:'none'}}>Enquire on WhatsApp <ArrowUpRight size={16}/></a></div>
    <p style={{fontSize:12,color:'#85877f',lineHeight:1.7,marginTop:22}}>Property information is based on details currently supplied to Zaigham Properties. Room counts, covered area, condition, ownership, dues, availability and final demand have not yet been confirmed. Verify all details and inspect the property before making a decision.</p>
  </main>;
}
