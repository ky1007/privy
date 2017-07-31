class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.string :entry_id, null: false
      t.string :integer

      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :entry_id
  end
end
