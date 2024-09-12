import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const EmailForm = () => {
  const [accept, setAccept] = useState(false);
  const [data, setData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_388s43d",
        "template_id6emd5",
        {
          subject: data.subject,
          name: data.name,
          email: data.email,
          message: data.message,
        },
        {
          publicKey: "0xF8VQGwM-H1P-NVr",
        }
      )
      .then((response) => {
        Toast.fire({
          icon: "success",
          color: "#fff",
          background: "#1e9fe3",
          title: "Email sent successfully!",
        });
        setData({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
        setAccept(false);
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          color: "#fff",
          background: "#1e9fe3",
          title: `Error sending email: ${error}`,
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);

    if (
      newData.email !== "" &&
      newData.message !== "" &&
      newData.name !== "" &&
      newData.subject !== ""
    ) {
      setAccept(true);
    } else {
      setAccept(false);
    }
  };

  return (
    <div className="m-auto px-4 mt-4 mb-8" id="connectMe">
      <h1 className="text-2xl font-semibold">Send Email to me</h1>
      <form ref={form} onSubmit={sendEmail} className="mt-10">
        <div className="container mx-auto px-4 justify-center text-center">
          <div>
            <label
              htmlFor="user_email"
              className="block text-start ms-0 sm:ms-[20%] mb-2 text-white font-bold"
            >
              Email:
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              required
              className="w-full sm:w-[60%]  bg-[#000000] py-3 px-4 rounded-md mb-4 border-2"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="user_name"
              className="block text-start ms-0 sm:ms-[20%] mb-2 text-white font-bold"
            >
              Name:
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              required
              className="w-full sm:w-[60%]    bg-[#000000] py-3 px-4 rounded-md mb-4 border-2"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="user_subject"
              className="block text-start ms-0 sm:ms-[20%] mb-2 text-white font-bold"
            >
              Subject:
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Enter subject"
              required
              className="w-full sm:w-[60%]    bg-[#000000] py-3 px-4 rounded-md mb-4 border-2"
              value={data.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Write message..."
            required
            className="w-full sm:w-[60%]   bg-[#000000] py-3 px-4 rounded-md mb-4 border-2 h-[200px]"
            value={data.message}
            onChange={handleChange}
          ></textarea>
          <button
            disabled={!accept}
            type="submit"
            className={`w-full sm:w-[60%] items-start text-white py-3 rounded-full ${
              accept
                ? "bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                : "bg-gradient-to-t from-gray-500 to-zinc-500"
            }`}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Button, TextField, Typography, Container, Snackbar, Alert } from "@mui/material";
// import Swal from "sweetalert2";

// export const EmailForm = () => {
//   const [accept, setAccept] = useState(false);
//   const [data, setData] = useState({
//     email: "",
//     name: "",
//     subject: "",
//     message: "",
//   });
//   const [open, setOpen] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");
//   const form = useRef();

//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top-end",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.onmouseenter = Swal.stopTimer;
//       toast.onmouseleave = Swal.resumeTimer;
//     },
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .send(
//         "service_388s43d",
//         "template_id6emd5",
//         {
//           subject: data.subject,
//           name: data.name,
//           email: data.email,
//           message: data.message,
//           to_email: "hoss.salah199@gmail.com", // Add the recipient's email here
//         },
//         {
//           publicKey: "0xF8VQGwM-H1P-NVr",
//         }
//       )
//       .then((response) => {
//         Toast.fire({
//           icon: "success",
//           color: "#fff",
//           background: "#1e9fe3",
//           title: "Email sent successfully!",
//         });
//         setAlertMessage("Email sent successfully!");
//         setOpen(true);
//         setData({
//           email: "",
//           name: "",
//           subject: "",
//           message: "",
//         });
//         setAccept(false);
//       })
//       .catch((error) => {
//         Toast.fire({
//           icon: "error",
//           color: "#fff",
//           background: "#1e9fe3",
//           title: `Error sending email: ${error}`,
//         });
//         setAlertMessage(`Error sending email: ${error}`);
//         setOpen(true);
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const newData = {
//       ...data,
//       [name]: value,
//     };
//     setData(newData);

//     if (
//       newData.email !== "" &&
//       newData.message !== "" &&
//       newData.name !== "" &&
//       newData.subject !== ""
//     ) {
//       setAccept(true);
//     } else {
//       setAccept(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4, mb: 8 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Send Email to me
//       </Typography>
//       <form ref={form} onSubmit={sendEmail}>
//         <TextField
//           name="email"
//           label="Email"
//           type="email"
//           placeholder="Enter email"
//           required
//           fullWidth
//           margin="normal"
//           value={data.email}
//           onChange={handleChange}
//           sx={{ backgroundColor: "#000", color: "#fff", mb: 2 }}
//         />
//         <TextField
//           name="name"
//           label="Name"
//           type="text"
//           placeholder="Enter name"
//           required
//           fullWidth
//           margin="normal"
//           value={data.name}
//           onChange={handleChange}
//           sx={{ backgroundColor: "#000", color: "#fff", mb: 2 }}
//         />
//         <TextField
//           name="subject"
//           label="Subject"
//           type="text"
//           placeholder="Enter subject"
//           required
//           fullWidth
//           margin="normal"
//           value={data.subject}
//           onChange={handleChange}
//           sx={{ backgroundColor: "#000", color: "#fff", mb: 2 }}
//         />
//         <TextField
//           name="message"
//           label="Message"
//           placeholder="Write message..."
//           required
//           fullWidth
//           margin="normal"
//           multiline
//           rows={4}
//           value={data.message}
//           onChange={handleChange}
//           sx={{ backgroundColor: "#000", color: "#fff", mb: 2 }}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           disabled={!accept}
//           sx={{
//             py: 2,
//             mt: 2,
//             background: accept
//               ? "linear-gradient(to top, #2196f3, #00bcd4)"
//               : "linear-gradient(to top, #gray, #d3d3d3)",
//             '&:hover': {
//               background: accept
//                 ? "linear-gradient(to top, #1976d2, #00acc1)"
//                 : "linear-gradient(to top, #a9a9a9, #d3d3d3)"
//             }
//           }}
//         >
//           Send Message
//         </Button>
//       </form>
//       <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
//         <Alert onClose={() => setOpen(false)} severity={alertMessage.includes("Error") ? "error" : "success"}>
//           {alertMessage}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };
