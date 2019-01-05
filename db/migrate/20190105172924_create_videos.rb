class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :url
      t.string :title
      t.string :description
      t.string :genre
      t.string :duration
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
