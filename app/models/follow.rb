class Follow < ApplicationRecord
  belongs_to :followers,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followees,
    foreign_key: followee_id,
    class_name: :User
end