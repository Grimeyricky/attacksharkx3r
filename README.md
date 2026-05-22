# Attack Shark X3 - Landing Page Premium 🎮⚡

Uma landing page interativa de altíssimo desempenho (UI/UX Pro Max) para o mouse gamer ultra-leve **Attack Shark X3**.

Este projeto apresenta animações modernas, simulação de DPI em tempo real, painel de customização de cores, simulador de conectividade Tri-Mode e scroll-seeking de vídeo interativo de ultra suavidade (efeito Apple) usando aceleração por GPU.

## 🚀 Funcionalidades

- **Scroll-Seeking de Vídeo (Efeito Apple):** O vídeo de fundo da seção Hero avança e retrocede de acordo com a rolagem da página, proporcionando um efeito de parallax e rotação 3D interativo incrível.
- **Simulador de DPI Interativo:** Área de sandbox onde você pode ajustar a sensibilidade do mouse (de 400 a 26.000 DPI) e ver como o cursor e a taxa de fidelidade de rastreamento reagem.
- **Customizador de Cores:** Seletor interativo com as 6 cores originais do mouse (White, Black, Red, Purple, Orange, Berry Pink), alternador de Grip Tape antiderrapante e visualização de múltiplos ângulos.
- **Conectividade Tri-Mode BK3633:** Painel técnico mostrando a latência, taxa de atualização (Polling Rate) e autonomia para os modos 2.4GHz, Cabo USB-C e Bluetooth 5.2.
- **Simulador de Switch Kailh:** Contador de cliques interativo integrado com LocalStorage e animação neon de onda sônica.
- **Design Totalmente Responsivo & Acessível:** Otimizado para telas mobile (com suporte a toque/gestos) e aderindo às melhores práticas de SEO e acessibilidade (tags ARIA, semântica HTML5).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **Vanilla CSS3:** Layout Grid, Flexbox, efeitos de glassmorphism, animações customizadas e variáveis CSS.
- **Vanilla JavaScript (ES6):** Controle interativo, interpolação linear (LERP) para suavidade do vídeo e manipulação dinâmica do DOM.
- **Vercel Configuration:** Configuração de headers de cache inteligentes e suporte a Range Requests (`Accept-Ranges: bytes`) no `vercel.json` para garantir que o vídeo seja carregado de forma fluida no Safari/Chrome/iOS.

---

## 💻 Como Rodar Localmente

Como o projeto usa manipulação de vídeo baseada em scroll e requisições assíncronas de mídia, **é altamente recomendado rodar a página através de um servidor local** (Live Server no VS Code, `http-server` do npm, etc.) em vez de abrir o arquivo `index.html` diretamente no navegador.

### Opções para rodar:

1. **VS Code Live Server:** Instale a extensão "Live Server" no VS Code, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.
2. **Usando Python:** Abra o terminal na pasta do projeto e execute:
   ```bash
   python -m http-server 8000
   ```
   Depois, acesse `http://localhost:8000` no navegador.
3. **Usando Node.js (npx):** No terminal:
   ```bash
   npx serve .
   ```

---

## 🚢 Como fazer o Deploy

### Passo 1: Enviar para o GitHub

Como você não possui o comando `git` configurado ou instalado globalmente no seu terminal atual, você pode usar o **GitHub Desktop** (interface gráfica super simples) ou o próprio site do GitHub para criar seu repositório:

1. Crie uma conta no [GitHub](https://github.com/) se ainda não tiver.
2. Crie um novo repositório (ex: `attack-shark-x3-landing`).
3. **Se usar o site do GitHub (Método sem código):**
   - No seu repositório novo, clique em "uploading an existing file".
   - Arraste todos os arquivos desta pasta para lá (incluindo `index.html`, `index.css`, `app.js`, `vercel.json`, `.gitignore`, `README.md` e o vídeo `Mouse_Attack_Shark_floating_black_keyframed.mp4`).
   - Clique em **Commit changes**.
4. **Se usar o GitHub Desktop:**
   - Abra o GitHub Desktop, selecione "Add Existing Repository" ou crie um repositório apontando para esta pasta.
   - Faça o commit e publique no GitHub.

> 💡 **Nota sobre o vídeo:** O arquivo de vídeo de alta fidelidade `Mouse_Attack_Shark_floating_black_keyframed.mp4` possui cerca de **22.6 MB**. O GitHub suporta arquivos de até 100 MB via upload comum, então você pode subi-lo sem problemas!

### Passo 2: Implantar na Vercel

1. Acesse o painel da [Vercel](https://vercel.com/) e faça login com sua conta do GitHub.
2. Clique em **Add New...** -> **Project**.
3. Importe o repositório que você acabou de criar no GitHub (`attack-shark-x3-landing`).
4. Nas configurações do projeto, a Vercel detectará automaticamente que é um projeto estático em HTML/CSS/JS. Não é necessário alterar nenhum comando de build.
5. Clique em **Deploy**.
6. Pronto! A Vercel criará um link público seguro (`https://seu-projeto.vercel.app`) para você compartilhar.

---

*Site concebido com Inteligência de Design UI/UX Pro Max.*
