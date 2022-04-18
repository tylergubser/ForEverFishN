class CreateCatches < ActiveRecord::Migration[7.0]
  def change
    create_table :catches do |t|
      t.string :baits
      t.string :fish_type
      t.integer :fish_weight
      t.integer :user_id
      t.timestamps
    end
  end
end
