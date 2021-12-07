# require 'csv' 
# require 'smarter_csv'     
# path = Rails.root +
# CSV.foreach('/job_opportunities.csv', headers: true) do |row|
#   Opportunity.create!(row.to_hash)
# end

# options = {}
#   SmarterCSV.process('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv', options) do |chunk|
#     chunk.each do |data_hash|
#       Opportunity.create!( data_hash )
#     end
#   end