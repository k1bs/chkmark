class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.text :note
      t.timestamps
      t.belongs_to :user
    end
    add_index :notes, :note
  end
end
