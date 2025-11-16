function status(request, response) {
  response.status(200).json({
    message: "Hello, World!",
  });
}

export default status;
