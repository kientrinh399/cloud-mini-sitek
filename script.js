export default {
  async fetch(request, env, ctx) {
    // Dữ liệu JSON chuẩn theo yêu cầu của đề bài
    const data = {
      course: "Cloud Computing",
      service: "Cloudflare Workers",
      status: "success"
    };

    // Trả về JSON kèm cấu hình CORS để Web Pages gọi vào không bị chặn
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
      },
    });
  },
};
