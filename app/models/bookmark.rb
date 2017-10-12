class Bookmark < ApplicationRecord
  validates :entry_id, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :entry_id }

  belongs_to :users,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :entries,
    foreign_key: :entry_id,
    class_name: :Entry

end
