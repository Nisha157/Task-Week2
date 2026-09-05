const data = [
    ["Gold Ring","₹45,000","https://images.unsplash.com/photo-1605100804763-247f67b3557e"],
    ["Gold Necklace","₹85,000","https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"],
    ["Gold Earrings","₹32,000","https://images.unsplash.com/photo-1535632066927-ab7c9ab60908"],
    ["Gold Bracelet","₹55,000","https://images.unsplash.com/photo-1611652022419-a9419f74343d"]
];

function show(items) {
    products.innerHTML = items.map(p => `
        <div class="card">
            <img src="${p[2]}?auto=format&fit=crop&w=400&q=80">
            <h2>${p[0]}</h2>
            <p class="price">${p[1]}</p>
            <p>⭐ 4.8/5</p>
        </div>
    `).join("");
}

show(data);

search.oninput = () => {
    let x = search.value.toLowerCase();
    show(data.filter(p => p[0].toLowerCase().includes(x)));
};