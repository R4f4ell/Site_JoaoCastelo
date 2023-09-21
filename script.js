function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('visible');
  }
  
  // Mostrar a primeira notícia ao carregar a página
  showCurrentNews();

  function logout() {
    // Chame a rota de logout no servidor
    // Aqui, faremos um exemplo simples de limpar um token armazenado localmente
    localStorage.removeItem('token');
    alert('Você foi desconectado.'); // Apenas para demonstração
  }