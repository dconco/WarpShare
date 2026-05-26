function view(layout) {
    const gridbtn = document.querySelector(".grid");
    const listbtn = document.querySelector(".list");
    if (layout == 'grid') {
        gridbtn.className = 'grid active';
        listbtn.className = 'list';
    } else {
        gridbtn.className = 'grid';
        listbtn.className = 'list active';
    }
}