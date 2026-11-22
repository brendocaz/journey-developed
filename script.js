
/**
 * PORTFÓLIO BRENDA MORENO
 * Creative Development & Interactive Experience
 */

document.addEventListener("DOMContentLoaded", () => {
    const prefereMovimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* -------------------------------------------------------------
       1. TEMA CLARO / ESCURO
       ------------------------------------------------------------- */
    const btnTema = document.getElementById("btn-tema");
    const temaSalvo = localStorage.getItem("brenda-tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
        atualizarIconeTema(true);
    }

    if (btnTema) {
        btnTema.addEventListener("click", () => {
            const isEscuro = document.body.classList.toggle("tema-escuro");
            localStorage.setItem("brenda-tema", isEscuro ? "escuro" : "claro");
            atualizarIconeTema(isEscuro);
        });
    }

    function atualizarIconeTema(isEscuro) {
        if (!btnTema) return;
        const icone = btnTema.querySelector("i");
        if (icone) {
            icone.className = isEscuro ? "bi bi-sun-fill" : "bi bi-circle-half";
        }
    }

    /* -------------------------------------------------------------
       2. ANIMAÇÃO CINEMATOGRÁFICA DO HERO (GSAP)
       ------------------------------------------------------------- */
    if (typeof gsap !== "undefined" && !prefereMovimentoReduzido) {
        const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Header entrada suave
        tlHero.from("#site-header", {
            y: -25,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
        });

        // Alerta de oportunidade
        tlHero.from("#small-alert", {
            y: 18,
            opacity: 0,
            scale: 0.9,
            duration: 0.55,
            ease: "back.out(1.6)"
        }, "-=0.3");

        // Título com efeito progressivo nas palavras (split reveal)
        tlHero.from(".hero-word", {
            yPercent: 120,
            opacity: 0,
            rotate: 2.5,
            stagger: 0.05,
            duration: 0.8,
            ease: "power4.out"
        }, "-=0.35");

        // Descrição
        tlHero.from(".hero-desc", {
            y: 20,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "all"
        }, "-=0.5");

        // Botões de ação em sequência
        tlHero.from([".btn-projects", ".btn-history"], {
            y: 20,
            opacity: 0,
            scale: 0.96,
            stagger: 0.1,
            duration: 0.55,
            ease: "back.out(1.4)",
            clearProps: "all"
        }, "-=0.4");

        // Metadados
        tlHero.from(".hero-meta", {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "all"
        }, "-=0.2");

        // Janela de código com rotação 3D cinematográfica
        tlHero.from("#hero-code-window", {
            y: 40,
            opacity: 0,
            rotateX: 10,
            rotateY: -12,
            scale: 0.93,
            duration: 1.0,
            ease: "power3.out"
        }, "-=0.75");

        // Badge circular "Sempre aprendendo"
        tlHero.from("#hero-floating-badge", {
            scale: 0,
            rotation: -20,
            opacity: 0,
            duration: 0.65,
            ease: "back.out(1.8)"
        }, "-=0.35");

        // Indicador de rolagem
        tlHero.from("#scroll-indicator", {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.2");

        /* Parallax 3D suave com movimento do mouse */
        const heroSection = document.getElementById("wrap-hero");
        const codeWindow = document.getElementById("hero-code-window");
        const floatingBadge = document.getElementById("hero-floating-badge");

        if (heroSection && codeWindow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            heroSection.addEventListener("mousemove", (e) => {
                const ret = heroSection.getBoundingClientRect();
                const x = (e.clientX - ret.left) / ret.width - 0.5;
                const y = (e.clientY - ret.top) / ret.height - 0.5;

                gsap.to(codeWindow, {
                    rotationY: x * 8 - 3,
                    rotationX: -y * 8,
                    x: x * 10,
                    y: y * 10,
                    duration: 0.6,
                    ease: "power1.out",
                    overwrite: "auto"
                });

                if (floatingBadge) {
                    gsap.to(floatingBadge, {
                        x: -x * 16,
                        y: -y * 16,
                        rotation: x * 6,
                        duration: 0.7,
                        ease: "power1.out",
                        overwrite: "auto"
                    });
                }
            });

            heroSection.addEventListener("mouseleave", () => {
                gsap.to(codeWindow, {
                    rotationY: -3,
                    rotationX: 0,
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });

                if (floatingBadge) {
                    gsap.to(floatingBadge, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            });
        }
    }

    /* Ocultar indicador de scroll ao rolar a página */
    const scrollIndicator = document.getElementById("scroll-indicator");
    if (scrollIndicator) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 70) {
                scrollIndicator.style.opacity = "0";
                scrollIndicator.style.pointerEvents = "none";
            } else {
                scrollIndicator.style.opacity = "1";
                scrollIndicator.style.pointerEvents = "auto";
            }
        }, { passive: true });
    }

    /* -------------------------------------------------------------
       3. REVELAÇÃO AO ROLAR (SEÇÕES SEGUINTES)
       ------------------------------------------------------------- */
    const seletores = [
        ".bloco-texto",
        "#brenda-os-monitor",
        ".text-tec",
        ".card-grande",
        ".box-infos",
        "#curriculo",
        ".text-contato",
        ".op-contao",
        "footer"
    ];

    document.querySelectorAll(seletores.join(",")).forEach((elemento) => {
        elemento.classList.add("revelar");
    });

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
            }
        }); 
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".revelar").forEach((elemento) => {
        observador.observe(elemento);
    });

    /* -------------------------------------------------------------
       4. BRENDA_OS (SISTEMA OPERACIONAL RETRÔ)
       Gerenciado de forma modular em brenda-os.js
       ------------------------------------------------------------- */

    /* -------------------------------------------------------------
       6. LINHAS EXPANSÍVEIS E SCROLL STORYTELLING (GSAP)
       ------------------------------------------------------------- */
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && !prefereMovimentoReduzido) {
        gsap.registerPlugin(ScrollTrigger);

        // Expansão das linhas divisórias
        document.querySelectorAll(".linha").forEach((linha) => {
            gsap.fromTo(linha, 
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: linha,
                        start: "top 92%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Revelação dos títulos das seções
        document.querySelectorAll(".bloco-texto, .text-tec, .header-curriculo, .text-contato").forEach((headerSecao) => {
            gsap.from(headerSecao, {
                y: 35,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerSecao,
                    start: "top 88%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Revelação escalonada dos cards de tecnologia (sem conflito com hover ou scroll)
        gsap.fromTo(".tec-card", 
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power2.out",
                clearProps: "transform",
                scrollTrigger: {
                    trigger: ".container-card",
                    start: "top 85%",
                    once: true
                }
            }
        );

        // Revelação do Card Grande (Poster Sobre Mim)
        gsap.from("#card-sobre-poster", {
            x: -40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#sobre",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Storytelling Timeline - iluminação progressiva dos nós
        document.querySelectorAll(".story-item").forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 75%",
                onEnter: () => item.classList.add("ativo"),
                onLeaveBack: () => item.classList.remove("ativo")
            });
        });

        // Símbolo ✳ rotação contínua vinculada à velocidade de scroll
        const simboloTec = document.querySelector(".text-principal .simbolo");
        if (simboloTec) {
            gsap.to(simboloTec, {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: "#tecnologias",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }
    }

    /* -------------------------------------------------------------
       7. ACCORDIONS DE CONTATO (FOCO PROFISSIONAL & EQUIPE)
       ------------------------------------------------------------- */
    const accordions = document.querySelectorAll(".accordion-bloco");

    accordions.forEach((bloco) => {
        const toggleAccordion = () => {
            const estaAtivo = bloco.classList.contains("ativo");
            
            // Fecha outros accordions para manter o layout limpo
            accordions.forEach((b) => {
                b.classList.remove("ativo");
                b.setAttribute("aria-expanded", "false");
            });

            if (!estaAtivo) {
                bloco.classList.add("ativo");
                bloco.setAttribute("aria-expanded", "true");
            }
        };

        bloco.addEventListener("click", toggleAccordion);
        bloco.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleAccordion();
            }
        });
    });

    /* -------------------------------------------------------------
       8. COPIAR E-MAIL COM FEEDBACK VISUAL
       ------------------------------------------------------------- */
    const btnEmail = document.getElementById("email");
    const emailTexto = "brenda.moreno.santos8@gmail.com";

    if (btnEmail) {
        const spanTexto = btnEmail.querySelector(".email-texto");
        const spanIcone = btnEmail.querySelector(".email-icone");

        btnEmail.addEventListener("click", () => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(emailTexto).then(() => {
                    exibirFeedbackCopia();
                }).catch(() => {
                    copiarFallback(emailTexto);
                });
            } else {
                copiarFallback(emailTexto);
            }
        });

        function exibirFeedbackCopia() {
            btnEmail.classList.add("copiado");
            if (spanTexto) spanTexto.textContent = "E-mail copiado!";
            if (spanIcone) spanIcone.innerHTML = "✓";

            setTimeout(() => {
                btnEmail.classList.remove("copiado");
                if (spanTexto) spanTexto.textContent = "Copiar meu e-mail";
                if (spanIcone) spanIcone.innerHTML = "⧉";
            }, 2500);
        }

        function copiarFallback(texto) {
            const textarea = document.createElement("textarea");
            textarea.value = texto;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                exibirFeedbackCopia();
            } catch (err) {
                console.error("Falha ao copiar:", err);
            }
            document.body.removeChild(textarea);
        }
    }
});



