import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <canvas id="particle-canvas" aria-hidden="true"></canvas>
  <div class="aurora aurora-one"></div><div class="aurora aurora-two"></div>
  <div class="noise"></div><div class="cursor-glow"></div>

  <header class="nav">
    <a class="brand" href="#home"><span>S</span> SARAVANAN <small>COACHING</small></a>
    <nav class="nav-links">
      <a href="#approach">Method</a><a href="#gallery">Gallery</a><a href="#video">In Motion</a><a href="#coaching">Coaching</a><a href="#coach">Coach</a>
    </nav>
    <a class="nav-cta" href="#coaching">Start now <b>↗</b></a>
    <button class="menu" aria-label="Open menu">☰</button>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="hero-grid"></div>
      <div class="hero-copy reveal">
        <div class="eyebrow"><i></i> ONLINE FITNESS COACHING / 2026</div>
        <h1>ENGINEER<br><em>YOUR</em><br>STRONGER SELF.</h1>
        <p class="hero-lead">Training, nutrition and accountability brought together in one focused coaching experience.</p>
        <div class="hero-actions">
          <a class="btn btn-lime" href="#coaching">Explore coaching <span>↗</span></a>
          <a class="text-link" href="#gallery">See the coach in action <span>↓</span></a>
        </div>
        <div class="hero-mini-stats"><div><strong>01</strong><span>Personal plan</span></div><div><strong>02</strong><span>Track progress</span></div><div><strong>03</strong><span>Stay accountable</span></div></div>
      </div>
      <div class="hero-visual" data-parallax-area>
        <div class="orbital-ring ring-one"></div><div class="orbital-ring ring-two"></div><div class="orbital-ring ring-three"></div>
        <div class="energy-core"></div><div class="wire-sphere"></div>
        <div class="hero-label label-top">TRAIN<br><b>SMART.</b></div>
        <div class="hero-label label-bottom">BUILD<br><b>CONSISTENCY.</b></div>
        <div class="portrait-wrap tilt"><img src="/assets/saravanan-cutout.png" alt="Saravanan, online fitness coach" /></div>
        <div class="floating-card card-one"><span>COACHING MODE</span><b>PERSONALIZED</b><i>↗</i></div>
        <div class="floating-card card-two"><span>FOCUS</span><b>CONSISTENCY</b><i>01</i></div>
        <div class="floating-card card-three"><span>TRACK</span><b>YOUR PROGRESS</b><i>02</i></div>
      </div>
      <div class="scroll-cue"><span>SCROLL TO EXPLORE</span><b>↓</b></div>
    </section>

    <section class="marquee"><div>TRAIN WITH PURPOSE <span>✦</span> EAT WITH INTENTION <span>✦</span> TRACK THE WORK <span>✦</span> BUILD CONSISTENCY <span>✦</span> TRAIN WITH PURPOSE <span>✦</span></div></section>

    <section id="approach" class="section approach">
      <div class="section-head reveal"><div><span class="kicker">THE METHOD / 01</span><h2>NO GUESSWORK.<br><em>JUST A SYSTEM.</em></h2></div><p>The site now presents coaching as a structured experience rather than a typical gym brochure.</p></div>
      <div class="principles">
        <article class="principle tilt reveal"><span>01</span><h3>YOUR GOAL</h3><p>Start with what you want to change — then build the route to get there.</p><div class="line"></div></article>
        <article class="principle tilt reveal"><span>02</span><h3>YOUR PLAN</h3><p>Training and nutrition guidance designed around your routine and setup.</p><div class="line"></div></article>
        <article class="principle tilt reveal"><span>03</span><h3>YOUR PROGRESS</h3><p>Track the work, review the result and keep moving forward with structure.</p><div class="line"></div></article>
      </div>
    </section>

    <section id="gallery" class="section gallery-section">
      <div class="section-head reveal"><div><span class="kicker">THE COACH / 02</span><h2>FITNESS<br><em>IN FRAMES.</em></h2></div><p>Drop Saravanan's best training, physique and professional photos into the six prepared slots. The layout turns them into an editorial-style visual wall.</p></div>
      <div class="gallery-grid">
        ${[1,2,3,4,5,6].map((n,i)=>`<figure class="gallery-card reveal ${i===0?'gallery-large':''}"><div class="photo-slot"><img src="/assets/gallery/photo-${String(n).padStart(2,'0')}.png" alt="Saravanan fitness photo ${n}" onerror="this.style.display='none';this.parentElement.classList.add('empty')"><span>PHOTO ${String(n).padStart(2,'0')}<small>ADD IMAGE</small></span></div></figure>`).join('')}
      </div>
      <div class="media-note">PLACE YOUR IMAGES IN <b>assets/gallery/</b> AND NAME THEM <b>photo-01.jpg</b> THROUGH <b>photo-06.jpg</b>.</div>
    </section>

    <section id="video" class="section video-section">
      <div class="video-stage reveal">
        <div class="video-glow"></div>
        <div class="video-frame">
          <video id="coach-video" controls playsinline preload="metadata">
            <source src="/assets/video/saravanan-workout.mp4" type="video/mp4">
          </video>
          <div class="video-placeholder" id="video-placeholder"><span class="play-ring">▶</span><b>TRAINING IN MOTION</b><small>ADD SARAVANAN'S WORKOUT VIDEO</small></div>
          <div class="video-corner">04K / COACH FILM</div>
        </div>
      </div>
      <div class="video-copy reveal"><span class="kicker">IN MOTION / 03</span><h2>DON'T JUST<br><em>READ IT.</em><br>WATCH IT.</h2><p>A dedicated video block gives the page a cinematic break and lets visitors see the coach's training style, movement and presence.</p><div class="video-meta"><span>FORMAT</span><b>MP4 / H.264</b><span>PLACEMENT</span><b>assets/video/</b></div></div>
    </section>

    <section id="coaching" class="section coaching">
      <div class="section-head reveal"><div><span class="kicker">ONLINE COACHING / 04</span><h2>CHOOSE YOUR<br><em>LEVEL OF COACHING.</em></h2></div><p>Two ways to train. Pick the level of guidance that matches how much support you want throughout your transformation.</p></div>
      <div class="pricing-switch reveal"><button class="active" data-period="1">1 MONTH</button><button data-period="3">3 MONTHS</button><button data-period="6">6 MONTHS</button><button data-period="12">12 MONTHS</button></div>
      <div class="plans">
        <article class="plan tilt reveal"><div class="plan-top"><span class="plan-no">01 / BASIC</span><span class="dot lime"></span></div><h3>TRAIN<br><em>INDEPENDENTLY.</em></h3><p>For people who can follow a plan and want a clear structure to train consistently.</p><div class="price"><span>₹</span><strong data-basic>2,999</strong><small>/ month</small></div><ul><li>Personalized workout plan</li><li>Personalized nutrition plan</li><li>Exercise demonstration videos</li><li>Weekly workout schedule</li><li>Basic progress tracking</li><li>Workout progression</li><li>Monthly plan update</li><li>Client dashboard</li></ul><a class="plan-btn" href="#start">Choose basic <span>↗</span></a></article>
        <article class="plan premium tilt reveal"><div class="popular">MOST POPULAR</div><div class="plan-top"><span class="plan-no">02 / PREMIUM</span><span class="dot red"></span></div><h3>COACH<br><em>ME.</em></h3><p>For people who want continuous coaching, accountability and closer progress review.</p><div class="price"><span>₹</span><strong data-premium>5,499</strong><small>/ month</small></div><div class="everything">EVERYTHING IN BASIC +</div><ul><li>Weekly check-in</li><li>Weekly diet adjustment</li><li>Video form analysis</li><li>Direct coach support</li><li>Weight & measurement tracking</li><li>Monthly progress analysis</li><li>Monthly coaching call</li><li>Priority coach response</li></ul><a class="plan-btn filled" href="#start">Choose premium <span>↗</span></a></article>
      </div>
    </section>

    <section id="process" class="section process">
      <div class="section-head reveal"><div><span class="kicker">THE PROCESS / 05</span><h2>FOUR STEPS.<br><em>ONE DIRECTION.</em></h2></div></div>
      <div class="steps">
        <div class="step reveal"><span>01</span><h3>APPLY</h3><p>Share your current routine, goals, training experience and preferences.</p></div>
        <div class="step reveal"><span>02</span><h3>GET YOUR PLAN</h3><p>Receive your personalized workout and nutrition structure.</p></div>
        <div class="step reveal"><span>03</span><h3>TRAIN & TRACK</h3><p>Follow the plan, complete your sessions and keep your progress visible.</p></div>
        <div class="step reveal"><span>04</span><h3>GET COACHED</h3><p>Your plan can evolve as you progress and your coaching needs change.</p></div>
      </div>
    </section>

    <section class="section transformations">
      <div class="section-head reveal"><div><span class="kicker">RESULTS / 06</span><h2>THE WORK<br><em>SHOWS.</em></h2></div><p>Optional transformation slots for real client before/after stories. Add these only when you have permission and the final images.</p></div>
      <div class="transform-grid">
        <article class="transform-card reveal"><div class="before-after"><div>BEFORE<br><small>ADD PHOTO</small></div><div>AFTER<br><small>ADD PHOTO</small></div></div><h3>TRANSFORMATION STORY 01</h3><p>Client name • timeline • result summary</p></article>
        <article class="transform-card reveal"><div class="before-after"><div>BEFORE<br><small>ADD PHOTO</small></div><div>AFTER<br><small>ADD PHOTO</small></div></div><h3>TRANSFORMATION STORY 02</h3><p>Client name • timeline • result summary</p></article>
      </div>
    </section>

    <section class="dashboard-preview">
      <div class="dash-copy reveal"><span class="kicker">THE EXPERIENCE / 07</span><h2>YOUR PLAN.<br><em>IN ONE PLACE.</em></h2><p>The coaching experience is designed to feel clear and focused: workouts, nutrition, progress and check-ins — without the clutter.</p><a href="#start" class="text-link">Start your application ↗</a></div>
      <div class="phone tilt reveal"><div class="phone-top"><span>9:41</span><b>● ● ●</b></div><div class="phone-user"><span>YOUR WEEK</span><strong>LET'S WORK.</strong></div><div class="progress-ring"><b>72%</b><span>PROGRESS</span></div><div class="dash-cards"><div><span>WORKOUT</span><b>4 / 5</b></div><div><span>NUTRITION</span><b>82%</b></div><div><span>WEIGHT</span><b>−0.6 kg</b></div></div><div class="phone-nav"><b>⌂</b><b>▣</b><b>◒</b><b>◉</b></div></div>
    </section>

    <section class="section testimonials">
      <div class="section-head reveal"><div><span class="kicker">SOCIAL PROOF / 08</span><h2>WORDS FROM<br><em>THE JOURNEY.</em></h2></div><p>Three testimonial cards are ready. Replace the placeholder text with approved client feedback.</p></div>
      <div class="testimonial-grid">
        <article class="testimonial reveal"><span>“</span><p>ADD APPROVED CLIENT TESTIMONIAL HERE.</p><b>CLIENT NAME</b><small>GOAL / TIMELINE</small></article>
        <article class="testimonial featured reveal"><span>“</span><p>ADD APPROVED CLIENT TESTIMONIAL HERE.</p><b>CLIENT NAME</b><small>GOAL / TIMELINE</small></article>
        <article class="testimonial reveal"><span>“</span><p>ADD APPROVED CLIENT TESTIMONIAL HERE.</p><b>CLIENT NAME</b><small>GOAL / TIMELINE</small></article>
      </div>
    </section>

    <section id="coach" class="section coach">
      <div class="coach-image reveal"><div class="coach-glow"></div><img src="/assets/saravanan-cutout.png" alt="Saravanan" /></div>
      <div class="coach-copy reveal"><span class="kicker">MEET YOUR COACH / 09</span><h2>SARAVANAN<br><em>ONLINE COACHING.</em></h2><p>The goal is simple: make your training more structured, your nutrition more intentional and your progress easier to follow.</p><div class="coach-points"><div><b>TRAIN</b><span>Structured workouts</span></div><div><b>NOURISH</b><span>Personalized nutrition guidance</span></div><div><b>PROGRESS</b><span>Tracking & accountability</span></div></div><a class="btn btn-outline" href="https://www.linkedin.com/in/saravanan-t-b0231b28a/" target="_blank" rel="noreferrer">View professional profile <span>↗</span></a></div>
    </section>

    <section class="section faq">
      <div class="section-head reveal"><div><span class="kicker">FAQ / 10</span><h2>BEFORE YOU<br><em>START.</em></h2></div><p>Simple expandable answers. Replace the placeholder answers with Saravanan's actual policies and coaching details.</p></div>
      <div class="faq-list">
        <details class="reveal"><summary>Who is the coaching for?<span>+</span></summary><p>ADD THE ACTUAL ELIGIBILITY / IDEAL CLIENT DETAILS.</p></details>
        <details class="reveal"><summary>How does the coaching start?<span>+</span></summary><p>ADD THE ACTUAL ONBOARDING AND APPLICATION PROCESS.</p></details>
        <details class="reveal"><summary>What happens during check-ins?<span>+</span></summary><p>ADD THE ACTUAL CHECK-IN PROCESS AND FREQUENCY.</p></details>
        <details class="reveal"><summary>How do I contact the coach?<span>+</span></summary><p>ADD THE APPROVED CONTACT CHANNELS HERE.</p></details>
      </div>
    </section>

    <section id="start" class="cta">
      <div class="cta-grid"></div><div class="cta-orb orb-a"></div><div class="cta-orb orb-b"></div>
      <span class="kicker">READY WHEN YOU ARE / 11</span><h2>START YOUR<br><em>TRANSFORMATION.</em></h2><p>Choose your coaching level and take the first step toward a more structured approach to fitness.</p><a class="btn btn-lime big" href="#coaching">Explore coaching <span>↗</span></a>
    </section>
  </main>
  <footer><div class="brand"><span>S</span> SARAVANAN <small>COACHING</small></div><p>ONLINE FITNESS COACHING</p><a href="#home">BACK TO TOP ↑</a></footer>
