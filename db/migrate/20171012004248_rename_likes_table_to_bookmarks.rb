class RenameLikesTableToBookmarks < ActiveRecord::Migration[5.1]
  def change
    rename_table :likes, :bookmarks
  end
end
