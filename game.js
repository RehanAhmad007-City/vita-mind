(() => {
  "use strict";

  const LEVELS = [
    { name: "Classic Turtle", layout: "turtle" },
    { name: "Pyramid", layout: "pyramid" },
    { name: "Fortress", layout: "fortress" },
    { name: "Butterfly", layout: "butterfly" },
    { name: "Bridge", layout: "bridge" },
    { name: "Classic Turtle", layout: "turtle" },
    { name: "Pyramid", layout: "pyramid" },
    { name: "Fortress", layout: "fortress" },
    { name: "Butterfly", layout: "butterfly" },
    { name: "Bridge", layout: "bridge" },
    { name: "Classic Turtle", layout: "turtle" },
    { name: "Grand Finale", layout: "butterfly" }
  ];
  const FACES = [
    ...Array.from({ length: 9 }, (_, i) => ({ face: ["❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾"][i], label: `Bamboo ${i + 1}`, suit: "bamboo", mark: `B ${i + 1}`, artIndex: i })),
    ...Array.from({ length: 9 }, (_, i) => ({ face: ["一", "二", "三", "四", "五", "六", "七", "八", "九"][i], label: `Character ${i + 1}`, suit: "characters", mark: `萬 ${i + 1}`, artIndex: i })),
    ...Array.from({ length: 9 }, (_, i) => ({ face: ["●", "●", "●", "●", "●", "●", "●", "●", "●"][i], label: `Dots ${i + 1}`, suit: "dots", mark: `${i + 1} DOTS`, dots: i + 1, artIndex: i })),
    ...[
      { face: "東", label: "East Wind", suit: "winds", mark: "EAST", artIndex: 0 },
      { face: "南", label: "South Wind", suit: "winds", mark: "SOUTH", artIndex: 1 },
      { face: "西", label: "West Wind", suit: "winds", mark: "WEST", artIndex: 2 },
      { face: "北", label: "North Wind", suit: "winds", mark: "NORTH", artIndex: 3 },
      { face: "中", label: "Red Dragon", suit: "dragons", mark: "DRAGON", artIndex: 0 },
      { face: "發", label: "Green Dragon", suit: "dragons", mark: "DRAGON", artIndex: 1 },
      { face: "白", label: "White Dragon", suit: "dragons", mark: "DRAGON", artIndex: 2 }
    ],
    ...[
      { face: "✿", label: "Plum Flower", suit: "flower", mark: "FLOWER", matchKey: "flower", artIndex: 0 },
      { face: "❀", label: "Orchid Flower", suit: "flower", mark: "FLOWER", matchKey: "flower", artIndex: 1 },
      { face: "✾", label: "Chrysanthemum Flower", suit: "flower", mark: "FLOWER", matchKey: "flower", artIndex: 2 },
      { face: "❁", label: "Bamboo Flower", suit: "flower", mark: "FLOWER", matchKey: "flower", artIndex: 3 },
      { face: "春", label: "Spring", suit: "season", mark: "SEASON", matchKey: "season", artIndex: 0 },
      { face: "夏", label: "Summer", suit: "season", mark: "SEASON", matchKey: "season", artIndex: 1 },
      { face: "秋", label: "Autumn", suit: "season", mark: "SEASON", matchKey: "season", artIndex: 2 },
      { face: "冬", label: "Winter", suit: "season", mark: "SEASON", matchKey: "season", artIndex: 3 }
    ]
  ];
  const ANIMAL_TYPES = ["panda", "tortoise", "rooster", "mouse", "mantis"];
  function getTileType(face) {
    if (face.suit === "bamboo") return "bamboo";
    if (face.suit === "characters") return ANIMAL_TYPES[face.artIndex % ANIMAL_TYPES.length];
    if (face.suit === "dots") return `dots-${face.dots}`;
    if (face.suit === "winds") return "house";
    if (face.suit === "dragons") return `jade-${face.artIndex}`;
    return face.suit;
  }
  FACES.forEach((face) => { face.tileType = getTileType(face); });
  const $ = (selector) => document.querySelector(selector);
  const animalArt = [
    '<svg viewBox="0 0 48 52" aria-hidden="true"><ellipse cx="24" cy="47" rx="15" ry="3" fill="#b77c48"/><circle cx="13" cy="17" r="7" fill="#26353b"/><circle cx="35" cy="17" r="7" fill="#26353b"/><ellipse cx="24" cy="30" rx="17" ry="16" fill="#fffdf0"/><ellipse cx="17" cy="28" rx="5" ry="8" transform="rotate(28 17 28)" fill="#26353b"/><ellipse cx="31" cy="28" rx="5" ry="8" transform="rotate(-28 31 28)" fill="#26353b"/><ellipse cx="24" cy="34" rx="3" ry="2.4" fill="#e58a75"/><circle cx="20" cy="25" r="1.5" fill="#26353b"/><circle cx="28" cy="25" r="1.5" fill="#26353b"/><path d="M22 38q2 2 4 0" fill="none" stroke="#674a39" stroke-width="1.4" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 48 52" aria-hidden="true"><ellipse cx="24" cy="46" rx="16" ry="3" fill="#b77c48"/><ellipse cx="24" cy="31" rx="17" ry="12" fill="#5e9d53" stroke="#397447" stroke-width="2"/><path d="M11 28q13-18 26 0M16 24l8 7 8-7M15 34l9-5 9 5M24 28v13" fill="none" stroke="#d7cc76" stroke-width="1.6"/><circle cx="24" cy="17" r="8" fill="#78b960"/><circle cx="21" cy="16" r="1" fill="#253a2b"/><circle cx="27" cy="16" r="1" fill="#253a2b"/><path d="M22 20q2 2 4 0" fill="none" stroke="#34533a" stroke-width="1.2"/><path d="M9 35l-4 3m34-3 4 3" stroke="#397447" stroke-width="3" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 48 52" aria-hidden="true"><ellipse cx="24" cy="47" rx="15" ry="3" fill="#b77c48"/><ellipse cx="24" cy="31" rx="13" ry="15" fill="#d94b3f"/><path d="M17 21q-10-10 0-14 3 6 6 2 4 4 8-1 7 7-1 13" fill="#bd3434"/><circle cx="29" cy="25" r="1.5" fill="#27373b"/><path d="M35 28l9 3-9 4z" fill="#f3b843"/><path d="M16 44l-3 3m16-3 3 3" stroke="#c88031" stroke-width="2" stroke-linecap="round"/><path d="M11 29q-8-4-7 4 5 3 10 0" fill="#e9a23c"/></svg>',
    '<svg viewBox="0 0 48 52" aria-hidden="true"><ellipse cx="24" cy="47" rx="15" ry="3" fill="#b77c48"/><ellipse cx="24" cy="31" rx="13" ry="13" fill="#8bbfe0"/><circle cx="13" cy="17" r="8" fill="#e97882"/><circle cx="35" cy="17" r="8" fill="#e97882"/><circle cx="13" cy="17" r="4.5" fill="#f7c2ae"/><circle cx="35" cy="17" r="4.5" fill="#f7c2ae"/><circle cx="20" cy="29" r="1.5" fill="#27373b"/><circle cx="28" cy="29" r="1.5" fill="#27373b"/><ellipse cx="24" cy="34" rx="4" ry="3" fill="#f7eee0"/><circle cx="24" cy="32" r="1.5" fill="#564b4a"/><path d="M13 34q-5 5 0 8m22-8q5 5 0 8" fill="none" stroke="#5590aa" stroke-width="2"/></svg>',
    '<svg viewBox="0 0 48 52" aria-hidden="true"><ellipse cx="24" cy="47" rx="15" ry="3" fill="#b77c48"/><ellipse cx="24" cy="31" rx="12" ry="14" fill="#89b85d"/><circle cx="24" cy="16" r="9" fill="#9dcc68"/><path d="M17 12l-8-5 4 10m18-5 8-5-4 10" fill="#b9d985" stroke="#548747" stroke-width="1.4"/><path d="M15 28l-9-5 4 12 9 1m14-8 9-5-4 12-9 1" fill="#83a94c" stroke="#527b3e" stroke-width="1.5"/><circle cx="21" cy="16" r="1.3" fill="#25372a"/><circle cx="27" cy="16" r="1.3" fill="#25372a"/><path d="M22 20l2 2 2-2" fill="none" stroke="#527b3e" stroke-width="1.2"/></svg>'
  ];
  function tileIllustration(face) {
    const index = face.artIndex || 0;
    if (face.suit === "characters") return animalArt[index % animalArt.length];
    if (face.suit === "bamboo") return `<svg viewBox="0 0 48 52" aria-hidden="true"><path d="M18 45 21 9m8 36 2-34" stroke="#428a4d" stroke-width="5" stroke-linecap="round"/><path d="M17 34h6m7-8h6M19 18h6m3 20h6" stroke="#d9ce7a" stroke-width="1.5"/><path d="M20 17Q9 11 8 4q11 1 14 9m8 3Q40 7 44 8q-2 10-13 13M18 32Q8 26 5 29q4 9 13 9m13 2q10-7 13-4-4 9-14 10" fill="#71ad57" stroke="#3b8449" stroke-width="1.4"/><circle cx="15" cy="46" r="2" fill="#c95c4e"/></svg>`;
    if (face.suit === "dots") {
      const palette = ["#d94f46", "#3884bb", "#e4ae38", "#5a9a56", "#b25285"];
      const dots = Array.from({ length: Math.min(face.dots, 9) }, (_, i) => {
        const x = 14 + (i % 3) * 10;
        const y = 12 + Math.floor(i / 3) * 10;
        const color = palette[(i + index) % palette.length];
        return `<circle cx="${x}" cy="${y}" r="4.2" fill="${color}"/><circle cx="${x-1}" cy="${y-1}" r="1.2" fill="#fff4c9" opacity=".8"/>`;
      }).join("");
      return `<svg viewBox="0 0 48 52" aria-hidden="true"><rect x="7" y="5" width="34" height="42" rx="14" fill="#fff1cd"/><g>${dots}</g><path d="M13 43h22" stroke="#cfac68" stroke-width="2" stroke-linecap="round"/></svg>`;
    }
    if (face.suit === "winds") return `<svg viewBox="0 0 48 52" aria-hidden="true"><path d="M5 45h38M9 44V24l15-11 15 11v20" fill="#e9c987" stroke="#8e5536" stroke-width="2"/><path d="M5 24 24 8l19 16" fill="#bb4638" stroke="#8e5536" stroke-width="2"/><path d="M18 44V30h12v14M14 25h5m10 0h5" stroke="#67472f" stroke-width="2"/><circle cx="24" cy="17" r="3" fill="#f0d47a"/></svg>`;
    if (face.suit === "dragons") return `<svg viewBox="0 0 48 52" aria-hidden="true"><path d="M24 5 39 15 36 36 24 47 12 36 9 15z" fill="${index === 0 ? "#d94c43" : index === 1 ? "#4c9a60" : "#7eb5c0"}" stroke="#8a5533" stroke-width="2"/><path d="m24 10 8 8-8 19-8-19z" fill="#f6d77b" opacity=".9"/><circle cx="24" cy="25" r="5" fill="#fff0b6"/><path d="M21 25q3-4 6 0-3 4-6 0" fill="#577c51"/></svg>`;
    if (face.suit === "flower" || face.suit === "season") return `<svg viewBox="0 0 48 52" aria-hidden="true"><path d="M24 45V28m0 8q-13-2-14-13 12 0 14 11m0-4q12-8 15 1-7 8-15 6" fill="#6c9d4e" stroke="#4d7e42" stroke-width="1.5"/><g transform="translate(24 18)"><circle cy="-7" r="5" fill="#ed8266"/><circle cx="7" r="5" fill="#f2bc57"/><circle cy="7" r="5" fill="#d96b83"/><circle cx="-7" r="5" fill="#f19b66"/><circle r="4" fill="#f6dd83"/></g><circle cx="12" cy="12" r="2" fill="#f5cb6b"/><circle cx="36" cy="8" r="1.5" fill="#e87972"/></svg>`;
    return `<svg viewBox="0 0 48 52" aria-hidden="true"><path d="M24 5 40 14v20L24 45 8 34V14z" fill="#51a471" stroke="#327b55" stroke-width="2"/><path d="m24 9 10 7v14l-10 8-10-8V16z" fill="#9bd07a"/><path d="m24 12 6 7-6 15-6-15z" fill="#d8f09e"/><circle cx="22" cy="21" r="2" fill="#fff4bc"/></svg>`;
  }
  const els = {
    board: $("#board-stage"), boardScroll: $("#board-scroll"), tray: $("#tray-slots"),
    trayMessage: $("#tray-message"), levelCaption: $("#level-caption"), title: $("#game-title"), mode: $("#mode-label"),
    score: $("#score-value"), remaining: $("#remaining-value"), message: $("#board-message"),
    hint: $("#hint-button"), undo: $("#undo-button"),
    shuffle: $("#shuffle-button"), modalBackdrop: $("#modal-backdrop"), modalTitle: $("#modal-title"),
    modalEyebrow: $("#modal-eyebrow"), modalIcon: $("#modal-icon"), modalCopy: $("#modal-copy"),
    modalActions: $("#modal-actions"), toast: $("#toast"), mute: $("#mute-toggle"),
    magnet: $("#magnet-button"), iqFeedback: $("#iq-feedback")
  };
  let state = { tiles: [], tray: [], level: 0, score: 0, combo: 1, selected: null, history: [], daily: false, complete: false };
  const powerups = { shuffle: 3, magnet: 3, hint: 3, undo: 3 };
  let toastTimer;
  let hintTimer;
  let victoryTimer;
  let audioContext;
  let muted = localStorage.getItem("vita-mute") === "true";
  let bestLevel = Math.min(LEVELS.length, Math.max(1, Number(localStorage.getItem("vita-best-level")) || 1));
  let highScore = Number(localStorage.getItem("vita-best-score")) || 0;
  let dailySeed = dateSeed(new Date());

  function dateSeed(date) {
    return Number(`${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`);
  }

  function randomGenerator(seed) {
    let value = seed >>> 0;
    return () => {
      value += 0x6D2B79F5;
      let t = value;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleArray(array, random = Math.random) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getBase(layout) {
    const rowsByLayout = {
      turtle: [4, 6, 4, 6, 4],
      pyramid: [4, 4, 6, 6, 4],
      fortress: [6, 4, 4, 4, 6],
      butterfly: [4, 6, 4, 6, 4],
      bridge: [6, 4, 4, 4, 6]
    };
    const rows = rowsByLayout[layout] || rowsByLayout.turtle;
    return rows.flatMap((width, y) =>
      Array.from({ length: width }, (_, i) => ({ x: Math.floor((8 - width) / 2) + i, y, z: 0 }))
    );
  }

  function makePositions(layout, tileCount = 38) {
    const positions = getBase(layout);
    if (positions.length !== 24) throw new Error(`The ${layout} layout must contain 24 base positions.`);
    const centerX = (Math.min(...positions.map((point) => point.x)) + Math.max(...positions.map((point) => point.x))) / 2;
    const centerY = (Math.min(...positions.map((point) => point.y)) + Math.max(...positions.map((point) => point.y))) / 2;
    const distanceToCenter = (point) => Math.abs(point.x - centerX) + Math.abs(point.y - centerY);
    const centered = [...positions].sort((a, b) => distanceToCenter(a) - distanceToCenter(b));
    for (const point of centered.slice(0, 8)) positions.push({ ...point, z: 1 });
    const levelTwo = positions.filter((point) => point.z === 1).sort((a, b) =>
      distanceToCenter(a) - distanceToCenter(b)
    );
    for (const point of levelTwo.slice(0, 4)) positions.push({ ...point, z: 2 });
    for (const point of levelTwo.slice(0, 2)) positions.push({ ...point, z: 3 });
    const extraCount = Math.max(0, Math.min(12, tileCount - positions.length));
    for (let index = 0; index < extraCount; index++) {
      const point = centered[index % centered.length];
      positions.push({ ...point, z: 4 + Math.floor(index / centered.length) });
    }
    if (positions.length % 2 !== 0 || positions.length < 38 || positions.length > 50) {
      throw new Error(`A level must contain 38 to 50 even tiles; received ${positions.length}.`);
    }
    return positions;
  }

  function makePairFaces(random, tileCount) {
    if (tileCount % 2 !== 0) throw new Error(`A board must contain an even number of tiles; received ${tileCount}.`);
    const facesByType = new Map();
    FACES.forEach((face) => {
      if (!facesByType.has(face.tileType)) facesByType.set(face.tileType, []);
      facesByType.get(face.tileType).push(face);
    });
    const types = shuffleArray([...facesByType.keys()], random);
    const pairedFaces = [];
    for (let pair = 0; pair < tileCount / 2; pair++) {
      const options = facesByType.get(types[pair % types.length]);
      const face = options[Math.floor(random() * options.length)];
      pairedFaces.push(face, face);
    }
    const typeCounts = new Map();
    pairedFaces.forEach((face) => typeCounts.set(face.tileType, (typeCounts.get(face.tileType) || 0) + 1));
    for (const [type, count] of typeCounts) {
      if (count % 2 !== 0) throw new Error(`Tile type "${type}" must have an even count; received ${count}.`);
    }
    return shuffleArray(pairedFaces, random);
  }

  function startGame(level = state.level, daily = false) {
    if (hintTimer) clearTimeout(hintTimer);
    if (victoryTimer) clearTimeout(victoryTimer);
    Object.keys(powerups).forEach((name) => { powerups[name] = 3; });
    const clampedLevel = Math.max(0, Math.min(LEVELS.length - 1, level));
    const layout = LEVELS[clampedLevel].layout;
    const random = daily ? randomGenerator(dailySeed) : Math.random;
    const tileCount = 38 + ((clampedLevel % 7) * 2);
    const positions = makePositions(layout, tileCount);
    const faces = makePairFaces(random, positions.length);
    const minX = Math.min(...positions.map((point) => point.x));
    const minY = Math.min(...positions.map((point) => point.y));
    state = {
      tiles: positions.map((point, index) => ({ ...point, x: point.x - minX, y: point.y - minY, id: index, face: faces[index], tileType: faces[index].tileType, removed: false, inTray: false })),
      tray: [],
      level: clampedLevel, score: 0, combo: 1, selected: null, history: [], daily, complete: false, noMovesPrompted: false
    };
    els.mode.textContent = "A LITTLE MOMENT FOR YOU";
    els.title.textContent = "Find your matching tiles";
    els.levelCaption.textContent = `Level ${clampedLevel + 1}`;
    els.message.textContent = "Take your time";
    els.trayMessage.textContent = "Pick two matching tiles";
    els.boardScroll.scrollTop = 0;
    els.boardScroll.scrollLeft = 0;
    render();
  }

  function matching(a, b) {
    return typeof a.tileType === "string" && a.tileType === b.tileType;
  }

  function isFree(tile) {
    if (tile.removed || tile.inTray) return false;
    if (state.tiles.some((other) => !other.removed && !other.inTray && other.z > tile.z && other.x === tile.x && other.y === tile.y)) return false;
    const left = state.tiles.some((other) => !other.removed && !other.inTray && other.z === tile.z && other.y === tile.y && other.x === tile.x - 1);
    const right = state.tiles.some((other) => !other.removed && !other.inTray && other.z === tile.z && other.y === tile.y && other.x === tile.x + 1);
    return !left || !right;
  }

  function availablePairs() {
    const free = state.tiles.filter((tile) => isFree(tile));
    const pairs = [];
    for (let i = 0; i < free.length; i++) {
      for (let j = i + 1; j < free.length; j++) {
        if (matching(free[i], free[j])) pairs.push([free[i], free[j]]);
      }
    }
    return pairs;
  }

  function render() {
    const remaining = state.tiles.filter((tile) => !tile.removed);
    const cols = Math.max(...state.tiles.map((tile) => tile.x)) + 1;
    const rows = Math.max(...state.tiles.map((tile) => tile.y)) + 1;
    const maxZ = Math.max(...state.tiles.map((tile) => tile.z));
    const boardWidth = Math.max(120, els.boardScroll.clientWidth - 8);
    const boardHeight = Math.max(120, els.boardScroll.clientHeight - 20);
    const widthTile = (boardWidth - 15 - maxZ * 7) / cols - 4;
    const heightTile = (boardHeight - 17 - maxZ * 7 - (rows - 1) * 4) / (rows * 1.24);
    const portraitPhone = window.matchMedia("(max-width: 430px) and (orientation: portrait)").matches;
    const minimumTile = portraitPhone ? 46 : 14;
    const tileWidth = Math.max(minimumTile, Math.min(96, widthTile, heightTile));
    els.board.style.setProperty("--tile-w", `${tileWidth}px`);
    els.board.style.width = `calc((var(--tile-w) + 4px) * ${cols} + 15px + ${maxZ * 7}px)`;
    els.board.style.height = `calc(var(--tile-w) * 1.24 * ${rows} + 4px * ${rows - 1} + 17px + ${maxZ * 7}px)`;
    els.board.replaceChildren();

    for (const tile of state.tiles) {
      if (tile.removed || tile.inTray) continue;
      const free = isFree(tile);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `tile ${free ? "free" : "locked"}`;
      button.dataset.tileId = String(tile.id);
      button.dataset.tileType = tile.tileType;
      button.style.left = `calc((var(--tile-w) + 4px) * ${tile.x} + 7px * ${tile.z} + 4px)`;
      button.style.top = `calc(var(--tile-w) * 1.24 * ${tile.y} + 4px * ${tile.y} - 7px * ${tile.z} + 4px)`;
      button.style.zIndex = String(tile.z * 200 + tile.y * 15 + tile.x);
      button.dataset.suit = tile.face.suit;
      button.setAttribute("aria-label", `${tile.face.label}, ${free ? "free" : "blocked"}`);
      button.title = `${tile.face.label} · ${free ? "Free to play" : "Blocked"}`;
      button.disabled = !free;
      const art = document.createElement("span");
      art.className = "tile-art";
      art.innerHTML = tileIllustration(tile.face);
      button.append(art);
      button.addEventListener("click", () => selectTile(tile.id));
      els.board.append(button);
    }

    const pairs = availablePairs();
    els.score.textContent = state.score.toLocaleString();
    els.remaining.textContent = String(remaining.length);
    renderTray();
    $("#undo-count").textContent = String(powerups.undo);
    $("#hint-count").textContent = String(powerups.hint);
    $("#shuffle-count").textContent = String(powerups.shuffle);
    $("#magnet-count").textContent = String(powerups.magnet);
    els.undo.disabled = state.history.length === 0 || powerups.undo <= 0;
    els.hint.disabled = state.complete || pairs.length === 0 || powerups.hint <= 0;
    els.shuffle.disabled = state.complete || powerups.shuffle <= 0;
    els.magnet.disabled = state.complete || pairs.length === 0 || powerups.magnet <= 0;
    if (!state.complete && remaining.length && pairs.length === 0) {
      els.message.textContent = "No open pairs — try a helper";
    } else if (!state.complete && state.tray.length >= 6) {
      els.message.textContent = "Tray almost full — make a match";
    }
  }

  function renderTray() {
    els.tray.replaceChildren();
    const full = state.tray.length >= 7;
    for (let index = 0; index < 7; index++) {
      const slot = document.createElement("span");
      slot.className = "tray-slot";
      if (state.tray[index] !== undefined) {
        const tile = state.tiles.find((item) => item.id === state.tray[index]);
        const chip = document.createElement("span");
        chip.className = "tray-tile";
        chip.dataset.tileType = tile.tileType;
        chip.innerHTML = tileIllustration(tile.face);
        chip.setAttribute("aria-label", tile.face.label);
        slot.append(chip);
      }
      if (full) slot.classList.add("full");
      els.tray.append(slot);
    }
    els.tray.classList.toggle("tray-full", full);
    els.trayMessage.textContent = full ? "Tray full — undo or use a helper" : `${state.tray.length} / 7 collected`;
  }

  function selectTile(id) {
    if (state.complete) return;
    const tile = state.tiles.find((item) => item.id === id);
    if (!tile || !isFree(tile)) return;
    const completesTrayPair = state.tray.some((trayId) => matching(state.tiles.find((item) => item.id === trayId), tile));
    if (state.tray.length >= 7 && !completesTrayPair) {
      els.tray.classList.add("tray-full");
      showToast("Your tray is full — undo a tile or use a helper.");
      return;
    }
    state.history.push(makeUndoSnapshot());
    tile.inTray = true;
    state.tray.push(tile.id);
    const matchIndex = state.tray.findIndex((trayId) => trayId !== tile.id && matching(state.tiles.find((item) => item.id === trayId), tile));
    if (matchIndex !== -1) {
      const matchedId = state.tray[matchIndex];
      const matchedTile = state.tiles.find((item) => item.id === matchedId);
      matchedTile.removed = true;
      tile.removed = true;
      matchedTile.inTray = false;
      tile.inTray = false;
      state.tray = state.tray.filter((trayId) => trayId !== matchedId && trayId !== tile.id);
      state.score += 100 * state.combo;
      state.combo = Math.min(state.combo + 1, 8);
      state.noMovesPrompted = false;
      els.message.textContent = "Lovely match!";
      els.trayMessage.textContent = "A perfect pair!";
      showIqFeedback();
      playSound("match");
      els.tray.classList.remove("pair-match");
      void els.tray.offsetWidth;
      els.tray.classList.add("pair-match");
      setTimeout(() => els.tray.classList.remove("pair-match"), 700);
      if (state.tiles.every((item) => item.removed)) {
        state.complete = true;
        onVictory();
      }
    } else {
      state.combo = 1;
      els.message.textContent = "Find its matching tile";
      playSound("click");
    }
    render();
  }

  function makeUndoSnapshot() {
    return {
      faces: state.tiles.map((tile) => tile.face),
      tileTypes: state.tiles.map((tile) => tile.tileType),
      removed: state.tiles.map((tile) => tile.removed),
      inTray: state.tiles.map((tile) => tile.inTray),
      tray: [...state.tray],
      score: state.score,
      combo: state.combo,
      selected: state.selected,
      complete: state.complete,
      daily: state.daily,
      level: state.level
    };
  }

  function undo() {
    if (powerups.undo <= 0) return;
    const snapshot = state.history.pop();
    if (!snapshot) return;
    if (state.complete && victoryTimer) clearTimeout(victoryTimer);
    powerups.undo--;
    restoreSnapshot(snapshot);
    state.noMovesPrompted = false;
    els.message.textContent = "One step back. Take your time.";
    render();
    playSound("click");
  }

  function restoreSnapshot(snapshot) {
    state.tiles.forEach((tile, index) => {
      tile.face = snapshot.faces[index];
      tile.tileType = snapshot.tileTypes[index];
      tile.removed = snapshot.removed[index];
      tile.inTray = snapshot.inTray[index];
    });
    state.tray = [...snapshot.tray];
    state.score = snapshot.score;
    state.combo = snapshot.combo;
    state.selected = snapshot.selected;
    state.complete = snapshot.complete;
    state.daily = snapshot.daily;
    state.level = snapshot.level;
  }

  function hint() {
    if (powerups.hint <= 0) return;
    const pair = availablePairs()[0];
    if (!pair) {
      showToast("No open matching pairs — try a shuffle.");
      return;
    }
    powerups.hint--;
    $("#hint-count").textContent = String(powerups.hint);
    els.hint.disabled = powerups.hint <= 0;
    document.querySelectorAll(".tile.hint").forEach((tile) => tile.classList.remove("hint"));
    pair.forEach((tile) => {
      const button = els.board.querySelector(`[data-tile-id="${tile.id}"]`);
      if (button) button.classList.add("hint");
    });
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => document.querySelectorAll(".tile.hint").forEach((tile) => tile.classList.remove("hint")), 2400);
    els.message.textContent = "Here are two tiles you can match.";
    playSound("hint");
  }

  function shuffle() {
    if (powerups.shuffle <= 0) return;
    const remaining = state.tiles.filter((tile) => !tile.removed && !tile.inTray);
    if (remaining.length < 2) return;
    state.history.push(makeUndoSnapshot());
    powerups.shuffle--;
    const faces = shuffleArray(remaining.map((tile) => tile.face));
    remaining.forEach((tile, index) => { tile.face = faces[index]; tile.tileType = faces[index].tileType; });
    state.selected = null;
    state.combo = 1;
    state.noMovesPrompted = false;
    els.message.textContent = "A fresh arrangement. See what catches your eye.";
    render();
    playSound("shuffle");
    showToast("Tiles shuffled — same places, new possibilities.");
  }

  function magnet() {
    if (powerups.magnet <= 0) return;
    const pair = availablePairs()[0];
    if (!pair) {
      showToast("No open matching pair for the magnet.");
      return;
    }
    state.history.push(makeUndoSnapshot());
    powerups.magnet--;
    pair.forEach((tile) => { tile.removed = true; });
    state.score += 100 * state.combo;
    state.combo = Math.min(state.combo + 1, 8);
    state.noMovesPrompted = false;
    els.message.textContent = "Magnet found a perfect pair!";
    showIqFeedback();
    playSound("match");
    if (state.tiles.every((tile) => tile.removed)) {
      state.complete = true;
      onVictory();
    }
    render();
  }

  function showIqFeedback() {
    els.iqFeedback.textContent = "+IQ";
    els.iqFeedback.classList.remove("show");
    void els.iqFeedback.offsetWidth;
    els.iqFeedback.classList.add("show");
  }

  function onVictory() {
    playSound("victory");
    if (!state.daily) {
      bestLevel = Math.min(LEVELS.length, Math.max(bestLevel, state.level + 2));
      localStorage.setItem("vita-best-level", String(bestLevel));
      localStorage.setItem("vita-best-score", String(Math.max(highScore, state.score)));
      highScore = Math.max(highScore, state.score);
    }
    els.message.textContent = "Every tile has found its place. Beautifully done!";
    showToast(`Beautiful! +${state.score.toLocaleString()} IQ`);
    victoryTimer = setTimeout(() => startGame((state.level + 1) % LEVELS.length, false), 1600);
  }

  function showModal({ icon = "✿", eyebrow = "A LITTLE GUIDE", title, copy, actions = [] }) {
    els.modalIcon.textContent = icon;
    els.modalEyebrow.textContent = eyebrow;
    els.modalTitle.textContent = title;
    els.modalCopy.innerHTML = copy;
    els.modalActions.replaceChildren();
    actions.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `modal-action${item.primary ? " primary" : ""}`;
      button.textContent = item.label;
      button.addEventListener("click", () => { closeModal(); item.action(); });
      els.modalActions.append(button);
    });
    els.modalBackdrop.hidden = false;
    $("#modal-close").focus();
  }

  function closeModal() { els.modalBackdrop.hidden = true; }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("visible"), 2400);
  }

  function playSound(type) {
    if (muted) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === "suspended") audioContext.resume();
      const now = audioContext.currentTime;
      const notes = type === "match" ? [523.25, 659.25] : type === "hint" ? [587.33] : type === "victory" ? [523.25, 659.25, 783.99] : type === "shuffle" ? [440, 523.25] : [220];
      notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = type === "click" ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency, now + index * .09);
        gain.gain.setValueAtTime(type === "click" ? .055 : .035, now + index * .09);
        gain.gain.exponentialRampToValueAtTime(.001, now + index * .09 + (type === "click" ? .12 : .32));
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start(now + index * .09);
        oscillator.stop(now + index * .09 + .34);
      });
    } catch (error) {
      console.warn("Audio playback is unavailable in this browser.", error);
    }
  }

  $("#hint-button").addEventListener("click", hint);
  $("#undo-button").addEventListener("click", undo);
  $("#shuffle-button").addEventListener("click", shuffle);
  $("#magnet-button").addEventListener("click", magnet);
  $("#restart-button").addEventListener("click", () => showModal({
    icon: "↺", eyebrow: "A FRESH START", title: "Start this puzzle over?",
    copy: "<p>Your current progress on this board will be cleared. You can always begin again.</p>",
    actions: [
      { label: "Keep playing", action: () => {} },
      { label: "Restart puzzle", primary: true, action: () => startGame(state.level, state.daily) }
    ]
  }));
  $("#rules-button").addEventListener("click", () => showModal({
    icon: "✿", eyebrow: "A LITTLE GUIDE", title: "How to play",
    copy: "<p>Tap free tiles to collect them. Matching pairs clear automatically and earn IQ.</p><ul><li>A tile is free when nothing is stacked on top of it and either side is open.</li><li>Your tray holds up to seven tiles. Match pairs before it fills.</li><li>Shuffle, Magnet, Hint, and Undo are here if you need a little help.</li></ul><p>Each cleared board takes you straight to the next level.</p>",
    actions: [{ label: "Got it", primary: true, action: () => {} }]
  }));
  $("#modal-close").addEventListener("click", closeModal);
  els.modalBackdrop.addEventListener("click", (event) => { if (event.target === els.modalBackdrop) closeModal(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement) return;
    if (event.key.toLowerCase() === "h") hint();
    if (event.key.toLowerCase() === "u") undo();
    if (event.key.toLowerCase() === "s") shuffle();
    if (event.key.toLowerCase() === "m") magnet();
  });
  els.mute.addEventListener("click", () => {
    muted = !muted;
    localStorage.setItem("vita-mute", String(muted));
    els.mute.innerHTML = `<span aria-hidden="true">${muted ? "♫̸" : "♫"}</span>`;
    els.mute.title = muted ? "Sound off" : "Sound on";
    els.mute.setAttribute("aria-label", muted ? "Turn sounds on" : "Mute sounds");
    if (!muted) playSound("click");
  });
  els.mute.innerHTML = `<span aria-hidden="true">${muted ? "♫̸" : "♫"}</span>`;
  els.mute.title = muted ? "Sound off" : "Sound on";
  els.mute.setAttribute("aria-label", muted ? "Turn sounds on" : "Mute sounds");
  startGame(0, false);
  window.addEventListener("resize", render);
  window.visualViewport?.addEventListener("resize", render);
})();
