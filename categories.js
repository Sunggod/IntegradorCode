const prompt = require('prompt-sync')(); 

// Cria um array para armazenar as categorias
let categories = [];

// Função para criar uma nova categoria
function criarCategoria() {
  console.log("\n📝 Criação de Categoria:"); // Exibe mensagem de início da criação

  const id_category = categories.length > 0 ? categories[categories.length - 1].id_category + 1 : 0; // Simula auto-incremento para o ID da categoria
  const name = prompt('🗂️ Nome da categoria: '); // Solicita o nome da categoria
  const description = prompt('📜 Descrição da categoria: '); // Solicita a descrição da categoria
  const status = prompt('🔒 Categoria ativa? (true/false): ') === 'true'; // Solicita o status da categoria (ativa ou não)
  const slug = name.toLowerCase().replace(/ /g, '-'); // Gera um slug a partir do nome da categoria
  const url_image = prompt('🌐 URL da imagem (opcional): ') || ''; // Solicita a URL da imagem (opcional)
  
  // Cria um objeto categoria com os dados coletados
  const categoria = {
    id_category,
    name, // Nome da categoria
    description, // Descrição da categoria
    created_at: new Date(), // Armazena a data de criação da categoria como data atual
    updated_at: new Date(), // Inicializa a data de atualização como a data atual
    status, // Armazena o status da categoria
    parent_id: null, // Inicializa o parent_id como null
    slug, // Armazena o slug gerado
    url_image // Armazena a URL da imagem
  };

  categories.push(categoria); // Adiciona a nova categoria ao array de categorias
  console.log("\n✅ Categoria adicionada com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função para listar todas as categorias
function listarCategorias() {
  console.log("\n📋 Lista de Categorias:"); // Exibe título da lista de categorias
  if (categories.length === 0) { // Verifica se não há categorias cadastradas
    console.log("❌ Nenhuma categoria cadastrada.\n"); // Exibe mensagem informando que não há categorias
  } else {
    // Itera sobre o array de categorias e exibe detalhes de cada uma
    categories.forEach((categoria, index) => {
      console.log(`${index + 1}. 🗂️ Nome: ${categoria.name}, Descrição: ${categoria.description}, Status: ${categoria.status ? 'Ativa' : 'Inativa'}`);
    });
    console.log(); // Adiciona uma linha em branco ao final da lista
  }
}

// Função para editar uma categoria
function editarCategoria() {
  listarCategorias(); // Lista as categorias antes de editar
  const index = parseInt(prompt("✏️ Digite o número da categoria que deseja editar: ")) - 1; // Solicita o número da categoria a ser editada

  // Verifica se o índice informado é válido
  if (index < 0 || index >= categories.length) {
    console.log("❌ Categoria não encontrada."); // Exibe mensagem de erro
    return; // Sai da função se a categoria não for encontrada
  }

  const categoria = categories[index]; // Obtém a categoria a ser editada
  console.log(`📝 Editando: ${categoria.name}`); // Exibe o nome da categoria que está sendo editada

  // Solicita novas informações para atualizar a categoria
  const name = prompt(`Novo nome da categoria (atual: ${categoria.name}): `) || categoria.name; // Solicita novo nome (mantém o atual se vazio)
  const description = prompt(`Nova descrição (atual: ${categoria.description}): `) || categoria.description; // Solicita nova descrição
  const status = prompt(`Categoria ativa? (atual: ${categoria.status}) (true/false): `) === 'true' || categoria.status; // Solicita novo status (mantém o atual se vazio)
  const slug = name.toLowerCase().replace(/ /g, '-'); // Atualiza o slug a partir do novo nome
  const url_image = prompt(`Nova URL da imagem (atual: ${categoria.url_image}): `) || categoria.url_image; // Solicita nova URL da imagem

  // Atualiza a categoria no array com as novas informações
  categories[index] = {
    ...categoria, // Mantém as informações existentes
    name,
    description,
    status, // Atualiza o status
    slug, // Atualiza o slug
    url_image, // Atualiza a URL da imagem
    updated_at: new Date() // Atualiza a data de modificação para a data atual
  };

  console.log("\n✅ Categoria editada com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função para deletar uma categoria
function deletarCategoria() {
  listarCategorias(); // Lista as categorias antes de deletar
  const index = parseInt(prompt("❌ Digite o número da categoria que deseja deletar: ")) - 1; // Solicita o número da categoria a ser deletada

  // Verifica se o índice informado é válido
  if (index < 0 || index >= categories.length) {
    console.log("❌ Categoria não encontrada."); // Exibe mensagem de erro
    return; // Sai da função se a categoria não for encontrada
  }

  categories.splice(index, 1); // Remove a categoria do array pelo índice informado
  console.log("\n✅ Categoria deletada com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função principal que controla o menu de opções
function menu() {
  let opcao; // Declara a variável para armazenar a opção escolhida

  do {
    // Exibe o menu de opções
    console.log("=== Gerenciamento de Categorias ===");
    console.log("1. Criar Categoria 🆕");
    console.log("2. Listar Categorias 📋");
    console.log("3. Editar Categoria ✏️");
    console.log("4. Deletar Categoria ❌");
    console.log("5. Sair 🚪");
    opcao = prompt("Escolha uma opção: "); // Solicita a opção do usuário

    // Realiza a ação correspondente à opção escolhida
    switch (opcao) {
      case '1':
        criarCategoria(); // Chama a função para criar uma nova categoria
        break;
      case '2':
        listarCategorias(); // Chama a função para listar todas as categorias
        break;
      case '3':
        editarCategoria(); // Chama a função para editar uma categoria
        break;
      case '4':
        deletarCategoria(); // Chama a função para deletar uma categoria
        break;
      case '5':
        console.log("👋 Saindo..."); // Exibe mensagem de saída
        break;
      default:
        console.log("❌ Opção inválida. Tente novamente.\n"); // Exibe mensagem de erro para opção inválida
    }
  } while (opcao !== '5'); // Repete o menu até que o usuário escolha sair
}

// Inicia o menu chamando a função principal
menu(); 
