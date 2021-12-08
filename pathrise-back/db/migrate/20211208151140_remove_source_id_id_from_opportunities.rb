class RemoveSourceIdIdFromOpportunities < ActiveRecord::Migration[6.0]
  def change
    remove_column :opportunities, :source_id_id
  end
end
