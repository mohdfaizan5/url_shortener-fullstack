

document.querySelector('form').addEventListener("submit", (event) => {
  event.preventDefault()

  let url = event.target.querySelector('#url').value
  fetch('http://localhost:5000/createUrl', {
    method: "POST",
    body: JSON.stringify({
      url: url
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      response.json().then(finalData => {
        document.getElementById('answer').innerHTML = `
        <a href="${finalData.url}" target="_blank">${finalData.url}</a>
        `
      })
    })
  // console.log('hi')
})