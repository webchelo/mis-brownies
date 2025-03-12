export async function fetchBrownies() {
    try {
        const url = 'http://mis-brownies.liveblog365.com/'
        const response = await fetch( url );
        const brownies = await response.json();

        const container = document.getElementById('brownies-container');

        brownies.forEach(brownie => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h2>${brownie.tipo}</h2>
                <img src="${brownie.imagen}" alt="${brownie.tipo}" style="width:200px;">
                <p>Precio: $${brownie.precio}</p>
            `;
            container.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching brownies:', error);
    }
}
