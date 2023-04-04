const AllTextarea = document.querySelectorAll("[data-textarea]");

AllTextarea.forEach((item) => {
    let AreaHeight = item.offsetHeight;

    item.addEventListener("input", event => {
        let currentArea = event.currentTarget;

        currentArea.style.height = 2 + AreaHeight + "px";
        currentArea.style.height = currentArea.scrollHeight + "px";
    });
});