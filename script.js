async function loadApi() {
    try {
        const response = await fetch(
            "https://your-worker.your-subdomain.workers.dev"
        );

        const data = await response.json();

        document.getElementById("result").textContent =
            JSON.stringify(data, null, 2);

    } catch (error) {
        document.getElementById("result").textContent =
            "Lỗi: " + error.message;
    }
}