const btnCopy = document.querySelector('.btn-copy');

btnCopy.addEventListener('click', () => {
    const email = 'joao.felipe.camargo.jfc@gmail.com';
    navigator.clipboard.writeText(email);
  
    btnCopy.textContent = 'Email copy!';
    
    setTimeout(() => {
        btnCopy.textContent = 'Copy Email';
    }, 3000);
});


