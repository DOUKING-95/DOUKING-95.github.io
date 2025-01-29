// import emailjs from "@emailjs/browser";
import { useState } from "react";
const Contact = () => {
  const [client, setClient] = useState({
    clientName: "",
    clientEmail: "",
    clientMessage: "",
  });

  //   const sendEmail = (e) => {
  //     e.preventDefault(); // Empêche le rechargement de la page

  //     emailjs
  //       .send(
  //         "ton_service_id", // Remplace avec ton Service ID
  //         "ton_template_id", // Remplace avec ton Template ID
  //         {
  //           client_name: client.clientName,
  //           client_email: client.clientEmail,
  //           client_message: client.clientMessage,
  //         },
  //         "ton_user_id" // Remplace avec ton User ID
  //       )
  //       .then(
  //         (response) => {
  //           console.log(
  //             "Email envoyé avec succès !",
  //             response.status,
  //             response.text
  //           );
  //           alert("Message envoyé !");
  //         },
  //         (error) => {
  //           console.log("Échec de l'envoi...", error);
  //           alert("Une erreur est survenue. Réessayez plus tard.");
  //         }
  //       );
  //   };

  return (
    <form action="" onSubmit={() => {}}>
      <div
        id="contact"
        className="flex flex-col  space-x-2justify-center items-center lg:justify-around lg:flex-row lg:items-center lg:gap-2 border-2 border-lime-500 rounded-xl p-2  lg:h-96"
      >
        <div className="flex flex-col gap-5 w-full lg:w-1/3">
          <input
            value={client.clientName}
            onChange={(e) =>
              setClient({ ...client, clientName: e.target.value })
            }
            placeholder="Name"
            type="text"
            className="border-2 border-transparent focus:ring-0 focus:ring-lime-500 ring-2  p-3 w-full  rounded-xl  text-black shadow-lg  shadow-lime-500 "
          />
          <input
            value={client.clientEmail}
            onChange={(e) =>
              setClient({ ...client, clientEmail: e.target.value })
            }
            placeholder="Email"
            type="text"
            className="border-2 focus:ring-0 border-transparent focus:ring-lime-500 ring-2  p-3 w-full  rounded-xl text-black shadow-lg  shadow-lime-500"
          />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center mt-4">
          <textarea
            placeholder="Message"
            className="p-5 border-transparent focus:ring-lime-500 ring-2  rounded-xl h-40 shadow-lg w-full  text-black shadow-lime-500"
            value={client.clientMessage}
            onChange={(e) =>
              setClient({ ...client, clientMessage: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="p-2 w-1/2 text-white bg-lime-500 rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
