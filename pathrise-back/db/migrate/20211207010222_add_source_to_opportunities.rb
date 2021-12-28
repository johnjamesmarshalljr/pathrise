class AddSourceToOpportunities < ActiveRecord::Migration[6.0]
  def change
    add_column :opportunities, :source, :text
  end
end
