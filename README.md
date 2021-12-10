React/Rails App that takes 20,000+ job opportunities (from CSV file) and establishes relationship between the source and the opportunity.
Set up the database, run migrations and seeds to create Source and Opportunity objects in Rails. Please refer to pathrise-back/app/models/opportunity.rb for the start of the job source resolution logic. It's a class method that allows you to resolve every opportunity to its sourced based on logic implemented and designed for this specific CSV file. You can run the method in the rails console with 'Opportunity.all.each{|o| o.add_source}'

Once the sources and opportunities are connected, your React app will display the sources cleanly in your browser. Clicking each source will display a list of job opportunities connected to that source, and will allow the user to live-search by job title to filter opportunities based on search criteria. Job opportunity links are displayed, giving the user direct access to applications with just a few clicks.

Third-Party Libraries:
The Domainatrix gem was crucial in the job resolver method.
https://github.com/pauldix/domainatrix
