
const app = document.getElementById("root");

const correctPasscode = "green2025";
let unlocked = false;

function renderLocked() {
  app.innerHTML = `
    <section class='py-20 px-6 bg-green-100 text-center'>
      <h2 class='text-3xl font-bold mb-4'>Investor Access</h2>
      <p class='text-lg mb-4'>Enter passcode to access strategic documents.</p>
      <input type='password' id='pw' class='px-4 py-2 border rounded-md' placeholder='Enter passcode'>
      <button onclick='checkPass()' class='mt-4 bg-green-900 text-white px-6 py-2 rounded-xl hover:bg-green-800'>Unlock</button>
    </section>
  `;
}

function renderUnlocked() {
  app.innerHTML = `
    <section class='py-20 px-6 bg-green-100 text-center'>
      <h2 class='text-3xl font-bold mb-4'>Strategic Plan</h2>
      <iframe src='Strategic_Plan-GreenHill_v10-pre-FINAL.pdf' width='100%' height='600px' class='border shadow rounded-xl'></iframe>
      <a href='Strategic_Plan-GreenHill_v10-pre-FINAL.pdf' download class='mt-4 inline-block text-sm text-green-900 underline hover:text-green-700'>Download PDF</a>
    </section>
  `;
}

function checkPass() {
  const input = document.getElementById("pw").value;
  if (input === correctPasscode) {
    unlocked = true;
    renderUnlocked();
  } else {
    alert("Incorrect passcode.");
  }
}

renderLocked();
