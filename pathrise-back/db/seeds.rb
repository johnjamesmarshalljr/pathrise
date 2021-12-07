require 'csv'  
require 'pry'  


CSV.foreach('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv', skip_blanks: true, nil_value: 0, empty_value: 'x', headers: true, :converters => [:all], :header_converters => [:downcase]) do |row|
    Opportunity.create!(row.to_hash)
end