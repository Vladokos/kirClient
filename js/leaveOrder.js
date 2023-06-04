const buttonLeaveOrder = document.getElementById("request");

const login = document.getElementById("login");
const email = document.getElementById("email");


buttonLeaveOrder.addEventListener("click", () => {
    if (login.value.trim().length > 0 && email.value.trim().length > 0) {
        axios.post("https://kirhost.onrender.com/order/leaveOrder", {
            email: email.value,
            login: login.value
        }).then((res) => {
            if (res.status === 200) {
                alert("Успешно");
                localStorage.setItem("user", email.value)
            }
        })
    }
})