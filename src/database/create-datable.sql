-- Cria a tabela Users se ela nao existir
CREATE TABLE IF NOT EXISTS Users {
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(225),
  email VARCHAR(225) UNIQUE,
  password VARCHAR(225),
};

-- Cria a  tabela Bookings se ela nao existir
CREATE TABLE IF NOT EXISTS Bookings {
  id VARCHAR(36) PRIMARY KEY,
  room_id VARCHAR(225),
  guest_name VARCHAR(225),
  check_in_data DATE,
  check_out_data DATE,
  user_id VARCHAR(36),
  FOREIGN KEY (user_id) REFERENCES Users(id)
};
