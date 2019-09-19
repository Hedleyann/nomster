class Photo < ApplicationRecord
  belongs_to :place, inverse_of: :photos
  mount_uploader :picture, ImageUploader
  validates :image, presence: :true
  validates :caption, length: {maximum: 140}
end
