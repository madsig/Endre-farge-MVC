//model
let app = document.getElementById('app');
let colors = {
    red: 150,
    green: 10,
    blue: 45
};

//view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/`
    <div id="box" style="background-color: rgb(${colors.red}, ${colors.green}, ${colors.blue})"></div>
    <input type="number" value="${colors.red}" style="background-color: red;" max="255" min="0" step="5" onchange="changeColor(this.value, 'red')">
    <input type="number" value="${colors.green}" style="background-color: green;" max="255" min="0" step="5" onchange="changeColor(this.value, 'green')">
    <input type="number" value="${colors.blue}" style="background-color: blue;" max="255" min="0" step="5" onchange="changeColor(this.value, 'blue')">
`
}

//controller
function changeColor(value, color) {
    colors[color] = value;
    updateView();
}