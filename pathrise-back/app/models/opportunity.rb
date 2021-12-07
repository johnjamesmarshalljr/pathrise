require 'pry'
require 'json'

class Opportunity < ApplicationRecord
    self.primary_key = "id"
    
    def add_source
        response = File.read("/Users/jjmarshall/pathrise/pathrise-back/public/jobBoards.json")
        @@data = JSON.parse(response)
        names = @@data['job_boards'].map {|t| t['name'] }
        my_url = self.job_url
        my_url.slice!('https://www.')
        stripped =  my_url.slice(0..(my_url.index('.com/'))).delete(".").capitalize

        if names.include?(stripped)
            source = names.select{|s| s == stripped}
            self.source = source[0]
        elsif self.job_url.include?(self.company_name.downcase) 
            self.source = "Company Website"
        else
            self.source = "Unknown"    
        end
        self.save
    end

end
