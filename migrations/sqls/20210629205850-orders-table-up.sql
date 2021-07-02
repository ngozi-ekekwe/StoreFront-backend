CREATE TABLE orders (
  id serial PRIMARY KEY, 
  status VARCHAR(15), 
  user_id bigint REFERENCES users(id)
); 