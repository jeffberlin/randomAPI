fetch('https://randomuser.me/api')
    .then(response => response.json())
  .then((json) => {
    const cell = json.results[0].cell
    document.getElementById('number').innerHTML = cell

    const firstName = json.results[0].name.first
    const lastName = json.results[0].name.last
    document.getElementById('name').innerHTML = firstName + ' ' + lastName

    const birthDate = json.results[0].dob
    document.getElementById('flex-text').innerHTML = birthDate

    const social = json.results[0].id.value
    document.getElementById('ssn').innerHTML = social

    const gender = json.results[0].gender
    document.getElementById('gender').innerHTML = gender

  })