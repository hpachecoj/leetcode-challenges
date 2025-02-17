// Interface para os produtos (TaxaValorGeralProdutos) - classe abstrata
class TaxaValorGeralProdutos {
    gerarPreco() {
      throw new Error("Método deve ser sobrescrito!");
    }
  }
  
  // Classes concretas
  class ValorProdMerc extends TaxaValorGeralProdutos {
    gerarPreco(nome, custo, margemLucro, desconto = 0) {
      const taxaProdutoMercearia = Math.floor(Math.random()*100); // Taxa adicional para produtos de mercearia
      const lucro = custo * (margemLucro / 100);
      const precoBase = custo + lucro + taxaProdutoMercearia;
      const precoFinal = precoBase - (precoBase * (desconto / 100));
      return precoFinal.toFixed(2); // Retorna o preço final formatado com 2 casas decimais
    }
  }
  
  class ValorProdPad extends TaxaValorGeralProdutos {
    gerarPreco(nome, custo, margemLucro, desconto = 0) {
      const taxaProdutoPadaria = Math.floor(Math.random()*100); // Taxa adicional para produtos de padaria
      const lucro = custo * (margemLucro / 100);
      const precoBase = custo + lucro + taxaProdutoPadaria;
      const precoFinal = precoBase - (precoBase * (desconto / 100));
      return precoFinal.toFixed(2); // Retorna o preço final formatado com 2 casas decimais
    }
  }
  
  class ValorProdLimp extends TaxaValorGeralProdutos {
    gerarPreco(nome, custo, margemLucro, desconto = 0) {
      const taxaProdutoLimpeza = Math.floor(Math.random()*100); // Taxa adicional para produtos de limpeza
      const lucro = custo * (margemLucro / 100);
      const precoBase = custo + lucro + taxaProdutoLimpeza;
      const precoFinal = precoBase - (precoBase * (desconto / 100));
      return precoFinal.toFixed(2); // Retorna o preço final formatado com 2 casas decimais
    }
  }
  
  class ValorProdHig extends TaxaValorGeralProdutos {
    gerarPreco(nome, custo, margemLucro, desconto = 0) {
      const taxaProdutoHigiene = Math.floor(Math.random()*100); // Taxa adicional para produtos de higiene
      const lucro = custo * (margemLucro / 100);
      const precoBase = custo + lucro + taxaProdutoHigiene;
      const precoFinal = precoBase - (precoBase * (desconto / 100));
      return precoFinal.toFixed(2); // Retorna o preço final formatado com 2 casas decimais
    }
  }
  
  // Classe geradora
  class CriadoraDeValorProdutos {
    fabricaValor(prod) {
      switch (prod) {
        case 'merc':
          return new ValorProdMerc();
        case 'pad':
          return new ValorProdPad();
        case 'limp':
          return new ValorProdLimp();
        case 'hig':
          return new ValorProdHig();
        default:
          throw new Error(`Tipo de produto desconhecido.`);
      }
    }
  }
  
  // Uso do Método Factory
  const criadorDeValor = new CriadoraDeValorProdutos();
  
  const produtoA = criadorDeValor.fabricaValor('merc');
  console.log(produtoA.gerarPreco('Arroz', 5.00, 20, 5)); // Exemplo de uso: nome, custo, margem de lucro, desconto
  
  const produtoB = criadorDeValor.fabricaValor('pad');
  console.log(produtoB.gerarPreco('Pão', 2.00, 30, 0)); // Exemplo de uso: nome, custo, margem de lucro, desconto
  
  const produtoC = criadorDeValor.fabricaValor('limp');
  console.log(produtoC.gerarPreco('Detergente', 3.50, 15, 10)); // Exemplo de uso: nome, custo, margem de lucro, desconto
  
  const produtoD = criadorDeValor.fabricaValor('hig');
  console.log(produtoD.gerarPreco('Sabonete', 1.50, 25, 0)); // Exemplo de uso: nome, custo, margem de lucro, desconto
