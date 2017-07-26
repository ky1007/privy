class Entry < ApplicationRecord

  has_many :goals,
    foreign_key: :entry_id,
    class_name: :Goal

  has_many :reflections,
    foreign_key: :writer_id,
    class_name: :Reflection

  belongs_to :writer,
    foreign_key: :writer_id,
    class_name: :User


end
