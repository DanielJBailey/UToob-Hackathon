class Comment < ApplicationRecord
  belongs_to :users
  belongs_to :videos, through: :users
end
