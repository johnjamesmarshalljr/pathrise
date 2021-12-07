require 'pry'
require 'json'
require 'domainatrix'

class Opportunity < ApplicationRecord
    self.primary_key = "id"
    
    def add_source
        # binding.pry
        if self.job_url.include?(' ')
            self.job_url="http://www.google.com"
        end
        if self.job_url=="http://"
            self.job_url="http://www.google.com"
        end
        response = File.read("/Users/jjmarshall/pathrise/pathrise-back/public/jobBoards.json")
        @@data = JSON.parse(response)
        # names = @@data['job_boards'].map {|t| t['name'].downcase }
        sites = @@data['job_boards'].map {|t| t['root_domain'] }
        parsed_sites = sites.map{|s| Domainatrix.parse(s)}
        domains = parsed_sites.map{|s| s.domain}
        # board_sites = Domainatrix.parse(sites)
        my_url = Domainatrix.parse(self.job_url)
        domain = my_url.domain
        # new_url = my_url.slice!('https://www.')
        # stripped =  my_url.slice(0..(my_url.index('.com/'))).delete(".")
        if domains.include?(domain)
            source = domains.select{|d| d == domain}
            self.source = source[0].capitalize
        elsif domain.include?(self.company_name.downcase.gsub(/\s+/, "")) 
            self.source = "Company Website"
        else
            self.source = "Unknown"    
        end
        self.save
    end

end
