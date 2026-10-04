/* INTERPLAY: the flickering code ring, the scene sequence and the waitroom signup. */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Draws a ring of monospace glyphs around `host` on a canvas that sits just outside it.
  function codeBorder(host, opts) {
    const o = Object.assign({
      color: '#c7a6ff', step: 11, size: 11, pad: 14, fps: 14,
      font: '"JetBrains Mono", ui-monospace, monospace',
      mode: 'random', text: '', glyphs: '01<>/\\{}[]#*+=:;~$%&|^'
    }, opts || {});
    const c = document.createElement('canvas');
    c.setAttribute('aria-hidden', 'true');
    host.appendChild(c);
    const ctx = c.getContext('2d');
    const glyphs = o.glyphs.split('');
    const pick = () => glyphs[(Math.random() * glyphs.length) | 0];
    let pts = [], cells = [], w = 0, h = 0, boost = 0, t = 0, last = 0, dim = 1;

    function layout() {
      const r = host.getBoundingClientRect();
      if (!r.width) return;
      const dpr = window.devicePixelRatio || 1;
      w = r.width + o.pad * 2; h = r.height + o.pad * 2;
      c.style.cssText = `position:absolute;left:${-o.pad}px;top:${-o.pad}px;width:${w}px;height:${h}px;pointer-events:none`;
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = [];
      const m = o.pad / 2 + 1, x0 = m, y0 = m, x1 = w - m, y1 = h - m;
      for (let x = x0; x < x1; x += o.step) pts.push([x, y0]);
      for (let y = y0; y < y1; y += o.step) pts.push([x1, y]);
      for (let x = x1; x > x0; x -= o.step) pts.push([x, y1]);
      for (let y = y1; y > y0; y -= o.step) pts.push([x0, y]);
      cells = pts.map(() => ({ g: pick(), a: Math.random() }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${o.size}px ${o.font}`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = o.color;
      const n = pts.length, head = (t * 1.6) % n;
      for (let i = 0; i < n; i++) {
        const cell = cells[i];
        if (!reduce && Math.random() < 0.07 + boost * 0.4) cell.g = pick();
        if (!reduce && Math.random() < 0.12 + boost * 0.3) cell.a = Math.random();
        const ch = o.mode === 'march' ? o.text[(i + t) % o.text.length] : cell.g;
        const d = Math.min(Math.abs(i - head), n - Math.abs(i - head));
        const a = 0.16 + cell.a * 0.42 + (d < 7 ? (7 - d) / 7 * 0.6 : 0) + boost * 0.5;
        ctx.globalAlpha = Math.min(1, a) * dim;
        ctx.fillText(ch, pts[i][0], pts[i][1]);
      }
      ctx.globalAlpha = 1;
    }

    function loop(ts) {
      requestAnimationFrame(loop);
      if (ts - last < 1000 / o.fps) return;
      last = ts; t++; boost *= 0.86;
      dim = Math.random() < 0.025 ? 0.2 : 1; // the occasional failing-tube blink
      draw();
    }

    new ResizeObserver(() => { layout(); draw(); }).observe(host);
    if (!reduce) requestAnimationFrame(loop);
    return { surge() { boost = 1; if (reduce) draw(); } };
  }

  // Sends the address to SUBMIT_URL (set in index.html). Empty means demo mode: nothing is saved.
  function save(addr) {
    const url = window.SUBMIT_URL || '';
    if (!url) return Promise.resolve();
    if (url.includes('script.google.com')) {
      // Apps Script web apps don't answer CORS preflights; a plain no-cors POST still delivers.
      return fetch(url, { method: 'POST', mode: 'no-cors', body: new URLSearchParams({ email: addr }) });
    }
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: addr })
    }).then(r => { if (!r.ok) throw new Error(r.status); });
  }

  // Title scene -> transition -> waitroom -> confirmation.
  window.Interplay = function (opts) {
    const o = Object.assign({ introMs: 2600, closeMs: 1000 }, opts || {});
    const $ = s => document.querySelector(s);
    const body = document.body, intro = $('#intro'), room = $('#room'), form = $('#form'),
      email = $('#email'), err = $('#err'), done = $('#done');
    const ring = codeBorder($('#frame'), o.ring);
    let timer, state;

    function start() {
      clearTimeout(timer);
      state = 'intro';
      body.classList.remove('closed', 'in-room');
      body.classList.add('in-intro');
      intro.hidden = false; room.hidden = true;
      if (o.onStart) o.onStart();
      timer = setTimeout(go, o.introMs);
    }
    function go() {
      if (state !== 'intro') return;
      state = 'moving'; clearTimeout(timer);
      body.classList.add('closed');
      if (o.onClose) o.onClose();
      setTimeout(() => {
        intro.hidden = true; room.hidden = false;
        body.classList.remove('in-intro', 'closed');
        body.classList.add('in-room');
        state = 'room';
        if (o.onRoom) o.onRoom();
      }, reduce ? 0 : o.closeMs);
    }

    intro.addEventListener('click', go);
    document.addEventListener('keydown', e => {
      if (state === 'intro' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(); }
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        err.textContent = 'That address needs an @ and a domain, like you@studio.com.';
        err.hidden = false;
        email.setAttribute('aria-invalid', 'true');
        email.focus();
        return;
      }
      err.hidden = true;
      email.removeAttribute('aria-invalid');
      const button = form.querySelector('button');
      const label = button.textContent;
      button.disabled = true;
      button.innerHTML = '<span class="orbit"></span>';
      button.setAttribute('aria-label', 'Saving');
      ring.surge();
      save(v).then(() => {
        ring.surge();
        const seat = String(12 + Math.floor(Math.random() * 180)).padStart(3, '0');
        setTimeout(() => {
          form.hidden = true; done.hidden = false;
          $('#seat').textContent = seat;
          $('#who').textContent = v;
          done.focus();
        }, reduce ? 0 : 480);
      }, () => {
        err.textContent = "We couldn't save that. Try again in a moment.";
        err.hidden = false;
      }).finally(() => { button.disabled = false; button.textContent = label; button.removeAttribute('aria-label'); });
    });


    start();
  };
})();
