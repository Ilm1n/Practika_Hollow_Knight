document.addEventListener("DOMContentLoaded", () => {
    const isAuthenticate = sessionStorage.getItem("isAuthenticate")

    if (isAuthenticate === "true") {
        console.log("ehf")
    } else {
        window.location.href = "auth.html";
    }
})