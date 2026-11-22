/**
 * BRENDA_OS — Project Explorer v2.0
 * Mini sistema operacional retrô para apresentação interativa de projetos.
 * 
 * ========================================================================
 * GUIA DE ATUALIZAÇÃO RÁPIDA:
 * 
 * 1. Para adicionar as imagens dos seus projetos:
 *    - Coloque o arquivo de imagem na pasta: assets/projetos/
 *    - Exemplo: assets/projetos/calculadora.png
 *    - Caso a imagem ainda não exista, a prévia CSS é exibida automaticamente.
 * 
 * 2. Para adicionar as URLs reais dos seus repositórios no GitHub:
 *    - Preencha o campo 'githubUrl' de cada projeto com a URL completa:
 *      githubUrl: "https://github.com/brendamoreno/nome-do-repositorio"
 * 
 * 3. Para adicionar demonstrações online publicadas (se houver):
 *    - Preencha o campo 'demoUrl':
 *      demoUrl: "https://seu-projeto.vercel.app"
 * ========================================================================
 */
(function () {
    "use strict";

    const prefMov = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    /* ===============================================================
       1. DADOS DOS PROJETOS & PASTAS
    =============================================================== */
    const FOLDERS = {
        python: {
            id: "python",
            label: "01_PYTHON",
            icon: "🐍",
            projects: [
                {
                    id: "calculadora",
                    name: "Calculadora",
                    subtitle: "01 / LÓGICA E OPERAÇÕES",
                    desc: "Operações matemáticas em Python, com foco na lógica e na interação pelo terminal.",
                    tags: ["Python", "try / except", "laços de repetição"],
                    iconHtml: '<i class="bi bi-calculator" aria-hidden="true"></i>',
                    image: "assets/projetos/calculadora.png",
                    githubUrl: "", // Adicione a URL real do seu repositório no GitHub
                    demoUrl: "",   // Adicione a URL da demo online (se houver)
                    preview: '<div class="preview preview-calculadora"><div class="mini-calculadora fundo"><div class="calc-visor"><small>125 + 75</small><strong>200</strong></div><div class="calc-teclas"><span>7</span><span>8</span><span>9</span><span>÷</span><span>4</span><span>5</span><span>6</span><span>×</span><span>1</span><span>2</span><span>3</span><span>−</span><span>C</span><span>0</span><span>=</span><span>+</span></div></div></div>'
                },
                {
                    id: "caixa",
                    name: "Caixa Eletrônico",
                    subtitle: "02 / SIMULAÇÃO EM PYTHON",
                    desc: "Simulação de caixa eletrônico para praticar lógica de programação em Python.",
                    tags: ["Python", "try / except", "laços de repetição"],
                    iconHtml: '<i class="bi bi-cash-stack" aria-hidden="true"></i>',
                    image: "assets/projetos/caixa_eletronico.png",
                    githubUrl: "", // Adicione a URL real do seu repositório no GitHub
                    demoUrl: "",   // Adicione a URL da demo online (se houver)
                    preview: '<div class="preview preview-caixa"><div class="mini-caixa fundo"><div class="mini-header"><strong>ATM BANK</strong><span>🏧</span></div><div class="caixa-saldo"><small>Saldo disponível</small><strong>R$ 2.450,00</strong></div><div class="caixa-operacoes"><span>Sacar</span><span>Depositar</span><span>Extrato</span><span>Transferir</span></div></div></div>'
                },
                {
                    id: "jokenpo",
                    name: "Jokenpô",
                    subtitle: "03 / JOGO NO TERMINAL",
                    desc: "Pedra, papel e tesoura com menu, partidas e ranking. Aleatoriedade e tratamento de dados.",
                    tags: ["Python", "try / except", "laços de repetição", "randint"],
                    iconHtml: '<i class="bi bi-controller" aria-hidden="true"></i>',
                    image: "assets/projetos/jokenpo.png",
                    githubUrl: "", // Adicione a URL real do seu repositório no GitHub
                    demoUrl: "",   // Adicione a URL da demo online (se houver)
                    preview: '<div class="preview preview-jokenpo"><div class="mini-jogo fundo"><div class="mini-header"><strong>✊ JOKENPÔ</strong><span>RODADA 03</span></div><p>Escolha sua jogada!</p><div class="mini-escolhas"><span>✊ Pedra</span><span>✋ Papel</span><span>✌️ Tesoura</span></div><div class="mini-placar"><span>Você: 2</span><span>Máquina: 1</span></div></div></div>'
                }
            ]
        },
        frontend: {
            id: "frontend",
            label: "02_WEB",
            icon: "🌐",
            projects: [
                {
                    id: "senior-bank",
                    name: "Sênior Bank",
                    subtitle: "04 / ACESSIBILIDADE",
                    desc: "Internet banking pensado para o público idoso, com interface simples e fluxos intuitivos. TCC desenvolvido em equipe.",
                    tags: ["HTML", "CSS", "JavaScript"],
                    iconHtml: '<i class="bi bi-bank" aria-hidden="true"></i>',
                    image: "assets/projetos/senior_bank.png",
                    githubUrl: "", // Adicione a URL real do seu repositório no GitHub
                    demoUrl: "",   // Adicione a URL da demo online (se houver)
                    preview: '<div class="preview preview-bank"><div class="mini-tela fundo"><div class="mini-header"><strong>SÊNIOR BANK</strong><span>Olá ☀</span></div><p>O que você gostaria de fazer?</p><div class="mini-acoes"><span>Pix</span><span>Transferir</span><span>Pagar</span></div><small>Precisa de ajuda? Estamos aqui.</small></div></div>'
                },
                {
                    id: "pizza99",
                    name: "Pizza99",
                    subtitle: "05 / CATÁLOGO DIGITAL",
                    desc: "Site de pizzaria com cardápio organizado por categorias e seção para montar combos, explorando a identidade visual e a disposição dos elementos com HTML e CSS.",
                    tags: ["HTML", "CSS", "JavaScript"],
                    iconHtml: '<svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C16.5 2 20.3 4.8 21.6 8.8L12 22L2.4 8.8C3.7 4.8 7.5 2 12 2Z"></path><path d="M3.2 8C7.5 9.5 16.5 9.5 20.8 8"></path><circle cx="10" cy="13" r="1.2" fill="currentColor"></circle><circle cx="14" cy="15" r="1.2" fill="currentColor"></circle><circle cx="12" cy="9.5" r="1" fill="currentColor"></circle></svg>',
                    image: "assets/projetos/pizza99.png",
                    githubUrl: "", // Adicione a URL real do seu repositório no GitHub
                    demoUrl: "",   // Adicione a URL da demo online (se houver)
                    preview: '<div class="preview preview-pizza"><div class="mini-pizza fundo"><div class="mini-header"><strong>🍕 PIZZA99</strong><span>CARDÁPIO • PEDIDOS</span></div><div class="pizza-conteudo"><div class="pizza-texto"><h4>Seu sabor favorito, direto do forno.</h4><span class="pizza-botao">Pedir agora</span></div><div class="pizza-imagem"><div class="pizza-desenho"><span class="pepperoni"></span><span class="pepperoni"></span><span class="pepperoni"></span><span class="pepperoni"></span><span class="pepperoni"></span></div></div></div></div></div>'
                },
                {
                    id: "netflix",
                    name: "Netflix Clone",
                    subtitle: "06 / ESTUDO DE INTERFACE",
                    desc: "Estudo visual da interface da Netflix, com foco na composição do banner de destaque e dos carrosséis de conteúdo.",
                    tags: ["HTML", "CSS"],
                    iconHtml: '<i class="bi bi-film" aria-hidden="true"></i>',
                    image: "assets/projetos/netflix_clone.png",
                    githubUrl: "", // Adicione a URL real do seu repositório no GitHub
                    demoUrl: "",   // Adicione a URL da demo online (se houver)
                    preview: '<div class="preview preview-netflix"><div class="mini-netflix fundo"><div class="mini-header"><strong class="netflix-logo">NETFLIX</strong><span class="opcoes-netflix">Início • Séries • Filmes</span></div><div class="netflix-destaque"><small>EM DESTAQUE</small><h4>NOITE SEM FIM</h4><p>Uma história cheia de mistérios.</p><div class="netflix-botao"><span>▶ Assistir</span></div></div><strong class="netflix-subtitulo">Populares agora</strong><div class="netflix-filmes"><span>01</span><span>02</span><span>03</span><span>04</span></div></div></div>'
                }
            ]
        },
        engsoft: {
            id: "engsoft",
            label: "03_SISTEMAS",
            icon: "⚙️",
            projects: [],
            emptyMsg: "Novos projetos em desenvolvimento..."
        }
    };

    // Aliases para máxima compatibilidade semântica
    FOLDERS.web = FOLDERS.frontend;
    FOLDERS.sistemas = FOLDERS.engsoft;

    /* ===============================================================
       2. ESTADO DA LIXEIRA (PERSISTÊNCIA NA SESSÃO)
    =============================================================== */
    let trashedIds = loadTrash();

    function loadTrash() {
        try {
            const s = sessionStorage.getItem("bos-trash");
            return s ? JSON.parse(s) : [];
        } catch {
            return [];
        }
    }

    function saveTrash() {
        try {
            sessionStorage.setItem("bos-trash", JSON.stringify(trashedIds));
        } catch (e) {
            console.warn("BRENDA_OS: Armazenamento da sessão indisponível", e);
        }
    }

    function findProj(id) {
        for (const [fk, fv] of Object.entries(FOLDERS)) {
            if (fv.projects) {
                const p = fv.projects.find(x => x.id === id);
                if (p) return { proj: p, folderId: fk, folder: fv };
            }
        }
        return null;
    }

    function activeProjects(fId) {
        const folder = FOLDERS[fId];
        return (folder?.projects || []).filter(p => !trashedIds.includes(p.id));
    }

    function trashedList() {
        return trashedIds.map(id => {
            const r = findProj(id);
            return r ? { ...r.proj, originId: r.folderId, originLabel: r.folder.label } : null;
        }).filter(Boolean);
    }

    /* ===============================================================
       3. ELEMENTOS DO DOM
    =============================================================== */
    const screen     = document.getElementById("bos-screen");
    const desktop    = document.getElementById("bos-desktop");
    const winBox     = document.getElementById("bos-windows");
    const trashBtn   = document.getElementById("bos-trash");
    const trashCount = document.getElementById("bos-trash-count");
    const bootEl     = document.getElementById("bos-boot");
    const clockEl    = document.getElementById("bos-clock");

    if (!screen) return;

    /* ===============================================================
       4. RELÓGIO DA TASKBAR
    =============================================================== */
    function tickClock() {
        if (!clockEl) return;
        const n = new Date();
        clockEl.textContent = n.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    }
    tickClock();
    setInterval(tickClock, 30000);

    /* ===============================================================
       5. BOOT RETRÔ
    =============================================================== */
    let booted = false;

    function boot() {
        if (booted) return;
        booted = true;

        if (prefMov || typeof gsap === "undefined") {
            if (bootEl) bootEl.style.display = "none";
            if (desktop) desktop.classList.add("bos-visible");
            return;
        }

        const tl = gsap.timeline();
        tl.set(bootEl, { display: "flex", opacity: 1 })
          .fromTo(".bos-boot-bar-fill", { width: "0%" }, { width: "100%", duration: 1.6, ease: "power1.inOut" }, 0.4)
          .to(bootEl, { opacity: 0, duration: 0.35 }, "+=0.25")
          .call(() => {
              if (bootEl) bootEl.style.display = "none";
              if (desktop) desktop.classList.add("bos-visible");
          })
          .from(".bos-folder", { scale: 0, opacity: 0, stagger: 0.12, duration: 0.4, ease: "back.out(1.6)", clearProps: "all" })
          .from(".bos-trash", { scale: 0, opacity: 0, duration: 0.35, ease: "back.out(1.4)", clearProps: "all" }, "-=0.2");
    }

    /* ===============================================================
       6. LIXEIRA — INTERAÇÃO & ANIMAÇÃO RETRÔ
    =============================================================== */
    function updTrashUI() {
        if (trashCount) trashCount.textContent = trashedIds.length;
        if (trashBtn) {
            trashBtn.classList.toggle("has-items", trashedIds.length > 0);
            trashBtn.setAttribute("aria-label", `Abrir LIXEIRA (${trashedIds.length} itens)`);
        }
    }
    updTrashUI();

    /**
     * Executa a animação de recebimento na lixeira:
     * - Tremor/escala estilo sistema clássico (8-bit)
     * - Brilho neon CRT
     */
    function triggerTrashAnimation() {
        if (!trashBtn) return;
        trashBtn.classList.remove("bos-trash-animate");
        void trashBtn.offsetWidth; // Força reflow
        trashBtn.classList.add("bos-trash-animate");
        setTimeout(() => {
            if (trashBtn) trashBtn.classList.remove("bos-trash-animate");
        }, 550);
    }

    /**
     * Exclui visualmente um projeto com animação retrô pixelada.
     * @param {string} id - ID do projeto
     * @param {string} [originFolderId] - ID da pasta para atualizar se estiver aberta
     * @param {HTMLElement} [itemElement] - Elemento do DOM a animar
     */
    function deleteWithAnimation(id, originFolderId, itemElement) {
        if (trashedIds.includes(id)) return;

        // Se o elemento foi passado ou existe no DOM da janela atual
        const targetEl = itemElement || winBox.querySelector(`.bos-fitem[data-pid="${id}"]`);

        if (targetEl && !prefMov) {
            targetEl.classList.add("bos-item-pixelating");
            setTimeout(() => {
                trashedIds.push(id);
                saveTrash();
                updTrashUI();
                triggerTrashAnimation();
                if (originFolderId) {
                    openFolder(originFolderId);
                } else {
                    refreshCurrentWindowIfFolder();
                }
            }, 420);
        } else {
            trashedIds.push(id);
            saveTrash();
            updTrashUI();
            if (!prefMov) triggerTrashAnimation();
            if (originFolderId) {
                openFolder(originFolderId);
            } else {
                refreshCurrentWindowIfFolder();
            }
        }
    }

    function doRestore(id) {
        trashedIds = trashedIds.filter(x => x !== id);
        saveTrash();
        updTrashUI();
    }

    function doRestoreAll() {
        trashedIds = [];
        saveTrash();
        updTrashUI();
    }

    function refreshCurrentWindowIfFolder() {
        const titleEl = winBox.querySelector(".bos-win-title");
        if (!titleEl) return;
        for (const [fk, fv] of Object.entries(FOLDERS)) {
            if (titleEl.textContent.includes(fv.label)) {
                openFolder(fk);
                break;
            }
        }
    }

    /* ===============================================================
       7. JANELAS RETRÔ
    =============================================================== */
    function closeWins(instant = false) {
        winBox.querySelectorAll(".bos-window").forEach(w => {
            if (w._esc) document.removeEventListener("keydown", w._esc);
            if (instant || typeof gsap === "undefined" || prefMov) {
                w.remove();
            } else {
                gsap.to(w, {
                    scale: 0.85,
                    opacity: 0,
                    duration: 0.18,
                    ease: "power2.in",
                    onComplete: () => w.remove()
                });
            }
        });
        document.querySelectorAll(".bos-folder.active").forEach(f => f.classList.remove("active"));
    }

    function mkWin(title, html, opts) {
        opts = opts || {};
        closeWins(true);

        const w = document.createElement("div");
        w.className = "bos-window";
        w.setAttribute("role", "dialog");
        w.setAttribute("aria-label", title);

        let tb = "";
        if (opts.back) {
            tb += `<button class="bos-win-btn bos-win-back" type="button" aria-label="Voltar para pasta anterior">◀ Voltar</button>`;
        }
        tb += `<span class="bos-win-title">${title}</span>`;
        tb += `<button class="bos-win-btn bos-win-close" type="button" aria-label="Fechar janela">✕</button>`;

        w.innerHTML = `<div class="bos-win-titlebar">${tb}</div><div class="bos-win-body">${html}</div>`;
        winBox.appendChild(w);

        w.querySelector(".bos-win-close").addEventListener("click", () => closeWins(false));
        const bk = w.querySelector(".bos-win-back");
        if (bk && opts.onBack) {
            bk.addEventListener("click", () => {
                if (typeof gsap !== "undefined" && !prefMov) {
                    gsap.to(w, {
                        scale: 0.88,
                        opacity: 0,
                        duration: 0.16,
                        ease: "power2.in",
                        onComplete: () => {
                            w.remove();
                            opts.onBack();
                        }
                    });
                } else {
                    w.remove();
                    opts.onBack();
                }
            });
        }

        if (typeof gsap !== "undefined" && !prefMov) {
            if (opts.isDetail) {
                // Entrada especial e suave para a janela de detalhes do projeto
                gsap.fromTo(w,
                    { scale: 0.88, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.28, ease: "back.out(1.5)" }
                );

                const iconBox = w.querySelector(".bos-detail-icon-box");
                if (iconBox) {
                    gsap.fromTo(iconBox,
                        { scale: 0.5, rotate: -8, opacity: 0 },
                        { scale: 1, rotate: 0, opacity: 1, duration: 0.35, delay: 0.08, ease: "back.out(2)" }
                    );
                }

                const detailItems = w.querySelectorAll(".bos-detail-header-info, .bos-detail-section, .bos-detail-actions");
                if (detailItems.length) {
                    gsap.fromTo(detailItems,
                        { opacity: 0, y: 10 },
                        { opacity: 1, y: 0, duration: 0.24, stagger: 0.05, delay: 0.1, ease: "power2.out" }
                    );
                }
            } else {
                gsap.fromTo(w, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.6)" });
            }
        }

        w._esc = e => {
            if (e.key === "Escape") closeWins(false);
        };
        document.addEventListener("keydown", w._esc);

        const cl = w.querySelector(".bos-win-close");
        if (cl) cl.focus();
        return w;
    }

    /* ===============================================================
       8. ABRIR PASTA
    =============================================================== */
    function openFolder(fId) {
        const f = FOLDERS[fId];
        if (!f) return;

        document.querySelectorAll(".bos-folder").forEach(b => b.classList.remove("active"));
        const btn = document.querySelector(`.bos-folder[data-folder="${fId}"]`);
        if (btn) btn.classList.add("active");

        const projs = activeProjects(fId);
        let h = "";

        if (f.projects.length === 0 && f.emptyMsg) {
            h = `<div class="bos-empty"><span class="bos-empty-ico">📂</span><p>${f.emptyMsg}</p></div>`;
        } else if (projs.length === 0) {
            h = `<div class="bos-empty">
                    <span class="bos-empty-ico">📂</span>
                    <p>Todos os projetos desta pasta foram movidos para a LIXEIRA.</p>
                    <small style="color: var(--cor-texto-mutado); display: block; margin-top: 8px;">Abra a lixeira no desktop para restaurá-los a qualquer momento.</small>
                 </div>`;
        } else {
            h = '<div class="bos-flist">';
            projs.forEach(p => {
                h += `<div class="bos-fitem" draggable="true" data-pid="${p.id}" tabindex="0" role="button" aria-label="Abrir projeto ${p.name}">
                        <span class="bos-fitem-ico" aria-hidden="true">📄</span>
                        <div class="bos-fitem-info">
                            <span class="bos-fitem-name">${p.name}</span>
                            <span class="bos-fitem-tags">${p.tags.join(" · ")}</span>
                        </div>
                        <div class="bos-fitem-acts">
                            <button class="bos-btn-open" type="button" data-pid="${p.id}" aria-label="Abrir detalhes de ${p.name}">Abrir</button>
                            <button class="bos-btn-del" type="button" data-pid="${p.id}" aria-label="Mover ${p.name} para LIXEIRA" title="Mover para a LIXEIRA">🗑️</button>
                        </div>
                    </div>`;
            });
            h += "</div>";
        }

        const w = mkWin(`${f.icon} ${f.label}`, h);

        // Ações dos botões e itens com feedback retrô
        w.querySelectorAll(".bos-btn-open").forEach(b => {
            b.addEventListener("click", e => {
                e.stopPropagation();
                const itemEl = b.closest(".bos-fitem");
                openDetailWithEffect(b.dataset.pid, fId, itemEl);
            });
        });

        w.querySelectorAll(".bos-fitem").forEach(fi => {
            fi.addEventListener("click", () => openDetailWithEffect(fi.dataset.pid, fId, fi));
            fi.addEventListener("keydown", e => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openDetailWithEffect(fi.dataset.pid, fId, fi);
                }
            });
        });

        // Botão alternativo de exclusão
        w.querySelectorAll(".bos-btn-del").forEach(b => {
            b.addEventListener("click", e => {
                e.stopPropagation();
                const pid = b.dataset.pid;
                const fi = b.closest(".bos-fitem");
                deleteWithAnimation(pid, fId, fi);
            });
        });

        // Inicializa drag & drop
        initDragAndDrop(w, fId);
    }

    /* ===============================================================
       9. ABRIR DETALHE DO PROJETO (PAINEL MINIMALISTA COMPACTO)
    =============================================================== */
    function openDetailWithEffect(pid, fId, itemEl) {
        if (!itemEl || prefMov) {
            openDetail(pid, fId);
            return;
        }
        itemEl.classList.add("bos-fitem-opening");
        setTimeout(() => {
            openDetail(pid, fId);
        }, 90);
    }

    function openDetail(pid, fId) {
        const r = findProj(pid);
        if (!r) return;
        const p = r.proj;

        let h = '<div class="bos-detail-panel">';

        // 1. Cabeçalho: Quadrado com ícone (70-90px) + Nome e Categoria ao lado
        h += '<div class="bos-detail-header">';
        h += `<div class="bos-detail-icon-box" aria-hidden="true">${p.iconHtml || '<i class="bi bi-app"></i>'}</div>`;
        h += '<div class="bos-detail-header-info">';
        h += `<span class="bos-detail-cat">${p.subtitle}</span>`;
        h += `<h3 class="bos-detail-title">${p.name}</h3>`;
        h += '</div>';
        h += '</div>';

        // Divisória sutil
        h += '<div class="bos-detail-divider" aria-hidden="true"></div>';

        // 2. Descrição existente do projeto
        h += '<div class="bos-detail-section">';
        h += '<span class="bos-detail-section-label">Sobre o projeto</span>';
        h += `<p class="bos-detail-desc">${p.desc}</p>`;
        h += '</div>';

        // 3. Tecnologias utilizadas (pequenas etiquetas)
        h += '<div class="bos-detail-section">';
        h += '<span class="bos-detail-section-label">Tecnologias</span>';
        h += '<div class="bos-detail-tags">';
        p.tags.forEach(t => {
            h += `<span class="bos-dtag">${t}</span>`;
        });
        h += '</div>';
        h += '</div>';

        // Divisória sutil
        h += '<div class="bos-detail-divider" aria-hidden="true"></div>';

        // 4. Ações: Repositório GitHub + Demonstração (se houver)
        h += '<div class="bos-detail-actions">';

        // Botão destacado: Ver repositório no GitHub
        if (p.githubUrl && p.githubUrl.trim() !== "" && p.githubUrl !== "#") {
            h += `<a href="${p.githubUrl}" class="bos-detail-action-btn bos-btn-github" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-github" aria-hidden="true"></i>
                    <span>Ver repositório no GitHub</span>
                    <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </a>`;
        } else {
            h += `<span class="bos-detail-action-btn bos-btn-github bos-btn-disabled" title="Repositório ainda não disponível" role="button" aria-disabled="true">
                    <i class="bi bi-github" aria-hidden="true"></i>
                    <span>Ver repositório no GitHub</span>
                    <small class="bos-tag-status">Em breve</small>
                  </span>`;
        }

        // Botão secundário: Ver demonstração (somente se houver URL real)
        if (p.demoUrl && p.demoUrl.trim() !== "" && p.demoUrl !== "#") {
            h += `<a href="${p.demoUrl}" class="bos-detail-action-btn bos-btn-demo" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-globe2" aria-hidden="true"></i>
                    <span>Ver demonstração</span>
                    <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </a>`;
        }

        h += '</div>'; // .bos-detail-actions
        h += '</div>'; // .bos-detail-panel

        const w = mkWin(`📄 ${p.name}`, h, {
            back: true,
            isDetail: true,
            onBack: () => openFolder(fId)
        });
    }

    /* ===============================================================
       10. ABRIR LIXEIRA
    =============================================================== */
    function openTrash() {
        const items = trashedList();
        let h = "";

        if (items.length === 0) {
            h = `<div class="bos-empty">
                    <span class="bos-empty-ico">🗑️</span>
                    <p>Lixeira vazia.</p>
                    <small style="color: var(--cor-texto-mutado);">Arraste arquivos ou use o botão 🗑️ para mover projetos para cá.</small>
                 </div>`;
        } else {
            h = `<div class="bos-trash-head">
                    <span>${items.length} arquivo(s) na lixeira</span>
                    <button class="bos-restore-all" type="button" aria-label="Restaurar todos os projetos para as pastas originais">↩ Restaurar todos</button>
                 </div>`;
            h += '<div class="bos-flist">';
            items.forEach(p => {
                h += `<div class="bos-fitem bos-trashed" data-pid="${p.id}">
                        <span class="bos-fitem-ico" aria-hidden="true">📄</span>
                        <div class="bos-fitem-info">
                            <span class="bos-fitem-name">${p.name}</span>
                            <span class="bos-fitem-tags">Origem: ${p.originLabel}</span>
                        </div>
                        <div class="bos-fitem-acts">
                            <button class="bos-btn-restore" type="button" data-pid="${p.id}" aria-label="Restaurar ${p.name} para ${p.originLabel}">↩ Restaurar</button>
                        </div>
                    </div>`;
            });
            h += "</div>";
        }

        const w = mkWin("🗑️ LIXEIRA", h);

        w.querySelectorAll(".bos-btn-restore").forEach(b => {
            b.addEventListener("click", e => {
                e.stopPropagation();
                const pid = b.dataset.pid;
                const row = b.closest(".bos-fitem");
                if (row && !prefMov) {
                    row.classList.add("bos-item-leaving");
                    setTimeout(() => {
                        doRestore(pid);
                        openTrash();
                    }, 220);
                } else {
                    doRestore(pid);
                    openTrash();
                }
            });
        });

        const ra = w.querySelector(".bos-restore-all");
        if (ra) {
            ra.addEventListener("click", () => {
                doRestoreAll();
                openTrash();
            });
        }
    }

    /* ===============================================================
       11. ARRASTO RETRÔ COM FEEDBACK VISUAL PRECISO & DROP NA LIXEIRA
    =============================================================== */
    let currentDragPid = null;
    let dragAvatar = null;
    let isDraggingOverTrash = false;

    function isOverTrash(clientX, clientY) {
        if (!trashBtn) return false;
        const rect = trashBtn.getBoundingClientRect();
        return (
            clientX >= rect.left - 15 &&
            clientX <= rect.right + 15 &&
            clientY >= rect.top - 15 &&
            clientY <= rect.bottom + 15
        );
    }

    function createDragAvatar(name, x, y) {
        removeDragAvatar();
        dragAvatar = document.createElement("div");
        dragAvatar.className = "bos-drag-avatar";
        dragAvatar.innerHTML = `<span class="bos-drag-avatar-ico">📄</span><span class="bos-drag-avatar-name">${name}</span>`;
        document.body.appendChild(dragAvatar);
        moveDragAvatar(x, y);
    }

    function moveDragAvatar(x, y) {
        if (!dragAvatar) return;
        dragAvatar.style.left = `${x + 14}px`;
        dragAvatar.style.top  = `${y + 14}px`;
    }

    function removeDragAvatar() {
        if (dragAvatar) {
            dragAvatar.remove();
            dragAvatar = null;
        }
    }

    function initDragAndDrop(w, fId) {
        w.querySelectorAll(".bos-fitem[draggable]").forEach(fi => {
            const pid = fi.dataset.pid;
            const proj = findProj(pid)?.proj;
            const projName = proj ? proj.name : "Arquivo";

            fi.addEventListener("dragstart", e => {
                currentDragPid = pid;
                e.dataTransfer.setData("text/plain", pid);
                e.dataTransfer.effectAllowed = "move";
                fi.classList.add("bos-dragging");

                // Avatar retrô flutuante que acompanha o cursor
                createDragAvatar(projName, e.clientX, e.clientY);
            });

            fi.addEventListener("drag", e => {
                if (e.clientX !== 0 || e.clientY !== 0) {
                    moveDragAvatar(e.clientX, e.clientY);
                    const over = isOverTrash(e.clientX, e.clientY);
                    if (over !== isDraggingOverTrash) {
                        isDraggingOverTrash = over;
                        if (trashBtn) trashBtn.classList.toggle("bos-drag-over", over);
                    }
                }
            });

            fi.addEventListener("dragend", () => {
                fi.classList.remove("bos-dragging");
                if (trashBtn) trashBtn.classList.remove("bos-drag-over");
                isDraggingOverTrash = false;
                removeDragAvatar();
                currentDragPid = null;
            });
        });
    }

    // Eventos na Lixeira para soltura de arquivos
    if (trashBtn) {
        trashBtn.addEventListener("dragover", e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            trashBtn.classList.add("bos-drag-over");
        });

        trashBtn.addEventListener("dragleave", () => {
            trashBtn.classList.remove("bos-drag-over");
        });

        trashBtn.addEventListener("drop", e => {
            e.preventDefault();
            trashBtn.classList.remove("bos-drag-over");
            const pid = e.dataTransfer.getData("text/plain") || currentDragPid;
            removeDragAvatar();

            if (!pid) return;

            // Encontra qual pasta está aberta para animar e atualizar
            let openFolderKey = null;
            const tEl = winBox.querySelector(".bos-win-title");
            if (tEl) {
                for (const [fk, fv] of Object.entries(FOLDERS)) {
                    if (tEl.textContent.includes(fv.label)) {
                        openFolderKey = fk;
                        break;
                    }
                }
            }

            deleteWithAnimation(pid, openFolderKey);
        });
    }

    /* ===============================================================
       12. EVENTOS DOS ÍCONES DE PASTAS E LIXEIRA NO DESKTOP
    =============================================================== */
    document.querySelectorAll(".bos-folder").forEach(b => {
        b.addEventListener("click", () => openFolder(b.dataset.folder));
    });

    if (trashBtn) {
        trashBtn.addEventListener("click", () => {
            if (!trashBtn.classList.contains("bos-drag-over")) {
                openTrash();
            }
        });
    }

    /* ===============================================================
       14. BOOT AO ROLAR ATÉ O MONITOR
    =============================================================== */
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && !prefMov) {
        ScrollTrigger.create({
            trigger: "#brenda-os-monitor",
            start: "top 82%",
            once: true,
            onEnter: boot
        });
    } else {
        const obs = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                boot();
                obs.disconnect();
            }
        }, { threshold: 0.1 });
        const mon = document.getElementById("brenda-os-monitor");
        if (mon) obs.observe(mon);
    }
})();
