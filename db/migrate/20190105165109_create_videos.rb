class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :url
      t.string :title
      t.integer :likes
      t.integer :dislikes
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
