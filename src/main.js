// Importação de estilos se necessário no contexto de build do Vite
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa os ícones do Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- CONTROLE DE TEMA (CLARO/ESCURO) ---
  const themeToggle = document.getElementById('theme-toggle');
  
  // Verifica se há preferência salva no LocalStorage ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Define o tema inicial
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- MENU MOBILE ---
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuOpenIcon = document.querySelector('.menu-open');
  const menuCloseIcon = document.querySelector('.menu-close');

  // Abre/Fecha o menu mobile ao clicar no botão
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    const isOpen = mainNav.classList.contains('open');
    
    // Altera visibilidade dos ícones
    if (isOpen) {
      menuOpenIcon.style.display = 'none';
      menuCloseIcon.style.display = 'block';
    } else {
      menuOpenIcon.style.display = 'block';
      menuCloseIcon.style.display = 'none';
    }
  });

  // Fecha o menu ao clicar em qualquer link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuOpenIcon.style.display = 'block';
      menuCloseIcon.style.display = 'none';
    });
  });

  // --- ANIMAÇÃO DE DIGITAÇÃO NO HERO ---
  const typingText = document.getElementById('typing-text');
  const words = ['Full Stack', 'Mobile', 'APIs & Microsserviços', 'Java & Angular'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Mais rápido ao deletar
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1500; // Pausa no final da palavra escrita
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 300; // Pequena pausa antes de começar a próxima palavra
    }

    setTimeout(typeEffect, typeSpeed);
  }

  if (typingText) {
    typeEffect();
  }

  // --- CONTROLE DE LINKS DE NAVEGAÇÃO ATIVOS (IntersectionObserver) ---
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Aciona quando a seção ocupa a área central do viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // --- FORMULÁRIO DE CONTATO (SIMULAÇÃO) ---
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    if (name && email && message) {
      // Simulação de envio com feedback visual de sucesso
      alert(`Obrigado, ${name}! Sua mensagem foi simulada com sucesso. (Verifique o console para os detalhes)`);
      console.log('Mensagem de contato recebida:', { name, email, message });
      
      // Reseta o formulário
      contactForm.reset();
    }
  });
});
