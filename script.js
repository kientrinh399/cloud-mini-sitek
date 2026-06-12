async function tảiApi() {
    try {
        // DÁN LINK WORKER MỚI VÀO ĐÂY
        const response = await fetch("https://cloud-mini-sitek.kient7665.workers.dev/");
        
        const data = await response.json();
        
        // Hiển thị kết quả lên ô có id="kết quả"
        document.getElementById("kết quả").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("kết quả").innerText = "Lỗi: " + error.message;
    }
}
