class ChangeNoteToTextColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :notes, :note, :text
  end
end
