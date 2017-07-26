class Goal < ApplicationRecord

  belongs_to :entry,
    foreign_key: :writer_id,
    class_name: :Entry

end