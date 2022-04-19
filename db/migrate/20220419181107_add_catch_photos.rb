class AddCatchPhotos < ActiveRecord::Migration[7.0]
  def change
    add_column :catches, :photo, :string
  end
end
