class Goal < ApplicationRecord

  belongs_to :entry,
    foreign_key: :entry_id,
    class_name: :Entry

end