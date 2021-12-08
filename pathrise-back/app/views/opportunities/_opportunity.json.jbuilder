json.extract! opportunity, :id, :job_title, :company_name, :job_url, :source, :created_at, :updated_at
json.url opportunity_url(opportunity, format: :json)
