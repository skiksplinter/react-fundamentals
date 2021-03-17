// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Criando uma ref, um recurso do React para acessar o conteúdo
  // de elementos de formulários
  const usernameEl = React.useRef()

    //Criar uma variavel de estado do React
    //Uma variavel de estado mantem uma informacao mesmo que o condeudo da pagina 
    //seja atualizado
    //Para ler o contudo da variavel de estado, podemos acessa-la diretamente
    //No entando, para alterar seu conteudo, usamos uma funcao set.

    //msg -> variavel de estado
    //setMsg -> funcao de atualizacao da variavel de estado
    //a funcao useState aceita um parametro que é o VALOR INICIAL da variavel
    //de estado. Ou seja, nesse caso, error tem um valor inicial de string vazia.

    const[msg, setMsg] = React.useState('')
    const[username, setUsername] = React.useState('')

  function handleSubmit(event) {
      event.preventDefault()  // Previne o recarregamento do formulário
      //const username = document.getElementById('username').value
      //const username = document.querySelector('#username').value
      const username = usernameEl.current.value
      onSubmitUsername(username)
  }

  function handleChange(event){
      //capturando o valor do input
      const val = event.target.value

        //armazena na variavel de estado o valor do input ja convertido
        //para minusculas
      setUsername(val.toLowerCase())
    /*
      //o input sera valido se seu conteudo for indentico
      //ao propior conteúdo em minusculo
      //const isValid = ( val === val.toLowerCase())

    //Atualizado o estado
    //setMsg(isValid ? '' : 'O valor informado deve estar em letras minúsculas.')
    */
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        {/* Associando o ref usernameEl ao input */}
        <input ref={usernameEl} id="username" type="text" onChange={handleChange} value={username} />
      </div>
  <div style={{color: 'red'}}>{msg}</div>
      <button type="submit">Submit</button>
    </form>
  )

}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
