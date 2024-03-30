const introTextElement = document.getElementById("introText");
const downloadButtonElement = document.getElementById("downloadButton");

const descriptionList = [
  "I am a <span class='description-text-span'>Software Developer</span>",
  "I am a <span class='description-text-span'>Problem Solver</span>",
  "I am a <span class='description-text-span'>Frontend Developer</span>",
  "I am a <span class='description-text-span'>Quick Learner</span>",
  "I am a <span class='description-text-span'>Team Player</span>",
];

const showInfoText = () => {
  let i = 0;
  setInterval(() => {
    introTextElement.innerHTML = descriptionList[i];
    i++;
    if (i >= descriptionList.length) i = 0;
  }, 2000);
};

showInfoText();

function scrollToPage(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

function downloadPDF() {
  downloadButtonElement.removeEventListener("click", downloadPDF);
  const pdfPath = "./src/pdf/BikashDasResume.pdf";
  // Create an anchor element to trigger the download
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "BikashDasResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  downloadButtonElement.addEventListener("click", downloadPDF);
}

downloadButtonElement.addEventListener("click", downloadPDF);
