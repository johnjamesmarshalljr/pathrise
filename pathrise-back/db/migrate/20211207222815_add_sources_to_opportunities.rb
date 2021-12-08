class AddSourcesToOpportunities < ActiveRecord::Migration[6.0]
  def change
    add_reference :opportunities, :source, index: true
  end
end
