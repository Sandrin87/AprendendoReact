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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}

    this.setState({comentarios: [...this.state.comentarios, novoComentario],
    novoComentario: {nome: '', email: '', mensagem: ''}});
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c!== comentario);
    this.setState({comentarios: lista})
  }

  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comentarios.map((comentario,indice) => (
          <Comentario onRemove={this.removerComentario.bind(this, comentario)} key={indice} nome={comentario.nome} email={comentario.email} data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="POST" onSubmit={this.adicionarComentario}>
            <h2>Adicionar Comentário</h2>
            <div>
                <input type="text" name="nome" onChange={this.digitacao} value={this.state.novoComentario.nome} placeholder="Digite seu nome."/>
            </div>
            <div>
                <input type="text" name="email" onChange={this.digitacao} value={this.state.novoComentario.email} placeholder="Digite seu nome."/>
            </div>
            <div>
                <textarea name="mensagem" onChange={this.digitacao} value={this.state.novoComentario.mensagem} rows="4"/>
            </div>
            <div>
                <button type="submit" onSubmit={this.adicionarComentario}>Adicionar comentario</button>
            </div>
        </form>

      </div>
    );
  }
}

export default App;