class ChangeBookmarksColumnEntryIdAndRemoveIntegerColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :bookmarks, :entry_id, 'integer USING CAST(entry_id AS integer)'
    remove_column :bookmarks, :integer
  end
end
