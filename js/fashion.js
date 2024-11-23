function togglePage(page) {
    const menTab = document.getElementById("men-tab");
    const womenTab = document.getElementById("women-tab");
    const menPage = document.getElementById("men-page");
    const womenPage = document.getElementById("women-page");

    if (page === "men") {
        menTab.classList.add("active");
        womenTab.classList.remove("active");
        menPage.classList.add("active");
        womenPage.classList.remove("active");
    } else if (page === "women") {
        womenTab.classList.add("active");
        menTab.classList.remove("active");
        womenPage.classList.add("active");
        menPage.classList.remove("active");
    }
}
