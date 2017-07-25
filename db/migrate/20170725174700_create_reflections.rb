class CreateReflections < ActiveRecord::Migration[5.1]
  def change
    create_table :reflections do |t|
      t.integer :writer_id, null: false
      t.integer :entry_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :reflections, :writer_id
    add_index :reflections, :entry_id
  end
end
