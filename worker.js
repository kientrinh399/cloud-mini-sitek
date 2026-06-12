export default {
  async fetch(request) {

    const data = {
      course: "Cloud Computing",
      service: "Cloudflare Workers",
      status: "success"
    };

    return Response.json(data);
  }
};