var prompt = require('prompt-sync')(); 

// Cria um array para armazenar os produtos
let produtos = [];

// Função para formatar a data atual no formato YYYY-MM-DD
function getFormattedDate() {
  const date = new Date(); // Obtém a data atual
  const day = String(date.getDate()).padStart(2, '0'); // Obtém o dia e garante que tenha dois dígitos
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (0-11) e garante que tenha dois dígitos
  const year = date.getFullYear(); // Obtém o ano atual
  return `${year}-${month}-${day}`; // Retorna a data formatada como string
}

// Função para criar um novo produto
function criarProduto() {
  console.log("\n🛠️ Criação de Produto:"); // Exibe mensagem de início da criação

  const id_product = Math.floor(Math.random() * 10000); // Gera um ID aleatório entre 0 e 9999
  const name = prompt('📝 Nome do produto: '); // Solicita o nome do produto
  const id_category = Math.floor(Math.random() * 100); // Gera um ID aleatório para a categoria entre 0 e 99
  const expirydate = prompt('📅 Data de validade (YYYY-MM-DD): '); // Solicita a data de validade
  const status = prompt('✅ Produto ativo? (true/false): ') === 'true'; // Solicita o status do produto (ativo ou não)
  const discountporc = parseFloat(prompt('💸 Desconto (%): ') || '0'); // Solicita a porcentagem de desconto e a converte em float
  const marca = prompt('🏷️ Marca do produto (opcional): ') || ''; // Solicita a marca do produto (opcional)
  const url_image = prompt('🌐 URL da imagem (opcional): ') || ''; // Solicita a URL da imagem (opcional)

  // Cria um objeto produto com os dados coletados
  const produto = {
    id_product,
    id_category, // Armazena o ID da categoria gerado aleatoriamente
    expirydate: new Date(expirydate), // Converte a data de validade para objeto Date
    creationdate: new Date(), // Armazena a data de criação do produto como data atual
    status, // Armazena o status do produto
    updated_at: null, // Inicializa a data de atualização como null
    discountporc, // Armazena a porcentagem de desconto
    name, // Armazena o nome do produto
    marca, // Armazena a marca do produto
    url_image // Armazena a URL da imagem
  };

  produtos.push(produto); // Adiciona o novo produto ao array de produtos
  console.log("✅ Produto adicionado com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função para listar todos os produtos
function listarProdutos() {
  console.log("\n📋 Lista de Produtos:"); // Exibe título da lista de produtos
  if (produtos.length === 0) { // Verifica se não há produtos cadastrados
    console.log("❌ Nenhum produto cadastrado.\n"); // Exibe mensagem informando que não há produtos
  } else {
    // Itera sobre o array de produtos e exibe detalhes de cada um
    produtos.forEach((produto, index) => {
      console.log(`${index + 1}. 📦 Nome: ${produto.name}, Categoria: ${produto.id_category}, Validade: ${produto.expirydate.toDateString()}, Status: ${produto.status ? '✅ Ativo' : '❌ Inativo'}, Desconto: ${produto.discountporc}%`);
    });
    console.log(); // Adiciona uma linha em branco ao final da lista
  }
}

// Função para editar um produto
function editarProduto() {
  listarProdutos(); // Lista os produtos antes de editar
  const index = parseInt(prompt("✏️ Digite o número do produto que deseja editar: ")) - 1; // Solicita o número do produto a ser editado

  // Verifica se o índice informado é válido
  if (index < 0 || index >= produtos.length) {
    console.log("❌ Produto não encontrado."); // Exibe mensagem de erro
    return; // Sai da função se o produto não for encontrado
  }

  const produto = produtos[index]; // Obtém o produto a ser editado
  console.log(`🔧 Editando: ${produto.name}`); // Exibe o nome do produto que está sendo editado

  // Solicita novas informações para atualizar o produto
  const name = prompt(`📝 Novo nome do produto (atual: ${produto.name}): `) || produto.name; // Solicita novo nome (mantém o atual se vazio)
  const id_category = prompt(`🏷️ Novo ID da categoria (atual: ${produto.id_category}): `) || produto.id_category; // Solicita novo ID da categoria (mantém o atual se vazio)
  const expirydate = prompt(`📅 Nova data de validade (YYYY-MM-DD) (atual: ${produto.expirydate.toISOString().split('T')[0]}): `) || produto.expirydate.toISOString().split('T')[0]; // Solicita nova data de validade
  const status = prompt(`✅ Produto ativo? (atual: ${produto.status}) (true/false): `) === 'true' || produto.status; // Solicita novo status (mantém o atual se vazio)
  const discountporc = parseFloat(prompt(`💸 Novo desconto (%) (atual: ${produto.discountporc}%): `) || produto.discountporc); // Solicita nova porcentagem de desconto
  const marca = prompt(`🏷️ Nova marca do produto (atual: ${produto.marca}): `) || produto.marca; // Solicita nova marca
  const url_image = prompt(`🌐 Nova URL da imagem (atual: ${produto.url_image}): `) || produto.url_image; // Solicita nova URL da imagem

  // Atualiza o produto no array com as novas informações
  produtos[index] = {
    ...produto, // Mantém as informações existentes
    name,
    id_category: parseInt(id_category), // Atualiza ID da categoria
    expirydate: new Date(expirydate), // Atualiza a data de validade
    status, // Atualiza o status
    discountporc, // Atualiza a porcentagem de desconto
    marca, // Atualiza a marca
    url_image, // Atualiza a URL da imagem
    updated_at: new Date() // Atualiza a data de modificação para a data atual
  };

  console.log("✅ Produto editado com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função para deletar um produto
function deletarProduto() {
  listarProdutos(); // Lista os produtos antes de deletar
  const index = parseInt(prompt("❌ Digite o número do produto que deseja deletar: ")) - 1; // Solicita o número do produto a ser deletado

  // Verifica se o índice informado é válido
  if (index < 0 || index >= produtos.length) {
    console.log("❌ Produto não encontrado."); // Exibe mensagem de erro
    return; // Sai da função se o produto não for encontrado
  }

  produtos.splice(index, 1); // Remove o produto do array pelo índice informado
  console.log("✅ Produto deletado com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função principal que controla o menu de opções
function menu() {
  let opcao; // Declara a variável para armazenar a opção escolhida

  do {
    // Exibe o menu de opções
    console.log("=== Gerenciamento de Produtos ===");
    console.log("1. 🆕 Criar Produto");
    console.log("2. 📋 Listar Produtos");
    console.log("3. ✏️ Editar Produto");
    console.log("4. ❌ Deletar Produto");
    console.log("5. 🚪 Sair");
    opcao = prompt("🔍 Escolha uma opção: "); // Solicita a opção do usuário

    // Realiza a ação correspondente à opção escolhida
    switch (opcao) {
      case '1':
        criarProduto(); // Chama a função para criar um novo produto
        break;
      case '2':
        listarProdutos(); // Chama a função para listar todos os produtos
        break;
      case '3':
        editarProduto(); // Chama a função para editar um produto
        break;
      case '4':
        deletarProduto(); // Chama a função para deletar um produto
        break;
      case '5':
        console.log("🚪 Saindo..."); // Exibe mensagem de saída
        break;
      default:
        console.log("❌ Opção inválida. Tente novamente.\n"); // Exibe mensagem de erro para opção inválida
    }
  } while (opcao !== '5'); // Repete o menu até que o usuário escolha sair
}

// Inicia o menu chamando a função principal
menu();
