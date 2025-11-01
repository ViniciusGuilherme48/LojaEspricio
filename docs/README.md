## API Reference

### Produtos

#### GET /produtos
- **Descrição**: Obtém uma lista de produtos
- **Parameters**:?nomeProduto="produtoExemplo" obtém um filtro de produto buscando pelo nome
- **Response**: Array de produtos

#### POST /produtos
- **Descrição**: Cria um novo produto
- **Body**:
```
{
    "nomeProduto":"produtoExemplo",
    "precoProduto":0.00
}

```
- **Response**:
```
{
    "message":"Produto cadastrado com sucesso"
}
```
#### PUT /produtos/:idProduto
- **Descrição**: Atualiza um produto cadastrado
- **body**:
```
{
    "nomeProduto":"nomeExemplo"
    "precoProduo":"precoExemplo"
}
```
- **Response**:
```
{
    "message":"Produto atualizado com sucesso"
}
```
- **Error Response**:
```
{
    "message":"ID invalido"
    "message":"ID não encontrado"
}
```

#### DELETE /Produtos/:idProduto
- **Descrição**:Deleta um produto cadastrado
- **Response**: 
```
{
    message:"Produto deletado com sucesso"
}
```
### Clientes

#### GET /Cliente
- **Descrição**: Obtém a lista de clientes cadastrado
- **Response**: Array de clientes

#### POST /Cliente
- **Descrição**: Cadastra novos clientes
- **Body**:
```
{
    "nomeCliente":"nomeExemplo",
    "cpfCliente":"cpfExemplo"
}
```
- **Response**:
```
{
    "message":"Cliente cadastrado com sucesso
}
```
- **Error Response**
```
{
    "message":"Campos obrigatórios não preenchidos"
    "message":"CPF já existe"
}
```
