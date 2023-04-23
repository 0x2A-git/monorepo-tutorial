import { Person } from "@shared/entities"

const displayPerson = async () => {
  const response = await fetch('http://localhost:8080/api/person', {
    method: 'GET'
  })

  const jsonResponse = await response.json()

  const person: Person = new Person(jsonResponse.firstName, jsonResponse.lastName)

  const personSpan: HTMLSpanElement | null = document.body.querySelector("#person")

  personSpan && (personSpan.innerText = `Welcome ${person.toString()} !`)
}

displayPerson().then(() => {
  console.log('Person displayed !')
})