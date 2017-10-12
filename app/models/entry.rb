class Entry < ApplicationRecord

  has_many :goals,
    foreign_key: :entry_id,
    class_name: :Goal,
    dependent: :destroy

  has_many :reflections,
    foreign_key: :writer_id,
    class_name: :Reflection,
    dependent: :destroy

  belongs_to :writer,
    foreign_key: :writer_id,
    class_name: :User
  
  has_many :bookmarks,
    foreign_key: :user_id,
    class_name: :Bookmark


end
