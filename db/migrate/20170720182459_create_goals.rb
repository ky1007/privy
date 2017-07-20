class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :body
      t.boolean :done
      t.integer :entry_id

      t.timestamps
    end

    add_index :goals, :entry_id
  end
end
