function view(layout) {
    const gridbtn = document.querySelector(".grid");
    const listbtn = document.querySelector(".list");
    gridbtn.classList.toggle('active', layout === 'grid');
    listbtn.classList.toggle('active', layout === 'list')
}