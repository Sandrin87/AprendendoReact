import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {
  
  state = {
    comentarios: [
      {
        nome: 'Joao',
        email: 'Joao@mail.com',
        data: new Date(2022,3,19),
        mensagem: 'Ola, tudo bem ?'
      },
      {
        nome: 'Maria',
        email: 'Maria@mail.com',
        data: new Date(2022,3,19),
        mensagem: 'Ola, tudo sim'
      }
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
      nome: 'Maria',
      email: 'Maria@mail.com',
      data: new Date(),
      mensagem: 'Olá pessoal'
    }

    this.setState({comentarios: [...this.state.comentarios, novoComentario]});
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comentarios.map((comentario,indice) => (
          <Comentario key={indice} nome={comentario.nome} email={comentario.email} data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionarComentario}>Adicionar um comentário</button>

      </div>
    );
  }
}

export default App;