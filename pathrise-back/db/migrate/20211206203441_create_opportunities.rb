class CreateOpportunities < ActiveRecord::Migration[6.0]
  def change
    create_table :opportunities, {:id => false} do |t|
      t.text :id
      t.text :job_title
      t.text :company_name
      t.text :job_url
      t.timestamps
    end
  end
end
