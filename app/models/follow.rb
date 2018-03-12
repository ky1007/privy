class Follow < ApplicationRecord
  validates :follower_id, :followee_id, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id }

  # a follow belongs to the one following
  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  # a follow belongs to the one that's being followed
  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User

end