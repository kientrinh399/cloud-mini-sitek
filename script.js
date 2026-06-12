async function loadAPI() {

    const apiURL =
    "https://your-worker-name.your-subdomain.workers.dev";

    try {

        const response = await fetch(apiURL);

        const data = await response.json();

        document.getElementById("result").textContent =
        JSON.stringify(data, null, 2);

    } catch(error){

        document.getElementById("result").textContent =
        "Lỗi kết nối API!";
    }
}
