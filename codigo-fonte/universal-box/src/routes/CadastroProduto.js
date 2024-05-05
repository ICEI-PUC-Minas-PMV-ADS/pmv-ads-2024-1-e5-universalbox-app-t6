import React, { useState } from 'react';
import Navbar from './Navbar';

function CadastroProduto() {
  const [returnedData, setReturnedData] = useState('teste use state');
  const [produtos, setProdutos] = useState({ ProdutoId: '', ProdutoNome: '', FornecedorNome: '', ProdutoModelo: '', ProdutoPreco: '' });

  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setProdutos(prevState => ({
      ...prevState,
      [name]: name === 'ProdutoId' || name === 'ProdutoPreco' ? parseInt(value) : value
    }));
  }

  const createProduto = async () => {
    const newData = await fetch('/criar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(produtos)
    })
      .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Cadastrar Produto</h1>
                <div className="form-group">
                  <input
                    type='number'
                    className="form-control mb-3"
                    placeholder="ID"
                    name="ProdutoId"
                    value={produtos.ProdutoId}
                    onChange={setInput} />

                  <input
                    className="form-control mb-3"
                    placeholder="Nome"
                    name="ProdutoNome"
                    value={produtos.ProdutoNome}
                    onChange={setInput} />

                  <input
                    className="form-control mb-3"
                    placeholder="Fornecedor"
                    name="FornecedorNome"
                    value={produtos.FornecedorNome}
                    onChange={setInput} />

                  <input
                    className="form-control mb-3"
                    placeholder="Modelo"
                    name="ProdutoModelo"
                    value={produtos.ProdutoModelo}
                    onChange={setInput} />

                  <input
                    type='number'
                    className="form-control mb-3"
                    placeholder="Preço"
                    name="ProdutoPreco"
                    value={produtos.ProdutoPreco}
                    onChange={setInput} />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={createProduto}>
                  Cadastrar Novo Produto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroProduto;