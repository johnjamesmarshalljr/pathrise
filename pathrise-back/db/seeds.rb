require 'csv'  
require 'pry'  
require 'json'





Source.create({name: "Company Website", rating: "",root_domain: "",logo_file: "",description: "Unknown"})
Source.create({name: "Unknown", rating: "",root_domain: "",logo_file: "",description: "Unknown"})

response = File.read("/Users/jjmarshall/pathrise/pathrise-back/public/jobBoards.json")
data = JSON.parse(response)
sources = data['job_boards'].map {|s| Source.create({name: s['name'], rating: s['rating'],root_domain: s['root_domain'],logo_file: s['logo_file'],description: s['description']}) }



CSV.foreach('/Users/jjmarshall/pathrise/pathrise-back/lib/job_opportunities.csv', skip_blanks: true, nil_value: " ", empty_value: ' ', headers: true, :converters => [:all], :header_converters => [:downcase]) do |row|
    Opportunity.create!(row.to_hash)
end