class Reflection < ApplicationRecord

  belongs_to :writer, 
    foreign_key: :writer_id,
    class_name: :User

  belongs_to :entry

end
