class CreateSources < ActiveRecord::Migration[6.0]
  def change
    create_table :sources do |t|
      t.text :name
      t.text :rating
      t.text :root_domain
      t.text :logo_file
      t.text :description

      t.timestamps
    end
  end
end
