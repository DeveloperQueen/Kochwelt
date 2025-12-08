// Kontaktseite: Formular an Formspree senden und danach auf Danke-Seite weiterleiten
function sendMail(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xrbnabdZ", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      // Nach erfolgreichem Versand auf die Danke-Seite weiterleiten
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
      // Optional: User-Feedback bei Fehlern einbauen
      // alert("Beim Versenden ist ein Fehler aufgetreten. Bitte versuche es später erneut.");
    });
}
