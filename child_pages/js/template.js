const container = document.getElementsByClassName("main_container")[0];

const title = localStorage.getItem("service");

const result = await axios.get(`http://127.0.0.1:4000/service/${title}`);

const { Title, Description } = result.data[0];

const h1 = document.createElement("h1");
h1.classList.add("main_title");
h1.innerText = Title;

const paragraph = document.createElement("p");
paragraph.classList.add("main_text");
paragraph.innerText = Description;

container.insertBefore(h1, container.lastElementChild)
container.insertBefore(paragraph, container.lastElementChild)