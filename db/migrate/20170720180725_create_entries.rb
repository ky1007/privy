class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.string :title
      t.text :general, null: false
      t.text :gratitude
      t.text :improvements
      t.integer :writer_id, null: false
      t.string :image_url
      t.boolean :public, null: false

      t.timestamps null: false
    end

    add_index :entries, :writer_id
  end
end
