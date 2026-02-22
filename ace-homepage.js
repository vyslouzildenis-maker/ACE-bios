/* ================================================================
   ACE VEER 3000 — HOMEPAGE SECTIONS
   BiosImport s.r.o. | Shoptet GitHub Workflow
   ================================================================ */

(function () {
  'use strict';

  var CDN = 'https://cdn.jsdelivr.net/gh/vyslouzildenis-maker/ACE-bios@main/assets/';
  var O = '#E8730A';   // orange
  var D = '#111111';   // dark
  var W = '#fff';
  var G = '#F2F2F2';   // light gray bg
  var FONT = "'Barlow','Helvetica Neue',Arial,sans-serif";

  function isHome() {
    var p = window.location.pathname.replace(/\/$/, '') || '/';
    return ['/', '/uvod', '/uvod/'].some(function(u){ return u.replace(/\/$/, '') === p || p === '/'; });
  }

  function before(el) {
    var f = document.querySelector('#footer,footer,.footer,[id="footer"]');
    if (f) f.parentNode.insertBefore(el, f); else document.body.appendChild(el);
  }

  function s(id, bg, pad) {
    var el = document.createElement('section');
    el.id = id;
    el.style.cssText = 'background:' + (bg||G) + ';padding:' + (pad||'80px 0') + ';font-family:' + FONT + ';overflow:hidden;';
    return el;
  }

  function css(str) {
    var st = document.createElement('style');
    st.textContent = str;
    document.head.appendChild(st);
  }

  function wrap(html) {
    return '<div style="max-width:1280px;margin:0 auto;padding:0 40px;">' + html + '</div>';
  }

  function label(txt) {
    return '<div style="font-size:.75rem;font-weight:700;letter-spacing:.2em;color:#999;text-transform:uppercase;margin-bottom:18px;">[ ' + txt + ' ]</div>';
  }

  function h2(white, orange, rest) {
    var col = white ? '#fff' : D;
    var part1 = white ? '<span style="color:' + O + '">' + (orange||'') + '</span> ' : '<span style="color:' + O + '">' + (orange||'') + '</span> ';
    return '<h2 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;color:' + col + ';margin:0 0 20px;line-height:1.1;font-family:' + FONT + ';">' +
      (orange ? part1 : '') + (rest||'') + '</h2>';
  }

  function btnOrange(txt, href, outline) {
    if (outline) {
      return '<a href="' + (href||'#poptavka') + '" style="display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.4);padding:13px 28px;border-radius:6px;font-family:' + FONT + ';font-weight:800;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:all .2s;">' + txt + '</a>';
    }
    return '<a href="' + (href||'#poptavka') + '" style="display:inline-flex;align-items:center;gap:8px;background:' + O + ';color:#fff;padding:14px 28px;border-radius:6px;font-family:' + FONT + ';font-weight:800;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:background .2s;" onmouseover="this.style.background=\'#C5600A\'" onmouseout="this.style.background=\'' + O + '\'">' + txt + ' ↓</a>';
  }

  /* ============================================================
     SEKCE 1: HERO
     ============================================================ */
  function buildHero() {
    css(
      '#ace-hero{position:relative;min-height:88vh;display:flex;align-items:stretch;overflow:hidden;}' +
      '#ace-hero .hero-left{flex:0 0 55%;position:relative;display:flex;align-items:center;padding:80px 60px 80px 80px;background:' + D + ';}' +
      '#ace-hero .hero-left::before{content:"";position:absolute;inset:0;background:url(' + CDN + 'hero-bg.jpg) center/cover no-repeat;opacity:.25;}' +
      '#ace-hero .hero-right{flex:1;position:relative;overflow:hidden;}' +
      '#ace-hero .hero-right::before{content:"";position:absolute;inset:0;background:' + O + ';mix-blend-mode:multiply;opacity:.7;}' +
      '#ace-hero .hero-right img{width:100%;height:100%;object-fit:cover;display:block;}' +
      '#ace-hero .hero-tractor{position:absolute;right:-5%;bottom:0;height:90%;object-fit:contain;z-index:10;filter:drop-shadow(0 20px 60px rgba(0,0,0,.5));}' +
      '#ace-hero .hero-content{position:relative;z-index:5;}' +
      '#ace-hero h1{font-size:clamp(2.8rem,5vw,4.2rem);font-weight:900;color:#fff;margin:0 0 16px;line-height:1.05;font-family:' + FONT + ';}' +
      '#ace-hero h1 span{color:' + O + ';}' +
      '#ace-hero .hero-sub{font-size:1.2rem;font-weight:700;color:#fff;margin:0 0 20px;}' +
      '#ace-hero .hero-desc{font-size:.95rem;color:rgba(255,255,255,.7);margin:0 0 36px;line-height:1.65;max-width:520px;}' +
      '#ace-hero .hero-desc strong{color:#fff;}' +
      '#ace-hero .hero-btns{display:flex;gap:16px;flex-wrap:wrap;align-items:center;}' +
      '#ace-hero .hero-ghost{font-family:' + FONT + ';font-weight:800;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.65);text-decoration:none;padding:13px 0;}' +
      '#ace-hero .hero-ghost:hover{color:#fff;}' +
      '@media(max-width:900px){' +
        '#ace-hero{flex-direction:column;min-height:auto;}' +
        '#ace-hero .hero-left{flex:none;padding:60px 24px;min-height:70vh;}' +
        '#ace-hero .hero-right{display:none;}' +
        '#ace-hero .hero-tractor{display:none;}' +
      '}'
    );

    var el = document.createElement('div');
    el.id = 'ace-hero';
    el.innerHTML =
      '<div class="hero-left">' +
        '<div class="hero-content">' +
          '<h1>Malotraktory <span>ACE</span></h1>' +
          '<p class="hero-sub">Pro každodenní nasazení v náročných podmínkách</p>' +
          '<p class="hero-desc">Malotraktory ACE jsou stavěné na práci, která se dělá každý den – na poli, ve vinici, v sadu i kolem obce. Nově je přinášíme do ČR a SK jako výhradní dovozce <strong>BiosImport s.r.o.</strong> – s jistotou servisu a náhradních dílů.</p>' +
          '<div class="hero-btns">' +
            btnOrange('Model VEER 3000', '#model') +
            '<a href="#poptavka" class="hero-ghost">NEZÁVAZNÁ POPTÁVKA</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="hero-right">' +
        '<img src="' + CDN + 'hero-field.jpg" alt="ACE VEER 3000 v poli">' +
        '<img class="hero-tractor" src="' + CDN + 'hero-tractor.png" alt="ACE VEER 3000">' +
      '</div>';

    var content = document.querySelector('#content,main,.page-content,#page-content');
    if (content) content.insertBefore(el, content.firstChild);
    else {
      var header = document.querySelector('#header,.header,[id="header"]');
      if (header) header.after(el); else document.body.prepend(el);
    }
  }

  /* ============================================================
     SEKCE 2: O ZNAČCE ACE
     ============================================================ */
  function buildOZnacce() {
    css(
      '#ace-znacka{background:#fff;padding:100px 0;}' +
      '#ace-znacka .zg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-znacka .zimg-wrap{position:relative;}' +
      '#ace-znacka .zimg-wrap img{width:100%;border-radius:8px;display:block;}' +
      '#ace-znacka .zbadge{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #e8e8e8;border-radius:8px;padding:16px 20px;margin-top:16px;box-shadow:0 2px 12px rgba(0,0,0,.06);}' +
      '#ace-znacka .zbadge img{height:40px;width:auto;}' +
      '#ace-znacka .zbadge p{margin:0;font-size:.875rem;color:#555;line-height:1.4;}' +
      '#ace-znacka .zbadge strong{color:' + O + ';}' +
      '#ace-znacka .ztxt p{color:#444;font-size:.975rem;line-height:1.75;margin:0 0 18px;}' +
      '#ace-znacka .ztxt strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-znacka .zg{grid-template-columns:1fr;gap:40px;}}' +
      '@media(max-width:600px){#ace-znacka{padding:60px 0;}}'
    );

    var el = s('ace-znacka', '#fff', '0');
    el.innerHTML =
      '<div class="zg">' +
        '<div class="zimg-wrap">' +
          '<img src="' + CDN + 'ace-vineyard.jpg" alt="ACE VEER 3000 ve vinici">' +
          '<div class="zbadge">' +
            '<img src="' + CDN + 'biosimport-logo.svg" alt="BiosImport">' +
            '<p><strong>BiosImport s.r.o.</strong> výhradní dovozce<br>ACE pro Českou a Slovenskou republiku</p>' +
          '</div>' +
        '</div>' +
        '<div class="ztxt">' +
          label('GLOBÁLNÍ SÍLA, KTERÁ NYNÍ PRACUJE PRO VÁS') +
          '<h2 style="font-size:clamp(1.8rem,3vw,2.4rem);font-weight:900;color:' + D + ';margin:0 0 24px;line-height:1.2;font-family:' + FONT + ';">' +
            '<span style="color:' + O + '">BiosImport s.r.o.</span> přináší do České a Slovenské republiky techniku, která má odolnost v DNA' +
          '</h2>' +
          '<p>Jsme hrdým výhradním dovozcem značky <strong>ACE</strong> (Action Construction Equipment Ltd.) – indického průmyslového giganta, který už od roku 1995 určuje standardy v těžké technice. To, co začalo jako vize vyrábět špičkové stroje pro nejnáročnější nasazení, se dnes proměnilo v globální technologickou sílu s výrobní kapacitou tisíců strojů ročně.</p>' +
          '<p>ACE patří k lídrům indického trhu ve <strong>stavební technice</strong> a dlouhodobě sbírá prestižní ocenění – včetně titulů jako „Bestseller in Mobile Cranes" nebo „Innovation of the Year". Robustní inženýrství a zkušenosti z těžkého provozu dnes ACE <strong>přenáší i do zemědělské techniky,</strong> aby stejné nároky na odolnost a jednoduchý servis fungovaly také na poli, ve vinici i v komunálu.</p>' +
          btnOrange('Model VEER 3000', '#model') +
        '</div>' +
      '</div>';
    before(el);
  }

  /* ============================================================
     SEKCE 3: PRO KOHO
     ============================================================ */
  function buildProKoho() {
    css(
      '#ace-prokoho{padding:80px 0;}' +
      '#ace-prokoho .pkg{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;max-width:1280px;margin:32px auto 0;padding:0 40px;}' +
      '#ace-prokoho .pk{background:#fff;border-radius:8px;padding:32px 20px 28px;text-align:center;border:1px solid #e8e8e8;transition:all .3s;}' +
      '#ace-prokoho .pk:hover{border-color:' + O + ';box-shadow:0 8px 24px rgba(232,115,10,.12);transform:translateY(-3px);}' +
      '#ace-prokoho .pikon{font-size:2.4rem;margin-bottom:16px;display:block;}' +
      '#ace-prokoho .pk h3{font-size:.975rem;font-weight:800;color:' + D + ';margin:0 0 12px;line-height:1.3;}' +
      '#ace-prokoho .pk p{font-size:.85rem;color:#666;line-height:1.55;margin:0;}' +
      '@media(max-width:1024px){#ace-prokoho .pkg{grid-template-columns:repeat(3,1fr);}}' +
      '@media(max-width:600px){#ace-prokoho .pkg{grid-template-columns:1fr 1fr;padding:0 20px;}}' +
      '@media(max-width:400px){#ace-prokoho .pkg{grid-template-columns:1fr;}}'
    );

    var polozky = [
      { ikon: '👨‍🌾', tit: 'Drobní farmáři a malozemědělci', txt: 'Vyměňte starosti za jistotu. Pro soběstačnost při pěstování zemědělských plodin.' },
      { ikon: '🍇', tit: 'Vinaři, ovocnáři a chmelaři', txt: 'Maximální síla v úzkých řádcích. ACE projede tam, kam se jiní nedostanou.' },
      { ikon: '🏙️', tit: 'Obce a technické služby', txt: 'Spolehlivý partner pro vaši obec. Stroje ACE a servis, na který se můžete spolehnout.' },
      { ikon: '🐴', tit: 'Chovatelé koní a hospodářských zvířat', txt: 'Profesionální pomocník do vašeho areálu, na kterého se můžete při péči o zvířata spolehnout.' },
      { ikon: '🌲', tit: 'Majitelé lesů a zelených ploch', txt: 'Spolehlivý pomocník pro údržbu lesa a zelených ploch. Ušetří čas i sílu při práci kolem cest.' },
    ];

    var kartyHtml = polozky.map(function(p) {
      return '<div class="pk"><span class="pikon">' + p.ikon + '</span><h3>' + p.tit + '</h3><p>' + p.txt + '</p></div>';
    }).join('');

    var el = s('ace-prokoho', G, '0');
    el.innerHTML = wrap(
      label('DO POLE I OBCE') +
      '<h2 style="font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:' + D + ';margin:0;text-align:center;font-family:' + FONT + ';">' +
        '<span style="color:' + O + '">Pro koho</span> jsou traktory ACE' +
      '</h2>'
    ) +
    '<div class="pkg">' + kartyHtml + '</div>';
    before(el);
  }

  /* ============================================================
     SEKCE 4: VÝHODY (tmavé pozadí)
     ============================================================ */
  function buildVyhody() {
    css(
      '#ace-vyhody{padding:80px 0;}' +
      '#ace-vyhody .vhdr{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-bottom:48px;}' +
      '#ace-vyhody .vhdr h2{font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:#fff;margin:0;line-height:1.1;font-family:' + FONT + ';}' +
      '#ace-vyhody .vhdr h2 span{color:' + O + ';}' +
      '#ace-vyhody .vhdr p{color:rgba(255,255,255,.65);font-size:.975rem;line-height:1.7;margin:0;}' +
      '#ace-vyhody .vg{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}' +
      '#ace-vyhody .vk{background:#fff;border-radius:8px;overflow:hidden;}' +
      '#ace-vyhody .vk-img{position:relative;height:240px;overflow:hidden;}' +
      '#ace-vyhody .vk-img img{width:100%;height:100%;object-fit:cover;display:block;}' +
      '#ace-vyhody .vk-img .vikon{position:absolute;bottom:16px;left:16px;width:48px;height:48px;background:rgba(255,255,255,.15);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;backdrop-filter:blur(4px);}' +
      '#ace-vyhody .vk-body{padding:24px 24px 28px;}' +
      '#ace-vyhody .vk-body h3{font-size:1.1rem;font-weight:800;color:' + D + ';margin:0 0 12px;font-family:' + FONT + ';}' +
      '#ace-vyhody .vk-body h3 span{color:' + O + ';}' +
      '#ace-vyhody .vk-body p{font-size:.875rem;color:#555;line-height:1.65;margin:0;}' +
      '#ace-vyhody .vk-body strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-vyhody .vhdr,#ace-vyhody .vg{grid-template-columns:1fr;}}' +
      '@media(max-width:600px){#ace-vyhody{padding:60px 0;}}'
    );

    var karty = [
      { foto: 'vyhoda-pole.jpg', ikon: '🛡️', tit: 'Prověřená <span>odolnost</span>', txt: 'Technologie <strong>ACE jsou prověřené v těžké technice.</strong> Tuto nezničitelnou konstrukční DNA přinášíme do zemědělství – přímo do návrhu traktorů, které mají vydržet každodenní zátěž.' },
      { foto: 'vyhoda-pole2.jpg', ikon: '⚙️', tit: 'Jednoduchost a <span>spolehlivost</span>', txt: 'V době, kdy je technika často zbytečně složitá a plná citlivé elektroniky, sází <strong>ACE na jednoduchost a funkčnost.</strong> Osvědčená řešení, snadná údržba a nízké provozní náklady doplňuje technická a funkční výbava pro každodenní práci.' },
      { foto: 'vyhoda-servis.jpg', ikon: '💡', tit: '<span>Inovace</span> s rozumem', txt: 'Díky vlastnímu vývojovému centru a moderním výrobním závodům ve Faridabadu <strong>ACE drží krok se světem</strong> – a zároveň přináší špičkovou funkčnost, která dává smysl v každodenní práci.' },
    ];

    var kartyHtml = karty.map(function(k) {
      return '<div class="vk">' +
        '<div class="vk-img"><img src="' + CDN + k.foto + '" alt="" loading="lazy"><div class="vikon">' + k.ikon + '</div></div>' +
        '<div class="vk-body"><h3>' + k.tit + '</h3><p>' + k.txt + '</p></div>' +
      '</div>';
    }).join('');

    var el = s('ace-vyhody', D, '0');
    el.innerHTML = wrap(
      '<div class="vhdr">' +
        '<div>' +
          label('VÝHODY') +
          '<h2><span>Proč ACE?</span> Protože v provozu potřebujete spolehlivost</h2>' +
        '</div>' +
        '<p>Stroje mají sloužit, ne stát. Proto stavíme servisní síť partnerů pro ČR a SR – aktuálně Štoky, Herálec, Hradec Králové. Traktory ACE vychází ze zkušeností stavební techniky a její odolnost přenáší i do zemědělství.</p>' +
      '</div>' +
      '<div class="vg">' + kartyHtml + '</div>'
    );
    before(el);
  }

  /* ============================================================
     SEKCE 5: VLAJKOVÝ MODEL
     ============================================================ */
  function buildModel() {
    css(
      '#ace-model{padding:80px 0;background:#fff;}' +
      '#ace-model .mg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1280px;margin:40px auto 0;padding:0 40px;}' +
      '#ace-model .mimg{position:relative;}' +
      '#ace-model .mimg img{width:100%;border-radius:8px;display:block;}' +
      '#ace-model .mimg .fotobadge{position:absolute;top:16px;left:16px;background:rgba(255,255,255,.92);border-radius:6px;padding:8px 14px;font-size:.8rem;font-weight:700;color:' + D + ';display:flex;align-items:center;gap:6px;}' +
      '#ace-model h3{font-family:' + FONT + ';font-size:1.8rem;font-weight:900;color:' + O + ';margin:0 0 16px;letter-spacing:-.01em;}' +
      '#ace-model .mdesc{font-size:.95rem;color:#555;line-height:1.7;margin:0 0 28px;}' +
      '#ace-model .mdesc strong{color:' + D + ';}' +
      '#ace-model .mfeat{display:flex;flex-direction:column;gap:16px;margin-bottom:0;}' +
      '#ace-model .mf{display:flex;gap:16px;align-items:flex-start;background:' + G + ';border-radius:8px;padding:16px 20px;}' +
      '#ace-model .mf-ikon{width:44px;height:44px;background:' + O + ';border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;}' +
      '#ace-model .mf-txt h4{font-size:.975rem;font-weight:800;color:' + D + ';margin:0 0 4px;font-family:' + FONT + ';}' +
      '#ace-model .mf-txt p{font-size:.855rem;color:#666;line-height:1.55;margin:0;}' +
      '#ace-model .mf-txt strong{color:' + D + ';}' +
      '#ace-model .mslider{position:relative;}' +
      '#ace-model .mslider .marrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;background:#fff;border:none;border-radius:50%;box-shadow:0 2px 12px rgba(0,0,0,.15);cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;z-index:5;}' +
      '#ace-model .mslider .marrow.prev{left:12px;}' +
      '#ace-model .mslider .marrow.next{right:12px;}' +
      '@media(max-width:900px){#ace-model .mg{grid-template-columns:1fr;gap:40px;padding:0 24px;}}' +
      '@media(max-width:600px){#ace-model{padding:60px 0;}}'
    );

    var featy = [
      { ikon: '⚡', tit: 'Japonské srdce', txt: 'Pod kapotou pracuje spolehlivý <strong>motor Mitsubishi</strong> (Stage V) o výkonu 25 koní, který vyniká úsporností a tichým chodem.' },
      { ikon: '⚙️', tit: 'Volba je na vás', txt: 'Nabízíme dvě verze převodovky – <strong>klasický manuál</strong> pro tradiční práci nebo <strong>komfortní HST</strong> (hydrostat) pro precizní ovládání.' },
      { ikon: '🚜', tit: 'Skutečný pracant', txt: 'S pohonem <strong>4WD, nosností 800 kg</strong> na tříbodovém závěsu a robustním šasi se nezalekne bláta, sněhu ani těžkého nákladu.' },
    ];

    var featHtml = featy.map(function(f) {
      return '<div class="mf"><div class="mf-ikon">' + f.ikon + '</div><div class="mf-txt"><h4>' + f.tit + '</h4><p>' + f.txt + '</p></div></div>';
    }).join('');

    var el = s('ace-model', '#fff', '0');
    el.id = 'model';
    el.innerHTML = wrap(
      '<div style="text-align:center;">' +
        label('NAŠE NABÍDKA') +
        '<h2 style="font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:' + D + ';margin:0 0 16px;font-family:' + FONT + ';">' +
          'Náš <span style="color:' + O + '">vlajkový</span> model' +
        '</h2>' +
        '<p style="color:#555;font-size:1rem;max-width:560px;margin:0 auto;line-height:1.6;">Vstupujeme na trh s modelem, který přesně definuje naši vizi – <strong style="color:' + D + '">kompaktní rozměry, ale síla dospělého traktoru.</strong></p>' +
      '</div>'
    ) +
    '<div class="mg">' +
      '<div class="mslider mimg">' +
        '<img id="mslide-img" src="' + CDN + 'veer3000-vinice.jpg" alt="ACE VEER 3000">' +
        '<div class="fotobadge">📷 Fotogalerie +40</div>' +
        '<button class="marrow prev" onclick="aceSlide(-1)">‹</button>' +
        '<button class="marrow next" onclick="aceSlide(1)">›</button>' +
      '</div>' +
      '<div>' +
        '<h3>ACE VEER 3000</h3>' +
        '<p class="mdesc">ACE VEER 3000 je malotraktor <strong>navržený pro maximální všestrannost.</strong> Ať už jste farmář, vinař, nebo spravujete obecní zeleň, tento stroj vás podrží.</p>' +
        '<div class="mfeat">' + featHtml + '</div>' +
      '</div>' +
    '</div>';

    before(el);

    // Jednoduchý slider
    var imgs = [CDN + 'veer3000-vinice.jpg', CDN + 'veer3000-pole.jpg', CDN + 'veer3000-detail.jpg'];
    var idx = 0;
    window.aceSlide = function(dir) {
      idx = (idx + dir + imgs.length) % imgs.length;
      var im = document.getElementById('mslide-img');
      if (im) { im.style.opacity = '0'; setTimeout(function() { im.src = imgs[idx]; im.style.opacity = '1'; }, 200); }
    };
    css('#mslide-img{transition:opacity .2s;}');
  }

  /* ============================================================
     SEKCE 6: CENA BAR
     ============================================================ */
  function buildCenaBar() {
    css(
      '#ace-cenabar{background:' + D + ';padding:28px 0;}' +
      '#ace-cenabar .cb{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;}' +
      '#ace-cenabar .cb-txt{font-size:1rem;color:rgba(255,255,255,.8);font-weight:600;}' +
      '#ace-cenabar .cb-txt strong{color:#fff;font-size:1.6rem;margin:0 4px;}' +
      '#ace-cenabar .cb-txt span{color:' + O + ';font-weight:800;}' +
      '@media(max-width:700px){#ace-cenabar .cb{flex-direction:column;text-align:center;}}'
    );

    var el = s('ace-cenabar', D, '0');
    el.innerHTML = wrap(
      '<div class="cb">' +
        '<div class="cb-txt">Zaváděcí cena pro prvních <span>100</span> zákazníků: <strong>219 000</strong> Kč bez DPH</div>' +
        btnOrange('NEZÁVAZNÁ POPTÁVKA', '#poptavka') +
      '</div>'
    );
    before(el);
  }

  /* ============================================================
     SEKCE 7: DVĚ VARIANTY
     ============================================================ */
  function buildVarianty() {
    css(
      '#ace-varianty{padding:80px 0;}' +
      '#ace-varianty .varg{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:48px;}' +
      '#ace-varianty .var{background:#fff;border-radius:10px;overflow:hidden;border:1px solid #e8e8e8;transition:all .3s;}' +
      '#ace-varianty .var:hover{box-shadow:0 12px 36px rgba(0,0,0,.1);transform:translateY(-3px);}' +
      '#ace-varianty .var img{width:100%;height:280px;object-fit:cover;display:block;}' +
      '#ace-varianty .var-body{padding:28px 28px 32px;}' +
      '#ace-varianty .var-body h3{font-size:1.4rem;font-weight:900;color:' + D + ';margin:0 0 10px;font-family:' + FONT + ';}' +
      '#ace-varianty .var-body h3 span{color:' + O + ';}' +
      '#ace-varianty .var-body p{font-size:.9rem;color:#666;margin:0 0 20px;line-height:1.55;}' +
      '#ace-varianty .var-body .cena{font-size:1rem;font-weight:700;color:' + D + ';margin-bottom:4px;}' +
      '#ace-varianty .var-body .cena strong{color:' + O + ';}' +
      '#ace-varianty .var-body .bezDph{font-size:.8rem;color:#999;margin-bottom:20px;}' +
      '#ace-varianty .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:' + O + ';border:2px solid ' + O + ';padding:11px 22px;border-radius:6px;font-family:' + FONT + ';font-weight:800;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:all .2s;}' +
      '#ace-varianty .btn-outline:hover{background:' + O + ';color:#fff;}' +
      '#ace-varianty .pn-tit{font-size:clamp(1.6rem,3vw,2.2rem);font-weight:900;color:' + D + ';text-align:center;margin:60px 0 28px;font-family:' + FONT + ';}' +
      '#ace-varianty .pn-tit span{color:' + O + ';}' +
      '#ace-varianty .png{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:0;}' +
      '#ace-varianty .pnk{background:#fff;border-radius:8px;overflow:hidden;text-align:center;border:1px solid #e8e8e8;}' +
      '#ace-varianty .pnk img{width:100%;height:140px;object-fit:contain;padding:20px;display:block;}' +
      '#ace-varianty .pnk .pnlabel{background:' + O + ';color:#fff;font-weight:800;font-size:.85rem;padding:10px 8px;letter-spacing:.02em;}' +
      '@media(max-width:768px){#ace-varianty .varg,#ace-varianty .png{grid-template-columns:1fr 1fr;}}' +
      '@media(max-width:480px){#ace-varianty .png{grid-template-columns:1fr 1fr;}}' +
      '@media(max-width:600px){#ace-varianty{padding:60px 0;}}'
    );

    var pneumatiky = ['Agro (Standard)','Průmyslové','Travní','Radiální'];
    var pnFotos = ['pneu-agro.jpg','pneu-prumysl.jpg','pneu-travni.jpg','pneu-radial.jpg'];
    var pnHtml = pneumatiky.map(function(p, i) {
      return '<div class="pnk"><img src="' + CDN + pnFotos[i] + '" alt="' + p + '" loading="lazy"><div class="pnlabel">' + p + '</div></div>';
    }).join('');

    var el = s('ace-varianty', G, '0');
    el.innerHTML = wrap(
      '<div style="text-align:center;">' +
        label('VARIANTY') +
        '<h2 style="font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:' + D + ';margin:0 0 16px;font-family:' + FONT + ';">Dvě varianty <span style="color:' + O + '">převodovky</span></h2>' +
        '<p style="font-size:.975rem;color:#555;max-width:640px;margin:0 auto;line-height:1.6;"><strong style="color:' + D + '">Stejný model VEER 3000,</strong> dvě varianty ovládání – podle toho, jestli chcete maximální pohodlí, nebo klasiku.</p>' +
      '</div>' +
      '<div class="varg">' +
        '<div class="var">' +
          '<img src="' + CDN + 'veer3000-manual.jpg" alt="ACE Veer 3000 9+3">' +
          '<div class="var-body">' +
            '<h3>ACE Veer 3000 25HP <span>(9+3)</span></h3>' +
            '<p>Manuální převodovka 9+3 pro ty, kdo chtějí klasiku a plnou kontrolu.</p>' +
            '<div class="cena">Cena od <strong>219 000 Kč</strong></div>' +
            '<div class="bezDph">bez DPH</div>' +
            '<a href="' + CDN + 'produktovy-list-93.pdf" class="btn-outline">📄&nbsp;PRODUKTOVÝ LIST</a>' +
          '</div>' +
        '</div>' +
        '<div class="var">' +
          '<img src="' + CDN + 'veer3000-hst.jpg" alt="ACE Veer 3000 HST">' +
          '<div class="var-body">' +
            '<h3>ACE Veer 3000 25HP <span>(HST)</span></h3>' +
            '<p>Hydrostat – pohodlné ovládání vpřed/vzad bez neustálého řazení.</p>' +
            '<div class="cena">Cena od <strong>249 000 Kč</strong></div>' +
            '<div class="bezDph">bez DPH</div>' +
            '<a href="' + CDN + 'produktovy-list-hst.pdf" class="btn-outline">📄&nbsp;PRODUKTOVÝ LIST</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="pn-tit">Varianty <span>pneumatik</span></div>' +
      '<div class="png">' + pnHtml + '</div>'
    );
    before(el);
  }

  /* ============================================================
     SEKCE 8: DALŠÍ MODELY TEASER
     ============================================================ */
  function buildDalsiModely() {
    css(
      '#ace-dalsi{padding:80px 0;background:#fff;}' +
      '#ace-dalsi .dg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-dalsi .dimg{position:relative;border-radius:10px;overflow:hidden;}' +
      '#ace-dalsi .dimg img{width:100%;display:block;filter:blur(4px) brightness(.7);}' +
      '#ace-dalsi .dimg .dmark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;}' +
      '#ace-dalsi p{color:#555;font-size:.975rem;line-height:1.7;margin:0 0 18px;}' +
      '#ace-dalsi strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-dalsi .dg{grid-template-columns:1fr;gap:40px;}}' +
      '@media(max-width:600px){#ace-dalsi{padding:60px 0;}}'
    );

    var el = s('ace-dalsi', '#fff', '0');
    el.innerHTML =
      '<div class="dg">' +
        '<div class="dimg">' +
          '<img src="' + CDN + 'dalsi-model-blur.jpg" alt="Další modely">' +
          '<div class="dmark">?</div>' +
        '</div>' +
        '<div>' +
          label('BUDOUCNOST JE V RŮSTU') +
          '<h2 style="font-size:clamp(1.8rem,3vw,2.4rem);font-weight:900;color:' + D + ';margin:0 0 24px;font-family:' + FONT + ';">' +
            '<span style="color:' + O + '">Další modely</span> jsou na cestě' +
          '</h2>' +
          '<p>ACE VEER 3000 je teprve začátek. V průběhu tohoto roku budeme naše portfolio rozšiřovat o další modely, abychom pokryli potřeby všech, kteří hledají poctivý stroj za férovou cenu.</p>' +
          '<p><strong>Nechte nám kontakt a dáme vědět, jakmile dorazí další stroje a konfigurace.</strong></p>' +
          btnOrange('KONTAKT', '#poptavka') +
        '</div>' +
      '</div>';
    before(el);
  }

  /* ============================================================
     SEKCE 9: CTA BANNER (tmavý s foto pozadím)
     ============================================================ */
  function buildCTABanner() {
    css(
      '#ace-cta{position:relative;padding:80px 0;overflow:hidden;}' +
      '#ace-cta::before{content:"";position:absolute;inset:0;background:url(' + CDN + 'cta-bg.jpg) center/cover no-repeat;opacity:.3;}' +
      '#ace-cta::after{content:"";position:absolute;inset:0;background:' + D + ';opacity:.75;}' +
      '#ace-cta .ctaw{position:relative;z-index:2;display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-cta h2{font-size:clamp(1.8rem,3vw,2.6rem);font-weight:900;color:#fff;margin:0 0 12px;font-family:' + FONT + ';}' +
      '#ace-cta h2 span{color:' + O + ';}' +
      '#ace-cta p{color:rgba(255,255,255,.7);font-size:.975rem;line-height:1.6;margin:0;max-width:560px;}' +
      '#ace-cta p strong{color:#fff;}' +
      '#ace-cta .cta-right{display:flex;flex-direction:column;gap:16px;align-items:flex-end;}' +
      '#ace-cta .cta-nebo{color:rgba(255,255,255,.5);font-size:.8rem;text-align:center;letter-spacing:.1em;text-transform:uppercase;}' +
      '#ace-cta .cta-tel{display:inline-flex;align-items:center;gap:12px;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.3);padding:14px 24px;border-radius:6px;font-family:' + FONT + ';font-weight:700;font-size:1rem;text-decoration:none;transition:all .2s;white-space:nowrap;}' +
      '#ace-cta .cta-tel:hover{border-color:#fff;background:rgba(255,255,255,.08);}' +
      '@media(max-width:768px){#ace-cta .ctaw{grid-template-columns:1fr;}#ace-cta .cta-right{align-items:flex-start;}}' +
      '@media(max-width:600px){#ace-cta{padding:60px 0;}}'
    );

    var el = s('ace-cta', D, '0');
    el.innerHTML =
      '<div class="ctaw">' +
        '<div>' +
          '<h2><span>Zaujala vás nabídka</span><br>malotraktorů ACE?</h2>' +
          '<p><strong>Pošlete nezávaznou poptávku nebo si rovnou domluvte předváděčku.</strong> Doporučíme vhodnou variantu a pošleme cenu i dostupnost. Stačí nám napsat nebo zavolat.</p>' +
        '</div>' +
        '<div class="cta-right">' +
          btnOrange('NEZÁVAZNÁ POPTÁVKA', '#poptavka') +
          '<div class="cta-nebo">NEBO</div>' +
          '<a href="tel:+420728111612" class="cta-tel">📞 +420 728 111 612</a>' +
        '</div>' +
      '</div>';
    before(el);
  }

  /* ============================================================
     SEKCE 10: O NÁS BIOSIMPORT
     ============================================================ */
  function buildONas() {
    css(
      '#ace-onas{padding:100px 0;background:#fff;}' +
      '#ace-onas .og{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-onas .oimg img{width:100%;border-radius:10px;display:block;}' +
      '#ace-onas p{color:#555;font-size:.975rem;line-height:1.75;margin:0 0 16px;}' +
      '#ace-onas strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-onas .og{grid-template-columns:1fr;gap:40px;}}' +
      '@media(max-width:600px){#ace-onas{padding:60px 0;}}'
    );

    var el = s('ace-onas', '#fff', '0');
    el.innerHTML =
      '<div class="og">' +
        '<div class="oimg"><img src="' + CDN + 'biosimport-team.jpg" alt="BiosImport tým"></div>' +
        '<div>' +
          label('O NÁS') +
          '<h2 style="font-size:clamp(1.8rem,3vw,2.4rem);font-weight:900;color:' + D + ';margin:0 0 24px;font-family:' + FONT + ';">' +
            'Jsme <span style="color:' + O + '">BiosImport,</span> prodáváme a servisujeme malotraktory' +
          '</h2>' +
          '<p><strong>Firma BiosImport s.r.o.</strong> se zabývá dovozem nových a repasovaných japonských malotraktorů osvědčených tradičních značek Kubota, Iseki, Yanmar. K malotraktorům nabízíme i prodej <strong>příslušenství od renomovaných výrobců</strong> a poskytujeme <strong>kvalitní servisní zázemí.</strong></p>' +
          '<p>Nově se stáváme oficiálním dovozcem značky ACE pro Českou a Slovenskou republiku. Bereme to jako závazek i ocenění naší práce a poskytnuté péče zákazníkům za celou dobu co působíme na trhu.</p>' +
          '<p>Naše provozovny se nacházejí v obci Herálec u Humpolce (9 km od dálnice D1, exit 90) a v Hradci Králové.</p>' +
        '</div>' +
      '</div>';
    before(el);
  }

  /* ============================================================
     SEKCE 11: POPTÁVKOVÝ FORMULÁŘ
     ============================================================ */
  function buildPoptavka() {
    css(
      '#poptavka{padding:80px 0;background:' + G + ';}' +
      '#poptavka .pg{display:grid;grid-template-columns:1fr 1fr;gap:40px;max-width:1100px;margin:40px auto 0;padding:0 40px;}' +
      '#poptavka .pi,#poptavka .pf{background:#fff;border-radius:10px;padding:44px;box-shadow:0 2px 20px rgba(0,0,0,.07);}' +
      '#poptavka .pi h3{font-size:1.6rem;font-weight:900;color:' + D + ';margin:0 0 12px;font-family:' + FONT + ';}' +
      '#poptavka .pi .pp{font-weight:600;color:' + D + ';font-size:.95rem;margin:0 0 24px;line-height:1.5;}' +
      '#poptavka .ptel{margin-bottom:4px;}' +
      '#poptavka .ptel a{color:' + O + ' !important;font-weight:700;font-size:1.05rem;text-decoration:none !important;}' +
      '#poptavka .ptel-popis{color:#888;font-size:.83rem;margin:2px 0 16px 24px;}' +
      '#poptavka .pemail{margin-bottom:28px;}' +
      '#poptavka .pemail a{color:' + O + ' !important;font-weight:600;text-decoration:none !important;}' +
      '#poptavka .pfak{border-top:1px solid #eee;padding-top:20px;}' +
      '#poptavka .pfak h4{font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#999;margin:0 0 10px;}' +
      '#poptavka .pfak .upoz{background:#eff6ff;border-radius:6px;padding:10px 14px;font-size:.83rem;font-weight:600;color:#1d4ed8;margin-bottom:10px;}' +
      '#poptavka .pfak .adr{font-size:.875rem;color:#666;line-height:1.8;}' +
      '#poptavka .fg{margin-bottom:14px;}' +
      '#poptavka .fg label{display:block;font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;color:' + D + ';}' +
      '#poptavka .fg input,#poptavka .fg textarea{width:100%;border:2px solid #e0e0e0;border-radius:6px;padding:12px 16px;font-size:.93rem;background:#fafafa;box-sizing:border-box;font-family:' + FONT + ';transition:border-color .2s;outline:none;}' +
      '#poptavka .fg input:focus,#poptavka .fg textarea:focus{border-color:' + O + ';background:#fff;}' +
      '#poptavka .fg textarea{min-height:110px;resize:vertical;}' +
      '#poptavka .souhlas{display:flex;align-items:flex-start;gap:8px;font-size:.83rem;color:#666;margin:14px 0;}' +
      '#poptavka .souhlas input{margin-top:3px;flex-shrink:0;accent-color:' + O + ';width:auto !important;}' +
      '#poptavka .pbtn{width:100%;background:' + O + ';color:#fff;font-weight:800;font-size:.82rem;padding:16px;border:none;border-radius:6px;cursor:pointer;text-transform:uppercase;letter-spacing:.08em;font-family:' + FONT + ';transition:background .2s;}' +
      '#poptavka .pbtn:hover{background:#C5600A;}' +
      '#poptavka .pbtn:disabled{background:#ccc;cursor:not-allowed;}' +
      '#poptavka .pok{display:none;text-align:center;padding:48px 20px;color:#15803d;font-weight:700;font-size:1.05rem;}' +
      '#poptavka .perr{display:none;color:#dc2626;font-size:.83rem;margin-top:8px;text-align:center;}' +
      '@media(max-width:768px){#poptavka .pg{grid-template-columns:1fr;padding:0 20px;}}' +
      '@media(max-width:600px){#poptavka{padding:60px 0;}#poptavka .pi,#poptavka .pf{padding:28px;}}'
    );

    var el = s('poptavka', G, '0');
    el.innerHTML = wrap(
      '<div style="text-align:center;">' +
        label('KONTAKT') +
        '<h2 style="font-size:clamp(1.8rem,3vw,2.6rem);font-weight:900;color:' + D + ';margin:0;font-family:' + FONT + ';">' +
          '<span style="color:' + O + '">Zaujala vás nabídka</span> malotraktorů ACE?' +
        '</h2>' +
      '</div>'
    ) +
    '<div class="pg">' +
      '<div class="pi">' +
        '<h3>Nezávazná poptávka</h3>' +
        '<p class="pp">Pošlete nezávaznou poptávku nebo si rovnou domluvte předváděčku.</p>' +
        '<div class="ptel">📞 <a href="tel:+420728111612">+420 728 111 612</a></div>' +
        '<p class="ptel-popis">Prodej malotraktorů ACE</p>' +
        '<div class="ptel">📞 <a href="tel:+420735199881">+420 735 199 881</a></div>' +
        '<p class="ptel-popis">Příslušenství, zákaznický servis</p>' +
        '<div class="pemail">✉ <a href="mailto:info@biosimport.cz">info@biosimport.cz</a></div>' +
        '<div class="pfak">' +
          '<h4>Fakturační adresa</h4>' +
          '<div class="upoz">ℹ Pouze pro fakturaci – nikoli pro doručení zboží!</div>' +
          '<div class="adr">BiosImport s.r.o.<br>B. Kobzinové 2020, 580 01 Havlíčkův Brod<br>IČ: 17543169 | DIČ: CZ17543169</div>' +
        '</div>' +
      '</div>' +
      '<div class="pf">' +
        '<div class="pok" id="pok">✅ Děkujeme! Poptávka odeslána. Ozveme se co nejdříve.</div>' +
        '<form id="pfrm">' +
          '<div class="fg"><label>Jméno a příjmení *</label><input type="text" name="jmeno" placeholder="Jan Novák" required></div>' +
          '<div class="fg"><label>E-mail *</label><input type="email" name="email" placeholder="jan@email.cz" required></div>' +
          '<div class="fg"><label>Telefon</label><input type="tel" name="telefon" placeholder="+420 000 000 000"></div>' +
          '<div class="fg"><label>Zájem o variantu</label><input type="text" name="varianta" placeholder="VEER 3000 9+3 / HST / nevím"></div>' +
          '<div class="fg"><label>Zpráva</label><textarea name="message" placeholder="Váš dotaz, zájem o předváděčku nebo cokoliv dalšího..."></textarea></div>' +
          '<label class="souhlas"><input type="checkbox" required> Souhlasím se zpracováním osobních údajů pro účely odpovědi na poptávku.</label>' +
          '<button type="submit" class="pbtn">Odeslat poptávku ↓</button>' +
          '<div class="perr" id="perr">Nepodařilo se odeslat. Zkuste to prosím znovu.</div>' +
        '</form>' +
      '</div>' +
    '</div>';

    before(el);

    document.getElementById('pfrm').addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = this.querySelector('.pbtn');
      btn.disabled = true; btn.textContent = 'Odesílám…';
      fetch('https://formspree.io/f/mbdazjlz', {
        method: 'POST', body: new FormData(this), headers: { 'Accept': 'application/json' }
      }).then(function(r) {
        if (r.ok) { document.getElementById('pfrm').style.display = 'none'; document.getElementById('pok').style.display = 'block'; }
        else throw new Error();
      }).catch(function() {
        document.getElementById('perr').style.display = 'block';
        btn.disabled = false; btn.textContent = 'Odeslat poptávku ↓';
      });
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    if (!isHome()) return;

    buildHero();
    buildOZnacce();
    buildProKoho();
    buildVyhody();
    buildModel();
    buildCenaBar();
    buildVarianty();
    buildDalsiModely();
    buildCTABanner();
    buildONas();
    buildPoptavka();
  });

})();
