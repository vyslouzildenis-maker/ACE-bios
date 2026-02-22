/* ================================================================
   ACE VEER 3000 — HOMEPAGE SECTIONS
   BiosImport s.r.o. | Shoptet GitHub Workflow
   FOTKY: Zatím placeholdery – nahradit reálnými soubory v /assets/
   ================================================================ */

(function () {
  'use strict';

  var CDN = 'https://cdn.jsdelivr.net/gh/vyslouzildenis-maker/ACE-bios@main/assets/';
  var O = '#E8730A';
  var D = '#111111';
  var G = '#F2F2F2';
  var FONT = "'Barlow','Helvetica Neue',Arial,sans-serif";

  /* Šedý placeholder – zobrazí se dokud nenahrajes reálné fotky */
  function ph(popis, w, h) {
    w = w || 800; h = h || 500;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">'
      + '<rect width="' + w + '" height="' + h + '" fill="#D1D5DB"/>'
      + '<rect x="' + (w/2-44) + '" y="' + (h/2-36) + '" width="88" height="70" rx="6" fill="#9CA3AF"/>'
      + '<circle cx="' + (w/2+18) + '" cy="' + (h/2-18) + '" r="12" fill="#6B7280"/>'
      + '<polygon points="' + (w/2-40) + ',' + (h/2+30) + ' ' + (w/2+40) + ',' + (h/2+30) + ' ' + (w/2+22) + ',' + (h/2+5) + ' ' + (w/2+6) + ',' + (h/2+16) + ' ' + (w/2-14) + ',' + (h/2-8) + '" fill="#6B7280"/>'
      + '<text x="' + (w/2) + '" y="' + (h/2+58) + '" text-anchor="middle" font-family="Arial" font-size="14" font-weight="600" fill="#4B5563">' + popis + '</text>'
      + '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function isHome() {
    var p = window.location.pathname.replace(/\/$/, '') || '/';
    return ['/', '/uvod'].some(function(u) { return u === p || p === '/'; });
  }

  function before(el) {
    var f = document.querySelector('#footer,footer,.footer,[id="footer"]');
    if (f) f.parentNode.insertBefore(el, f); else document.body.appendChild(el);
  }

  function sec(id, bg, pad) {
    var el = document.createElement('section');
    el.id = id;
    el.style.cssText = 'background:' + (bg || G) + ';padding:' + (pad || '80px 0') + ';font-family:' + FONT + ';overflow:hidden;';
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

  function lbl(txt) {
    return '<div style="font-size:.75rem;font-weight:700;letter-spacing:.2em;color:#999;text-transform:uppercase;margin-bottom:16px;">[ ' + txt + ' ]</div>';
  }

  function btnOrange(txt, href) {
    return '<a href="' + (href || '#poptavka') + '" style="display:inline-flex;align-items:center;gap:8px;background:' + O + ';color:#fff;padding:14px 28px;border-radius:6px;font-family:' + FONT + ';font-weight:800;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;" onmouseover="this.style.background=\'#C5600A\'" onmouseout="this.style.background=\'' + O + '\'">' + txt + ' ↓</a>';
  }


  /* ============================================================
     SEKCE 1: HERO
     ============================================================ */
  function buildHero() {
    css(
      '#ace-hero{display:grid;grid-template-columns:55% 45%;min-height:88vh;}' +
      '#ace-hero .hl{background:' + D + ';display:flex;align-items:center;padding:80px 60px 80px 80px;}' +
      '#ace-hero .hr{position:relative;overflow:hidden;}' +
      '#ace-hero .hr img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.5);}' +
      '#ace-hero .hr::after{content:"";position:absolute;inset:0;background:' + O + ';mix-blend-mode:multiply;opacity:.65;}' +
      '#ace-hero h1{font-size:clamp(2.6rem,4.5vw,4rem);font-weight:900;color:#fff;margin:0 0 16px;line-height:1.05;font-family:' + FONT + ';}' +
      '#ace-hero h1 span{color:' + O + ';}' +
      '#ace-hero .hsub{font-size:1.1rem;font-weight:700;color:#fff;margin:0 0 16px;}' +
      '#ace-hero .hdesc{font-size:.93rem;color:rgba(255,255,255,.7);margin:0 0 36px;line-height:1.65;max-width:500px;}' +
      '#ace-hero .hdesc strong{color:#fff;}' +
      '#ace-hero .hbtns{display:flex;gap:20px;align-items:center;flex-wrap:wrap;}' +
      '#ace-hero .hghost{font-family:' + FONT + ';font-weight:800;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.55);text-decoration:none;padding:14px 0;}' +
      '#ace-hero .hghost:hover{color:#fff;}' +
      '@media(max-width:900px){#ace-hero{grid-template-columns:1fr;min-height:auto;}#ace-hero .hr{display:none;}#ace-hero .hl{padding:60px 24px;}}'
    );

    var el = document.createElement('div');
    el.id = 'ace-hero';
    el.innerHTML =
      '<div class="hl">' +
        '<div>' +
          '<h1>Malotraktory <span>ACE</span></h1>' +
          '<p class="hsub">Pro každodenní nasazení v náročných podmínkách</p>' +
          '<p class="hdesc">Malotraktory ACE jsou stavěné na práci, která se dělá každý den – na poli, ve vinici, v sadu i kolem obce. Nově je přinášíme do ČR a SK jako výhradní dovozce <strong>BiosImport s.r.o.</strong></p>' +
          '<div class="hbtns">' + btnOrange('Model VEER 3000', '#model') + '<a href="#poptavka" class="hghost">NEZÁVAZNÁ POPTÁVKA</a></div>' +
        '</div>' +
      '</div>' +
      '<div class="hr"><img src="' + ph('Hero – traktor ACE v poli', 900, 700) + '" alt="ACE VEER 3000"></div>';

    var content = document.querySelector('#content,main,.page-content,#page-content');
    if (content) content.insertBefore(el, content.firstChild);
    else { var h = document.querySelector('#header,.header'); if (h) h.after(el); else document.body.prepend(el); }
  }


  /* ============================================================
     SEKCE 2: O ZNAČCE ACE
     ============================================================ */
  function buildOZnacce() {
    css(
      '#ace-znacka{background:#fff;padding:100px 0;}' +
      '#ace-znacka .zg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-znacka .zimg img{width:100%;border-radius:8px;display:block;}' +
      '#ace-znacka .zbadge{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #e8e8e8;border-radius:8px;padding:14px 18px;margin-top:12px;box-shadow:0 2px 10px rgba(0,0,0,.06);}' +
      '#ace-znacka .zbadge img{height:36px;width:auto;border-radius:4px;}' +
      '#ace-znacka .zbadge p{margin:0;font-size:.85rem;color:#555;line-height:1.4;}' +
      '#ace-znacka .zbadge strong{color:' + O + ';}' +
      '#ace-znacka p{color:#444;font-size:.975rem;line-height:1.75;margin:0 0 18px;}' +
      '#ace-znacka strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-znacka .zg{grid-template-columns:1fr;gap:40px;padding:0 24px;}#ace-znacka{padding:60px 0;}}'
    );

    var el = sec('ace-znacka', '#fff', '0');
    el.innerHTML =
      '<div class="zg">' +
        '<div class="zimg">' +
          '<img src="' + ph('ACE VEER 3000 ve vinici – foto', 700, 520) + '" alt="ACE VEER 3000 ve vinici">' +
          '<div class="zbadge">' +
            '<img src="' + ph('BiosImport logo', 120, 36) + '" alt="BiosImport">' +
            '<p><strong>BiosImport s.r.o.</strong> výhradní dovozce<br>ACE pro Českou a Slovenskou republiku</p>' +
          '</div>' +
        '</div>' +
        '<div>' +
          lbl('GLOBÁLNÍ SÍLA, KTERÁ NYNÍ PRACUJE PRO VÁS') +
          '<h2 style="font-size:clamp(1.7rem,2.8vw,2.3rem);font-weight:900;color:' + D + ';margin:0 0 24px;line-height:1.2;font-family:' + FONT + ';">' +
            '<span style="color:' + O + '">BiosImport s.r.o.</span> přináší do České a Slovenské republiky techniku, která má odolnost v DNA' +
          '</h2>' +
          '<p>Jsme hrdým výhradním dovozcem značky <strong>ACE</strong> (Action Construction Equipment Ltd.) – indického průmyslového giganta, který už od roku 1995 určuje standardy v těžké technice.</p>' +
          '<p>ACE patří k lídrům indického trhu ve <strong>stavební technice</strong> a přenáší svou konstrukční DNA přímo do zemědělských traktorů – odolnost, jednoduchost a snadný servis.</p>' +
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
      '#ace-prokoho .pkg{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;max-width:1280px;margin:36px auto 0;padding:0 40px;}' +
      '#ace-prokoho .pk{background:#fff;border-radius:8px;padding:26px 16px 22px;text-align:center;border:1px solid #e8e8e8;transition:all .3s;}' +
      '#ace-prokoho .pk:hover{border-color:' + O + ';box-shadow:0 6px 20px rgba(232,115,10,.12);transform:translateY(-3px);}' +
      '#ace-prokoho .pk .ikon{font-size:2.2rem;margin-bottom:12px;display:block;}' +
      '#ace-prokoho .pk h3{font-size:.88rem;font-weight:800;color:' + D + ';margin:0 0 8px;line-height:1.35;}' +
      '#ace-prokoho .pk p{font-size:.8rem;color:#666;line-height:1.55;margin:0;}' +
      '@media(max-width:1024px){#ace-prokoho .pkg{grid-template-columns:repeat(3,1fr);}}' +
      '@media(max-width:600px){#ace-prokoho .pkg{grid-template-columns:1fr 1fr;padding:0 20px;}}'
    );

    var polozky = [
      { ikon: '👨‍🌾', tit: 'Drobní farmáři a malozemědělci',     txt: 'Vyměňte starosti za jistotu. Pro soběstačnost při pěstování zemědělských plodin.' },
      { ikon: '🍇', tit: 'Vinaři, ovocnáři a chmelaři',          txt: 'Maximální síla v úzkých řádcích. ACE projede tam, kam se jiní nedostanou.' },
      { ikon: '🏙️', tit: 'Obce a technické služby',              txt: 'Spolehlivý partner pro vaši obec. Stroje ACE a servis, na který se můžete spolehnout.' },
      { ikon: '🐴', tit: 'Chovatelé koní a hospodářských zvířat', txt: 'Profesionální pomocník do vašeho areálu, při péči o zvířata.' },
      { ikon: '🌲', tit: 'Majitelé lesů a zelených ploch',        txt: 'Spolehlivý pomocník pro údržbu lesa a zelených ploch. Ušetří čas i sílu.' },
    ];

    var el = sec('ace-prokoho', G, '80px 0');
    el.innerHTML =
      wrap('<div style="text-align:center;">' + lbl('DO POLE I OBCE') +
        '<h2 style="font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:' + D + ';margin:0;font-family:' + FONT + ';"><span style="color:' + O + '">Pro koho</span> jsou traktory ACE</h2>' +
      '</div>') +
      '<div class="pkg">' +
        polozky.map(function(p) {
          return '<div class="pk"><span class="ikon">' + p.ikon + '</span><h3>' + p.tit + '</h3><p>' + p.txt + '</p></div>';
        }).join('') +
      '</div>';
    before(el);
  }


  /* ============================================================
     SEKCE 4: VÝHODY (tmavé pozadí)
     ============================================================ */
  function buildVyhody() {
    css(
      '#ace-vyhody .vhdr{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-bottom:40px;}' +
      '#ace-vyhody .vhdr h2{font-size:clamp(1.9rem,3.2vw,2.7rem);font-weight:900;color:#fff;margin:0;line-height:1.1;font-family:' + FONT + ';}' +
      '#ace-vyhody .vhdr h2 span{color:' + O + ';}' +
      '#ace-vyhody .vhdr p{color:rgba(255,255,255,.65);font-size:.93rem;line-height:1.7;margin:0;}' +
      '#ace-vyhody .vg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}' +
      '#ace-vyhody .vk{background:#fff;border-radius:8px;overflow:hidden;}' +
      '#ace-vyhody .vk img{width:100%;height:210px;object-fit:cover;display:block;}' +
      '#ace-vyhody .vkb{padding:20px 22px 24px;}' +
      '#ace-vyhody .vkb h3{font-size:1rem;font-weight:800;color:' + D + ';margin:0 0 10px;font-family:' + FONT + ';}' +
      '#ace-vyhody .vkb h3 span{color:' + O + ';}' +
      '#ace-vyhody .vkb p{font-size:.87rem;color:#555;line-height:1.65;margin:0;}' +
      '#ace-vyhody .vkb strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-vyhody .vhdr,#ace-vyhody .vg{grid-template-columns:1fr;}}'
    );

    var karty = [
      { tit: 'Prověřená <span>odolnost</span>',        foto: ph('Prověřená odolnost – terén, bláto', 700, 380),  txt: 'Technologie <strong>ACE jsou prověřené v těžké technice.</strong> Tuto nezničitelnou konstrukční DNA přinášíme přímo do návrhu traktorů.' },
      { tit: 'Jednoduchost a <span>spolehlivost</span>', foto: ph('Jednoduchost – farmář v poli', 700, 380),      txt: 'V době přetechnizování sází <strong>ACE na jednoduchost a funkčnost.</strong> Osvědčená řešení, snadná údržba a nízké provozní náklady.' },
      { tit: '<span>Inovace</span> s rozumem',           foto: ph('Inovace – servisní dílna, technici', 700, 380), txt: 'Díky vlastnímu vývojovému centru <strong>ACE drží krok se světem</strong> – a přináší funkčnost, která dává smysl v každodenní práci.' },
    ];

    var el = sec('ace-vyhody', D, '80px 0');
    el.innerHTML = wrap(
      '<div class="vhdr">' +
        '<div>' + lbl('VÝHODY') + '<h2><span>Proč ACE?</span> Protože v provozu potřebujete spolehlivost</h2></div>' +
        '<p>Stroje mají sloužit, ne stát. Proto stavíme servisní síť partnerů pro ČR a SR – aktuálně Štoky, Herálec, Hradec Králové.</p>' +
      '</div>' +
      '<div class="vg">' +
        karty.map(function(k) {
          return '<div class="vk"><img src="' + k.foto + '" alt="" loading="lazy"><div class="vkb"><h3>' + k.tit + '</h3><p>' + k.txt + '</p></div></div>';
        }).join('') +
      '</div>'
    );
    before(el);
  }


  /* ============================================================
     SEKCE 5: VLAJKOVÝ MODEL
     ============================================================ */
  function buildModel() {
    css(
      '#model{background:#fff;padding:80px 0;font-family:' + FONT + ';}' +
      '#model .mg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1280px;margin:40px auto 0;padding:0 40px;}' +
      '#model .mslider{position:relative;}' +
      '#model .mslider img{width:100%;border-radius:8px;display:block;transition:opacity .2s;}' +
      '#model .fbadge{position:absolute;top:14px;left:14px;background:rgba(255,255,255,.93);border-radius:6px;padding:7px 13px;font-size:.78rem;font-weight:700;color:' + D + ';display:flex;align-items:center;gap:5px;}' +
      '#model .marrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;background:#fff;border:none;border-radius:50%;box-shadow:0 2px 12px rgba(0,0,0,.15);cursor:pointer;font-size:1rem;z-index:5;}' +
      '#model .marrow.prev{left:12px;} #model .marrow.next{right:12px;}' +
      '#model .mname{font-size:1.75rem;font-weight:900;color:' + O + ';margin:0 0 14px;font-family:' + FONT + ';}' +
      '#model .mdesc{font-size:.93rem;color:#555;line-height:1.7;margin:0 0 22px;}' +
      '#model .mdesc strong{color:' + D + ';}' +
      '#model .mfeats{display:flex;flex-direction:column;gap:12px;}' +
      '#model .mf{display:flex;gap:14px;align-items:flex-start;background:' + G + ';border-radius:8px;padding:14px 16px;}' +
      '#model .mfikon{width:40px;height:40px;background:' + O + ';border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;}' +
      '#model .mft h4{font-size:.9rem;font-weight:800;color:' + D + ';margin:0 0 3px;font-family:' + FONT + ';}' +
      '#model .mft p{font-size:.84rem;color:#666;line-height:1.5;margin:0;}' +
      '#model .mft strong{color:' + D + ';}' +
      '@media(max-width:900px){#model .mg{grid-template-columns:1fr;padding:0 24px;}}'
    );

    var sliderImgs = [
      ph('VEER 3000 – vinohrad, pohled z boku', 800, 560),
      ph('VEER 3000 – pole, pohled zpředu', 800, 560),
      ph('VEER 3000 – detail kabiny a ovládání', 800, 560),
    ];
    var sIdx = 0;

    var featy = [
      { ikon: '⚡', tit: 'Japonské srdce',   txt: 'Pod kapotou pracuje spolehlivý <strong>motor Mitsubishi</strong> (Stage V) o výkonu 25 koní, který vyniká úsporností a tichým chodem.' },
      { ikon: '⚙️', tit: 'Volba je na vás',  txt: 'Nabízíme dvě verze – <strong>klasický manuál 9+3</strong> pro tradiční práci nebo <strong>komfortní HST</strong> (hydrostat) pro precizní ovládání.' },
      { ikon: '🚜', tit: 'Skutečný pracant', txt: 'S pohonem <strong>4WD, nosností 800 kg</strong> na tříbodovém závěsu a robustním šasi se nezalekne bláta, sněhu ani těžkého nákladu.' },
    ];

    var el = document.createElement('section');
    el.id = 'model';
    el.style.cssText = 'background:#fff;padding:80px 0;font-family:' + FONT + ';overflow:hidden;';
    el.innerHTML =
      wrap('<div style="text-align:center;">' + lbl('NAŠE NABÍDKA') +
        '<h2 style="font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:' + D + ';margin:0 0 14px;font-family:' + FONT + ';">Náš <span style="color:' + O + '">vlajkový</span> model</h2>' +
        '<p style="color:#555;max-width:540px;margin:0 auto;line-height:1.6;">Vstupujeme na trh s modelem, který přesně definuje naši vizi – <strong style="color:' + D + '">kompaktní rozměry, ale síla dospělého traktoru.</strong></p>' +
      '</div>') +
      '<div class="mg">' +
        '<div class="mslider">' +
          '<img id="mslide-img" src="' + sliderImgs[0] + '" alt="ACE VEER 3000">' +
          '<div class="fbadge">📷 Fotogalerie +40</div>' +
          '<button class="marrow prev" onclick="aceSlide(-1)">‹</button>' +
          '<button class="marrow next" onclick="aceSlide(1)">›</button>' +
        '</div>' +
        '<div>' +
          '<div class="mname">ACE VEER 3000</div>' +
          '<p class="mdesc">ACE VEER 3000 je malotraktor <strong>navržený pro maximální všestrannost.</strong> Ať už jste farmář, vinař, nebo spravujete obecní zeleň, tento stroj vás podrží.</p>' +
          '<div class="mfeats">' +
            featy.map(function(f) {
              return '<div class="mf"><div class="mfikon">' + f.ikon + '</div><div class="mft"><h4>' + f.tit + '</h4><p>' + f.txt + '</p></div></div>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>';

    before(el);

    window.aceSlide = function(dir) {
      sIdx = (sIdx + dir + sliderImgs.length) % sliderImgs.length;
      var im = document.getElementById('mslide-img');
      if (im) { im.style.opacity = '0'; setTimeout(function() { im.src = sliderImgs[sIdx]; im.style.opacity = '1'; }, 200); }
    };
  }


  /* ============================================================
     SEKCE 6: CENA BAR
     ============================================================ */
  function buildCenaBar() {
    css(
      '#ace-cenabar .cb{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-cenabar .cbt{font-size:1rem;color:rgba(255,255,255,.8);font-weight:600;}' +
      '#ace-cenabar .cbt strong{color:#fff;font-size:1.5rem;margin:0 4px;}' +
      '#ace-cenabar .cbt span{color:' + O + ';font-weight:800;}' +
      '@media(max-width:700px){#ace-cenabar .cb{flex-direction:column;text-align:center;padding:0 24px;}}'
    );
    var el = sec('ace-cenabar', D, '28px 0');
    el.innerHTML = '<div class="cb"><div class="cbt">Zaváděcí cena pro prvních <span>100</span> zákazníků: <strong>219 000</strong> Kč bez DPH</div>' + btnOrange('NEZÁVAZNÁ POPTÁVKA', '#poptavka') + '</div>';
    before(el);
  }


  /* ============================================================
     SEKCE 7: DVĚ VARIANTY + PNEUMATIKY
     ============================================================ */
  function buildVarianty() {
    css(
      '#ace-varianty .varg{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:40px;}' +
      '#ace-varianty .var{background:#fff;border-radius:10px;overflow:hidden;border:1px solid #e8e8e8;transition:all .3s;}' +
      '#ace-varianty .var:hover{box-shadow:0 10px 30px rgba(0,0,0,.1);transform:translateY(-3px);}' +
      '#ace-varianty .var img{width:100%;height:250px;object-fit:cover;display:block;}' +
      '#ace-varianty .vb{padding:24px 26px 28px;}' +
      '#ace-varianty .vb h3{font-size:1.3rem;font-weight:900;color:' + D + ';margin:0 0 10px;font-family:' + FONT + ';}' +
      '#ace-varianty .vb h3 span{color:' + O + ';}' +
      '#ace-varianty .vb p{font-size:.88rem;color:#666;margin:0 0 16px;line-height:1.55;}' +
      '#ace-varianty .vcena{font-size:1rem;font-weight:700;color:' + D + ';margin-bottom:3px;}' +
      '#ace-varianty .vcena strong{color:' + O + ';}' +
      '#ace-varianty .vdph{font-size:.78rem;color:#999;margin-bottom:16px;}' +
      '#ace-varianty .vlink{display:inline-flex;align-items:center;gap:8px;background:transparent;color:' + O + ';border:2px solid ' + O + ';padding:10px 18px;border-radius:6px;font-family:' + FONT + ';font-weight:800;font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:all .2s;}' +
      '#ace-varianty .vlink:hover{background:' + O + ';color:#fff;}' +
      '#ace-varianty .pntit{font-size:clamp(1.5rem,2.5vw,2rem);font-weight:900;color:' + D + ';text-align:center;margin:56px 0 24px;font-family:' + FONT + ';}' +
      '#ace-varianty .pntit span{color:' + O + ';}' +
      '#ace-varianty .png{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}' +
      '#ace-varianty .pnk{background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e8e8e8;text-align:center;}' +
      '#ace-varianty .pnk img{width:100%;height:120px;object-fit:contain;padding:16px;display:block;}' +
      '#ace-varianty .pnl{background:' + O + ';color:#fff;font-weight:800;font-size:.82rem;padding:9px 8px;letter-spacing:.02em;}' +
      '@media(max-width:768px){#ace-varianty .varg,#ace-varianty .png{grid-template-columns:1fr 1fr;}}'
    );

    var pneu = ['Agro (Standard)', 'Průmyslové', 'Travní', 'Radiální'];
    var el = sec('ace-varianty', G, '80px 0');
    el.innerHTML = wrap(
      '<div style="text-align:center;">' + lbl('VARIANTY') +
        '<h2 style="font-size:clamp(2rem,3.5vw,2.8rem);font-weight:900;color:' + D + ';margin:0 0 14px;font-family:' + FONT + ';">Dvě varianty <span style="color:' + O + '">převodovky</span></h2>' +
        '<p style="color:#555;max-width:600px;margin:0 auto;line-height:1.6;font-size:.97rem;"><strong style="color:' + D + '">Stejný model VEER 3000,</strong> dvě varianty ovládání – klasiku nebo maximální pohodlí.</p>' +
      '</div>' +
      '<div class="varg">' +
        '<div class="var">' +
          '<img src="' + ph('VEER 3000 manuál 9+3 – pohled z boku', 700, 400) + '" alt="ACE Veer 3000 9+3">' +
          '<div class="vb"><h3>ACE Veer 3000 25HP <span>(9+3)</span></h3>' +
          '<p>Manuální převodovka 9+3 pro ty, kdo chtějí klasiku a plnou kontrolu.</p>' +
          '<div class="vcena">Cena od <strong>219 000 Kč</strong></div><div class="vdph">bez DPH</div>' +
          '<a href="#poptavka" class="vlink">📄 PRODUKTOVÝ LIST</a></div>' +
        '</div>' +
        '<div class="var">' +
          '<img src="' + ph('VEER 3000 HST hydrostat – pohled z boku', 700, 400) + '" alt="ACE Veer 3000 HST">' +
          '<div class="vb"><h3>ACE Veer 3000 25HP <span>(HST)</span></h3>' +
          '<p>Hydrostat – pohodlné ovládání vpřed/vzad bez neustálého řazení.</p>' +
          '<div class="vcena">Cena od <strong>249 000 Kč</strong></div><div class="vdph">bez DPH</div>' +
          '<a href="#poptavka" class="vlink">📄 PRODUKTOVÝ LIST</a></div>' +
        '</div>' +
      '</div>' +
      '<div class="pntit">Varianty <span>pneumatik</span></div>' +
      '<div class="png">' +
        pneu.map(function(p) {
          return '<div class="pnk"><img src="' + ph(p + ' – pneumatika BKT', 280, 240) + '" alt="' + p + '" loading="lazy"><div class="pnl">' + p + '</div></div>';
        }).join('') +
      '</div>'
    );
    before(el);
  }


  /* ============================================================
     SEKCE 8: DALŠÍ MODELY TEASER
     ============================================================ */
  function buildDalsiModely() {
    css(
      '#ace-dalsi .dg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-dalsi .dim{position:relative;border-radius:10px;overflow:hidden;}' +
      '#ace-dalsi .dim img{width:100%;display:block;filter:blur(5px) brightness(.65);}' +
      '#ace-dalsi .dim .qmark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;}' +
      '#ace-dalsi p{color:#555;font-size:.97rem;line-height:1.75;margin:0 0 16px;}' +
      '#ace-dalsi strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-dalsi .dg{grid-template-columns:1fr;padding:0 24px;}}'
    );
    var el = sec('ace-dalsi', '#fff', '80px 0');
    el.innerHTML =
      '<div class="dg">' +
        '<div class="dim"><img src="' + ph('Další model ACE – zatím tajný', 700, 500) + '" alt="Další modely"><div class="qmark">?</div></div>' +
        '<div>' + lbl('BUDOUCNOST JE V RŮSTU') +
          '<h2 style="font-size:clamp(1.7rem,2.8vw,2.3rem);font-weight:900;color:' + D + ';margin:0 0 24px;font-family:' + FONT + ';"><span style="color:' + O + '">Další modely</span> jsou na cestě</h2>' +
          '<p>ACE VEER 3000 je teprve začátek. V průběhu tohoto roku budeme naše portfolio rozšiřovat o další modely, abychom pokryli potřeby všech, kteří hledají poctivý stroj za férovou cenu.</p>' +
          '<p><strong>Nechte nám kontakt a dáme vědět, jakmile dorazí další stroje a konfigurace.</strong></p>' +
          btnOrange('KONTAKT', '#poptavka') +
        '</div>' +
      '</div>';
    before(el);
  }


  /* ============================================================
     SEKCE 9: CTA BANNER
     ============================================================ */
  function buildCTA() {
    css(
      '#ace-cta{padding:80px 0;background:' + D + ';}' +
      '#ace-cta .ctaw{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-cta h2{font-size:clamp(1.7rem,2.8vw,2.4rem);font-weight:900;color:#fff;margin:0 0 12px;font-family:' + FONT + ';}' +
      '#ace-cta h2 span{color:' + O + ';}' +
      '#ace-cta p{color:rgba(255,255,255,.7);font-size:.93rem;line-height:1.6;margin:0;max-width:520px;}' +
      '#ace-cta p strong{color:#fff;}' +
      '#ace-cta .ctar{display:flex;flex-direction:column;gap:14px;align-items:flex-end;}' +
      '#ace-cta .nebo{color:rgba(255,255,255,.4);font-size:.73rem;text-align:center;letter-spacing:.1em;text-transform:uppercase;}' +
      '#ace-cta .tel{display:inline-flex;align-items:center;gap:10px;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.25);padding:13px 22px;border-radius:6px;font-family:' + FONT + ';font-weight:700;font-size:.97rem;text-decoration:none;white-space:nowrap;transition:all .2s;}' +
      '#ace-cta .tel:hover{border-color:#fff;}' +
      '@media(max-width:768px){#ace-cta .ctaw{grid-template-columns:1fr;padding:0 24px;}#ace-cta .ctar{align-items:flex-start;}}'
    );
    var el = sec('ace-cta', D, '0');
    el.innerHTML =
      '<div class="ctaw">' +
        '<div><h2><span>Zaujala vás nabídka</span><br>malotraktorů ACE?</h2>' +
        '<p><strong>Pošlete nezávaznou poptávku nebo si rovnou domluvte předváděčku.</strong> Doporučíme vhodnou variantu a pošleme cenu i dostupnost.</p></div>' +
        '<div class="ctar">' + btnOrange('NEZÁVAZNÁ POPTÁVKA', '#poptavka') +
          '<div class="nebo">NEBO</div>' +
          '<a href="tel:+420728111612" class="tel">📞 +420 728 111 612</a>' +
        '</div>' +
      '</div>';
    before(el);
  }


  /* ============================================================
     SEKCE 10: O NÁS BIOSIMPORT
     ============================================================ */
  function buildONas() {
    css(
      '#ace-onas .og{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1280px;margin:0 auto;padding:0 40px;}' +
      '#ace-onas .og img{width:100%;border-radius:10px;display:block;}' +
      '#ace-onas p{color:#555;font-size:.975rem;line-height:1.75;margin:0 0 16px;}' +
      '#ace-onas strong{color:' + D + ';}' +
      '@media(max-width:900px){#ace-onas .og{grid-template-columns:1fr;padding:0 24px;}}'
    );
    var el = sec('ace-onas', '#fff', '100px 0');
    el.innerHTML =
      '<div class="og">' +
        '<img src="' + ph('BiosImport – tým, auto, traktory na dvoře', 700, 520) + '" alt="BiosImport tým">' +
        '<div>' + lbl('O NÁS') +
          '<h2 style="font-size:clamp(1.7rem,2.8vw,2.3rem);font-weight:900;color:' + D + ';margin:0 0 24px;font-family:' + FONT + ';">Jsme <span style="color:' + O + '">BiosImport,</span> prodáváme a servisujeme malotraktory</h2>' +
          '<p><strong>Firma BiosImport s.r.o.</strong> se zabývá dovozem nových a repasovaných japonských malotraktorů osvědčených tradičních značek Kubota, Iseki, Yanmar. K malotraktorům nabízíme i prodej <strong>příslušenství od renomovaných výrobců</strong> a poskytujeme <strong>kvalitní servisní zázemí.</strong></p>' +
          '<p>Nově se stáváme oficiálním dovozcem značky ACE pro Českou a Slovenskou republiku. Naše provozovny se nacházejí v obci Herálec u Humpolce a v Hradci Králové.</p>' +
        '</div>' +
      '</div>';
    before(el);
  }


  /* ============================================================
     SEKCE 11: POPTÁVKOVÝ FORMULÁŘ
     ============================================================ */
  function buildPoptavka() {
    css(
      '#poptavka .pg{display:grid;grid-template-columns:1fr 1fr;gap:32px;max-width:1100px;margin:40px auto 0;padding:0 40px;}' +
      '#poptavka .pi,#poptavka .pf{background:#fff;border-radius:10px;padding:38px;box-shadow:0 2px 20px rgba(0,0,0,.07);}' +
      '#poptavka .pi h3{font-size:1.5rem;font-weight:900;color:' + D + ';margin:0 0 12px;font-family:' + FONT + ';}' +
      '#poptavka .pip{font-weight:600;color:' + D + ';font-size:.92rem;margin:0 0 22px;line-height:1.5;}' +
      '#poptavka .ptel{margin-bottom:4px;font-size:.92rem;}' +
      '#poptavka .ptel a{color:' + O + ' !important;font-weight:700;text-decoration:none !important;}' +
      '#poptavka .ptelp{color:#999;font-size:.79rem;margin:2px 0 13px 22px;}' +
      '#poptavka .pem{margin-bottom:26px;font-size:.89rem;}' +
      '#poptavka .pem a{color:' + O + ' !important;font-weight:600;text-decoration:none !important;}' +
      '#poptavka .pfak{border-top:1px solid #eee;padding-top:16px;}' +
      '#poptavka .pfak h4{font-size:.73rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#999;margin:0 0 8px;}' +
      '#poptavka .fup{background:#eff6ff;border-radius:6px;padding:9px 13px;font-size:.79rem;font-weight:600;color:#1d4ed8;margin-bottom:10px;}' +
      '#poptavka .fadr{font-size:.83rem;color:#666;line-height:1.8;}' +
      '#poptavka .fg{margin-bottom:12px;}' +
      '#poptavka .fg label{display:block;font-size:.76rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:5px;color:' + D + ';}' +
      '#poptavka .fg input,#poptavka .fg textarea{width:100%;border:2px solid #e0e0e0;border-radius:6px;padding:11px 14px;font-size:.9rem;background:#fafafa;box-sizing:border-box;font-family:' + FONT + ';transition:border-color .2s;outline:none;}' +
      '#poptavka .fg input:focus,#poptavka .fg textarea:focus{border-color:' + O + ';background:#fff;}' +
      '#poptavka .fg textarea{min-height:105px;resize:vertical;}' +
      '#poptavka .souhlas{display:flex;align-items:flex-start;gap:8px;font-size:.79rem;color:#666;margin:12px 0;}' +
      '#poptavka .souhlas input{margin-top:3px;flex-shrink:0;accent-color:' + O + ';width:auto !important;}' +
      '#poptavka .pbtn{width:100%;background:' + O + ';color:#fff;font-weight:800;font-size:.8rem;padding:15px;border:none;border-radius:6px;cursor:pointer;text-transform:uppercase;letter-spacing:.08em;font-family:' + FONT + ';transition:background .2s;}' +
      '#poptavka .pbtn:hover{background:#C5600A;}' +
      '#poptavka .pbtn:disabled{background:#ccc;cursor:not-allowed;}' +
      '#poptavka .pok{display:none;text-align:center;padding:48px 20px;color:#15803d;font-weight:700;font-size:1.05rem;}' +
      '#poptavka .perr{display:none;color:#dc2626;font-size:.79rem;margin-top:8px;text-align:center;}' +
      '@media(max-width:768px){#poptavka .pg{grid-template-columns:1fr;padding:0 24px;}}' +
      '@media(max-width:600px){#poptavka .pi,#poptavka .pf{padding:26px;}}'
    );

    var el = sec('poptavka', G, '80px 0');
    el.innerHTML =
      wrap('<div style="text-align:center;">' + lbl('KONTAKT') +
        '<h2 style="font-size:clamp(1.8rem,3vw,2.6rem);font-weight:900;color:' + D + ';margin:0;font-family:' + FONT + ';"><span style="color:' + O + '">Zaujala vás nabídka</span> malotraktorů ACE?</h2>' +
      '</div>') +
      '<div class="pg">' +
        '<div class="pi">' +
          '<h3>Nezávazná poptávka</h3>' +
          '<p class="pip">Pošlete nezávaznou poptávku nebo si rovnou domluvte předváděčku.</p>' +
          '<div class="ptel">📞 <a href="tel:+420728111612">+420 728 111 612</a></div><p class="ptelp">Prodej malotraktorů ACE</p>' +
          '<div class="ptel">📞 <a href="tel:+420735199881">+420 735 199 881</a></div><p class="ptelp">Příslušenství, zákaznický servis</p>' +
          '<div class="pem">✉ <a href="mailto:info@biosimport.cz">info@biosimport.cz</a></div>' +
          '<div class="pfak"><h4>Fakturační adresa</h4>' +
            '<div class="fup">ℹ Pouze pro fakturaci – nikoli pro doručení zboží!</div>' +
            '<div class="fadr">BiosImport s.r.o.<br>B. Kobzinové 2020, 580 01 Havlíčkův Brod<br>IČ: 17543169 | DIČ: CZ17543169</div>' +
          '</div>' +
        '</div>' +
        '<div class="pf">' +
          '<div class="pok" id="pok">✅ Děkujeme! Poptávka odeslána. Ozveme se co nejdříve.</div>' +
          '<form id="pfrm">' +
            '<div class="fg"><label>Jméno a příjmení *</label><input type="text" name="jmeno" placeholder="Jan Novák" required></div>' +
            '<div class="fg"><label>E-mail *</label><input type="email" name="email" placeholder="jan@email.cz" required></div>' +
            '<div class="fg"><label>Telefon</label><input type="tel" name="telefon" placeholder="+420 000 000 000"></div>' +
            '<div class="fg"><label>Zájem o variantu</label><input type="text" name="varianta" placeholder="VEER 3000 9+3 / HST / nevím"></div>' +
            '<div class="fg"><label>Zpráva</label><textarea name="message" placeholder="Váš dotaz, zájem o předváděčku..."></textarea></div>' +
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

    // Skrýt výchozí Shoptet obsah
    var skryt = ['.products-list','.product-list','#products','.box-products',
      '.editorial','.editorial-content','.box-editorial','.page-description',
      '.benefits','.benefit-bar','.box-benefits','.slider','.box-slider','#slider',
      '.categories','.box-categories'];
    skryt.forEach(function(sel) {
      try { document.querySelectorAll(sel).forEach(function(el) { el.style.display = 'none'; }); } catch(e) {}
    });
    var content = document.querySelector('#content,main,.page-content,#page-content');
    if (content) {
      Array.from(content.children).forEach(function(child) {
        var id = child.id || '';
        var jeNase = id.indexOf('ace-') === 0 || id === 'model' || id === 'poptavka' || id === 'ace-hero';
        if (!jeNase) child.style.display = 'none';
      });
    }

    buildHero();
    buildOZnacce();
    buildProKoho();
    buildVyhody();
    buildModel();
    buildCenaBar();
    buildVarianty();
    buildDalsiModely();
    buildCTA();
    buildONas();
    buildPoptavka();
  });

})();
