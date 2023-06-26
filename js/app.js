const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function(e) {
        const enlace = e.relatedTarget;
        const rutaImagen = e.relatedTarget.dataset.bsImagen;
    
        // Construir la imagen
        const imagen = document.createElement('IMG');
        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.alt = `imagen galeria`;
        imagen.classList.add('img-fluid');
        modalBody.appendChild(imagen);
    })
    
    modalImagen.addEventListener('hidden.bs.modal', function() {
        modalBody.textContent = '';
    })
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
