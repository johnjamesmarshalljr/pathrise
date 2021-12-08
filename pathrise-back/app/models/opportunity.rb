require 'pry'
require 'json'
require 'domainatrix'

class Opportunity < ApplicationRecord

    self.primary_key = "id"
    belongs_to :source
    
    def add_source
        # binding.pry
        if self.job_url.include?(' ')
            self.job_url="http://www.google.com"
        end
        if self.job_url=="http://"
            self.job_url="http://www.google.com"
        end
        # response = File.read("/Users/jjmarshall/pathrise/pathrise-back/public/jobBoards.json")
        #Source.domains are already parsed to the root domain, parse opp domains 
        # @@data = JSON.parse(response)
        # names = @@data['job_boards'].map {|t| t['name'].downcase }
        # sites = @@data['job_boards'].map {|t| t['root_domain'] }
        domains = Source.all.map{|s| Domainatrix.parse(s.root_domain)}
        # domains = parsed_sites.map{|s| s.domain}
        # domains = Source.all.map{|s| s.root_domain}
        # board_sites = Domainatrix.parse(sites)
        my_url = Domainatrix.parse(self.job_url)
        domain = my_url.domain
        stripped = domains.map{|d| d.domain}
        binding.pry
        if stripped.include?(domain)
            source = Source.all.select{|s| s.root_domain.include?(domain)}
            self.source = source[0]
            # Source.all.find_by(name: self.)
            # downcase names first?
            # self.source= Source.find_by(name: )
            # source = domains.select{|d| d == domain}
            # self.source = source[0].capitalize
        elsif domain.include?(self.company_name.downcase.gsub(/\s+/, "")) 
            self.source = Source.find(1)
        else
            self.source = Source.find(2)   
        end
        self.save
    end

end
