var prompt = require('prompt-sync')(); 

// Cria um array para armazenar os usuários
let usuarios = [];

// Função para criar um novo usuário
function criarUsuario() {
  console.log("\n📝 Registro de Usuário:"); // Exibe mensagem de início do registro

  const id_usuario = usuarios.length + 1; // Simula auto-incremento para o ID do usuário
  const nome = prompt('👤 Nome do usuário: '); // Solicita o nome do usuário
  const email = prompt('✉️ Email do usuário: '); // Solicita o email do usuário
  const cpf = prompt('🔢 CPF do usuário: '); // Solicita o CPF do usuário
  const benefit = prompt('🎁 Usuário tem benefício? (true/false): ') === 'true'; // Solicita se o usuário tem benefício
  const status = prompt('✅ Usuário ativo? (true/false): ') === 'true'; // Solicita o status do usuário (ativo ou não)
  
  // Solicita a senha do usuário e a oculta na saída do terminal
  const password_hash = prompt('🔒 Senha do usuário: ', { echo: '*' }); // Oculta a entrada da senha
  const url_image = prompt('🌐 URL da imagem (opcional): ') || ''; // Solicita a URL da imagem (opcional)

  // Cria um objeto usuário com os dados coletados
  const usuario = {
    id_usuario,
    name: nome, // Nome do usuário
    email, // Email do usuário
    cpf, // CPF do usuário
    benefit, // Indica se o usuário tem benefício
    status, // Armazena o status do usuário
    creationdate: new Date(), // Armazena a data de criação do usuário como data atual
    password_hash, // Armazena a senha do usuário (hash)
    url_image // Armazena a URL da imagem
  };

  usuarios.push(usuario); // Adiciona o novo usuário ao array de usuários
  console.log("\n✅ Usuário registrado com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função para listar todos os usuários
function listarUsuarios() {
  console.log("\n👥 Lista de Usuários:"); // Exibe título da lista de usuários
  if (usuarios.length === 0) { // Verifica se não há usuários cadastrados
    console.log("🚫 Nenhum usuário cadastrado.\n"); // Exibe mensagem informando que não há usuários
  } else {
    // Itera sobre o array de usuários e exibe detalhes de cada um
    usuarios.forEach((usuario, index) => {
      console.log(`${index + 1}. 👤 Nome: ${usuario.name}, ✉️ Email: ${usuario.email}, 🔢 CPF: ${usuario.cpf}, 🎁 Benefício: ${usuario.benefit ? 'Sim' : 'Não'}, ✅ Status: ${usuario.status ? 'Ativo' : 'Inativo'}`);
    });
    console.log(); // Adiciona uma linha em branco ao final da lista
  }
}

// Função para editar um usuário
function editarUsuario() {
  listarUsuarios(); // Lista os usuários antes de editar
  const index = parseInt(prompt("✏️ Digite o número do usuário que deseja editar: ")) - 1; // Solicita o número do usuário a ser editado

  // Verifica se o índice informado é válido
  if (index < 0 || index >= usuarios.length) {
    console.log("🚫 Usuário não encontrado."); // Exibe mensagem de erro
    return; // Sai da função se o usuário não for encontrado
  }

  // Coleta novos dados para o usuário
  const nome = prompt('👤 Novo Nome do usuário (deixe vazio para não alterar): ');
  const email = prompt('✉️ Novo Email do usuário (deixe vazio para não alterar): ');
  const cpf = prompt('🔢 Novo CPF do usuário (deixe vazio para não alterar): ');
  const benefitInput = prompt('🎁 Novo benefício? (true/false, deixe vazio para não alterar): ');
  const statusInput = prompt('✅ Novo status? (true/false, deixe vazio para não alterar): ');

  // Atualiza apenas os campos que foram preenchidos
  if (nome) usuarios[index].name = nome;
  if (email) usuarios[index].email = email;
  if (cpf) usuarios[index].cpf = cpf;
  if (benefitInput) usuarios[index].benefit = benefitInput === 'true';
  if (statusInput) usuarios[index].status = statusInput === 'true';

  console.log("\n✅ Usuário editado com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função para deletar um usuário
function deletarUsuario() {
  listarUsuarios(); // Lista os usuários antes de deletar
  const index = parseInt(prompt("❌ Digite o número do usuário que deseja deletar: ")) - 1; // Solicita o número do usuário a ser deletado

  // Verifica se o índice informado é válido
  if (index < 0 || index >= usuarios.length) {
    console.log("🚫 Usuário não encontrado."); // Exibe mensagem de erro
    return; // Sai da função se o usuário não for encontrado
  }

  usuarios.splice(index, 1); // Remove o usuário do array pelo índice informado
  console.log("\n✅ Usuário deletado com sucesso!\n"); // Exibe mensagem de sucesso
}

// Função principal que controla o menu de opções
function menu() {
  let opcao; // Declara a variável para armazenar a opção escolhida

  do {
    // Exibe o menu de opções
    console.log("=== Gerenciamento de Usuários ===");
    console.log("1. 📝 Registrar Usuário");
    console.log("2. 👥 Listar Usuários");
    console.log("3. ✏️ Editar Usuário");
    console.log("4. ❌ Deletar Usuário");
    console.log("5. 🚪 Sair");
    opcao = prompt("🔍 Escolha uma opção: "); // Solicita a opção do usuário

    // Realiza a ação correspondente à opção escolhida
    switch (opcao) {
      case '1':
        criarUsuario(); // Chama a função para criar um novo usuário
        break;
      case '2':
        listarUsuarios(); // Chama a função para listar todos os usuários
        break;
      case '3':
        editarUsuario(); // Chama a função para editar um usuário
        break;
      case '4':
        deletarUsuario(); // Chama a função para deletar um usuário
        break;
      case '5':
        console.log("🚪 Saindo..."); // Exibe mensagem de saída
        break;
      default:
        console.log("🚫 Opção inválida. Tente novamente.\n"); // Exibe mensagem de erro para opção inválida
    }
  } while (opcao !== '5'); // Repete o menu até que o usuário escolha sair
}

// Inicia o menu chamando a função principal
menu();  
