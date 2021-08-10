// src/__tests__/example.js
// query utilities:
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    waitFor,
  } from '@testing-library/dom'
  // adds special assertions like toHaveTextContent
  import '@testing-library/jest-dom/extend-expect'
  
  function getExampleDOM() {
    // This is just a raw example of setting up some DOM
    // that we can interact with. Swap this with your UI
    // framework of choice 😉
    const div = document.createElement('div')
    div.innerHTML = `
      <label for="album">Album</label>
      <input id="album" />
      <button>Print Album</button>
    `
    const button = div.querySelector('button')
    const input = div.querySelector('input')
    button.addEventListener('click', () => {
      // let's pretend this is making a server request, so it's async
      // (you'd want to mock this imaginary request in your unit tests)...
      setTimeout(() => {
        const printedAlbumContainer = document.createElement('div')
        printedAlbumContainer.innerHTML = `
          <div data-testid="printed-username">${input.value}</div>
        `
        div.appendChild(printedAlbumContainer)
      }, Math.floor(Math.random() * 200))
    })
    return div
  }
  
  test('album testing', async () => {
    const albumExample = 'Bohemian Rhapsody'
    const container = getExampleDOM()
  
    // Get form elements by their label text.
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const input = getByLabelText(container, 'Album')
    input.value = albumExample
  
    // Get elements by their text, just like a real user does.
    getByText(container, 'Print Album').click()
  
    await waitFor(() =>
      expect(queryByTestId(container, 'printed-album')).toBeTruthy(),
    )
  
    // getByTestId and queryByTestId are an escape hatch to get elements
    // by a test id (could also attempt to get this element by its text)
    expect(getByTestId(container, 'printed-album')).toHaveTextContent(
      albumExample,
    )
    // jest snapshots work great with regular DOM nodes!
    expect(container).toMatchSnapshot()
  })