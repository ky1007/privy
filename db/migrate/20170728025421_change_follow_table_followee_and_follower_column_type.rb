class ChangeFollowTableFolloweeAndFollowerColumnType < ActiveRecord::Migration[5.1]
  def change
    change_column :follows, :follower_id, :integer, using: 'follower_id::integer'
    change_column :follows, :followee_id, :integer, using: 'followee_id::integer'
  end
end
