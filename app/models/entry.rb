class Entry < ApplicationRecord

  has_many :goals

  has_many :reflections,
    foreign_key: :writer_id,
    class_name: :Reflection

  belongs_to :writer,
    foreign_key: :writer_id,
    class_name: :User


end
