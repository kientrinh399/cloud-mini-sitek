async function tảiApi() {
    try {
        // Dán cái link mày vừa copy vào giữa hai dấu nháy kép này:
        const response = await fetch(https://cloud-mini-sitek.kient7665.workers.dev);
        
        const data = await response.json();
        document.getElementById("kết quả").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("kết quả").innerText = "Lỗi: " + error.message;
    }
}
