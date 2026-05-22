/**
 * ATTACK SHARK X3 - PREMIUM LANDING PAGE INTERACTIVE CONTROLLER
 * Developed with premium UI/UX Pro Max guidelines.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DADOS DE IMAGENS E CUSTOMIZAÇÃO DE CORES
    const mouseData = {
        white: {
            name: 'White (Branco)',
            noTape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0055.jpg?v=1750248723&width=3200',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0005.jpg?v=1750248723&width=3200',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0007.jpg?v=1750248723&width=3200',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0008.jpg?v=1750248723&width=3200'
            },
            tape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020050_bcd05e26-94f8-454e-ae5f-be633f072de9.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020050_bcd05e26-94f8-454e-ae5f-be633f072de9.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020050_bcd05e26-94f8-454e-ae5f-be633f072de9.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020050_bcd05e26-94f8-454e-ae5f-be633f072de9.jpg?v=1776755443&width=1600'
            }
        },
        black: {
            name: 'Black (Preto)',
            noTape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0056.jpg?v=1750248723&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0001.jpg?v=1750248723&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0002.jpg?v=1750248723&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0004.jpg?v=1750248723&width=1600'
            },
            tape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020049_7da5426f-ccbb-4c7c-9cb9-08d675c63fae.jpg?v=1776755443&width=3200',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020049_7da5426f-ccbb-4c7c-9cb9-08d675c63fae.jpg?v=1776755443&width=3200',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020049_7da5426f-ccbb-4c7c-9cb9-08d675c63fae.jpg?v=1776755443&width=3200',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020049_7da5426f-ccbb-4c7c-9cb9-08d675c63fae.jpg?v=1776755443&width=3200'
            }
        },
        red: {
            name: 'Red (Vermelho)',
            noTape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0054_c4431c31-394e-434d-847a-f82bb5d61ec7.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0041.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0042.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0044.jpg?v=1776755443&width=1600'
            },
            tape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020054_2be1aaab-a276-46b7-9346-3a7f3698f24d.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020054_2be1aaab-a276-46b7-9346-3a7f3698f24d.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020054_2be1aaab-a276-46b7-9346-3a7f3698f24d.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020054_2be1aaab-a276-46b7-9346-3a7f3698f24d.jpg?v=1776755443&width=1600'
            }
        },
        purple: {
            name: 'Purple (Roxo)',
            noTape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0053_12460e0a-e72a-4c6d-81eb-0899c287c57d.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0037.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0038.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0036.jpg?v=1776755443&width=1600'
            },
            tape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020053_77c48e83-1432-460f-9552-4adae3519b7f.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020053_77c48e83-1432-460f-9552-4adae3519b7f.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020053_77c48e83-1432-460f-9552-4adae3519b7f.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020053_77c48e83-1432-460f-9552-4adae3519b7f.jpg?v=1776755443&width=1600'
            }
        },
        orange: {
            name: 'Orange (Laranja)',
            noTape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0052_0e99dddc-bb9a-47d2-8563-46f132872314.jpg?v=1750248723&width=3200',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0025.jpg?v=1750248723&width=3200',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0026.jpg?v=1750248723&width=3200',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0028.jpg?v=1750248723&width=3200'
            },
            tape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020052_07511da2-f8d2-4c43-b218-2aac021e95cb.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020052_07511da2-f8d2-4c43-b218-2aac021e95cb.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020052_07511da2-f8d2-4c43-b218-2aac021e95cb.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020052_07511da2-f8d2-4c43-b218-2aac021e95cb.jpg?v=1776755443&width=1600'
            }
        },
        berry: {
            name: 'Berry Red (Pink)',
            noTape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0051_678ca850-befd-41a4-b3ef-263ba4e8b452.jpg?v=1750248723&width=3200',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0021.jpg?v=1750248723&width=3200',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0022.jpg?v=1750248723&width=3200',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_0024.jpg?v=1750248723&width=3200'
            },
            tape: {
                main: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020051_3f11043d-04fa-462b-b82f-e05930e51f28.jpg?v=1776755443&width=1600',
                top: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020051_3f11043d-04fa-462b-b82f-e05930e51f28.jpg?v=1776755443&width=1600',
                side: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020051_3f11043d-04fa-462b-b82f-e05930e51f28.jpg?v=1776755443&width=1600',
                bottom: 'https://attackshark.com/cdn/shop/files/attackshark_x3_gaming_mouse_fanghua020051_3f11043d-04fa-462b-b82f-e05930e51f28.jpg?v=1776755443&width=1600'
            }
        }
    };

    let activeColor = 'white';
    let hasGripTape = false;
    let activeAngle = 'main'; // 'main', 'top', 'side', 'bottom'

    // Elementos DOM
    const customizerImg = document.getElementById('customizer-display-img');
    const colorLabel = document.getElementById('selected-color-name');
    const gripCheckbox = document.getElementById('toggle-grip-checkbox');
    const colorButtons = document.querySelectorAll('.color-selector-btn');
    const angleButtons = document.querySelectorAll('.angle-thumb');
    const spinner = document.getElementById('preview-image-spinner');

    /**
     * Atualiza a imagem de visualização principal no customizador
     */
    function updateCustomizerImage() {
        if (!customizerImg) return;

        // Ativa classe de transição de troca
        customizerImg.classList.add('switching');
        if (spinner) spinner.style.display = 'block';

        setTimeout(() => {
            const tapeKey = hasGripTape ? 'tape' : 'noTape';
            const imageUrl = mouseData[activeColor][tapeKey][activeAngle];

            // Atualiza imagem
            customizerImg.src = imageUrl;
            customizerImg.alt = `Attack Shark X3 - ${mouseData[activeColor].name} (${activeAngle})`;

            // Se for fita grip e um ângulo secundário, podemos mostrar uma notificação de zoom elegante
            if (hasGripTape && activeAngle !== 'main') {
                // Apenas avisar de forma sutil se necessário, mas os fallbacks de imagem resolvem
            }
        }, 150); // Deve combinar com metade do transition css
    }

    // Evento de carregamento de imagem para tirar o spinner
    if (customizerImg) {
        customizerImg.addEventListener('load', () => {
            customizerImg.classList.remove('switching');
            if (spinner) spinner.style.display = 'none';
        });

        // Caso haja erro de carregamento (fallback)
        customizerImg.addEventListener('error', () => {
            customizerImg.classList.remove('switching');
            if (spinner) spinner.style.display = 'none';
        });
    }

    // Ouvintes de evento das Cores
    colorButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const color = btn.getAttribute('data-color');
            if (color && mouseData[color]) {
                activeColor = color;

                // Atualizar estados dos botões
                colorButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Atualizar etiqueta de texto
                if (colorLabel) {
                    colorLabel.textContent = mouseData[color].name;
                }

                updateCustomizerImage();
            }
        });
    });

    // Ouvinte do Grip Tape Toggle
    if (gripCheckbox) {
        gripCheckbox.addEventListener('change', (e) => {
            hasGripTape = e.target.checked;
            
            // Forçar o ângulo principal ao ativar/desativar grip tape 
            // já que fita grip brilha na visualização Geral
            if (hasGripTape) {
                activeAngle = 'main';
                angleButtons.forEach(b => {
                    b.classList.remove('active');
                    if (b.getAttribute('data-angle') === 'main') {
                        b.classList.add('active');
                    }
                });
            }

            updateCustomizerImage();
        });
    }

    // Ouvinte dos botões de ângulo
    angleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const angle = btn.getAttribute('data-angle');
            if (angle) {
                activeAngle = angle;

                // Atualiza classe ativa dos ângulos
                angleButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Se o usuário clicar em ângulo secundário com grip tape ativo, desativamos o checkbox para mostrar o detalhe original técnico
                if (hasGripTape && angle !== 'main') {
                    hasGripTape = false;
                    if (gripCheckbox) gripCheckbox.checked = false;
                }

                updateCustomizerImage();
            }
        });
    });


    // 2. SIMULADOR DE DPI INTERATIVO
    const dpiSlider = document.getElementById('dpi-range-slider');
    const dpiText = document.getElementById('display-current-dpi');
    const dpiPresets = document.querySelectorAll('.dpi-preset-btn');
    const trackingCanvas = document.getElementById('dpi-tracking-canvas');
    const cursorShadow = document.getElementById('cursor-tracker-shadow');
    const aimTarget = document.getElementById('aim-target-dot');
    const accuracyText = document.getElementById('display-sim-accuracy');

    let currentDpi = 1600;
    let targetX = 50; // Porcentagem do container
    let targetY = 50; 
    let scoreHits = 0;
    let scoreAttempts = 0;

    /**
     * Sincroniza o DPI e atualiza as métricas virtuais de mira e fidelidade
     * @param {number} value Nível de DPI
     */
    function updateDpiMetrics(value) {
        currentDpi = parseInt(value);
        if (dpiText) dpiText.textContent = currentDpi;
        if (dpiSlider) dpiSlider.value = currentDpi;

        // Atualizar botões de preset ativos
        dpiPresets.forEach(btn => {
            if (parseInt(btn.getAttribute('data-value')) === currentDpi) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Calcular Fidelidade de Rastreamento Simulada (PAW3395 mantém fidelidade altíssima mesmo em ultra DPI)
        let fidelity = 99.9;
        if (currentDpi > 1600) {
            // Decaimento linear imperceptível apenas para ilustrar física de rastreamento
            fidelity = 99.9 - ((currentDpi - 1600) / 24400) * 1.5;
        } else if (currentDpi < 800) {
            fidelity = 99.8; // Perda irrisória em baixíssima sens
        }
        if (accuracyText) accuracyText.textContent = `${fidelity.toFixed(2)}%`;
    }

    if (dpiSlider) {
        dpiSlider.addEventListener('input', (e) => {
            updateDpiMetrics(e.target.value);
        });
    }

    dpiPresets.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-value');
            if (val) updateDpiMetrics(val);
        });
    });

    // Mover Alvo de Mira no Sandbox
    function moveAimTargetRandomly() {
        if (!aimTarget || !trackingCanvas) return;
        // Posição em percentual de 15% a 85% para não sair dos limites
        targetX = Math.floor(Math.random() * 70) + 15;
        targetY = Math.floor(Math.random() * 70) + 15;
        aimTarget.style.left = `${targetX}%`;
        aimTarget.style.top = `${targetY}%`;
    }

    // Interações de Mira dentro do Sandbox
    if (trackingCanvas) {
        const handleTracking = (clientX, clientY) => {
            const rect = trackingCanvas.getBoundingClientRect();
            const mouseX = clientX - rect.left;
            const mouseY = clientY - rect.top;

            // Posiciona a sombra do cursor néon original
            if (cursorShadow) {
                cursorShadow.style.left = `${mouseX}px`;
                cursorShadow.style.top = `${mouseY}px`;
            }

            // Calcula distância entre o cursor e o alvo físico de treino
            if (aimTarget) {
                const targetPixelX = (targetX / 100) * rect.width;
                const targetPixelY = (targetY / 100) * rect.height;

                const dx = mouseX - targetPixelX;
                const dy = mouseY - targetPixelY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Sensibilidade afeta o quão fácil o alvo foge ou vibra (simulando instabilidade)
                // Se a mira estiver próxima (menos de 25px), registra "Hit" e pula!
                if (distance < 24) {
                    scoreHits++;
                    
                    // Ripple Néon no ponto de acerto
                    createNeonRipple(mouseX, mouseY, trackingCanvas, '#548CFC');
                    
                    // Salto
                    moveAimTargetRandomly();
                }

                // Efeito visual de Jitter (Tremor) baseado no DPI alto (simula instabilidade de supersensibilidade)
                if (currentDpi > 8000) {
                    const jitterAmount = (currentDpi / 26000) * 3; // Jitter de até 3px
                    const jx = (Math.random() - 0.5) * jitterAmount;
                    const jy = (Math.random() - 0.5) * jitterAmount;
                    aimTarget.style.transform = `translate(calc(-50% + ${jx}px), calc(-50% + ${jy}px))`;
                } else {
                    aimTarget.style.transform = 'translate(-50%, -50%)';
                }
            }
        };

        trackingCanvas.addEventListener('mousemove', (e) => {
            handleTracking(e.clientX, e.clientY);
        });

        // Suporte total a gestos de toque (touch) para iOS e Android no Simulador de Sensor
        trackingCanvas.addEventListener('touchmove', (e) => {
            // Evita a rolagem/trepidação da tela durante o arraste do dedo no jogo de pontaria
            if (e.cancelable) e.preventDefault();
            if (e.touches && e.touches[0]) {
                handleTracking(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: false });

        trackingCanvas.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches[0]) {
                handleTracking(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        // Inicializar alvo
        moveAimTargetRandomly();
    }

    /**
     * Cria ripple néon interativo na tela
     */
    function createNeonRipple(x, y, parent, color) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.borderRadius = '50%';
        ripple.style.border = `2px solid ${color}`;
        ripple.style.boxShadow = `0 0 10px ${color}`;
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transition = 'all 0.6s cubic-bezier(0.1, 0.8, 0.3, 1)';
        ripple.style.opacity = '1';

        parent.appendChild(ripple);

        // Animar para expandir e sumir
        requestAnimationFrame(() => {
            ripple.style.width = '60px';
            ripple.style.height = '60px';
            ripple.style.opacity = '0';
        });

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }


    // 3. TRI-MODE CONNECTIVITY PERFORMANCE BOARD
    const triModeButtons = document.querySelectorAll('.tri-mode-btn');
    const latencyVal = document.getElementById('value-mode-latency');
    const pollingVal = document.getElementById('value-mode-polling');
    const batteryVal = document.getElementById('value-mode-battery');

    const triModePerformance = {
        wireless24g: {
            latency: '1.0 ms',
            polling: '1000 Hz',
            battery: '~ 200 Horas',
            latencyIsGreen: true
        },
        wired: {
            latency: '0.1 ms',
            polling: '1000 Hz',
            battery: 'Carregando (100%)',
            latencyIsGreen: true
        },
        bluetooth: {
            latency: '8.0 ms',
            polling: '125 Hz',
            battery: 'Até 300 Horas',
            latencyIsGreen: false
        }
    };

    triModeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            if (mode && triModePerformance[mode]) {
                const data = triModePerformance[mode];

                // Atualizar botão ativo
                triModeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Atualizar painel de dados com micro-efeito de fade de dados
                [latencyVal, pollingVal, batteryVal].forEach(el => {
                    if (el) {
                        el.style.opacity = '0.3';
                        el.style.transform = 'scale(0.95)';
                    }
                });

                setTimeout(() => {
                    if (latencyVal) {
                        latencyVal.textContent = data.latency;
                        if (data.latencyIsGreen) {
                            latencyVal.classList.add('text-green-glow');
                        } else {
                            latencyVal.classList.remove('text-green-glow');
                        }
                    }
                    if (pollingVal) pollingVal.textContent = data.polling;
                    if (batteryVal) batteryVal.textContent = data.battery;

                    [latencyVal, pollingVal, batteryVal].forEach(el => {
                        if (el) {
                            el.style.opacity = '1';
                            el.style.transform = 'scale(1)';
                            el.style.transition = 'all 0.2s ease-out';
                        }
                    });
                }, 150);
            }
        });
    });


    // 4. KAILH SWITCHES CLICK CONTROLLER
    const kailhTrigger = document.getElementById('btn-kailh-action-trigger');
    const kailhDigits = document.getElementById('kailh-clicks-counter');
    const switchBox = document.querySelector('.switch-sandbox-box');

    // Recupera do LocalStorage
    let totalClicks = parseInt(localStorage.getItem('kailh_clicks') || '0');

    function formatClicks(num) {
        // Formata para 000,000
        const str = num.toString().padStart(6, '0');
        return str.substring(0, 3) + ',' + str.substring(3);
    }

    // Inicializa contador
    if (kailhDigits) {
        kailhDigits.textContent = formatClicks(totalClicks);
    }

    if (kailhTrigger) {
        kailhTrigger.addEventListener('click', (e) => {
            totalClicks++;
            localStorage.setItem('kailh_clicks', totalClicks);

            // Atualiza texto com som ou pulsação digital
            if (kailhDigits) {
                kailhDigits.textContent = formatClicks(totalClicks);
                kailhDigits.style.transform = 'scale(1.05)';
                setTimeout(() => kailhDigits.style.transform = 'scale(1)', 100);
            }

            // Dispara a onda néon física no switch-sandbox-box
            if (switchBox) {
                // Pega coordenadas relativas ao switchBox
                const rect = switchBox.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                const pulse = document.createElement('div');
                pulse.className = 'click-wave-pulse';
                pulse.style.left = `${clickX}px`;
                pulse.style.top = `${clickY}px`;
                
                switchBox.appendChild(pulse);

                // Remove após animação terminar
                pulse.addEventListener('animationend', () => {
                    pulse.remove();
                });
            }
        });
    }


    // 5. QUANTIDADE E COMPRA MOCK INTERACTION
    const qtyValue = document.getElementById('qty-value');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const btnAddToCart = document.getElementById('btn-add-to-cart');

    let currentQty = 1;

    if (qtyMinus && qtyValue) {
        qtyMinus.addEventListener('click', () => {
            if (currentQty > 1) {
                currentQty--;
                qtyValue.textContent = currentQty;
            }
        });
    }

    if (qtyPlus && qtyValue) {
        qtyPlus.addEventListener('click', () => {
            if (currentQty < 10) {
                currentQty++;
                qtyValue.textContent = currentQty;
            }
        });
    }

    if (btnAddToCart) {
        btnAddToCart.addEventListener('click', () => {
            const selectedColorObj = mouseData[activeColor];
            const text = hasGripTape ? 'com Grip Tape' : 'sem Grip Tape';
            
            // Efeito visual no botão de comprar
            const originalText = btnAddToCart.querySelector('span').textContent;
            btnAddToCart.classList.add('btn-active-success');
            btnAddToCart.querySelector('span').textContent = 'ADICIONADO AO CARRINHO!';
            
            // Criar animação de partículas de confete gamer
            createConfettiEffect(btnAddToCart);

            setTimeout(() => {
                btnAddToCart.classList.remove('btn-active-success');
                btnAddToCart.querySelector('span').textContent = originalText;
            }, 2500);

            console.log(`[Carrinho Mock] Adicionado: ${currentQty}x Attack Shark X3 (${selectedColorObj.name}) ${text}.`);
        });
    }

    function createConfettiEffect(parentBtn) {
        const colors = ['#548CFC', '#6073F2', '#4ADE80', '#FFFFFF'];
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('span');
            particle.style.position = 'absolute';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10';

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 80 + 30;
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance - 20;

            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%) scale(1)';
            particle.style.transition = 'all 1s cubic-bezier(0.1, 0.8, 0.3, 1)';
            particle.style.opacity = '1';

            parentBtn.appendChild(particle);

            setTimeout(() => {
                particle.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0)`;
                particle.style.opacity = '0';
            }, 50);

            setTimeout(() => {
                particle.remove();
            }, 1050);
        }
    }


    // 6. MENU MOBILE & ACESSIBILIDADE
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu-container');
    const mobileLinks = document.querySelectorAll('.mobile-nav-item');

    function toggleMenu() {
        if (!menuToggle || !mobileMenu) return;
        const isOpen = mobileMenu.classList.contains('open');

        if (isOpen) {
            // Fechar
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        } else {
            // Abrir
            mobileMenu.classList.add('open');
            menuToggle.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
            mobileMenu.setAttribute('aria-hidden', 'false');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Fecha menu ao clicar em qualquer item
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });


    // 7. HEADER E NAVEGAÇÃO AO ROLAR (SCROLL)
    const header = document.getElementById('header-navbar');

    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active State Link highlight ao rolar
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                const activeLink = document.querySelector(`.nav-item-link[href="#${id}"]`);
                if (activeLink) {
                    document.querySelectorAll('.nav-item-link').forEach(l => l.classList.remove('active-nav'));
                    activeLink.classList.add('active-nav');
                }
            }
        });
    });

    // 8. CONTROLE DE VÍDEO POR SCROLL (DESATIVADO PARA AUTOPLAY NATIVO)
    // O controle manual por scroll foi desativado para permitir que o vídeo seja executado
    // automaticamente em looping contínuo com alta performance e baixo consumo de hardware.
    const heroVideo = document.getElementById('hero-bg-video');
    if (heroVideo) {
        // Garante que o vídeo toque nativamente caso o navegador bloqueie temporariamente
        heroVideo.play().catch(err => {
            console.log('[Autoplay Alert] Gesto do usuário necessário para reproduzir som, mas o vídeo está mutado e deve tocar automaticamente:', err);
        });
    }
});
