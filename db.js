const deliveries = [
    {
      id_delivery: 0,                // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      id_pedido: 0,                  // BIGINT NOT NULL
      delivery_fee: 0.00,            // DECIMAL(8, 2) NOT NULL
      delivery_address: "",          // VARCHAR(255) NOT NULL
      delivery_status: "",           // VARCHAR(255) NOT NULL
      estimated_time: new Date(),    // DATETIME NOT NULL
      created_at: new Date(),        // DATETIME NOT NULL
      updated_at: new Date()         // DATETIME NOT NULL
    }
  ];
  
  // PRODUTOS table
  const produtos = [
    {
      id_product: 0,                 // BIGINT NOT NULL
      id_category: 0,                // BIGINT NOT NULL
      expirydate: new Date(),        // DATETIME NOT NULL
      creationdate: new Date(),      // DATE NOT NULL
      status: true,                  // BOOLEAN NOT NULL
      updated_at: new Date(),        // DATE
      discountporc: 0.0,             // FLOAT(53)
      name: "",                      // VARCHAR(255) NOT NULL
      marca: "",                     // VARCHAR(255)
      url_image: ""                  // VARCHAR(255)
    }
  ];
  
  // PROMOCOES_PRODUTOS table
  const promocoes_produtos = [
    {
      id: 0,                         // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      id_promotion: 0,               // BIGINT NOT NULL
      id_product: 0,                 // BIGINT NOT NULL
      discount_value: 0.00,          // DECIMAL(8, 2) NOT NULL
      start_date: new Date(),        // DATETIME NOT NULL
      end_date: new Date(),          // DATETIME NOT NULL
      is_active: true,               // BOOLEAN NOT NULL
      created_at: new Date(),        // DATETIME NOT NULL
      updated_at: new Date()         // DATETIME NOT NULL
    }
  ];
  
  // USERS table
  const users = [
    {
      id_user: 0,                    // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      name: "",                      // VARCHAR(255) NOT NULL
      email: "",                     // VARCHAR(255) NOT NULL
      cpf: "",                       // VARCHAR(255) NOT NULL
      benefit: false,                // BOOLEAN
      status: false,                 // BOOLEAN
      creationdate: new Date(),      // DATE NOT NULL
      password_hash: "",             // VARCHAR(255) NOT NULL
      url_image: ""                  // VARCHAR(255)
    }
  ];
  
  // PROMOÇÕES table
  const promocoes = [
    {
      id_promotion: 0,               // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      title: "",                     // VARCHAR(255) NOT NULL
      description: "",               // VARCHAR(255) NOT NULL
      discount: 0.0,                 // FLOAT(53) NOT NULL
      start_date: new Date(),        // DATETIME NOT NULL
      end_date: new Date(),          // DATETIME NOT NULL
      status: true,                  // BOOLEAN NOT NULL
      created_at: new Date(),        // DATETIME NOT NULL
      updated_at: new Date(),        // DATETIME NOT NULL
      banner_url: ""                 // VARCHAR(255) NOT NULL
    }
  ];
  
  // STORE_INFO table
  const store_info = [
    {
      id_store: 0,                   // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      store_name: "",                // VARCHAR(255) NOT NULL
      address: "",                   // VARCHAR(255) NOT NULL
      phone_number: "",              // VARCHAR(255) NOT NULL
      email: "",                     // VARCHAR(255) NOT NULL
      opening_time: "00:00:00",      // TIME NOT NULL
      closing_time: "00:00:00",      // TIME NOT NULL
      days_open: "",                 // VARCHAR(255) NOT NULL
      is_open_24_hours: false,       // BOOLEAN NOT NULL
      special_notes: "",             // VARCHAR(255)
      created_at: new Date(),        // DATETIME NOT NULL
      updated_at: new Date()         // DATETIME NOT NULL
    }
  ];
  
  // CATEGORYS table
  const categories = [
    {
      id_category: 0,                // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      name: "",                      // VARCHAR(255) NOT NULL
      description: "",               // VARCHAR(255)
      created_at: new Date(),        // DATETIME NOT NULL
      updated_at: new Date(),        // DATETIME NOT NULL
      status: true,                  // BOOLEAN NOT NULL
      parent_id: 0,                  // BIGINT
      slug: "",                      // VARCHAR(255)
      url_image: ""                  // VARCHAR(255) NOT NULL
    }
  ];
  
  // PEDIDOS table
  const pedidos = [
    {
      id_pedido: 0,                  // BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
      id_user: 0,                    // BIGINT NOT NULL
      order_date: new Date(),        // DATETIME NOT NULL
      status: "",                    // VARCHAR(255) NOT NULL
      totalamount: 0.00,             // DECIMAL(8, 2) NOT NULL
      payment_method: "",            // VARCHAR(255) NOT NULL
      order_type: "",                // VARCHAR(255) NOT NULL
      created_at: new Date(),        // DATETIME NOT NULL
      updated_at: new Date()         // DATETIME NOT NULL
    }
  ];
  