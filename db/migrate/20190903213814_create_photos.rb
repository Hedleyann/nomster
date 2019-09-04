class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :place_id
      t.string :caption
      t.timestamps
    end
  end
end