`;

const prices={1:{basic:'2,999',premium:'5,499'},3:{basic:'7,999',premium:'14,999'},6:{basic:'14,499',premium:'26,999'},12:{basic:'26,999',premium:'49,999'}};
document.querySelectorAll('.pricing-switch button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.pricing-switch button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const p=prices[btn.dataset.period];document.querySelector('[data-basic]').textContent=p.basic;document.querySelector('[data-premium]').textContent=p.premium;}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{if(innerWidth<800)return;const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${(-y*7).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg) translateY(-5px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});

document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));

// Subtle mouse parallax for the hero's layered 3D scene.
const heroVisual=document.querySelector('[data-parallax-area]');
window.addEventListener('pointermove',e=>{if(innerWidth<900)return;const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);heroVisual.style.setProperty('--mx',`${x*18}px`);heroVisual.style.setProperty('--my',`${y*18}px`)});

// Workout video placeholder automatically disappears once a real video is supplied.
const video=document.querySelector('#coach-video');
const placeholder=document.querySelector('#video-placeholder');
video.addEventListener('loadeddata',()=>placeholder.classList.add('hidden'));
video.addEventListener('error',()=>placeholder.classList.remove('hidden'));

// Lightweight animated particle field: no external library required.
const canvas=document.querySelector('#particle-canvas');
const ctx=canvas.getContext('2d');
let particles=[]; let mouse={x:-9999,y:-9999};
function resizeCanvas(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);particles=Array.from({length:Math.min(125,Math.floor(innerWidth/10))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:Math.random(),vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:.5+Math.random()*1.8}));}
function drawParticles(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of particles){p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;if(p.y<0)p.y=innerHeight;if(p.y>innerHeight)p.y=0;const depth=.35+p.z*.9;const dx=p.x-mouse.x,dy=p.y-mouse.y,dist=Math.hypot(dx,dy);if(dist<150){p.x+=dx/dist*.15;p.y+=dy/dist*.15;}ctx.beginPath();ctx.arc(p.x,p.y,p.r*depth,0,Math.PI*2);ctx.fillStyle=`rgba(205,255,55,${.18+p.z*.34})`;ctx.fill();}for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const a=particles[i],b=particles[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<115){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(205,255,55,${(1-d/115)*.055})`;ctx.stroke();}}}requestAnimationFrame(drawParticles)}
window.addEventListener('resize',resizeCanvas);window.addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});resizeCanvas();drawParticles();
