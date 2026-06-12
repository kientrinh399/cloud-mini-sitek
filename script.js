async function tảiApi() {
    try {
        // 1. Thay cái link ở dưới bằng LINK WORKER THẬT của mày nhé
        const response = await fetch("https://cloud-mini-sitek.kientrinh399.workers.dev");
        
        // 2. Ép dữ liệu trả về thành dạng JSON
        const data = await response.json();
        
        // 3. Tìm cái ô hiển thị và nhét dữ liệu JSON vào, thụt lề 2 khoảng trắng cho đẹp
        document.getElementById("kết quả").innerText = JSON.stringify(data, null, 2);
        
    } catch (error) {
        // Nếu có lỗi (như sai link, mất mạng) thì hiện lỗi ra ở đây
        document.getElementById("kết quả").innerText = "Lỗi: " + error.message;
    }
}
