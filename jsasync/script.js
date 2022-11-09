// getting the event log
const eventLog = document.querySelector(".event-log");
// clicking the button
document.querySelector("#xhr").addEventListener("click", () => {
  eventLog.textContent = "";
  //   making a xml http request
  const xhr = new XMLHttpRequest();

  //   looking for the loadend event of the request object
  xhr.addEventListener("loadend", () => {
    eventLog.textContent = `${eventLog.textContent} Finished with status: ${xhr.status}`;
  });
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  eventLog.textContent = `${eventLog.textContent} Started XHR request \n`;
});
document.querySelector("#reload").addEventListener("click", () => {
  eventLog.textContent = "";
  document.location.reload();
});
