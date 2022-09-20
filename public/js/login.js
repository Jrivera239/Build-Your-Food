async function signupForm(event) {
  event.preventDefault();
  const username = document.querySelector("#usernameSign").value.trim();
  const email = document.querySelector("#emailSign").value.trim();
  const password = document.querySelector("#passwordSign").value.trim();
  //good to add conditionals on client side POST. It assists with security.
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Success!");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#signUpForm").addEventListener("submit", signupForm);
