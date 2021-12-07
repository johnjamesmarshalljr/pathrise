# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'smarter_csv'     
require 'csv'  
require 'pry'  

# path = Rails.root +
# CSV.foreach('/job_opportunities.csv', headers: true) do |row|
#   Opportunity.create!(row.to_hash)
# end
    # new = CSV.foreach('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv') do |row|
    #     binding.pry
    #     row = row[0]
    #     row = row.gsub(/[[:space:]]/,"")
        
    #     puts row
    # end

# csv_text = File.read(new)
# csv = CSV.parse('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv', :headers => true, nil_value: 0, encoding: 'iso-8859-1')
# csv.each do |row|
#     binding.pry
#     # row.reject { |row| row.all?(&:nil?) }
#   Opportunity.create!(row.to_hash)
# end

CSV.foreach('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv', skip_blanks: true, nil_value: 0, empty_value: 'x', headers: true, :converters => [:all], :header_converters => [:downcase]) do |row|
    # binding.pry
    Opportunity.create!(row.to_hash)
end

# options = {}
#   SmarterCSV.process('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv', hash_transformations[:none, :strip_spaces]) do |chunk|
#     chunk.each do |data_hash|
#       Opportunity.create!( data_hash )
#     end
#   end