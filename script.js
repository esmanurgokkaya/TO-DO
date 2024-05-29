// bu kod sayfa yüklendiğine eski verileri depoladığı yerden getirecek

document.addEventListener("DOMContentLoaded", function () {
  const missionsContainer = document.querySelector("section .missions");
  const savedMissions = JSON.parse(localStorage.getItem("missions")) || [];

  savedMissions.forEach((text) => {
    addMissionToDOM(text);
  });
});

// butona basıldığında yapılacak işlem
document
  .querySelector("section form #send-box")
  .addEventListener("click", function () {
    const input = document.querySelector("section form .mission-box");
    const text = input.value;

    if (text.trim() === "") {
      alert("Please enter a value");
      return;
    }

    addMissionToDOM(text);
    saveMissionToLocalStorage(text);

    input.value = "";
    
  });

  // ekrana yazdırma içinfonksiyon tanımlanır
function addMissionToDOM(text) {
  const newMission = document.createElement("div");
  newMission.classList.add("mission");

  // Checkbox oluştur
  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.classList.add("checkbox");

  // Görev metnini içeren paragraf oluştur
  const newMissionText = document.createElement("input");
  newMissionText.type = "text";
  newMissionText.classList.add("mission-text");
  newMissionText.value = text;
  newMissionText.setAttribute("readonly","readonly");

  const missionActions = document.createElement("div");
  missionActions.classList.add("actions");


  const missionEdit = document.createElement("button");
  missionEdit.classList.add("edit");
  missionEdit.innerHTML="edit";

  const missionDelete = document.createElement("button");
  missionDelete.classList.add("delete");
  missionDelete.innerHTML="delete";

    missionActions.appendChild(missionDelete);
    missionActions.appendChild(missionEdit);

  // Yeni elemanları göreve ekle
  newMission.appendChild(newCheckbox);
  newMission.appendChild(newMissionText);
  newMission.appendChild(missionActions);

  missionEdit.addEventListener('click', () => {
    newMissionText.removeAttribute("readonly");
    newMissionText.focus();
    // buraya çalışması için fonksiyonu koşulla ekle

  })
  

  // Yeni görevi mevcut görevler konteynerine ekle
  const missionsContainer = document.querySelector("section .missions");
  missionsContainer.appendChild(newMission);
}
// eklenen eleman depolanır
function saveMissionToLocalStorage(text) {
  let missions = JSON.parse(localStorage.getItem("missions")) || [];
  missions.push(text);
  localStorage.setItem("missions", JSON.stringify(missions));
}


