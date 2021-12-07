class CreateOpportunities < ActiveRecord::Migration[6.0]
  def change
    create_table :opportunities, {:id => false} do |t|
      t.string :id
      t.string :job_title
      t.string :company_name
      t.string :job_url
      t.timestamps
    end
  end
end
