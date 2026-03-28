
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const listaCursos = document.querySelector('#lista-cursos');
    const botonAgregar = document.querySelectorAll('.agregar-carrito');
    let articulosCarrito = [];
    
    cargarEventListener();
    function cargarEventListener() {
        listaCursos.addEventListener('click', agregarCurso)
    }


    function agregarCurso(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);
        }
    }

    function leerDatosCurso(curso) {

        const infoCurso = {
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1,
        }
        articulosCarrito = [...articulosCarrito, infoCurso];
        carritoHTML();
    }

    function carritoHTML() {
        limpiarHTML();

        //recorre el carrito y crea el html
        articulosCarrito.forEach(curso => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${curso.imagen}" width="100"></td>
                <td>${curso.nombre}</td>
                <td>${curso.precio}</td>
                <td>${curso.cantidad}</td>
                <td> <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
                `;
                contenedorCarrito.appendChild(row);
                console.log(articulosCarrito);
        })
    }

    function limpiarHTML() {
        contenedorCarrito.innerHTML = '';
    }