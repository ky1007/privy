class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :pseudonym
      t.string :email
      t.string :country
      t.integer :age
      t.string :race
      t.string :biography
      t.string :image_url

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end
