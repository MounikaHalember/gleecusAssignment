import axios from "axios";

axios({
  
    // Endpoint to send files
    url: "http://localhost:8080/files",
    method: "POST",
    headers: {

      // Add any auth token here
      authorization: "your token comes here",
    },

    // Attaching the form data
    data: formData,
  })

    // Handle the response from backend here
    .then((res) => { })

    // Catch errors if any
    .catch((err) => { });