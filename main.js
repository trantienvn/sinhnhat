document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scratchCanvas");
    const ctx = canvas.getContext("2d");

    // Kích thước canvas
    canvas.width = 300;
    canvas.height = 150;

    // Vẽ lớp phủ màu xám
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Hiển thị chữ trên lớp phủ
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Cào để nhận quà!", canvas.width / 2, canvas.height / 2);

    let isScratching = false;

    // Bắt đầu cào
    canvas.addEventListener("mousedown", () => isScratching = true);
    canvas.addEventListener("mouseup", () => isScratching = false);
    canvas.addEventListener("mouseleave", () => isScratching = false);

    // Xử lý khi rê chuột để cào
    canvas.addEventListener("mousemove", function (e) {
        if (!isScratching) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.globalCompositeOperation = "destination-out"; // Xóa màu phủ và chữ
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2); // Vùng xóa hình tròn
        ctx.fill();
    });
});
