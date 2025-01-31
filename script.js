const diaryForm = document.getElementById("diaryForm");
const contentInput = document.getElementById("contentInput");
const entriesList = document.getElementById("entriesList");

diaryForm.addEventListener("submit", createNewEntry);

async function createNewEntry(e) {
  e.preventDefault();

  const entryData = {
    title: "Untitled Entry",
    content: contentInput.value,
    entry_date: new Date().toISOString().split("T")[0],
  };

  console.log("Sending entry data:", entryData);

  try {
    const response = await fetch("http://localhost:3000/diaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    });

    if (!response.ok) {
      throw new Error("Failed to create entry");
    }
    contentInput.value = "";
    await getAllEntries();
  } catch (err) {
    console.log("error: ", err);
  }
}

async function getAllEntries() {
  const entriesList = document.getElementById("entriesList");

  try {
    const response = await fetch("http://localhost:3000/diaries");
    if (!response.ok) {
      throw new Error("Failed to fetch entries");
    }
    const result = await response.json();
    // console.log(result);

    entriesList.innerHTML = "";

    if (result.length === 0) {
      entriesList.innerHTML += `<li class="nav-item"><a class="nav-link">No diary entries found</a></li>`;
    } else {
      displayEntries(result);
    }
  } catch (err) {
    console.log(err);
  }
}

function displayEntries(entries) {
  entries.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a class="nav-link" href="#">${entry.title} - ${entry.entry_date}</a>`;
    listItem.querySelector('a').addEventListener('click', () => {
        contentInput.value = entry.content;
        diaryForm.entryId = entry.diary_id;
        diaryForm.entryDate = entry.entry_date;
    });
    entriesList.appendChild(listItem);
  });
}


getAllEntries();
