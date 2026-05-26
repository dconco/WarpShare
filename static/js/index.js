const files = document.getElementById("files");
function view(layout) {
    const gridbtn = document.querySelector(".grid");
    const listbtn = document.querySelector(".list");
    gridbtn.classList.toggle('active', layout === 'grid');
    listbtn.classList.toggle('active', layout === 'list')
}

let currentDir = {
    name: "Projects",
    files: [
        {
            name: "Class",
            files: [["Projects.zip", 45200], ["photo.jpg", 3800], ["notes.md", 12], ["main.py", 8.1], ["index.html", 24]]
        },
        ["Projects.zip", 45200],
        ["photo.jpg", 3800],
        ["notes.md", 12],
        ["main.py", 8.1],
        ["index.html", 24],
        ["demo-video.mp4", 128000],
        ["report.pdf", 2200],
    ]
};

document.getElementById("items").innerText = `${currentDir.files.length} items`;

const fragment = document.createDocumentFragment();

for (file of currentDir.files) {
    const fileIcon = document.createElement("div");
    fileIcon.className = 'icon';
    if (Array.isArray(file)) {
        fileIcon.innerHTML = `
            <span class="img">📁</span>
            <h3 class="name">${file[0]}</h3>
            <p class="size">${(file[1] < 1000) ? `${file[1]} KB` : `${file[1] / 1000} MB`}</p>
        `;
    } else {
        fileIcon.innerHTML = `
            <span class="img">📁</span>
            <h3 class="name">${file.name}</h3>
            <p class="size">${file.files.length} files</p>
        `;
    }
    fragment.appendChild(fileIcon);
}
files.appendChild(fragment);