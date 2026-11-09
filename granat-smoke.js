/* granat-smoke.js
   Анимированный гранатовый дым для блока «Найти опору.».

   Подключение:
   <script src="./granat-smoke.js" defer></script>

   Селектор задаётся явно до загрузки скрипта (см. index.html):
   window.GRANAT_SMOKE_SELECTOR = ".hero-highlight";

   Поиск по тексту используется только как запасной вариант,
   если селектор не задан. */

(() => {
  "use strict";

  const settings = {
    density: 1.3,
    scale: 1.35,
    detail: 3.35,
    brightness: 1.6,
    turbulence: 0.65,
    speed: 0.3,
    drift: 1.25,
    quality: 0.7,
    color: "#8e1238",
    dark: "#290b1b",
    motion: true
  };

  const vertexSource = `
    attribute vec2 p;

    void main() {
      gl_Position = vec4(p, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;

    uniform vec2 resolution;
    uniform float time;
    uniform float density;
    uniform float scale;
    uniform float detail;
    uniform float brightness;
    uniform float turbulence;
    uniform float speed;
    uniform float drift;
    uniform vec3 lightColor;
    uniform vec3 darkColor;

    float hash(vec3 p) {
      p = fract(p * .3183099 + .1);
      p *= 17.;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float noise(vec3 x) {
      vec3 i = floor(x);
      vec3 f = fract(x);
      f = f * f * (3. - 2. * f);

      return mix(
        mix(
          mix(hash(i), hash(i + vec3(1,0,0)), f.x),
          mix(
            hash(i + vec3(0,1,0)),
            hash(i + vec3(1,1,0)),
            f.x
          ),
          f.y
        ),
        mix(
          mix(
            hash(i + vec3(0,0,1)),
            hash(i + vec3(1,0,1)),
            f.x
          ),
          mix(
            hash(i + vec3(0,1,1)),
            hash(i + vec3(1,1,1)),
            f.x
          ),
          f.y
        ),
        f.z
      );
    }

    float fbm(vec3 p) {
      float s = 0.;
      float a = .5;

      for (int i = 0; i < 6; i++) {
        s += a * noise(p);
        p = p * 2.04 + vec3(3.1, 1.7, 2.9);
        a *= .5;
      }

      return s;
    }

    void main() {
      vec2 uv = (
        gl_FragCoord.xy - .5 * resolution
      ) / resolution.y;

      float t = time * speed;
      vec3 col = darkColor;
      float accum = 0.;
      vec3 light = vec3(0.);

      for (int i = 0; i < 15; i++) {
        float z = float(i) / 14.;

        vec3 q = vec3(uv * scale, z * 2.8);

        q.xy += vec2(
          .15 * sin(z * 4. + t * .2),
          .10 * cos(z * 3. + t * .17)
        ) * drift;

        q.z += t * .17;

        vec3 warp = vec3(
          fbm(q * .72 + vec3(2., 0., t * .13)),
          fbm(q * .72 + vec3(0., 5., t * .1)),
          0.
        );

        q.xy += (warp.xy - .5) * turbulence;

        float n = fbm(q * detail);
        float ridge = 1. - abs(n - .53) * 2.;

        float cloud = smoothstep(
          .37,
          .77,
          n + .15 * ridge
        );

        float envelope =
          smoothstep(-.95, -.15, uv.x) *
          (1. - smoothstep(.6, 1.35, uv.x));

        envelope *=
          .55 + .45 * fbm(vec3(uv * 1.7, 1.2));

        float a =
          cloud * envelope * density *
          .12 * (1. - z * .3);

        vec3 layer =
          lightColor *
          (.45 + .85 * ridge) *
          brightness;

        light += layer * a * (1. - accum);
        accum += a * (1. - accum);
      }

      col = mix(
        col,
        col + light,
        clamp(accum * 2.2, 0., 1.)
      );

      float vignette =
        1. - .28 * smoothstep(
          .35,
          1.3,
          length(uv)
        );

      col *= vignette;
      col = pow(max(col, 0.), vec3(.95));

      gl_FragColor = vec4(col, 1.);
    }
  `;

  const rgb = hex =>
    [1, 3, 5].map(
      i => parseInt(hex.slice(i, i + 2), 16) / 255
    );

  // Стили добавляются автоматически.
  const styleId = "granat-smoke-style";

  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      .granat-smoke-host {
        position: relative !important;
        isolation: isolate;
        overflow: hidden;
        background-color: #290b1b !important;
      }

      .granat-smoke-host > .granat-smoke-canvas {
        position: absolute !important;
        inset: 0 !important;
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 0 !important;
        pointer-events: none !important;
      }

      .granat-smoke-host > :not(.granat-smoke-canvas) {
        position: relative;
        z-index: 1;
      }
    `;

    document.head.appendChild(style);
  }

  // Поиск блока «Найти опору.». Явный селектор приоритетнее.
  function findSection() {
    const explicit = window.GRANAT_SMOKE_SELECTOR;

    if (typeof explicit === "string" && explicit.trim()) {
      try {
        return document.querySelector(explicit);
      } catch (err) {
        console.warn(
          "[Granat Smoke] Неверный селектор:",
          err
        );
        return null;
      }
    }

    const nodes = document.querySelectorAll(
      "h1,h2,h3,h4,h5,h6,p,span,a,button,div"
    );

    const target = Array.from(nodes).find(el => {
      const text = el.textContent
        ?.trim()
        .toLowerCase();

      if (text !== "найти опору" && text !== "найти опору.") {
        return false;
      }

      const childHasSameText = Array.from(
        el.children
      ).some(child =>
        child.textContent
          ?.trim()
          .toLowerCase() === text
      );

      return !childHasSameText;
    });

    if (!target) return null;

    return (
      target.closest(
        'section,article,header,[class*="hero"],' +
        '[class*="banner"],[class*="block"]'
      ) ||
      target.parentElement?.parentElement ||
      null
    );
  }

  function init(host) {
    if (
      !host ||
      host.classList.contains("granat-smoke-host")
    ) {
      return;
    }

    host.classList.add("granat-smoke-host");

    const canvas = document.createElement("canvas");
    canvas.className = "granat-smoke-canvas";
    canvas.setAttribute("aria-hidden", "true");

    host.prepend(canvas);

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false
    });

    if (!gl) {
      console.warn("[Granat Smoke] WebGL недоступен");
      canvas.remove();
      return;
    }

    function shader(type, source) {
      const s = gl.createShader(type);

      gl.shaderSource(s, source);
      gl.compileShader(s);

      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(s);
        gl.deleteShader(s);
        throw new Error(error);
      }

      return s;
    }

    let program;

    try {
      const vs = shader(
        gl.VERTEX_SHADER,
        vertexSource
      );

      const fs = shader(
        gl.FRAGMENT_SHADER,
        fragmentSource
      );

      program = gl.createProgram();

      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      gl.deleteShader(vs);
      gl.deleteShader(fs);

      if (!gl.getProgramParameter(
        program,
        gl.LINK_STATUS
      )) {
        throw new Error(gl.getProgramInfoLog(program));
      }
    } catch (err) {
      console.warn("[Granat Smoke] Ошибка шейдера:", err);
      canvas.remove();
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
      ]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(
      pos,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    const uniforms = {};
    [
      "resolution",
      "time",
      "density",
      "scale",
      "detail",
      "brightness",
      "turbulence",
      "speed",
      "drift",
      "lightColor",
      "darkColor"
    ].forEach(key => {
      uniforms[key] = gl.getUniformLocation(
        program,
        key
      );
    });

    for (const key of [
      "density",
      "scale",
      "detail",
      "brightness",
      "turbulence",
      "speed",
      "drift"
    ]) {
      gl.uniform1f(uniforms[key], settings[key]);
    }

    gl.uniform3fv(
      uniforms.lightColor,
      new Float32Array(rgb(settings.color))
    );
    gl.uniform3fv(
      uniforms.darkColor,
      new Float32Array(rgb(settings.dark))
    );

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let raf = 0;
    let visible = true;
    let last = 0;
    let elapsed = 0;
    let destroyed = false;

    function resize() {
      const rect = host.getBoundingClientRect();
      const dpr =
        Math.min(window.devicePixelRatio || 1, 2) *
        settings.quality;

      const width = Math.max(
        1,
        Math.round(rect.width * dpr)
      );

      const height = Math.max(
        1,
        Math.round(rect.height * dpr)
      );

      if (
        canvas.width !== width ||
        canvas.height !== height
      ) {
        canvas.width = width;
        canvas.height = height;

        gl.viewport(0, 0, width, height);
      }
    }

    function frame(now) {
      raf = 0;

      if (destroyed || !visible || document.hidden) {
        return;
      }

      resize();

      if (last) {
        elapsed += Math.min(
          (now - last) / 1000,
          0.1
        );
      }

      last = now;

      gl.uniform2f(
        uniforms.resolution,
        canvas.width,
        canvas.height
      );
      gl.uniform1f(uniforms.time, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (settings.motion && !reduced.matches) {
        raf = requestAnimationFrame(frame);
      }
    }

    function wake() {
      if (destroyed || !visible || document.hidden) {
        return;
      }

      last = 0;

      if (!raf) {
        raf = requestAnimationFrame(frame);
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        visible = entries[0].isIntersecting;

        if (visible) {
          wake();
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
          last = 0;
        }
      },
      { threshold: 0 }
    );

    observer.observe(host);

    const resizeObserver = new ResizeObserver(wake);
    resizeObserver.observe(host);

    document.addEventListener(
      "visibilitychange",
      wake
    );

    reduced.addEventListener?.("change", wake);

    wake();

    window.granatSmoke = {
      settings,
      host,
      canvas,
      refresh: wake,

      destroy() {
        destroyed = true;
        cancelAnimationFrame(raf);
        observer.disconnect();
        resizeObserver.disconnect();

        document.removeEventListener(
          "visibilitychange",
          wake
        );

        reduced.removeEventListener?.(
          "change",
          wake
        );

        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);

        canvas.remove();
        host.classList.remove("granat-smoke-host");
      }
    };
  }

  function start() {
    const host = findSection();

    if (host) {
      init(host);
    } else {
      console.warn(
        '[Granat Smoke] Блок «Найти опору.» не найден. ' +
        "Укажи window.GRANAT_SMOKE_SELECTOR."
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      start,
      { once: true }
    );
  } else {
    start();
  }
})();
